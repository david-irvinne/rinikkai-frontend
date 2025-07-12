import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-600 text-white px-[1rem] py-[0.5rem] rounded-lg shadow-xl/40 mx-auto mt-4 z-10">

      {/* logo */}
      <div className="font-bold text-xl mr-[8rem]">rinikkai</div>

      {/* Nav links */}
      <div className="flex gap-6 items-center text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/events" className="hover:underline">Events</Link>
        <Link to="/about" className="hover:underline">About Us</Link>


        <Link
          to="/join"
          className="bg-blue-500 hover:bg-blue-500 text-white font-semibold px-4 py-1 rounded"
        >
          Join Us
        </Link>
      </div>


    </div>
  );
};

export default Navbar;
