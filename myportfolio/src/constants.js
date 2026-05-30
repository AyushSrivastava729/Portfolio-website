// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// certification logo
import javalogo from './assets/certification_logo/javalogo.png';
import mernlogo from './assets/certification_logo/mernlogo.png';
import problemlogo from './assets/certification_logo/problemlogo.jpg';
import sqllogo from './assets/certification_logo/sqllogo.png';

// Project Section Logo's
import chatbotlogo from './assets/work_logo/chatbotlogo.png';
import devicetracklogo from './assets/work_logo/devicetracklogo.png';
import feedlogo from './assets/work_logo/feedlogo.png';
import fooddel from './assets/work_logo/fooddel.png';
import ems from './assets/work_logo/ems.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 export const experiences = [
  {
    id:0,
    img: javalogo,
    title: "Java Certified on HackerRank",
    company_name: "HackerRank",
    date: "29/10/2025",
    points: [
      "Demonstrated strong understanding of object-oriented programming, collections, and exception handling through HackerRank certification.",
      "Showcased ability to solve algorithmic challenges efficiently using Java, reinforcing analytical and logical thinking.",
      "Gained recognition for writing clean, optimized, and maintainable Java code.",
      "Certified on a globally recognized platform, validating technical expertise in Java programming.",
    ],
    certificate_link: "https://www.hackerrank.com/certificates/48dcc2eb3e0a",
  },
  {
     id:1,
    img: sqllogo,
    title: "SQL Certified on HackerRank",
    company_name: "HackerRank",
    date: "29/10/2025",
    points: [
      "Successfully achieved SQL certification, demonstrating expertise in query writing, data manipulation, and database management.",
      "Skilled in crafting optimized SQL queries to handle large datasets efficiently, ensuring high performance in data-driven applications.",
      "Experienced in analyzing complex database schemas and implementing solutions to solve real-world data challenges.",
      "The HackerRank SQL certification showcases validated skills, enhancing credibility for data-centric roles.",
    ],
    certificate_link: "https://www.hackerrank.com/certificates/8aecb3065996",
  },
  {
  id: 2,
  img: problemlogo,
  title: "Problem Solving Certified",
  company_name: "HackerRank",
  date: "29/10/2025",
  points: [
    "Certified in Problem Solving, demonstrating strong logical thinking and analytical skills.",
    "Able to break down complex problems and implement optimized algorithmic solutions.",
    "Skilled in applying data structures and algorithms to solve real-world coding challenges.",
    "This certification validates core problem-solving abilities essential for technical roles.",
  ],
  certificate_link: "https://www.hackerrank.com/certificates/3cb82476111c",
},

  {
    id:3,
    img:mernlogo,
    title: "Full stack Developement",
    company_name: "Udemy",
    date: "Jun 2025",
    points: [
      "Acquired in-depth understanding of front-end and back-end development, including HTML, CSS, JavaScript, and frameworks like React and Node.js.",
      "Earned a recognized certification in web development, validating skills in building responsive and dynamic web applications.",
      "Gained hands-on experience through projects, developing user-friendly and scalable websites with modern technologies.",
      "Learned industry standards for web performance optimization, accessibility, and responsive design to deliver high-quality solutions.",
    ],
    certificate_link: "https://example.com/java-certification",
  },
];

  export const projects = [
    {
      id: 0,
      title: "Realtime Chat App with AI ",
      description:
        "A real-time MERN Chat Application integrated with Google Gemini AI for intelligent code generation and conversation. Features secure JWT authentication, Socket.IO-based live messaging, AI-powered responses, and modern React + Tailwind UI. Fully responsive, scalable, and deployed seamlessly on Render with both backend and frontend integration.",
      image: chatbotlogo,
      tags: ["React 19", "Vite", " Tailwind CSS", "Socket.IO", " Node.js "," Express",  "MongoDB Atlas"  ,"Redis","Google Gemini API"],
      github: "https://github.com/AyushSrivastava729/Realtime-Chat-App-with-Google-Gemini",
      webapp: "https://realtime-chat-app-with-google-gemini-1.onrender.com/login",
    },
    {
      id: 1,
      title: "Real-Time Device Tracking App",
      description:
        "A real-time device tracking application built using Node.js, Express, and Socket.io. This project enables live monitoring of connected devices and updates their status instantly using WebSocket-based communication. It demonstrates real-time data handling and efficient backend architecture for dynamic device management.",
      image: devicetracklogo,
      tags: [ "Node.js",  "Express", "HTML", "CSS", "Socket.IO","Leaflet "],
      github: "https://github.com/AyushSrivastava729/Real-Time-Device-Tracking-App",
      webapp: "https://realtime-device-tracker-xj57.onrender.com/",
    },
    {
      id: 2,
      title: "Reels Style Video Feed Integration",
      description:
        "A full-stack MERN web app featuring a Reels-style video feed where users can securely upload, view, and like short videos. Built with React, Node.js, Express, and MongoDB Atlas, it integrates JWT authentication and ImageKit for optimized media handling and smooth user experience.",
      image: feedlogo,
      tags: ["React 19", "Vite", " Tailwind CSS",  " Node.js "," Express",  "MongoDB Atlas"  ,"ImageKit"],
      github: "https://github.com/AyushSrivastava729/Reels-Style-Video-Feed-Integration",
      webapp: "https://reels-frontend-5mdk.onrender.com/",
    },
    {
      id: 3,
      title: "A Full Stack Food Delivery Website",
      description:
        "Full-Stack Food Delivery Web Application built with React, Node.js, Express, and MongoDB, featuring user authentication, secure payments (Stripe & Razorpay), dynamic menus, and responsive design for an end-to-end online food ordering experience.",
      image: fooddel,
      tags: ["React 19", "Vite", " Tailwind CSS",  " Node.js "," Express",  "MongoDB Atlas"  ,"Stripe","Razorpay"],
      github: "https://github.com/AyushSrivastava729/Full-Stack-Food-Delivery-Website-",
      webapp: "https://fooddeliveryapp-frontend-m52c.onrender.com/#footer",
    },
    {
  id: 4,
  title: "Employee Management System (EMS)",
  description:
    "A modern Employee Management System built with React and Vite, designed to streamline employee data management, workforce tracking, and administrative operations. Features a responsive user interface, reusable components, fast performance, and intuitive dashboard experience for efficient employee record handling.",
  image: ems,
  tags: [
    "React 19",
    "Vite",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "PostCSS",
    "Lucide React",
    "Responsive Design"
  ],
  github: "https://github.com/AyushSrivastava729/EMS-Pro",
  webapp: "https://ems-portal-taupe.vercel.app/",
},
];


