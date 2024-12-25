import { createContext } from "react";
import { useContext,useState } from "react";
import db from "../src/firestoreInitialsze"
import { doc,updateDoc,getDoc} from "firebase/firestore";

const cartContext = createContext();

export function GetCart(){
  const value = useContext(cartContext);
  return value;
}

function CartProvider({children}) {
  const [cart,setCart] = useState([])
  async function handleAddtoCart(item,id){

      try{

        const userRef = doc(db, "users", id);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const currentCart = userDoc.data().cart || [];
          const updatedCart = [...currentCart, item]; // Add the new item to the cart
          
          await updateDoc(userRef, {
            cart: updatedCart
          });
        } else {
          console.log("No such document!");
          alert("login to continue")
        }
      }catch(err){
        console.log(err)
        alert("login to continue")
      }
  }
    
  return (
    <cartContext.Provider value={{handleAddtoCart,cart}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
