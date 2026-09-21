const express = require('express');
const path = require('path');
const content = require('./data/content');

const app = express();
const PORT = process.env.PORT || 3000;
const CONTACT_EMAIL = 'mrsysu@gmail.com';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

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

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Portfolio site running at http://localhost:${PORT}`);
});
