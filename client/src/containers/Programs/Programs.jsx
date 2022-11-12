import { useQuery } from "@tanstack/react-query";
import classes from "./Programs.module.scss";
import TrainingCard from "../../components/UI/TrainingCard/TrainingCard";
import MotionWrap from "../../wrapper/MotionWrap";
import axios from "axios";
import trx from "../../../public/assets/trx.png";
import kickbox from "../../../public/assets/kickbox.png";
import { useState, useEffect } from "react";

const About = () => {
  const [programs, setPrograms] = useState([]);

  const { data, isLoading, isError } = useQuery(["programsData"], async () => {
    return await axios
      .get("https://personal-trainer-website.vercel.app/api/programs")
      .then((res) => res.data);
  });

  if (isLoading) {
    return <h1>טוען...</h1>;
  }

  if (isError) {
    return <h1>סליחה יש בעיה בבקשה תרענן את הדף</h1>;
  }

  // const fetching = async () => {
  //   console.log('dada')
  //   const res = await axios.get(
  //     "https://personal-trainer-website.vercel.app/api/programs"
  //   );
  //   const programs = res.data;
  //   setPrograms(programs);
  // };

  // useEffect(() => {
  //   fetching;
  // }, [fetch]);

  return (
    <div className={classes.programs}>
      <div className={classes.programs_title}>
        <h1>תוכנית אימונים</h1>
      </div>
      <section className={classes.all_cards}>
        {data?.map((program) => (
          <TrainingCard
            key={program._id}
            image={program.image}
            title={program.title}
            description={program.description}
          />
        ))}
      </section>
    </div>
  );
};

export default MotionWrap(About);
