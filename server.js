const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const content = require('./data/content');

const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGES_FILE = path.join(__dirname, 'data', 'messages.jsonl');
const CONTACT_EMAIL = 'mrsysu@gmail.com';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function detectDefaultLang(req) {
  const header = req.headers['accept-language'] || '';
  return header.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

app.get('/', (req, res) => {
  const defaultLang = detectDefaultLang(req);
  res.render('index', {
    content,
    defaultLang,
    contentJSON: JSON.stringify(content).replace(/</g, '\\u003c'),
    contactEmail: CONTACT_EMAIL,
  });
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/api/contact', async (req, res) => {
  const { name, email, message, website } = req.body || {};

  // Honeypot field — real users never fill this in.
  if (website) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !message || !EMAIL_RE.test(String(email))) {
    return res.status(400).json({ success: false, error: 'invalid_input' });
  }

  const entry = {
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    message: String(message).slice(0, 5000),
    receivedAt: new Date().toISOString(),
  };

  try {
    await fs.appendFile(MESSAGES_FILE, JSON.stringify(entry) + '\n', 'utf8');
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Failed to persist contact message:', err);
    return res.status(500).json({ success: false, error: 'server_error' });
  }
});

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Portfolio site running at http://localhost:${PORT}`);
});
