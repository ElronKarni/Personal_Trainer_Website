import classes from "./About.module.scss";
// import profile from "../../../public/assets/profile.png";
// import profile2 from "../../../public/assets/profile2.jpg";
import Image from "next/image";

const About = () => {
  return (
    <article className={classes.article}>
      <div className={classes.info}>
        <h1 className={classes.h1}>ליאור מלול</h1>
        <h2 className={classes.h2}>מאמנת אישית</h2>
        <h1 className={classes.p}>
          מה אם יכולתם ללמוד איך לפתח מתאמנים ואת עצמכם בחדר כושר, לעזור
          לספורטאים להשיג את המטרות שלהם ואפילו להרוויח מזה כסף! קורס מדריכי חדר
          כושר של המכללה הישראלית לספורט ייתן לכם את כל הכלים שאתם צריכים כדי
          להיות מקצוענים בתחום!
        </h1>
      </div>

      {/* <Image priority src={profile} className={classes.image} alt="profile" />
      <Image priority src={profile2} className={classes.image} alt="profile" /> */}
      {/* <h1 className={classes.header}>מאמנת אישית</h1> */}
    </article>
  );
};

export default About;
