import { useQuery } from "@tanstack/react-query";
import classes from "./Programs.module.scss";
import TrainingCard from "../../components/UI/TrainingCard/TrainingCard";
import MotionWrap from "../../wrapper/MotionWrap";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import trx from "../../../public/assets/trx.png";
import kickbox from "../../../public/assets/kickbox.png";

const Programs = () => {
  // Deploy fetching
  const { data, isLoading, isError } = useQuery(["programsData"], async () => {
    if (location.hostname === "localhost") {
      return await axios.get("/api/programs").then((res) => res.data);
    } else {
      return await axios
        .get("https://lior-malul-trainer.vercel.app/api/programs")
        .then((res) => res.data);
    }
  });

  if (isLoading) {
    return (
      <Oval
        height="80"
        width="100"
        radius="8"
        color="pink"
        secondaryColor="black"
        ariaLabel="loading"
        wrapperClass={classes.spinner}
      />
    );
  }

  if (isError) {
    return <h1 className={classes.error}>סליחה יש בעיה בבקשה תרענן את הדף</h1>;
  }

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

export default MotionWrap(Programs);
