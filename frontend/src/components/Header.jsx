import { ImMenu } from "react-icons/im";

function Header({ toggleMenu }) {
    return (
    <div className="h-20 w-full bg-[#13183B] 
    text-4xl text-white flex justify-end px-5 py-5 
    rounded-b-lg shadow-lg border border-black
    shadow-white"><ImMenu onClick={toggleMenu} /></div>
    );
}

export default Header;