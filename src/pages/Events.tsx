import Button from "../components/home/Button"
import JLPT2025 from "../assets/img/jlpt2025_1.jpeg"
import JLPT2024 from "../assets/img/jlpt2024.jpeg"
import MabarKaruta from "../assets/img/karuta.png"
import Shokujikai from "../assets/img/shokujikai1.jpeg"

const Events = () => {
  return (
    <> 

    <div className="h-[64rem]  rounded-[12px]  px-[1.2rem]"> 
      
      <div className="py-[1rem]  flex justify-between ">
        <Button title=" <- Home" color="text-white bg-blue-500" shape="w-[10rem]" text="text-center"/>
      </div>

      <div className="h-[80%]">
        <div className=" grid grid-cols-2  gap-x-[1rem] h-full ">
          <div className="grid grid-rows-[1fr_2fr_2fr] gap-y-[1rem] h-full ">
            <div className="relative rounded-[12px] text-9xl text-center border-1">Events</div>
            <div className="relative bg-red-100 rounded-[12px] overflow-hidden group">
              <img 
                src={MabarKaruta}
                className="absolute  w-full h-full object-cover" 
                alt="Mabar Karuta"
              />
              <div className="absolute bottom-0 text-white ml-[1rem] mb-[1rem]
                transition-transform duration-300
                group-hover:-translate-y-[1rem]">
                <p className="font-bold text-lg">Mabar Karuta</p>
                <p>Kantin Bio-Geo FMIPA UGM</p>
              </div>
            </div>

            <div className="relative bg-red-100 rounded-[12px] overflow-hidden group">
              <img 
                src={Shokujikai}
                className="absolute  w-full h-full object-cover " 
                alt="Mabar Karuta"
              />

              <div className="absolute bottom-0 text-white ml-[1rem] mb-[1rem]
                transition-transform duration-300
                group-hover:-translate-y-[1rem]">
                <p className="font-bold text-lg">Shokujikai I</p>
                <p>Kantin Bio-Geo FMIPA UGM</p>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-[3fr_2fr] gap-y-[1rem] h-full ">
            <div className="overflow-hidden rounded-[12px] relative group">
              <img src={JLPT2025}  className="absolute h-full w-full object-cover "/>
              <div className="absolute bottom-0 text-white ml-[1rem] mb-[1rem]
                transition-transform duration-300
                group-hover:-translate-y-[1rem]">
                <p className="font-bold text-lg">JLPT Juli 2025</p>
                <p>Lokasi nya apa cik, lupa</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[12px] relative group">
              <img src={JLPT2024}  className="absolute h-full w-full object-cover "/>
              <div className="absolute bottom-0 text-white ml-[1rem] mb-[1rem]
                transition-transform duration-300
                group-hover:-translate-y-[1rem]">
                <p className="font-bold text-lg">JLPT Desember 2024</p>
                <p>Lokasi nya apa cik, lupa</p>
              </div>
            </div>
          </div>
          

        </div>
      </div>


    </div>
  </>
  
  )
}

export default Events