import bannerImg from "../../assets/img/DIKE.jpg"
import Countdown from "./Countdown.tsx"

const Banner = () => {

  return (
    <>
      <div className='bg-red-500 h-[32rem] rounded-[12px] overflow-hidden relative flex items-center'>
        <img src={bannerImg} className="w-full h-full absolute "/>

        <div className="absolute pl-[1.5rem] ">
          <Countdown />
        </div>
      </div>
      

    </>
  )
}

export default Banner
