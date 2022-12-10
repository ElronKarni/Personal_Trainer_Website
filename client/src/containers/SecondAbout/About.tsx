import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { images } from "../../constants/index";
import AboutCard from "../../components/UI/AboutCard/AboutCard";

import classes from "./About.module.scss";

const About = () => {
  return (
    <section
      className={classes.section}
      style={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          width: "700px",
          marginTop: "6rem",
          marginBottom: "1rem",
          marginRight: "5rem",
        }}
      >
        <Zoom scale={1.4}>
          <Image src={images.profile1} width={700} height={650} alt="missing" />
          <Image src={images.profile2} width={700} height={650} alt="missing" />
          <Image src={images.profile3} width={700} height={650} alt="missing" />
          <Image src={images.profile4} width={700} height={650} alt="missing" />
          <Image src={images.profile5} width={700} height={650} alt="missing" />
          <Image src={images.profile6} width={700} height={650} alt="missing" />
          <Image src={images.profile7} width={700} height={650} alt="missing" />
          <Image src={images.profile8} width={700} height={650} alt="missing" />
          <Image src={images.profile9} width={700} height={650} alt="missing" />
        </Zoom>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "600px",
          marginTop: "6rem",
          marginBottom: "1.2rem",
          marginRight: "10rem",
        }}
      >
        <AboutCard />
      </div>
    </section>
  );
};

export default About;
