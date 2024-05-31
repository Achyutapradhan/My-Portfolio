/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Front-End Dev",
    description: "HTML, CSS, JAVA SCRIPT, REACT.JS ."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Back-End Dev",
    description: "NODE.JS , EXPRESS.JS, MONGODB."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Java & Oops",
    description: "Building Robust Solutions with OOP Excellence."
  },
  {
    icon: "/images/icon-design.svg",
    title: "Core Subjects",
    description: "OS, DBMS, CN, CLOUD, SDLC."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      Hello I'm Achyuta Pradhan, a passionate MCA graduate from KIIT University, 
      from Cuttack (Silver city) of Odisha.
      </p>

      <p>
      I know Java, Oops, Frontend development, Backend development, Database and Cloud Technologies.
      </p>
      <p>
       Developed these skills through hands-on experience, having built multiple projects that showcase my proficiency in the MERN stack. From e-commerce platforms to social networking applications.
      </p>
      <p>
      🌟 Passionate about pushing the boundaries to deliver high-quality results. I'm constantly exploring new technologies and best practices to stay ahead of the curve.I'm always excited to collaborate on new projects and contribute my expertise to meaningful ventures. If you're looking for a skilled MERN stack developer who is committed to excellence, I'd love to hear from you!
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i know</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Achievements</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">My Skills</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/java.webp" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/javascript.avif" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/reactjs.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/nodejs.jpg" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/SQL.avif" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/AWS.webp"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About