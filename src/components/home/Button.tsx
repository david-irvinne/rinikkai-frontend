
const Button = ({title = "title", color = "bg-slate-100"}) => {

  return (
    <>
      <div className={`border-1 rounded-[12px] py-[0.5rem] px-[1rem]  w-[10rem] ${color}`}> 
        <div className="text-center"> 
          {title}
        </div>
      </div>
    </>

)}
export default Button;
