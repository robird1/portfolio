/**
 * Bilingual content for the portfolio site.
 * Keys mirror between `en` and `zh` so the client can swap languages
 * in place via data-i18n paths (see public/js/main.js).
 */

const content = {
  en: {
    meta: {
      title: 'Steve Su — Android & AI Engineer',
      description:
        'Android & AI software engineer with a decade of experience shipping consumer electronics, IoT, and on-device AI products.',
    },
    nav: {
      about: 'About',
      work: 'Selected Work',
      experience: 'Experience',
      skills: 'Skills',
      credentials: 'Credentials',
      contact: 'Contact',
      hireMe: 'Contact Me',
    },
    hero: {
      eyebrow: 'Software Engineer',
      title: 'Steve Su',
      secondaryName: 'Sheng-Yuan Su',
      subtitle: 'Android & On-Device AI Engineer',
      lead: 'I build fast, reliable Android products that talk to hardware, stream video in real time, and run AI on-device — for industries such as consumer electronics, IoT, and medical devices.',
      ctaPrimary: 'View My Work',
      stats: [
        { value: '10', label: 'Years shipping Android' },
        { value: '6', label: 'Products launched' },
      ],
    },
    about: {
      title: 'About',
      kicker: 'Who I am',
      paragraphs: [
        'With nearly a decade of Android app development experience, I’ve worked through the complete evolution of Android’s architecture from its early days to the present. I’ve long focused on software quality, applying object-oriented design principles, design patterns, and refactoring practices to consistently deliver highly maintainable, low-tech-debt code.',
        'I specialize in integrating AI models and real-time video streaming on mobile devices, working reliably with surrounding hardware through multiple communication protocols.',
      ],
      philosophyTitle: 'How I work',
      philosophy:
        'Writing well-designed software — simple, flexible, easy to change, easy to maintain, easy to test — has never been easy, but it’s the standard I’ve always held myself to. I make good use of principles like SOLID and common design patterns to keep code structured and flexible. I’ve always believed that taking something complex and making it simple is exactly what separates an expert from a beginner.',
      facts: [
        { label: 'Based in', value: 'Taipei, Taiwan' },
        { label: 'Open to', value: 'Full-time, part-time & remote roles' },
        { label: 'Languages', value: 'Mandarin (native), English (Working Proficiency)' },
      ],
    },
    work: {
      title: 'Selected Work',
      kicker: 'Products I’ve shipped',
      intro:
        'A selection of consumer, industrial, and medical products where I owned the Android engineering — from architecture to Google Play Store release.',
      galleryLabel: 'App Screenshots',
      items: [
        {
          tag: 'Consumer IoT',
          title: 'Lollipop Baby Monitor',
          period: '2022 – 2026',
          stack: ['Kotlin', 'MVVM', 'JNI/C++', 'RTSP', 'RTMP', 'MQTT'],
          summary:
            'A commercial baby-monitoring app with on-device AI for activity recognition and anomaly detection.',
          highlights: [
            'Owned Google Play Store releases and version rollout end-to-end',
            'Built in-app purchases with multiple subscription plans, growing revenue',
            'Deployed AI models on-device, accelerated via JNI/C++ for real-time inference',
            'Cut memory leaks and tuned AI inference speed significantly',
            'Introduced CI/CD with Jenkins to speed up build and test cycles',
          ],
          screenshots: [
            {
              src: '/images/lollipop/lollipop_01.png',
              caption: 'Live Dashboard — real-time breathing rate, sleep position & event history',
            },
            {
              src: '/images/lollipop/lollipop_02.png',
              caption: 'Settings — profile, subscriptions, notifications & preferences',
            },
            {
              src: '/images/lollipop/lollipop_03.png',
              caption: 'Subscription Plans — tiered plans with feature comparison',
            },
            {
              src: '/images/lollipop/lollipop_04.png',
              caption: 'Plan Upgrade — clear breakdown of premium privileges',
            },
            {
              src: '/images/lollipop/lollipop_05.png',
              caption: 'AI Diary — automatically generated milestone highlights',
            },
            {
              src: '/images/lollipop/lollipop_06.png',
              caption: 'Home Screen — quick access to AI Monitor & AI Album',
            },
            {
              src: '/images/lollipop/lollipop_07.png',
              caption: 'AI Photo Picker — select favorites for an AI-curated highlight reel',
            },
            {
              src: '/images/lollipop/lollipop_08.png',
              caption: 'Growth Timeline — milestone gallery organized by age',
            },
            {
              src: '/images/lollipop/lollipop_09.png',
              caption: 'AI Photo Analysis — on-device object detection in progress',
            },
          ],
        },
        {
          tag: 'Robotics',
          title: 'AI Smart Lawn Mower App',
          period: '2020 – 2022',
          stack: ['Kotlin', 'MVVM', 'BLE', 'Custom View'],
          summary:
            'Control app for a robotic lawn mower, with live path mapping and BLE device control.',
          highlights: [
            'Built a custom map-drawing view to visualize mower paths and work zones',
            'Owned BLE protocol integration for stable control and live status updates',
            'Collaborated with a backend team in Hangzhou on device-cloud sync',
          ],
          screenshots: [
            {
              src: '/images/mower/mower_01.png',
              caption: 'Live View — mower status, battery, and map setup entry',
            },
            {
              src: '/images/mower/mower_02.png',
              caption: 'Onboarding — slider controls tutorial for driving the mower',
            },
            {
              src: '/images/mower/mower_03.png',
              caption: 'Map Setup Step 1 — set the charging station and plan the route',
            },
            {
              src: '/images/mower/mower_04.png',
              caption: 'Map Setup Step 2 — drive to the mowing area and start',
            },
            {
              src: '/images/mower/mower_05.png',
              caption: 'Map Setup Step 3 — trace the lawn boundary point by point',
            },
            {
              src: '/images/mower/mower_06.png',
              caption: 'Map Setup Step 4 — review, edit, or add another lawn zone',
            },
            {
              src: '/images/mower/mower_07.png',
              caption: 'Obstacle Mapping — mark no-go zones inside the lawn',
            },
            {
              src: '/images/mower/mower_08.png',
              caption: 'Boundary Editor — fine-tune points with add/delete/save controls',
            },
            {
              src: '/images/mower/mower_09.png',
              caption: 'Mowing Progress — live area coverage and time tracking',
            },
            {
              src: '/images/mower/mower_10.png',
              caption: 'Mower Settings — schedule, firmware updates, and blade height',
            },
          ],
        },
        {
          tag: 'Imaging',
          title: 'AI Thermal Imaging Camera App',
          period: '2020 – 2022',
          stack: ['Kotlin', 'MVVM', 'TCP/UDP', 'Socket', 'Streaming'],
          summary:
            'Control app for an infrared thermal camera with real-time video streaming.',
          highlights: [
            'Delivered stable, low-latency video and control via TCP/UDP sockets',
            'Used Kotlin Coroutines for async work, improving UI responsiveness',
            'Built QR-code device pairing and in-app Wi-Fi setup to simplify onboarding',
          ],
          screenshots: [
            {
              src: '/images/infrared/infrared_01.png',
              caption: 'Device List — connection status and live camera preview for paired cameras',
            },
            {
              src: '/images/infrared/infrared_02.png',
              caption: 'Lens Focus Guide — step-by-step tutorial for manually focusing the thermal lens',
            },
            {
              src: '/images/infrared/infrared_04.png',
              caption: 'Wi-Fi Setup — scan and connect the camera to a wireless network',
            },
            {
              src: '/images/infrared/infrared_05.png',
              caption: 'Device Settings — temperature units, alarm deviation, and face-recognition options',
            },
            {
              src: '/images/infrared/infrared_07.png',
              caption: 'Device Pairing — scan a QR code to pair a new thermal camera',
            },
          ],
        },
        {
          tag: 'Healthcare AI',
          title: 'AI Fundus (Ophthalmology) Diagnosis',
          period: '2020',
          stack: ['Python', 'CNN', 'Deep Learning'],
          summary:
            'Research project applying deep learning to retinal fundus images for clinical diagnosis support.',
          highlights: [
            'Led data collection, cleaning, and model training with hyperparameter tuning',
            'Worked directly with physicians on clinical applicability',
          ],
        },
        {
          tag: 'Data Storage',
          title: 'NAS Mobile App',
          period: '2016 – 2017',
          stack: ['Android', 'Java', 'HTTP', 'Linux'],
          summary:
            'Android app for a network-attached storage (NAS) device, communicating over Wi-Fi/HTTP.',
          highlights: [
            'Built a reliable Android-to-NAS communication layer over Wi-Fi/HTTP',
            'Refactored legacy code with OOP principles and design patterns for robustness',
            'Analyzed competitor products and proposed technical feasibility improvements',
            'Deployed, monitored, and maintained the Linux server backing the app',
          ],
        },
        {
          tag: 'Medical Device',
          title: 'Blood Glucose Meter System',
          period: '2013 – 2016',
          stack: ['Java', 'Design Documentation', 'Design Patterns', 'Unit Testing'],
          summary:
            'FDA-certified glucose meter software built with a German client on a 10-person team.',
          highlights: [
            'Designed a highly structured database framework for the platform',
            'Authored technical design docs reviewed regularly by the client',
            'Achieved 100% unit test coverage to support FDA certification',
          ],
        },
      ],
    },
    experience: {
      title: 'Experience',
      kicker: 'Career timeline',
      items: [
        {
          role: 'Freelance Android Engineer',
          company: 'Self-Employed',
          location: 'Taipei, Taiwan',
          period: 'Apr 2026 – Present',
          description:
            'Independent Android development for consumer electronics and AI-integrated products.',
        },
        {
          role: 'Senior Android App Engineer',
          company: 'Masterwork Aoitek',
          location: 'New Taipei City',
          period: 'Aug 2022 – Jan 2026',
          description:
            'Owned the Lollipop baby-monitor Android app: architecture, AI integration, in-app payments, and CI/CD.',
        },
        {
          role: 'Senior Android App Engineer',
          company: 'ULSee',
          location: 'Taipei, Taiwan',
          period: 'Jul 2020 – May 2022',
          description:
            'Built Android apps for an AI lawn mower and a thermal imaging camera, integrating BLE and TCP/UDP.',
        },
        {
          role: 'AI R&D Engineer',
          company: 'China Medical University Hospital — AI Diagnosis Center',
          location: 'Taichung, Taiwan',
          period: 'Mar 2020 – May 2020',
          description:
            'Led an ophthalmology fundus-imaging AI project; data pipeline, model training, and clinical collaboration.',
        },
        {
          role: 'Data Scientist (Self-Directed)',
          company: 'Independent Study & Kaggle',
          location: 'Taipei, Taiwan',
          period: '2018 – 2020',
          description:
            'Completed fast.ai and Stanford CS231n coursework; competed in Kaggle competitions (top 6% in breast cancer prediction).',
        },
        {
          role: 'Senior Software Engineer',
          company: 'Transcend Information Inc.',
          location: 'Taipei, Taiwan',
          period: 'Sep 2016 – Dec 2017',
          description:
            'Developed the Android side of a network-attached storage (NAS) system, plus Linux server deployment.',
        },
        {
          role: 'Software Engineer',
          company: 'Altek Corporation',
          location: 'Hsinchu, Taiwan',
          period: 'Jul 2013 – May 2016',
          description:
            'Built software for an FDA-certified blood glucose meter system with a German client.',
        },
      ],
    },
    skills: {
      title: 'Skills',
      kicker: 'Toolbox',
      groups: [
        {
          name: 'Languages',
          items: ['Kotlin', 'Java', 'Dart', 'Python'],
        },
        {
          name: 'Platforms',
          items: ['Android', 'Linux', 'Flutter'],
        },
        {
          name: 'AI / ML',
          items: ['PyTorch', 'fastai', 'CNNs', 'Model Optimization'],
        },
        {
          name: 'Architecture & Practice',
          items: ['MVVM', 'OOAD', 'OOP', 'UML', 'Design Patterns', 'Refactoring'],
        },
        {
          name: 'Connectivity',
          items: ['Socket', 'BLE', 'MQTT', 'RTSP', 'RTMP', 'TCP/UDP'],
        },
        {
          name: 'Cloud & DevOps',
          items: ['Firebase', 'GCP', 'Colab', 'Jenkins CI/CD'],
        },
      ],
    },
    credentials: {
      title: 'Credentials',
      kicker: 'Education & certifications',
      educationTitle: 'Education',
      education: [
        {
          school: 'National Chiao Tung University',
          degree: 'M.S., Biomedical Engineering',
          period: '2009 – 2013',
        },
        {
          school: 'Tamkang University',
          degree: 'B.S., Computer Science',
          period: '2004 – 2009',
        },
      ],
      certificationsTitle: 'Certifications',
      certifications: [
        'Google Cybersecurity Certificate',
        'LabVIEW CLAD (Certified Associate Developer)',
      ],
    },
    contact: {
      title: 'Let’s Work Together',
      kicker: 'Get in touch',
      lead: 'Looking for an Android or on-device AI engineer to join your team? I’m currently open to full-time and part-time opportunities, including remote roles.',
      emailLabel: 'Email',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Designed & built with Node.js.',
    },
  },

  zh: {
    meta: {
      title: '蘇聖元 — Android 與 AI 工程師',
      description:
        'Android 與 AI 軟體工程師，擁有十年經驗，橫跨消費性電子、IoT 與裝置端 AI 產品開發。',
    },
    nav: {
      about: '關於我',
      work: '精選作品',
      experience: '工作經歷',
      skills: '專長',
      credentials: '學經歷認證',
      contact: '聯絡我',
      hireMe: '聯絡我',
    },
    hero: {
      eyebrow: '軟體工程師',
      title: '蘇聖元',
      secondaryName: 'Steve Su',
      subtitle: 'Android 與裝置端 AI 工程師',
      lead: '我專注打造快速、穩定的 Android 產品，串接硬體、即時影像串流，並在裝置端運行 AI 模型 —— 服務消費性電子、IoT 與醫療裝置等產業。',
      ctaPrimary: '瀏覽作品',
      stats: [
        { value: '10', label: '年 Android 開發資歷' },
        { value: '6', label: '項產品上線經驗' },
      ],
    },
    about: {
      title: '關於我',
      kicker: '關於我',
      paragraphs: [
        '擁有近十年 Android app開發資歷，歷經Android技術架構從初期到現代的完整迭代。長期深耕軟體品質，透過物件導向設計原則、設計模式與重構實踐，持續交付高可維護性、低技術債的程式碼。',
        '擅長在手機端整合AI模型與即時影像串流，並與周邊硬體透過多種通訊協定穩定協作。',
      ],
      philosophyTitle: '我的工作哲學',
      philosophy:
        '撰寫一個設計良好的軟體——簡單、有彈性、容易更改、好維護、易於測試——從來不是件容易的事，但這是我一直以來的自我要求與努力方向。我善用 SOLID 等設計原則與常見設計模式，讓程式碼保持結構清晰與彈性。我始終相信，能將複雜的事物化繁為簡，正是專家與新手的差異所在。',
      facts: [
        { label: '所在地', value: '台灣台北' },
        { label: '工作型態', value: '全職、兼職與遠端工作皆可' },
        { label: '語言能力', value: '中文（母語）、英文（可用於工作溝通）' },
      ],
    },
    work: {
      title: '精選作品',
      kicker: '曾參與的產品',
      intro:
        '以下產品涵蓋消費性、工業與醫療領域，我負責主導 Android 端開發，從架構設計到上架發布。',
      galleryLabel: '應用程式截圖',
      items: [
        {
          tag: '消費性 IoT',
          title: 'Lollipop 嬰兒監視器',
          period: '2022 – 2026',
          stack: ['Kotlin', 'MVVM', 'JNI/C++', 'RTSP', 'RTMP', 'MQTT'],
          summary:
            '商用嬰兒監視器應用，整合裝置端 AI 進行活動識別與異常狀態偵測。',
          highlights: [
            '全權負責 Google Play Store 上架、發布與版本管理',
            '實作應用內購買功能，支援多元訂閱方案，提升產品收益',
            '部署裝置端 AI 模型，並透過 JNI/C++ 強化即時運算效能',
            '大幅減少記憶體洩漏，並優化 AI 模型運算速度',
            '導入 Jenkins CI/CD 流程，加速建置與測試週期',
          ],
          screenshots: [
            {
              src: '/images/lollipop/lollipop_01.png',
              caption: '即時儀表板 — 呼吸速率、睡眠姿勢與事件歷史紀錄',
            },
            {
              src: '/images/lollipop/lollipop_02.png',
              caption: '設定頁面 — 個人資料、訂閱管理、通知與偏好設定',
            },
            {
              src: '/images/lollipop/lollipop_03.png',
              caption: '訂閱方案 — 多層級方案與功能比較',
            },
            {
              src: '/images/lollipop/lollipop_04.png',
              caption: '方案升級 — 清楚呈現進階會員權益',
            },
            {
              src: '/images/lollipop/lollipop_05.png',
              caption: 'AI 日記 — 自動生成的成長里程碑紀錄',
            },
            {
              src: '/images/lollipop/lollipop_06.png',
              caption: '首頁 — 快速進入 AI 監控與 AI 相簿',
            },
            {
              src: '/images/lollipop/lollipop_07.png',
              caption: 'AI 照片精選 — 挑選照片生成 AI 精華回顧',
            },
            {
              src: '/images/lollipop/lollipop_08.png',
              caption: '成長時間軸 — 依年齡整理的里程碑相簿',
            },
            {
              src: '/images/lollipop/lollipop_09.png',
              caption: 'AI 相片分析 — 裝置端物件偵測處理中',
            },
          ],
        },
        {
          tag: '機器人',
          title: 'AI 智能割草機應用',
          period: '2020 – 2022',
          stack: ['Kotlin', 'MVVM', 'BLE', 'Custom View'],
          summary:
            '智能割草機的配套應用程式，提供即時路徑地圖繪製與 BLE 裝置控制。',
          highlights: [
            '開發自定義地圖繪製視圖，直覺展示割草機路徑與工作區域',
            '負責 BLE 協議對接，穩定控制設備並即時傳輸運作狀態',
            '與中國杭州後端團隊協作，完成裝置與雲端數據同步',
          ],
          screenshots: [
            {
              src: '/images/mower/mower_01.png',
              caption: '即時畫面 — 割草機狀態、電量與地圖設定入口',
            },
            {
              src: '/images/mower/mower_02.png',
              caption: '新手教學 — 滑桿控制割草機的操作教學',
            },
            {
              src: '/images/mower/mower_03.png',
              caption: '地圖設定步驟一 — 設定充電站並規劃至草坪的路徑',
            },
            {
              src: '/images/mower/mower_04.png',
              caption: '地圖設定步驟二 — 抵達割草區域後開始記錄',
            },
            {
              src: '/images/mower/mower_05.png',
              caption: '地圖設定步驟三 — 沿草坪邊界逐點描繪範圍',
            },
            {
              src: '/images/mower/mower_06.png',
              caption: '地圖設定步驟四 — 檢視、編輯或新增其他草坪區域',
            },
            {
              src: '/images/mower/mower_07.png',
              caption: '障礙物標記 — 標示草坪內的禁入區域',
            },
            {
              src: '/images/mower/mower_08.png',
              caption: '邊界編輯器 — 透過新增／刪除／儲存微調邊界點',
            },
            {
              src: '/images/mower/mower_09.png',
              caption: '割草進度 — 即時顯示涵蓋面積與工作時間',
            },
            {
              src: '/images/mower/mower_10.png',
              caption: '割草機設定 — 排程、韌體更新與刀片高度設定',
            },
          ],
        },
        {
          tag: '影像處理',
          title: 'AI 智能熱像儀應用',
          period: '2020 – 2022',
          stack: ['Kotlin', 'MVVM', 'TCP/UDP', 'Socket', 'Streaming'],
          summary:
            '紅外線熱像儀控制應用，支援即時影像串流。',
          highlights: [
            '透過 TCP/UDP Socket 編程，確保影像穩定傳輸與低延遲控制',
            '運用 Kotlin Coroutine 處理非同步任務，提升 UI 響應效能',
            '實作 QR Code 掃描配對與應用內 Wi-Fi 設定，簡化裝置啟用流程',
          ],
          screenshots: [
            {
              src: '/images/infrared/infrared_01.png',
              caption: '裝置清單 — 顯示已配對攝影機的連線狀態與即時影像預覽',
            },
            {
              src: '/images/infrared/infrared_02.png',
              caption: '鏡頭對焦教學 — 逐步引導手動對焦熱像儀鏡頭',
            },
            {
              src: '/images/infrared/infrared_04.png',
              caption: 'Wi-Fi 設定 — 掃描並連接攝影機至無線網路',
            },
            {
              src: '/images/infrared/infrared_05.png',
              caption: '裝置設定 — 溫度單位、警報偏移與人臉辨識選項',
            },
            {
              src: '/images/infrared/infrared_07.png',
              caption: '裝置配對 — 掃描 QR Code 以配對新的熱像儀',
            },
          ],
        },
        {
          tag: '醫療 AI',
          title: '眼科眼底鏡 AI 診斷',
          period: '2020',
          stack: ['Python', 'CNN', '深度學習'],
          summary:
            '應用深度學習於眼底影像分析，協助臨床診斷的研究專案。',
          highlights: [
            '主導資料收集、清理、模型訓練與超參數調整',
            '與醫師密切合作，探討 AI 於臨床診斷的實際應用',
          ],
        },
        {
          tag: '資料儲存',
          title: 'NAS 行動裝置應用',
          period: '2016 – 2017',
          stack: ['Android', 'Java', 'HTTP', 'Linux'],
          summary:
            '網路儲存伺服器（NAS）的 Android 配套應用，透過 Wi-Fi/HTTP 與裝置通訊。',
          highlights: [
            '建立穩定的 Android 與 NAS 通訊機制，透過 Wi-Fi/HTTP 確保資料傳輸穩定',
            '應用物件導向原則與設計模式重構既有程式碼，提升穩健性',
            '分析市場競品，評估技術可行性並提出改進方案',
            '負責 Linux 伺服器的部署、監控與維護',
          ],
        },
        {
          tag: '醫療器材',
          title: '血糖儀系統開發',
          period: '2013 – 2016',
          stack: ['Java', '設計文件', '設計模式', '單元測試'],
          summary:
            '與德國客戶及 10 人團隊合作，開發通過美國 FDA 認證的血糖儀軟體系統。',
          highlights: [
            '參與設計並建置高結構化的資料庫框架',
            '撰寫技術設計文件，並定期與客戶進行審查',
            '實施單元測試，達成 100% 程式碼覆蓋率，協助取得 FDA 認證',
          ],
        },
      ],
    },
    experience: {
      title: '工作經歷',
      kicker: '職涯時間軸',
      items: [
        {
          role: 'Android 工程師（自由接案）',
          company: '個人工作室',
          location: '台北市',
          period: '2026/4 – 至今',
          description: '為多元產業提供獨立 Android 與 AI 整合開發服務。',
        },
        {
          role: '資深 Android App 工程師',
          company: 'Masterwork Aoitek',
          location: '新北市汐止區',
          period: '2022/8 – 2026/1',
          description:
            '主導 Lollipop 嬰兒監視器 Android 應用：架構設計、AI 整合、應用內付費與 CI/CD。',
        },
        {
          role: '資深 Android App 工程師',
          company: 'ULSee',
          location: '台北市中山區',
          period: '2020/7 – 2022/5',
          description:
            '開發 AI 智能割草機與熱像儀 Android 應用，整合 BLE 與 TCP/UDP 通訊。',
        },
        {
          role: '人工智慧研發工程師',
          company: '中國醫藥大學附設醫院人工智慧醫學診斷中心',
          location: '台中市北區',
          period: '2020/3 – 2020/5',
          description:
            '主導眼科眼底鏡 AI 專案，負責資料處理、模型訓練與臨床協作。',
        },
        {
          role: 'Data Scientist（自主學習）',
          company: '個人專案與 Kaggle',
          location: '台北市',
          period: '2018 – 2020',
          description:
            '完成 fast.ai 與 Stanford CS231n 課程，參與 Kaggle 競賽（乳腺癌預測排名前 6%）。',
        },
        {
          role: '高級軟體研發工程師',
          company: '創見資訊股份有限公司',
          location: '台北市內湖區',
          period: '2016/9 – 2017/12',
          description: '開發 NAS 網路儲存系統之 Android 端，並負責 Linux 伺服器部署。',
        },
        {
          role: '軟體工程師',
          company: '華晶科技股份有限公司',
          location: '新竹市',
          period: '2013/7 – 2016/5',
          description: '與德國客戶合作，開發通過美國 FDA 認證的血糖儀軟體系統。',
        },
      ],
    },
    skills: {
      title: '專長',
      kicker: '技能工具',
      groups: [
        { name: '程式語言', items: ['Kotlin', 'Java', 'Dart', 'Python'] },
        { name: '平台', items: ['Android', 'Linux', 'Flutter'] },
        { name: 'AI / 機器學習', items: ['PyTorch', 'fastai', 'CNN', '模型優化'] },
        {
          name: '架構與實踐',
          items: ['MVVM', 'OOAD', 'OOP', 'UML', '設計模式', '重構'],
        },
        { name: '通訊協定', items: ['Socket', 'BLE', 'MQTT', 'RTSP', 'RTMP', 'TCP/UDP'] },
        { name: '雲端與 DevOps', items: ['Firebase', 'GCP', 'Colab', 'Jenkins CI/CD'] },
      ],
    },
    credentials: {
      title: '學經歷認證',
      kicker: '學歷與證照',
      educationTitle: '學歷',
      education: [
        {
          school: '國立交通大學',
          degree: '生醫工程研究所 碩士',
          period: '2009 – 2013',
        },
        {
          school: '淡江大學',
          degree: '資訊工程學系 學士',
          period: '2004 – 2009',
        },
      ],
      certificationsTitle: '證照',
      certifications: ['Google Cybersecurity Certificate 資安專業證書', 'LabVIEW CLAD 證照'],
    },
    contact: {
      title: '一起合作吧',
      kicker: '聯絡我',
      lead: '正在尋找 Android 或裝置端 AI 工程師加入團隊嗎？我目前正在尋找全職與兼職機會，也樂於遠端工作。',
      emailLabel: '電子郵件',
    },
    footer: {
      rights: '版權所有。',
      builtWith: '以 Node.js 打造。',
    },
  },
};

module.exports = content;
