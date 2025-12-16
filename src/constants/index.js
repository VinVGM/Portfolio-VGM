export const myProjects = [
  {
    id: 0,
    title: "Airline-Ops CRUD Portal",
    description:
      "A full-stack Next.js dashboard to manage data for flights, crews, aircraft, airports and flight schedules of airlines.",
    subDescription: [
      "Implemented end-to-end CRUD with a dashboard UI, server-side pagination and search for scalability.",
      "Optimized PostgreSQL queries (via Supabase) for fast data retrieval and manipulation across large datasets.",
      "Secured user access with Supabase Auth and middleware-protected routes for authenticated sessions.",
      "Technologies Used: Next.js, React, TypeScript, Tailwind CSS, Supabase",
    ],
    href: "https://github.com/VinVGM/Airline-Crew-and-Flight-Logistics-Database-System", // Update with live link if available
    logo: "",
    image: "/images/airline.png", // Update with actual screenshot
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/images/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/images/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/images/assets/logos/typescript.svg",
      },
      {
        id: 4,
        name: "Tailwind CSS",
        path: "/images/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Supabase",
        path: "/images/assets/logos/supabase.svg",
      },
    ],
  },
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
    href: "https://github.com/VinVGM/Quiz-Maker-GenAI", // Add live link if available
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
    href: "https://github.com/VinVGM/College-Course-Recommendation-System",
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
    title: "Expense Tracker",
    description:
      "A full-stack web application for managing and tracking personal expenses with secure authentication and real-time updates.",
    subDescription: [
      "Enables users to add, edit, and delete expenses, categorizing them for better financial organization and insights.",
      "Features user authentication and authorization, ensuring that each user's data is private and securely stored.",
      "Offers a responsive ReactJS interface with instant updates and visual feedback as expenses are managed.",
      "Integrates with MongoDB for persistent data storage and provides RESTful APIs via an Express.js backend.",
      "Technologies Used: ReactJS, Node.js, Express.js, MongoDB, JWT Authentication",
    ],
    href: "https://github.com/VinVGM/Expenses-Tracker", // Add live link if available
    logo: "",
    image: "/images/Expenses.png", // Update with actual image path
    tags: [
      {
        id: 1,
        name: "React",
        path: "/images/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/images/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/images/assets/logos/Express.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/images/assets/logos/MongoDB.svg",
      },
      {
        id: 5,
        name: "JWT",
        path: "/images/assets/logos/jwt.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description:
      "A sleek and responsive portfolio website built using modern frontend tools to showcase projects and skills.",
    subDescription: [
      "Developed using React and Vite for fast and modular component-based architecture.",
      "Styled with Tailwind CSS, integrating Magic UI and Aceternity UI for beautiful animations and UI components.",
      "Used EmailJS for enabling contact form submissions without a backend.",
      "Deployed and optimized for performance across devices and screen sizes.",
    ],
    href: "https://github.com/VinVGM/Portfolio-VGM", // Add your live portfolio URL if available
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
    id: 6,
    title: "Face Recognition Attendance System",
    description:
      "A face recognition-based attendance tracking system built with Streamlit and OpenCV.",
    subDescription: [
      "Developed a facial recognition system using OpenCV to automate classroom attendance.",
      "Registered student faces at semester start and recognized them live using webcam feed.",
      "Automatically logged attendance with timestamps in a spreadsheet.",
      "Designed a simple and intuitive frontend using Streamlit for faculty use.",
    ],
    href: "https://github.com/VinVGM/Face-Recognition-Attendance-System",
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
