import { HiOutlineShoppingCart } from "react-icons/hi";
import {NavLink} from "react-router-dom";
import{useSelector}  from "react-redux";

const Navbar=()=>{
  
    const{cart}=useSelector((state) => state);
   


    return (<div>
              <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to={"/"}>
        <div className="ml-5">

            <img className="w-24 " src="https://logos-world.net/wp-content/uploads/2021/02/Simple-Emblem.png" alt="here you got a e" />
            
            </div>
        </NavLink>
        <h1 className="font-bold text-xl text-slate-100">ShopCart</h1>
         <div className=" flex item-center font-medium text-slate-100 mr-5 space-x-6">

            <NavLink to={"/"}>
            
            <p>Home</p>
            </NavLink>

            <div className="flex flex-col relative ">
             {

                cart.length>0 ? (<div className=' bg-green-400 absolute -top-1 -right-2 rounded-full text-xs flex justify-center items-center animate-bounce h-5 w-5'>{cart.length}</div>):(<div></div>)
             }
     
            <NavLink  to={"/Cart"}>
              
            <HiOutlineShoppingCart className="text-2xl" />
            </NavLink>
            </div>
          
        
</div>
         </nav>

    </div>
    )
};
export default Navbar;