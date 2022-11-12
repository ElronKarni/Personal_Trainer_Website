import { useQuery } from "@tanstack/react-query";
import classes from "./Options.module.scss";
import MotionWrap from "../../wrapper/MotionWrap";
import OptionCard from "../../components/UI/OptionCard/OptionCard";
import axios from "axios";

const Options = () => {
  const { data, isLoading, isError } = useQuery(["optionsData"], async () => {
    return await axios
      .get("https://personal-trainer-website.vercel.app/api/options")
      .then((res) => res.data);
  });

  if (isLoading) {
    return <h1>טוען...</h1>;
  }

  if (isError) {
    return <h1>סליחה יש בעיה בבקשה תרענן את הדף</h1>;
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
