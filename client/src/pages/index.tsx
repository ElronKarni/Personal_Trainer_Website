import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../components/Navbar/Navbar";
import About from "../containers/About/About";
import Options from "../containers/Options/Options";
import Programs from "../containers/Programs/Programs";
import Footer from "../containers/Footer/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const HomePage = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <About />
        <Options />
        <Programs />
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default HomePage;
