import {menu_Api} from "../utils/constants";
import {useState,useEffect} from "react";

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchit()
    },[]);

    console.log(resInfo)

    const fetchit =async()=>{
        const data=await fetch(menu_Api+resId);
        const json=await data.json();
        setResInfo(json.data);
    };
    return {resInfo};
};

export default useRestaurantMenu;