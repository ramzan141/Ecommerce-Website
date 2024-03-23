import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {remove } from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast';
import { HiArchiveBoxXMark } from "react-icons/hi2";


function CartItem({item,itemIndex}){

    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();
   
    
    const removeFromCart=()=>{
        dispatch(remove(item .id));
        toast.error("Remove Successfuly!");
    }


    return(
        <div className="">
            <div className="flex flex-row max-w-[450px] border-b-2 m-3  max-h-[400px] p-4"> 
         <div>
        <img  className='max-h-[400px] 'src={item.image}></img>
            
         </div>


         <div className="flex flex-col self-start">
            <h1 className='text-gray-700 font-semibold text-lg text-center p-1 ' >{item.title.split(" ").slice(0,6).join(" ")+"..."}</h1>
            
            
            
            <h1 className='text-sm text-center p-1 text-gray-400'>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
            <div className="flex justify-between m-5 ">
               
               
                <div>


                <p className="text-green-500 font-bold"> ${item.price}</p>
                </div>
               
                <div onClick={removeFromCart}>
         <HiArchiveBoxXMark  className=" bg-red-300 rounded-full text-xl m-2 p-1 cursor-pointer"/>
         </div>
            </div>
         
         
         </div >
            </div>
        </div>
    );
}
export default CartItem;