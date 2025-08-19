import Banner from "../components/home/Banner.tsx";
import About from "../components/home/About.tsx";
import Events from "../components/home/Events.tsx";
import FaqSection from "../components/home/Faq.tsx";

function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-[2rem]">
      <Banner />
      <About />
      <Events />
      <FaqSection />
      </div>
    </>
  );
}

export default Home;
