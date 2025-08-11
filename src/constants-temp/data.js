//////////////////////  Header  ///////////////////////
export const MenuType = [
  {
    icon: "/img/menu-type-1.svg",
    text: "Business",
    href: "/business",
    subMenu: [
      {
        subMenuText: "Business",
        subMenuHref: "/#submenu1",
      },
      {
        subMenuText: "Business 2",
        subMenuHref: "/#submenu2",
      },
    ],
  },
  {
    icon: "/img/menu-type-2.svg",
    text: "Residential",
    href: "/residential",
    subMenu: [
      {
        subMenuText: "Residential",
        subMenuHref: "/#submenu1",
      },
      {
        subMenuText: "Residential 2",
        subMenuHref: "/#submenu2",
      },
    ],
  },
];

export const MenuHeader = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
    subMenu: [
      {
        subMenuText: "Alarm",
        subMenuHref: "/alarm",
      },
      {
        subMenuText: "Our Team",
        subMenuHref: "/about/our-team",
      },
      {
        subMenuText: "Our Partners",
        subMenuHref: "/about/our-partners",
      },
      {
        subMenuText: "Thank You",
        subMenuHref: "/thankyou",
      },
      {
        subMenuText: "Error Page 404",
        subMenuHref: "/error",
      },
    ],
  },
  {
    text: "Articles",
    href: "/articles",
  },
];

export const MenuHeaderMd = [
  {
    text: "Home",
    href: "/",
    icon: "",
  },
  {
    text: "Business",
    href: "/",
    icon: "/img/menu-type-1.svg",
    subMenu: [
      {
        subMenuText: "Alarm",
        subMenuHref: "/alarm",
      },
      {
        subMenuText: "Our Team",
        subMenuHref: "/about/our-team",
      },
      {
        subMenuText: "Our Partners",
        subMenuHref: "/about/our-partners",
      },
      {
        subMenuText: "Thank You",
        subMenuHref: "/thankyou",
      },
      {
        subMenuText: "Error Page 404",
        subMenuHref: "/error",
      },
    ],
  },
  {
    text: "Residential",
    href: "/residential",
    icon: "/img/menu-type-2.svg",
  },
  {
    text: "About",
    href: "/about",
    icon: "",

    subMenu: [
      {
        subMenuText: "Alarm",
        subMenuHref: "/alarm",
      },
      {
        subMenuText: "Our Team",
        subMenuHref: "/about/our-team",
      },
      {
        subMenuText: "Our Partners",
        subMenuHref: "/about/our-partners",
      },
      {
        subMenuText: "Thank You",
        subMenuHref: "/thankyou",
      },
      {
        subMenuText: "Error Page 404",
        subMenuHref: "/error",
      },
    ],
  },
  {
    text: "Articles",
    href: "/articles",
    icon: "",
  },
];

export const HeaderButton = {
  HeaderBtnText: "Free Consultation",
  HeaderBtnHref: "/contact",
  HeaderBtnTarget: "_self",
};

export const HTop = {
  language: [
    {
      text: "EN",
      href: "/",
      icon: "/img/flag-en.svg",
    },
    {
      text: "ID",
      href: "/id",
      icon: "/img/flag-id.svg",
    },
  ],
  login: {
    text: "SMART SECURITY LOGIN",
    href: "/login",
    target: "_self",
  },
};

//////////////////////  Footer  ///////////////////////
export const FooterContent = {
  FtTitle: "Let's Start Protecting Your Home and Your Loved Ones",
  FtDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur. Curabitur blandit tempus ardua ridiculus sed magna.",

  FtButtonText: "Free Consultation",
  FtButtonHref: "/#free-consultation",
  FtButtonTarget: "_self",

  FtAddressText:
    "Mangkuluhur City Tower 1, 8th Floor, Jl. Jend. Gatot Subroto Kav. 1-3, Jakarta Selatan 12930",
  FtAddressLink: "https://goo.gl/maps/3Z1b5d7z8x2k9f4cA",
};

export const FooterMenu = [
  {
    FtMenuText: "SECOM For Home",
    FtMenuLink: "/#secom-for-home",
  },

  {
    FtMenuText: "SECOM For Business",
    FtMenuLink: "/#secom-for-business",
  },
  {
    FtMenuText: "About Us",
    FtMenuLink: "/#about",
  },
  {
    FtMenuText: "Blog",
    FtMenuLink: "/#blog",
  },
  {
    FtMenuText: "Career",
    FtMenuLink: "/#career",
  },
  {
    FtMenuText: "FAQ",
    FtMenuLink: "/#faq",
  },
];

export const FooterSocMed = {
  FtFacebook: "https://www.facebook.com/",
  FtLinkedin: "https://www.linkedin.com/",
  FtInstagram: "https://www.instagram.com/",
  FtYoutube: "https://www.youtube.com/",
  FtTiktok: "https://www.tiktok.com/",
};

export const FooterDropdown = [
  {
    FtDropValue: "secom-global-network",
    FtDropText: "SECOM Global Network",
    FtDropHref: "#",
  },
  {
    FtDropValue: "secom-global-network-2",
    FtDropText: "SECOM Global Network 2",
    FtDropHref: "#",
  },
  {
    FtDropValue: "secom-global-network-3",
    FtDropText: "SECOM Global Network 3",
    FtDropHref: "#",
  },
  {
    FtDropValue: "secom-global-network-4",
    FtDropText: "SECOM Global Network 4",
    FtDropHref: "#",
  },
  {
    FtDropValue: "secom-global-network-5",
    FtDropText: "SECOM Global Network 5",
    FtDropHref: "#",
  },
];

//////////////////////  Residential  ///////////////////////
export const ReBanner = {
  title: "Every Member of Your Family Need The Best Protection",
  photo: "/img/temp/h-banner-front.png",
  background: "/img/temp/h-banner-bg.jpg",
  items: [
    {
      text: "If I leave food too long in the microwave, the smoke detector will alert us.",
      top: "45%",
      left: "15%",
      maxWidth: "314px",
      icon: "/img/temp/h-banner-ibu.png",
    },
    {
      text: "If someone knocks, I don't have to be scared anymore. ",
      top: "36%",
      left: "41%",
      maxWidth: "200px",
      icon: "/img/temp/h-banner-anak.png",
    },
    {
      text: "Even if I'm home alone, I know help is just one button away.",
      top: "37%",
      left: "57%",
      maxWidth: "314px",
      icon: "/img/temp/h-banner-nenek.png",
    },
    {
      text: "If anyone tries to break in, I know my family and home are still protected.",
      top: "50%",
      left: "70.5%",
      maxWidth: "314px",
      icon: "/img/temp/h-banner-bapak.png",
    },
  ],
};

export const ReSurvey = {
  title: "Is Your Home Already Safe?",
  desc: "Check your home safety levels with this short survey",

  survey: [
    {
      question: "How often is your home left empty?",
      options: [
        { text: "A. Most Days", value: "a" },
        { text: "B. Few Hours A Day", value: "b" },
      ],
    },
    {
      question:
        "Do you live with children, elderly parents, or loved ones with special needs?",
      options: [
        { text: "Yes", value: "yes" },
        { text: "No", value: "no" },
      ],
    },
    {
      question: "What security systems do you currently have installed?",
      options: [
        { text: "A. None", value: "a" },
        { text: "B. Self-Installed CCTV", value: "b" },
      ],
    },
  ],

  result: [
    {
      icon: "/img/survey-h-risk.png",
      text: "High Risk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Magna pars studiorum, prodita quaerimus. dolore magna aliqua. Magna pars studiorum, prodita quaerimus.",
      btn: {
        text: "CHECK OUR PACKAGES",
        href: "/#packages",
        target: "_self",
      },
    },
    {
      icon: "/img/survey-m-risk.png",
      text: "Moderate Risk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Magna pars studiorum, prodita quaerimus. dolore magna aliqua. Magna pars studiorum, prodita quaerimus.",
      btn: {
        text: "CHECK OUR PACKAGES",
        href: "/#packages",
        target: "_self",
      },
    },
    {
      icon: "/img/survey-l-risk.png",
      text: "Low Risk",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Magna pars studiorum, prodita quaerimus. dolore magna aliqua. Magna pars studiorum, prodita quaerimus.",
      btn: {
        text: "CHECK OUR PACKAGES",
        href: "/#packages",
        target: "_self",
      },
    },
  ],

  resultCombinations: {
    high: ["a-yes-a", "a-no-a", "b-yes-a"],
    moderate: ["a-yes-b", "a-no-b", "b-yes-b"],
    low: ["b-no-a", "b-no-b"],
  },
};

export const ReAbout = {
  title: "How SECOM Protects You",
  desc: "SECOM goes beyond alarms.<br>We combine smart technology with human response to truly protect what matters most.",
  photo: "/img/temp/h-about-photo.jpg",
  items: [
    {
      icon: "/img/temp/res-protect-spots.png",
      title:
        "Instantly spots intrusions, fire, or suspicious activity, even when you're not home.",
    },
    {
      icon: "/img/temp/res-protect-video.png",
      title:
        "We only view live video during emergencies, ensuring safety without compromising your privacy.",
    },
    {
      icon: "/img/temp/res-protect-physical.png",
      title:
        "In a emergency, we don't wait. Our physical response personnel is on the ground. Fast.",
    },
  ],
  btnAbout: {
    text: "Learn More",
    href: "/about",
    target: "_self",
  },
};

export const ReSolution = {
  hint: "Our Solutions",
  title: "Secure Every Corner of Your Home",
  desc: "Each room has different risks. SECOM helps you place the right protection in the right place.",
  itemSlider: [
    {
      photo: "/img/temp/h-slide-solution.jpg",
      title:
        "<b>Smart Video Camera - Outdoor</b><br>Monitor your gates, garage, and yard with smart detection and two-way audio.",
    },
    {
      photo: "/img/temp/alarm-reason-bg.jpg",
      title:
        "<b>PIR Cam Indoor - Living Room</b><br>Watch over your home's central space with reliable motion-sensing protection.",
    },
    {
      photo: "/img/temp/h-slide-solution.jpg",
      title:
        "<b>Door Contact - Windows</b><br>Protect windows from silent entry with smart magnetic sensors.",
    },
    {
      photo: "/img/temp/alarm-reason-bg.jpg",
      title:
        "<b>Smoke Detector - Clean Kitchen</b><br>Even in the cleanest kitchens, accidents can happen. Stay alert with a smoke detector.",
    },
  ],
  btnSolution: {
    text: "Learn More",
    href: "/#",
    target: "_self",
  },
};

export const ReQuote = [
  {
    thumb: "/img/temp/h-quote-1.jpg",
    linkVideo: "https://youtu.be/X-EK60rmcQs?list=RDX-EK60rmcQs",
    text: "Quisque ut dolor gravida, placerat libero vel, euismod. Fabio vel iudice vincam, sunt in culpa qui officia. Magna pars studiorum.",
  },
  {
    thumb: "/img/temp/alarm-reason-bg.jpg",
    linkVideo: "https://youtu.be/WOGbsA5t9kk?list=RDWOGbsA5t9kk",
    text: "Quisque ut dolor gravida, placerat libero vel, euismod. Fabio vel iudice vincam, sunt in culpa qui officia. Magna pars studiorum.",
  },
  {
    thumb: "/img/temp/alarm-banner-bg-desktop.jpg",
    linkVideo: "https://youtu.be/tGv7CUutzqU?list=RDWOGbsA5t9kk",
    text: "Quisque ut dolor gravida, placerat libero vel, euismod. Fabio vel iudice vincam, sunt in culpa qui officia. Magna pars studiorum.",
  },
];

export const ReTestimonial = {
  title: "Hear it from our customers",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitionni dedisse scripsisse iudicaretur. Curabitur blandit tempus ardua ridiculus sed magna.",
  items: [
    {
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitionni dedisse scripsisse iudicaretur. Curabitur blandit tempus ardua ridiculus sed magna.",
      name: "Nama Pelanggan, Usia",
      location: "Lokasi",
    },
    {
      testimony:
        "Curabitur blandit tempus ardua ridiculus sed magna. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh.",
      name: "John Doe, 35",
      location: "Jakarta",
    },
    {
      testimony:
        "Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Curabitur blandit tempus ardua ridiculus sed magna.",
      name: "Jane Smith, 42",
      location: "Surabaya",
    },
    {
      testimony:
        "Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Curabitur blandit tempus ardua ridiculus sed magna.",
      name: "Halo Halo, 99",
      location: "Surabaya",
    },
  ],
};

export const RePromotion = {
  hint: "Promotion",
  title: "Quisque ut dolor gravida, placerat libero vel, euismod.",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
  image: "/img/temp/h-promotion.jpg",
  btnPromotion: {
    text: "CALL TO ACTION BUTTON",
    href: "/#",
    target: "_self",
  },
};

//////////////////////  CONTACT  ///////////////////////
export const ContactPage = {
  title: "Get Your Free Consultation",
  desc: "Talk to our expert today and find the right solution for your home.",
  photo: "/img/temp/contact-image.jpg",
};

export const FormValue = {
  locationType: [
    {
      value: "",
      label: "",
    },
    {
      value: "Residential",
      label: "Residential",
    },
    {
      value: "Commercial",
      label: "Commercial",
    },
    {
      value: "Industrial",
      label: "Industrial",
    },
  ],
  howDidYouKnow: [
    {
      value: "",
      label: "",
    },
    {
      value: "Google",
      label: "Google",
    },
    {
      value: "Facebook",
      label: "Facebook",
    },
    {
      value: "Instagram",
      label: "Instagram",
    },
    {
      value: "Others",
      label: "Others",
    },
  ],
};

//////////////////////  THANK YOU  ///////////////////////
export const ThankYouPage = {
  title: "Thank You",
  title2: "ForYour Message",
  desc: "Idque Caesaris facere voluntate liceret: sese habere. Ut enim ad minim veniam, quis nostrud exercitation. Tu quoque, Brute, fili mi, nihil timor populi, nihil!",
  logo: "/img/logo-thankyou.svg",
  buttonCTA: {
    text: "Back to Homepage",
    href: "/",
    target: "_self",
  },
};

//////////////////////  ERROR  ///////////////////////

export const ErrorPage = {
  title: "The Page You're Looking For Didn't Exist",
  description:
    "Idque Caesaris facere voluntate liceret: sese habere. Ut enim ad minim veniam, quis nostrud exercitation. Tu quoque, Brute, fili mi, nihil timor populi, nihil!",
  buttonCTA: {
    text: "Back to Home",
    href: "/",
    target: "_self",
  },
};

//////////////////////  LOGIN PAGE  ///////////////////////
export const LoginDummy = {
  title: "Login to Your Account",
};

//////////////////////  ALARM LANDING  ///////////////////////
export const AlarmBanner = {
  title: ["Your Home Secured with ", "Intelligence."],
  background: "/img/temp/alarm-banner-bg-desktop.jpg",
};

export const AlarmOverview = {
  desc: "At SECOM, we understand that <b>your home isn't just a place</b>. It's where your family, memories,and future are kept safe. That's why we offertailored residential security solutions thatcombine cutting-edge technology with fast,reliable response services.",
  items: [
    {
      icon: "/img/temp/h-ab-icon-1.svg",
      title: "Intelligent and Secured Platform",
    },
    {
      icon: "/img/temp/h-ab-icon-2.svg",
      title: "Protected by Professionals",
    },
    {
      icon: "/img/temp/h-ab-icon-3.svg",
      title: "Unique Smart Features and Function",
    },
  ],
};

export const AlarmReason = {
  title: "Why Choose Us?",
  items: [
    {
      background: "img/temp/alarm-reason-bg.jpg",
      title: "Quisque ut dolor gravida, placerat libero vel, euismod.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
    },
    {
      background: "img/temp/alarm-banner-bg-desktop.jpg",
      title: "#2Quisque ut dolor gravida, placerat libero vel, euismod.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
    },
    {
      background: "img/temp/alarm-reason-bg.jpg",
      title: "#3Quisque ut dolor gravida, placerat libero vel, euismod.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
    },
    {
      background: "img/temp/alarm-banner-bg-desktop.jpg",
      title: "#4Quisque ut dolor gravida, placerat libero vel, euismod.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
    },
  ],
};

export const AlarmProtect = {
  title: "How SECOM Protects You?",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
  image: "/img/temp/alarm-protect.png",
  imageMobile: "/img/temp/alarm-protect-md.png",
  items: [
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
    },
    {
      title: "#2Lorem ipsum dolor sit ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
    },
    {
      title: "#3Lorem ipsum dolor sit ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
    },
  ],
  btnCTA: {
    text: "CONSULT WITH US NOW",
    href: "/#",
    target: "_self",
  },
};

export const AlarmProduct = {
  title: "Our Products",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
  products: [
    {
      title: "Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
      image: "/img/temp/product-1.png",
      link: "#1",
    },
    {
      title: "#2Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
      image: "/img/temp/product-2.png",
      link: "#2",
    },
    {
      title: "#3Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
      image: "/img/temp/product-1.png",
      link: "#3",
    },
    {
      title: "#4Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
      image: "/img/temp/product-2.png",
      link: "#4",
    },
    {
      title: "#5Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
      image: "/img/temp/product-1.png",
      link: "#5",
    },
    {
      title: "#6Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
      image: "/img/temp/product-2.png",
      link: "#6",
    },
    {
      title: "#7Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
      image: "/img/temp/product-1.png",
      link: "#7",
    },
    {
      title: "#8Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
      image: "/img/temp/product-2.png",
      link: "#8",
    },
  ],
};

export const AlarmCorners = {
  title: "Protect Every Corner of Your Home",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse.",
  btnConsult: {
    text: "CONSULT WITH US NOW",
    href: "/#",
    target: "_self",
  },
  image: "/img/temp/protect-bg.png",
  items: [
    {
      positionX: "49%",
      positionY: "24%",
      image: "/img/temp/product-1.png",
      title: "Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
    },
    {
      positionX: "64%",
      positionY: "25%",
      image: "/img/temp/product-2.png",
      title: "#2Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
    },
    {
      positionX: "68%",
      positionY: "30%",
      image: "/img/temp/product-1.png",
      title: "#3Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
    },
    {
      positionX: "60%",
      positionY: "46%",
      image: "/img/temp/product-2.png",
      title: "#4Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
    },
    {
      positionX: "36%",
      positionY: "49%",
      image: "/img/temp/product-1.png",
      title: "#5Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
    },
    {
      positionX: "55%",
      positionY: "64%",
      image: "/img/temp/product-2.png",
      title: "#6Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
    },
    {
      positionX: "41%",
      positionY: "82%",
      image: "/img/temp/product-2.png",
      title: "#6Control Panel",
      desc: "Pusat penerima sinyal keamanan dari sensor yang akan memberi tahu Anda dan control center SECOM.",
    },
  ],
};

export const AlarmApps = {
  title: "Feel safe anytime, anywhere.",
  desc: "In a rush? Feel worried when going on vacation? SECOM alarm system makes it easy for you to monitor and control your location via your smartphone and tablet.",
  image: "/img/temp/phone-img.png",
  items: [
    {
      title: "Tu quoque, Brute, fili mi, nihil timor populi, nihil!",
      icon: "/img/temp/am-apps-icon.svg",
    },
    {
      title: "#2Tu quoque, Brute, fili mi, nihil timor populi, nihil!",
      icon: "/img/temp/am-apps-icon.svg",
    },
    {
      title: "#3Tu quoque, Brute, fili mi, nihil timor populi, nihil!",
      icon: "/img/temp/am-apps-icon.svg",
    },
    {
      title: "#4Tu quoque, Brute, fili mi, nihil timor populi, nihil!",
      icon: "/img/temp/am-apps-icon.svg",
    },
    {
      title: "#5Tu quoque, Brute, fili mi, nihil timor populi, nihil!",
      icon: "/img/temp/am-apps-icon.svg",
    },
    {
      title: "#6Tu quoque, Brute, fili mi, nihil timor populi, nihil!",
      icon: "/img/temp/am-apps-icon.svg",
    },
    {
      title: "#7Tu quoque, Brute, fili mi, nihil timor populi, nihil!",
      icon: "/img/temp/am-apps-icon.svg",
    },
  ],
  download: [
    {
      link: "#",
      image: "/img/temp/googleplay.svg",
    },
    {
      link: "#",
      image: "/img/temp/appstore.svg",
    },
  ],
};

export const AlarmTrusted = {
  title: "Trusted by Thousand, Chosen for a Reason.",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Ambitioni dedisse scripsisse iudicaretur.",
  logoSecom: "/img/secom-logo.png",
  table: [
    {
      feature: "24/7 Monitoring",
      secom: true,
      other: "available", // "available" || "limited" || "unavailable"
    },
    {
      feature: "Response Team",
      secom: true,
      other: "unavailable",
    },
    {
      feature: "Mobile App Access",
      secom: true,
      other: "unavailable",
    },
    {
      feature: "Local Support in Indonesia",
      secom: true,
      other: "limited",
    },
    {
      feature: "Installation by Experts",
      secom: true,
      other: "limited",
    },
    {
      feature: "Customizable for Every Family",
      secom: true,
      other: "unavailable",
    },
  ],
};

export const AlarmPackage = {
  title: "Customize Your Package",
  desc: "Choose your service package and additional equipment that best suit your needs and your usage, elevating complete protection and total peace of mind even when you are not home.",
  tabs: [
    {
      title: "RENTAL",
      desc: "Qui ipsorum lingua Celtae,",
    },
    {
      title: "Buy",
      desc: "Qui ipsorum lingua Celtae,",
    },
  ],
  items: [
    {
      title: "HomeRent",
      price: "1.500.000",
      serviceFee: "5.000.000",
      desc: "Qui ipsorum lingua Celtae, nostra Galli appellantur. Quae vero auctorem tractata ab fiducia dicuntur. Morbi fringilla convallis sapien, id pulvinar odio volutpat.",
      device: "15",
      image: "/img/temp/package-1.png",
      isRent: true,
    },
    {
      title: "Home Pro",
      price: "5.000.000",
      serviceFee: "5.000.000",
      desc: "Qui ipsorum lingua Celtae, nostra Galli appellantur. Quae vero auctorem tractata ab fiducia dicuntur. Morbi fringilla convallis sapien, id pulvinar odio volutpat.",
      device: "9",
      image: "/img/temp/package-1.png",
      isRent: true,
    },
    {
      title: "Home",
      price: "1.500.000",
      serviceFee: "5.000.000",
      desc: "Qui ipsorum lingua Celtae, nostra Galli appellantur. Quae vero auctorem tractata ab fiducia dicuntur. Morbi fringilla convallis sapien, id pulvinar odio volutpat.",
      device: "15",
      image: "/img/temp/package-1.png",
      isRent: true,
    },
    {
      title: "Home Pro",
      price: "5.000.000",
      serviceFee: "5.000.000",
      desc: "Qui ipsorum lingua Celtae, nostra Galli appellantur. Quae vero auctorem tractata ab fiducia dicuntur. Morbi fringilla convallis sapien, id pulvinar odio volutpat.",
      device: "9",
      image: "/img/temp/package-1.png",
      isRent: true,
    },
    {
      title: "Home Buy",
      price: "1.500.000",
      serviceFee: "5.000.000",
      desc: "Qui ipsorum lingua Celtae, nostra Galli appellantur. Quae vero auctorem tractata ab fiducia dicuntur. Morbi fringilla convallis sapien, id pulvinar odio volutpat.",
      device: "15",
      image: "/img/temp/package-1.png",
      isRent: false,
    },
    {
      title: "Home Pro Buy",
      price: "5.000.000",
      serviceFee: "5.000.000",
      desc: "Qui ipsorum lingua Celtae, nostra Galli appellantur. Quae vero auctorem tractata ab fiducia dicuntur. Morbi fringilla convallis sapien, id pulvinar odio volutpat.",
      device: "9",
      image: "/img/temp/package-1.png",
      isRent: false,
    },
  ],
};

export const AlarmDifferences = {
  title: "See The Differences",
  hint: "Hide Information",
  note: "*Phasellus laoreet lorem vel dolor tempus vehicula. Gallia est omnis divisa in partes tres, quarum. Praeterea iter est quasdam res quas ex communi. Contra legem facit qui id facit quod lex prohibet. Morbi fringilla convallis sapien, id pulvinar odio volutpat.",
  items: [
    {
      device: "Control Panel",
      image: "/img/temp/product-1.png",
      home: "1",
      pro: "1",
    },
    {
      device: "2Control Panel",
      image: "/img/temp/product-1.png",
      home: "1",
      pro: "1",
    },
    {
      device: "3Control Panel",
      image: "/img/temp/product-1.png",
      home: "1",
      pro: "1",
    },
    {
      device: "4Control Panel",
      image: "/img/temp/product-1.png",
      home: "1",
      pro: "1",
    },
    {
      device: "5Control Panel",
      image: "/img/temp/product-2.png",
      home: "1",
      pro: "1",
    },
  ],
  price: { home: "5.000.000", pro: "8.000.000" },
  serviceTitle: "Service Fee",
  serviceFee: [
    {
      name: "Non equidem invideo, miror magis",
      priceHome: "5.000.000",
      pricePro: "313.323",
    },
    {
      name: "Non equidem invideo, miror magis",
      priceHome: "5.000.000",
      pricePro: "313.323",
    },
    {
      name: "Non equidem invideo, miror magis",
      priceHome: "5.000.000",
      pricePro: "313.323",
    },
  ],
};

export const AlarmFAQ = {
  title: "Frequently Asked Questions",
  desc: "Nihil hic munitissimus habendi senatus locus, nihil horum? Pellentesque habitant morbi tristique senectus et netus. Ambitioni dedisse scripsisse iudicaretur.",
  items: [
    {
      question: "Contra legem facit qui id facit quod lex prohibet.",
      answer:
        "Curabitur est gravida et libero vitae dictum. Quisque ut dolor gravida, placerat libero vel, euismod. Cum sociis natoque penatibus et magnis dis parturient. Integer legentibus erat a ante historiarum dapibus.<br><br>Etiam habebis sem dicantur magna mollis euismod. At nos hinc posthac, sitientis piros Afros. Ab illo tempore, ab est sed immemorabili. Mercedem aut nummos unde unde extricat, amaras. Quisque placerat facilisis egestas cillum dolore. Non equidem invideo, miror magis posuere velit aliquet.",
    },
    {
      question: "#2Contra legem facit qui id facit quod lex prohibet.",
      answer:
        "Curabitur est gravida et libero vitae dictum. Quisque ut dolor gravida, placerat libero vel, euismod. Cum sociis natoque penatibus et magnis dis parturient. Integer legentibus erat a ante historiarum dapibus.<br><br>Etiam habebis sem dicantur magna mollis euismod. At nos hinc posthac, sitientis piros Afros. Ab illo tempore, ab est sed immemorabili. Mercedem aut nummos unde unde extricat, amaras. Quisque placerat facilisis egestas cillum dolore. Non equidem invideo, miror magis posuere velit aliquet.",
    },
    {
      question: "#3Contra legem facit qui id facit quod lex prohibet.",
      answer:
        "Curabitur est gravida et libero vitae dictum. Quisque ut dolor gravida, placerat libero vel, euismod. Cum sociis natoque penatibus et magnis dis parturient. Integer legentibus erat a ante historiarum dapibus.<br><br>Etiam habebis sem dicantur magna mollis euismod. At nos hinc posthac, sitientis piros Afros. Ab illo tempore, ab est sed immemorabili. Mercedem aut nummos unde unde extricat, amaras. Quisque placerat facilisis egestas cillum dolore. Non equidem invideo, miror magis posuere velit aliquet.",
    },
    {
      question: "#4Contra legem facit qui id facit quod lex prohibet.",
      answer:
        "Curabitur est gravida et libero vitae dictum. Quisque ut dolor gravida, placerat libero vel, euismod. Cum sociis natoque penatibus et magnis dis parturient. Integer legentibus erat a ante historiarum dapibus.<br><br>Etiam habebis sem dicantur magna mollis euismod. At nos hinc posthac, sitientis piros Afros. Ab illo tempore, ab est sed immemorabili. Mercedem aut nummos unde unde extricat, amaras. Quisque placerat facilisis egestas cillum dolore. Non equidem invideo, miror magis posuere velit aliquet.",
    },
  ],
};
