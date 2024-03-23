import React from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner"
import { useState } from "react";
import Product from "../components/Product";

function Home(){
 

    const API_URL="https://fakestoreapi.com/products";
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    
    async function fetchProductData(){
        setLoading(true);

        try{
             const result=await fetch(API_URL);
             const data=await result.json();
                 setPosts(data);
        }
        catch(error){
            console.log(error);
            setPosts([]);

        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[])

    return (
 <div className='flex mx-auto'>


    {

     loading ? <Spinner/>:
     posts.length>0 ? (
   <div className='  grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
   max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vt] item-center'>
     {
    posts.map((post)=>(
        <Product key={post.id} post={post}/>
    ))
          }
   </div>

     ):(
    <div>
        <p>No Data Found</p>
    </div>
     )
    }
 </div>


    );
}
export default Home;