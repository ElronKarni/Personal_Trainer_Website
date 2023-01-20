import axios from "axios";

export default async function OptionsAndProgramsProps() {
  const options = await axios
    .get("https://lior-malul-trainer.vercel.app/api/options")
    .then((res) => res.data);

  const programs = await axios
    .get("https://lior-malul-trainer.vercel.app/api/programs")
    .then((res) => res.data);

  return {
    props: {
      options,
      programs,
    },
  };
}
