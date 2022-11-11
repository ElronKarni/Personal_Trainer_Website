import { useQuery } from "@tanstack/react-query";
import classes from "./Options.module.scss";
import MotionWrap from "../../wrapper/MotionWrap";
import OptionCard from "../../components/UI/OptionCard/OptionCard";
import api from "../../api/options";

const Options = () => {
  const { data, isLoading, isError } = useQuery(["optionsData"], async () => {
    return await api.get().then((res) => res.data);
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
