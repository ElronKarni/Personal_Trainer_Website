import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { images } from "../../constants/index";
import AboutCard from "../../components/UI/AboutCard/AboutCard";

import classes from "./About.module.scss";

const About = () => {
  return (
    <section className={classes.section}>
      <div className={classes.images_div}>
        <Zoom scale={1.4}>
          <Image src={images.profile1} alt="missing" />
          <Image src={images.profile2} alt="missing" />
          <Image src={images.profile3} alt="missing" />
          <Image src={images.profile4} alt="missing" />
          <Image src={images.profile5} alt="missing" />
          <Image src={images.profile6} alt="missing" />
          <Image src={images.profile7} alt="missing" />
          <Image src={images.profile8} alt="missing" />
          <Image src={images.profile9} width={700} height={650} alt="missing" />
        </Zoom>
      </div>
      <div className={classes.aboutCard_div}>
        <AboutCard />
      </div>
    </section>
  );
};

export default About;
