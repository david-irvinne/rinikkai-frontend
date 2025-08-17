import Button from "./Button";
import JLPT2025 from "../../assets/img/jlpt2025_1.jpeg"
import MabarKaruta from "../../assets/img/karuta.png"
import Shokujikai from "../../assets/img/shokujikai1.jpeg"

const Events = () => {
  return ( <> 

    <div className="h-[32rem] border-1 rounded-[12px]  px-[1.2rem] bg-gradient-to-r from-[#4E87CE] to-[#F1F2F3]"> 
      
      <div className="py-[1rem]">

        <Button title="Events" color="bg-slate-100" />
      </div>

      <div className="h-[80%]  ">
        <div className=" grid grid-cols-2  gap-x-[1rem] h-full ">
          
          <div className="grid grid-rows-2 gap-y-[1rem] h-full ">
            <div className="relative bg-red-100 h-full rounded-[12px] overflow-hidden">
              <img 
                src={MabarKaruta}
                className="absolute  w-full h-full object-cover" 
                alt="Mabar Karuta"
              />
            </div>
            <div className="relative bg-red-100 h-full rounded-[12px] overflow-hidden">
              <img 
                src={Shokujikai}
                className="absolute  w-full h-full object-cover " 
                alt="Mabar Karuta"
              />
            </div>
          </div>

          <div className=" overflow-hidden rounded-[12px]">
            <img src={JLPT2025}  className="h-full w-full object-cover "/>
          </div>

        </div>
      </div>


    </div>
  </>
  );
}
export default Events;
