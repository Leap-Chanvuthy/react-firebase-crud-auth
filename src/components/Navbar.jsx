import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar bg-neutral items-center">
            <div className="flex-1">
                <div className="flex justify-between lg:gap-24 md:gap-16 font-bold text-gray-300">
                    <Link to="/">
                        <h3 className="px-4">Home</h3>
                    </Link>
                    <Link to="/your-books">
                        <h3 className="px-4">Your Books</h3>
                    </Link>
                    <Link to="/more">
                        <h3 className="px-4">More</h3>
                    </Link>
                </div>
            </div> 
            <div className="px-5">
                <h3><strong>Welcome , Leapchanvuthy@gmail.com</strong></h3>  
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;