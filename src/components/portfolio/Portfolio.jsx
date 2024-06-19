import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "BookMyShow Movie Booking App - Full Stack",
    img: "/blog.png",
    link: "https://github.com/ajin597/movies",
    desc: `I have developed MovieTime, a movie booking project featuring both admin and user interfaces. The admin interface offers complete control over movies, users, and bookings, while the user interface enables users to sign up using their emails, with verification through Google Authentication OAuth 2.0. Users can view, search, and book movie tickets, with control limited to their respective bookings.`,
  },
  {
    id: 2,
    title: "Recipe app - Recipe shareing platform ",
    img: "/recipe.png",
    link: "https://github.com/ajin597/recipe",
    desc: `User developed a recipe sharing application using Angular, JavaScript, Tailwind CSS, SCSS, HTML, Cloudinary, Material UI, MySQL, Spring Boot, Java, JPA, and Spring Security. The project enables users to share and discover recipes, leveraging Cloudinary for image management, Material UI for UI components, and Spring Boot with Spring Security for backend services and authentication. `,
  },
  {
    id: 3,
    title: "Design Journey: Crafting My Portfolio with HTML, CSS, Bootstrap & JS",
    img: "/port.png",
    link: "https://port-alpha-livid.vercel.app/",
    desc: `Explore my journey through the realms of web design and development. Witness the seamless fusion of HTML, CSS, Bootstrap, and JavaScript as they converge to create a digital canvas that showcases my passion and skills. From concept to creation, each project tells a story of innovation and craftsmanship. Join me on this creative journey and discover the artistry behind every line of code. Let's connect and explore possibilities together.`
  },
  {
    id: 4,
    title: "Digital Calculator",
    img: "/calulator.png",
    link: "https://ajin597.github.io/calculator/",
    desc: `my digital animated calculator. Created using HTML, CSS, and JavaScript, this interactive tool blends functionality with visual appeal. Watch numbers dance and calculations come to life in real-time. Designed to enhance user experience, it showcases my proficiency in front-end development and creativity in user interface design. Explore the future of calculators with this dynamic web application.
        `,
  },
  {
    id: 5,
    title: "Medical Store Inventory Management - React.js",
    img: "/medical.jpg",
    link: "https://github.com/ajin597/medicine",
    desc: `Medical store management website  React!  This website includes user authentication and features such as add, update, delete, and search for medical store inventory. 

        Using React, I was able to design a user-friendly interface that allows store owners to easily manage their inventory. The user authentication feature ensures that only authorized personnel have access to sensitive information, providing an extra layer of security. 
        `,
  },
  {
    id: 6,
    title: "Medical Store Inventory Management - django",
    img: "/django.png",
    link: "https://ajoa.pythonanywhere.com",
    desc: `Medical store management website  Django!  This website includes user authentication and features such as add, update, delete, and search for medical store inventory. 

        Using django, I was able to design a user-friendly interface that allows store owners to easily manage their inventory. The user authentication feature ensures that only authorized personnel have access to sensitive information, providing an extra layer of security. 
        `,
  },
  {
    id: 7,
    title: "Dental Clinic App - React.js",
    img: "/portfolio-4.jpg",
    link: "https://github.com/ajin597/medicine",
    desc: `Dental Clinic
    CRUD APPLICATION MADE FOR MY DENTAL CLINIC. ENABLES DIGITIZED PATIENT DATA STORAGE AND MANAGEMENT. 
        `,
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="portfolio">
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
            </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
