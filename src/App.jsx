import { useEffect } from "react";
import AppBanner from "./Components/AppBanner";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import WhereToBuy from "./Components/WhereToBuy";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    });
  }, []);
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </main>
  );
};

export default App;
