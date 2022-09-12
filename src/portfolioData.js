/* this file contains all the objects ,
 one object or an array for each container (section) */

const colorContainerData = {
  fontIcon: "fas fa-cog",
  paragraphOne: `Choose your favorite color`,
  paragraphTwo: `default color`,
};

const defaultColor = {
  defaultColor: "#2ecc71",
};

const colorList = [
  { id: 1, color: "#fb7813" },
  { id: 2, color: "#f54291" },
  { id: 3, color: "#0779e4" },
  { id: 4, color: "#efa8e4" },
  { id: 5, color: "#fd5e53" },
];

const navbarLinks = [
  { id: 1, navigateTo: "#about", label__span__title: "About" },
  { id: 2, navigateTo: "#skills", label__span__title: "Skills" },
  { id: 3, navigateTo: "#projects", label__span__title: "Projects" },
  { id: 4, navigateTo: "#resume", label__span__title: "Resume" },
  { id: 5, navigateTo: "#contact", label__span__title: "Contact" },
];

const logoData = [
  {
    id: 1,
    name__ariaLabel: "Ganesh Sabale",
    first__word: "Ganesh",
    inspan: "Sabale",
  },
];

const headerInfo = {
  imgURL:require("./images/ganesh.jpg"),
  name: "I'm Ganesh",
  job: "Full Stack Developer",
  resumeLink: require("./download/GaneshSabale_Resume.pdf"),
  fontIcon: "fas fa-download",
  AnchorText: "download resume",
};
const headerImage = {
  headerImage_src: require("./images/header_image-Recovered-Recovered.png"),
};
const projectsData = [
  {
    id: 1,
    liveDemo: "https://splendid-belekoy-c6fd7a.netlify.app/",
    projectName: "Clone of NNNOW.com",
    imgURL: require("./images/project1.png"),
    liveDemoText: "Live Demo",
    project__info:
      "NNNOW.com is an E-commerce website. Have built the user flow of the website from sign up to placing the orders with, form validation. it is built using HTML, CSS, JavaScript and Bootstrap.",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/ganeshsabale99/NNNOWClone",
    filter__word: "javaScript",
  },
  {
    id: 2,
    liveDemo: "https://bespoke-starburst-0ea0ed.netlify.app/",
    projectName: "Clone of SSENSE.com",
    imgURL: require("./images/project2.png"),
    liveDemoText: "Live Demo",
    project__info:
      "SSENSE.com is an E-commerce website. Have built the user flow of the website from sign up to placing the orders with, form validation. it is built using HTML, CSS, JavaScript and Bootstrap.",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/AkshayPandey007/UNIT-3-FINAL-SSENSE",
    filter__word: "javaScript",
  },
  {
    id: 3,
    liveDemo: "https://resplendent-gaufre-b3e9ae.netlify.app/",
    projectName: "Clone of MODESENS.com",
    imgURL: require("./images/project3.png"),
    liveDemoText: "Live Demo",
    project__info:
      "MODESENS.com is an E-commerce website. Have built the user flow of the website from sign up to placing the orders with, form validation. it is built using HTML, CSS, JavaScript and Bootstrap.",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/ganeshsabale99/modesens.com-clone-Project",
    filter__word: "javaScript",
  },
  {
    id: 4,
    liveDemo: "https://cerulean-custard-252dcb.netlify.app/",
    projectName: "Clone of NAUKRI.com",
    imgURL: require("./images/project4.png"),
    liveDemoText: "Live Demo",
    project__info:
      "Naukri.com is an Indian employment website operating in India and Middle East. Built using React,Redux,Redux Thunks,API (Masai API for login and registration),Chakra UI.",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/ganeshsabale99/cynical-cobweb-5784",
    filter__word: "react",
  },
];

const portfolioSection = {
  title: "projects",
  paragraph: ``,
};

const portfolioList = [
  { id: 1, filtering: ".all", list__word: "All", active: "custom__active" },
  { id: 2, filtering: ".javaScript", list__word: "JavaScript", active: "" },
  { id: 3, filtering: ".react", list__word: "React", active: "" },
];
const SkillsSection = {
  id: "skills",
  title: "Skills",
  // skillsImage: require("./images/skills.png"),
};

const SkillsImages = [
  {
    id: 1,
    // imgURL: require("./images/html5.svg"),
    skillName: "HTML5",
  },
  {
    id: 2,
    skillName: "CSS3",
  },
  {
    id: 3,
    skillName: "JavaScript",
  },
  {
    id: 4,
    skillName: "Bootstrap",
  },
  {
    id: 5,
    skillName: "React",
  },
  {
    id: 6,
    skillName: "Redux",
  },
  {
    id: 7,
    skillName: "MySQL",
  },
  {
    id: 8,
    skillName: "Material-UI",
  },
  {
    id: 9,
    skillName: "Chakra-UI",
  },
  {
    id: 10,
    skillName: "TypeScript",
  }
];

const AboutSection = {
  id: "about",
  title: "about me",
  paragraph: `Hello! My name is Ganesh Sabale, Passionate Skilled, collaborative, and attentive Full Stack Web Developer specialization in MERN stack. I am a learner and explorer constantly seeking better quality, efficiency, and a healthy environment and I enjoy problem-solving and learning from the challenges that come along. Thus, the challenges bring the best out of me. I built a number of web applications and 3 major projects and I am looking for an environment that will allow me to implement the best of my knowledge.`,
  paragraph2: `I have a passion to learn everything new ❤, contributing to the progress of mankind, and show creativity and possibilities in everything I do ✨.`,
};
const AboutServices = {
  title: "services",
};

// const servicesData = [
//   {
//     id: 1,
//     serviceName: "Web development",
//     serviceImg: require("./images/undraw_version_control_9bpv.svg"),
//     serviceDescription:
//       "I can build your ideal website from scratch with the newest technologies.",
//   },
//   {
//     id: 2,
//     serviceName: "GRAPHIC DESIGN",
//     serviceImg: require("./images/undraw_design_notes_8dmv.svg"),
//     serviceDescription:
//       "I can design your website and make it beautiful to right fit your test.",
//   },
//   {
//     id: 3,
//     serviceName: "UX & UI DESIGN",
//     serviceImg: require("./images/undraw_design_tools_42tf.svg"),
//     serviceDescription:
//       "I can make the user interface and experience more appealing to users.",
//   },
//   {
//     id: 4,
//     serviceName: "SEO",
//     serviceImg: require("./images/undraw_file_searching_duff.svg"),
//     serviceDescription: "Can make your website appears on top when searching.",
//   },
// ];

const resumeData = {
  id: "resume",
  resumeInfo: ` If you would like to learn more about me or have PDF copy of my resume
          please feel free to click the download button, The resume provides
          detailed information about me and more contact information.`,
  resumeAnchorText: "Download Resume",
  resumeURL: require("./download/GaneshSabale_Resume.pdf"),
};

const contactData = {
  id: "contact",
  contactText: "Contact Me",
  submitButton: "Submit",
  inputName: "Your name",
  inputEmail: "Email",
  inputSubject: "Subject",
  textArea: "message",
};

const FooterData = {
  FooterText: "Contact Me",
};

const footerSocialData = [
 
  {
    id: 1,
    socialName: "Linkedin",
    socialImg: "fab fa-linkedin",
    socialURL: "https://www.linkedin.com/in/ganesh-sabale-909616211/",
  },
  {
    id: 2,
    socialName: "Github",
    socialImg: "fab fa-github",
    socialURL: "https://github.com/ganeshsabale99",
  },
  {
    id: 3,
    socialName: "Mail",
    socialImg: "fa fa-envelope",
    socialURL: "mailto:sabaleganesh99@gmail.com",
  },
  // {
  //   id: 4,
  //   socialName: "twitter",
  //   socialImg: "fab fa-twitter",
  //   socialURL: "https://twitter.com/GaneshSabale99/",
  // },
  {
    id: 4,
    socialName: "Mobile",
    socialImg: "fa fa-mobile",
    socialURL: "tel:+919975322622",
  },
];

const copyright = {
  first__word: "Copyright",
  second__word: "Ganesh Sabale 2022",
};

export {
  defaultColor,
  colorContainerData,
  colorList,
  navbarLinks,
  logoData,
  headerInfo,
  headerImage,
  projectsData,
  portfolioList,
  portfolioSection,
  SkillsImages,
  SkillsSection,
  AboutSection,
  AboutServices,
  // servicesData,
  resumeData,
  contactData,
  FooterData,
  footerSocialData,
  copyright,
};
