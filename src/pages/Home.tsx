import Banner from "../components/home/Banner.tsx";
import About from "../components/home/About.tsx";
import Events from "../components/home/Events.tsx";

function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-[2rem]">
      <Banner />
      <About />
      <Events />
      </div>
    </>
  );
}

export default Home;
