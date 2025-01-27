import { useEffect, useState } from "react";
export function useOnlineStatus(key){
const [state,setState]= useState (key);
useEffect(() =>{
function handOnline (){
setState(true);    
} 
function handOffline(){
setState(false);    
}
window.addEventListener("online,handleOnline");
window.addEventListener("offline,handleOffline");
return () => {
window.addEventListener("online,handleOnline");
window.addEventListener("offline.handleOffline");    
};   
},[]);
return state;  
}