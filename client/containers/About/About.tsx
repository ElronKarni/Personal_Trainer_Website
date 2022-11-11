import classes from "./About.module.scss";
import { images } from "../../constants/index";
import profile from "../../public/assets/profile.png";
import Image from "next/image";

const About = () => {
  return (
    <article className={classes.article}>
      <Image priority src={profile} className={classes.image} alt="profile" />
      <h1 className={classes.header}>מאמנת אישית</h1>
    </article>
  );
};

export default About;
