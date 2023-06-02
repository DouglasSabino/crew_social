import { ImMenu } from "react-icons/im";

function Header({ user, toggleMenu }) {
    return (
    <div className="h-20 w-full bg-[#13183B] 
    text-4xl text-white flex justify-between px-5 py-5 
    rounded-b-lg shadow-lg border border-black
    shadow-white"><div className="text-2xl pt-1">{`Hi ${user}`}</div><ImMenu onClick={toggleMenu} /></div>
    );
}

export default Header;