import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




function Cart() {


    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);




    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);


    return (
        <div className=" flex justify-center">

            {
                cart && cart.length > 0 ? (<div className="flex flex-col-rev"><div>

                    {
                        cart.map((item, index) => {
                            return <CartItem key={item.id} item={item} itemIndex={index} />
                        })
                    }

                </div>
                    <div className="flex flex-col h-[300px] w-[350px] m-5 p-5 border-green-600 border-2">
                        <div className="  p-5">
                            <div className="text-left font-bold text-sm">
                                YOUR CART
                            </div>
                            <div className="text-left font-bold text-xl text-green-600">
                                SUMMARY
                            </div>
                            <div>
                                <p className=" text-left text-sm  "><span >Total Item:{cart.length}</span></p>
                            </div>


                        </div>


                        <div class="">
                            <p className="text-sm text-left font-bold p-5 ">Total Amount:${totalAmount}</p>
                            <button className="bg-green-600 w-[275px] p-2 font-bold text-white rounded-md ">Check Out</button>

                        </div>




                    </div>
                </div>)


                    //div close



                    : (
                        <div>

                            <h2>Empty</h2>
                            <Link to={"/"} ><button>shop Now</button>
                            </Link>
                        </div>
                    )
            }
        </div>
    );
}
export default Cart;