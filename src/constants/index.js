export const myProjects = [
  {
    id: 1,
    title: "Quiz Master",
    description:
      "A full-stack web application that generates multiple choice quizzes from user uploaded PDF notes with the help of AI.",
    subDescription: [
      "Allows users to upload PDF notes and automatically creates contextually relevant MCQ questions.",
      "Uses Retrieval Augmented Generation (RAG) and prompt engineering to ensure high-quality, structured question output.",
      "Provides a modern ReactJS based UI with real-time progress updates about the quiz generation.",
      "Implements live score tracking and provides immediate feedback to users on correct or incorrect answer selections, enhancing engagement and learning outcomes.",
      "Technologies Used: ReactJS, Tailwind CSS, Vite, Python, Flask, IBM Cloud",
    ],
    href: "", // Add live link if available
    logo: "",
    image: "/images/quiz.png", // Add correct image path
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
        name: "Python",
        path: "/images/assets/logos/python.svg",
      },
      {
        id: 5,
        name: "Flask",
        path: "/images/assets/logos/Flask.svg",
      },
      {
        id: 6,
        name: "IBM Cloud",
        path: "/images/assets/logos/ibm.webp",
      },
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    image: "/images/face_reg.PNG",
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
