import Banner from "../components/home/Banner.tsx";
import About from "../components/home/About.tsx";

function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-[2rem]">
      <Banner />
      <About />
      </div>
    </>
  );
}

export default Home;
