import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mui,
  express,
  mysql,
  github,
  Three3js,
  aws,
  project2,
  project1,
  project3,
} from "../assets";
import tekisky from '../assets/company/tekisky.png';
// import project2 from '../assets/project2.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Application Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Graphic Design",
    icon: backend,
  },
  {
    title: "Video Editing",
    icon: creator,
  },
  {
    title: "Digital Marketing",
    icon: web,
  },
  {
    title: "SEO Optimization",
    icon: mobile,
  },
  {
    title: "UI/UX Design",
    icon: backend,
  },
  {
    title: "AI Chatbot Integration",
    icon: creator,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: Three3js,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Committed to Real-World Solutions",
    company_name: "MER Tech Solution",
    icon: web,
    iconBg: "#383E56",
    date: "Since 2024",
    points: [
      "While our team hasn't launched a live client project yet, we are actively working on building powerful in-house solutions to showcase our expertise.",
      "We strongly believe in transparency, quality, and long-term relationships. Our current focus is on gaining your trust through honest collaboration.",
      "We're not just learning — we’re preparing to deliver high-impact digital products that make a difference.",
      "Work with us, and you'll find a dedicated team ready to bring your ideas to life with full passion and commitment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We haven't worked with real-world paid clients yet, but our team has built multiple demo projects and complete web solutions. We are fully committed and ready to work with new clients to prove our capabilities.",
    name: "Muhammad Eshareeb",
    designation: "CEO & Founder",
    company: "MER Tech Solution",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    testimonial:
      "MER Tech Solution is in its early phase, but our team has experience in design, development, digital marketing, and AI chatbot integration. We deeply value the trust of every new client.",
    name: "Zubair Ahmed",
    designation: "Team Member",
    company: "MER Tech Solution",
    image:
      "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    testimonial:
      "We don't believe in adding fake feedback. We aim to include only real testimonials from our satisfied clients in the future. You can be the first to experience and support our growing mission.",
    name: "Hammad Saeed",
    designation: "UI/UX Designer",
    company: "MER Tech Solution",
    image:
      "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const projects = [
  {
    name: "GareXpert",
    description:
      "Web-based platform that enables users to browse, purchase, and manage auto parts from various suppliers, ensuring a seamless and reliable shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "EmailJS",
        color: "-text-gradient",
      },
    ],
    image: project2,
  },
  {
    name: "TekiskyMart",
    description:
      "An eCommerce platform offering a seamless shopping experience with a wide range of products, secure payments, and fast delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "taildwind",
        color: "orange-text-gradient",
      },
    ],
    image: project1,
  },
  {
    name: "Softcadia",
    description:
      "A job portal connecting job seekers with employers, offering seamless job search, application tracking, and recruitment solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
  },
];


export { services, technologies, experiences, testimonials, projects };
