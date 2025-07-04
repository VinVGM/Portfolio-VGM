export const myProjects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A sleek and responsive portfolio website built using modern frontend tools to showcase projects and skills.",
    subDescription: [
      "Developed using React and Vite for fast and modular component-based architecture.",
      "Styled with Tailwind CSS, integrating Magic UI and Aceternity UI for beautiful animations and UI components.",
      "Used EmailJS for enabling contact form submissions without a backend.",
      "Deployed and optimized for performance across devices and screen sizes.",
    ],
    href: "", // Add your live portfolio URL if available
    logo: "",
    image: "/images/portfolio.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/images/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/images/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/images/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/images/assets/logos/javascript.svg",
      },
      {
        id: 5,
        name: "Magic UI",
        path: "/images/assets/logos/magiui.png",
      },
      {
        id: 6,
        name: "Aceternity UI",
        path: "/images/assets/logos/ace.png",
      },
      {
        id: 7,
        name: "EmailJS",
        path: "/images/assets/logos/emaljs.png",
      },
    ],
  },
  {
    id: 2,
    title: "Snake Game on 8051 and Arduino",
    description:
      "Implemented the classic Snake Game using an 8051 microcontroller and later migrated it to Arduino after hardware failure.",
    subDescription: [
        "Used an 8x8 LED matrix to render the snake and a 16x2 LCD to display the score.",
        "Implemented basic movement logic, collision detection, and scoring using embedded C.",
        "Fried the 8051 board during debugging and ported the entire game logic to Arduino successfully.",
        "Improved game control responsiveness and debugging capabilities using Arduino libraries.",
        "<a href='https://www.youtube.com/watch?v=MIV8ZxHaUl8&t=402s' target='_blank' rel='noopener noreferrer' class='text-blue-500 underline'>Watch Demo Video</a>",
      ],


    href: "",
    logo: "",
    image: "/images/8051.png", // Update with actual image if available
    tags: [
  {
    id: 1,
    name: "8051 + Keil IDE",
    path: "/images/assets/logos/keil.svg", // This image now includes Keil IDE
  },
  {
    id: 2,
    name: "Arduino",
    path: "/images/assets/logos/Arduino.svg",
  },
  {
    id: 3,
    name: "Embedded C",
    path: "/images/assets/logos/embC.svg",
  },
  
],

  },
  {
    id: 3,
    title: "College Course Recommendation System",
    description:
      "A Streamlit-based application that recommends engineering courses based on subject keywords.",
    subDescription: [
      "Developed a Streamlit web app to suggest online courses relevant to selected engineering subjects.",
      "Used KeyBert to extract keywords from subject names and recommend relevant online resources.",
      "Enabled students to submit supplementary materials like notes and links.",
      "Integrated NeatText for cleaning and preprocessing subject descriptions.",
    ],
    href: "",
    logo: "",
    image: "/images/clg-proj.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/images/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Streamlit",
        path: "/images/assets/logos/Streamlit.svg",
      },
      {
        id: 3,
        name: "KeyBert",
        path: "/images/assets/logos/gen.svg",
      },
      {
        id: 4,
        name: "NeatText",
        path: "/images/assets/logos/gen.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Face Recognition Attendance System",
    description:
      "A face recognition-based attendance tracking system built with Streamlit and OpenCV.",
    subDescription: [
      "Developed a facial recognition system using OpenCV to automate classroom attendance.",
      "Registered student faces at semester start and recognized them live using webcam feed.",
      "Automatically logged attendance with timestamps in a spreadsheet.",
      "Designed a simple and intuitive frontend using Streamlit for faculty use.",
    ],
    href: "",
    logo: "",
    image: "/images/clg-proj.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/images/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Streamlit",
        path: "/images/assets/logos/Streamlit.svg",
      },
      {
        id: 3,
        name: "OpenCV",
        path: "/images/assets/logos/OpenCV.svg",
      },
    ],
  },
];
