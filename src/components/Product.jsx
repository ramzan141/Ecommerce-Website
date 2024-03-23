import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast';
const Product=({post})=>{


const {cart}=useSelector((state)=>state);
const dispatch=useDispatch();
const addToCart=()=>{
    dispatch(add(post));
    toast.success("Added Successfuly!");
}

const removeToCart=()=>{
    dispatch(remove(post.id));
    toast.error("Remove Successfuly!");
}



    return(
        <div className='flex flex-col h-[400px] items-center  relative justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] garp-3 p-4 mt-10 ml-5 rounded-xl'>
         <div>

   <p className='text-gray-700 font-semibold text-lg text-center' >{post.title.split(" ").slice(0,3).join(" ")+"..."}</p>


         </div>

         <div>

<p className="w-40 text-gray-400 font-normal text-[10px] text-left  ">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>


      </div>
 
         <div  >
 <img src={post.image} className="max-h-[200px] w-[100%] hover:scale-110 transition duration-300 ease-in"></img>

         </div>


         <div className='flex justify-between  gap-12'>
            <div>
            <p className="text-green-500 text-xl ">${post.price} </p>
            </div>
           
          <div>
          {cart && cart.some((p) => p.id === post.id) ?
            (<button className="text-white bg-red-400 p-1  px-2 rounded-md text-center " onClick={removeToCart}>Remove</button>):(
                <button  className=' border text-gray-400 p-1 px-2 rounded-md text-center hover:bg-green-400 hover:text-white  ' onClick={addToCart}> Add item</button>
            )
        }
          </div>
          

         </div>

         

 
        
        </div>
    )

        }
export default Product;