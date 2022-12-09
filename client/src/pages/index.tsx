import axios from "axios";
import { About, Footer } from "../containers/index";
import { OptionCard, TrainingCard } from "../components/UI/index";
import Navbar from "../components/Navbar/Navbar";
import optionsClasses from "../containers/Options/Options.module.scss";
import programsClasses from "../containers/Programs/Programs.module.scss";
import { motion } from "framer-motion";

type Options = [
  {
    _id: string;
    title: string;
    description: string;
  }
];

type Programs = [
  {
    _id: string;
    image: string;
    title: string;
    description: string;
  }
];

const HomePage = (props: { options: Options; programs: Programs }) => {
  return (
    <>
      <Navbar />
      <About />
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.7 }}
        className={`app__flex`}
      >
        <div className={optionsClasses.options}>
          <div className={optionsClasses.programs_title}>
            <h1>מה אני מציעה</h1>
          </div>
          {props.options?.map(
            (option: { _id: string; title: string; description: string }) => (
              <OptionCard
                key={option._id}
                title={option.title}
                description={option.description}
              />
            )
          )}
        </div>

        <div className={programsClasses.programs}>
          <div className={programsClasses.programs_title}>
            <h1>תוכנית אימונים</h1>
          </div>
          <section className={programsClasses.all_cards}>
            {props.programs?.map(
              (program: {
                _id: string;
                image: string;
                title: string;
                description: string;
              }) => (
                <TrainingCard
                  key={program._id}
                  image={program.image}
                  title={program.title}
                  description={program.description}
                />
              )
            )}
          </section>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
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
