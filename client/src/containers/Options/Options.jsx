import { useQuery } from "@tanstack/react-query";
import classes from "./Options.module.scss";
import MotionWrap from "../../wrapper/MotionWrap";
import OptionCard from "../../components/UI/OptionCard/OptionCard";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const Options = () => {
  // [Deploy fetching]
  const { data, isLoading, isError } = useQuery(["optionsData"], async () => {
    return await axios
      .get("https://lior-malul-trainer.vercel.app/api/options")
      .then((res) => res.data);
  });

  // [Localhost fetching]
  // const { data, isLoading, isError } = useQuery(["optionsData"], async () => {
  //   return await axios.get("/api/options").then((res) => res.data);
  // });

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
    <div className={classes.options}>
      <div className={classes.programs_title}>
        <h1>מה אני מציעה</h1>
      </div>
      {data?.map((option) => (
        <OptionCard
          key={option._id}
          title={option.title}
          description={option.description}
        />
      ))}
    </div>
  );
};

export default MotionWrap(Options);
