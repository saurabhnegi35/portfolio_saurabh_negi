const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Visions", imgPath: "/images/visions.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/clean-code.png",
    title: "Clean & Scalable Code",
    desc: "Writing modular, maintainable code across frontend and backend to ensure long-term scalability.",
  },
  {
    imgPath: "/images/system-design.png",
    title: "System Design Thinking",
    desc: "Designing robust architectures with attention to performance, security, and scalability.",
  },
  {
    imgPath: "/images/communication.png",
    title: "Clear Communication",
    desc: "Translating complex tech into clear ideas — great for team collaboration and client updates.",
  },
  {
    imgPath: "/images/deadline.png",
    title: "On-Time Delivery",
    desc: "Reliable execution with a strong focus on hitting deadlines without compromising quality.",
  },
  {
    imgPath: "/images/idea.png",
    title: "Problem Solving & Debugging",
    desc: "Quickly identifying and fixing issues to keep projects moving smoothly.",
  },
  {
    imgPath: "/images/fullstack.png",
    title: "Full-Stack Expertise",
    desc: "Building seamless experiences from database to UI — using React, Node.js, MongoDB, and more.",
  },
];

const expCards = [
  {
    review:
      "Saurabh played a crucial role in strengthening our network infrastructure and improving overall security. His attention to detail and ability to respond to threats in real-time made a lasting impact.",
    imgPath: "/images/hitachi.png",
    logoPath: "/images/hitachi_logo.webp",
    title: "Network Security Engineer",
    date: "January 2022 – July 2022",
    company: "Hitachi Systems India",
    responsibilities: [
      "Managed and monitored network security systems, firewalls, and threat detection tools.",
      "Implemented security protocols to safeguard critical enterprise infrastructure.",
      "Collaborated with the cybersecurity team to respond to and mitigate threats.",
    ],
  },
  {
    review:
      "As a Teaching Assistant, Saurabh was incredibly supportive and knowledgeable. Students consistently appreciated his clarity in explaining complex full stack concepts.",
    imgPath: "/images/logo-coding-ninjas.svg",
    logoPath: "/images/coding-ninjas-logo.png",
    title: "Full Stack Development – Teaching Assistant",
    date: "January 2023 – May 2023",
    company: "Coding Ninjas",
    responsibilities: [
      "Guided students through full stack development concepts including MERN stack.",
      "Assisted in debugging code and providing solutions during live sessions.",
      "Reviewed projects and ensured students followed best coding practices.",
    ],
  },
  {
    review:
      "Saurabh was an integral part of our dev team. His skills in both frontend and backend allowed us to ship scalable web solutions quickly and efficiently.",
    imgPath: "",
    logoPath: "/images/gurucool-logo.png",
    title: "Full Stack Developer",
    date: "May 2023 – January 2024",
    company: "Drall and Dholiya Pvt Ltd",
    responsibilities: [
      "Developed and deployed responsive web applications using the MERN stack.",
      "Worked closely with UI/UX teams to implement pixel-perfect interfaces.",
      "Integrated third-party APIs and optimized backend logic for performance.",
    ],
  },
  {
    review:
      "As a freelancer, Saurabh has delivered top-notch solutions for various clients. His ability to understand client needs and turn them into real products is unmatched.",
    imgPath: "",
    logoPath: "/images/freelance.png",
    title: "Freelance Full Stack Developer",
    date: "March 2024 – Present",
    company: "Freelance",
    responsibilities: [
      "Built full stack solutions for multiple clients in diverse industries.",
      "Handled end-to-end development, from requirements gathering to deployment.",
      "Implemented secure authentication systems, dashboards, and custom APIs.",
    ],
  },
];

const techStackImgs = [
  {
    name: "Full Stack MERN Developer",
    imgPath: "/images/MERN-logo.png",
  },
  {
    name: "RESTful API Architect",
    imgPath: "/images/rest-api-logo.png",
  },
  {
    name: "Socket.IO & Real-time Apps",
    imgPath: "/images/socket-io-logo.png",
  },
  {
    name: "Authentication & Security",
    imgPath: "/images/lock.png",
  },
];

const techStackIcons = [
  {
    name: "Frontend Engineer (React)",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Engineer (Node.js)",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },

  {
    name: "3D Developer (Three.js)",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Version Control (Git)",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export {
  words,
  counterItems,
  navLinks,
  logoIconsList,
  abilities,
  expCards,
  techStackImgs,
  techStackIcons,
};
