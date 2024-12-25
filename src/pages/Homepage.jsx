import Products from "../Components/Products"
import Searchbar from "../Components/Searchbar"
// import { products } from "../assets/productsinfo"
import { FilterProvider } from "../Filtercontext";
// import { useState } from "react";
function Homepage() {

  
    
  return (
    <>
        
        <FilterProvider>
          <Searchbar/>
          <Products />
        </FilterProvider>
    </>
  )
}

export default Homepage
