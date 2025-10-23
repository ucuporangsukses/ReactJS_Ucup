import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigiate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigiate("/login");
    };

    return (
        <nav className="bg-neutral-900 text-white p-4 flex justify-between items-center">
            <h1 className="font-bold text-x1 cursor-pointer" onClick={() => navigiate}>
                FashCup Store
            </h1>
            <div className="flex gap-4">
                <button onClick={() => navigiate("/")}>Home</button>
                <button onClick={() => navigiate("/about")}>about</button>
                <button onClick={() => navigiate("/contact")}>Contact</button>
                <button onClick={() => navigiate("/cart")}>Cart</button>
                <button onClick={handleLogout} className="text-red-400">Logout</button>
            </div>
        </nav>
    )
}