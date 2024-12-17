import Products from "../Components/Products"
import Searchbar from "../Components/Searchbar"
// import { products } from "../assets/productsinfo"
import { FilterProvider } from "../Filtercontext";
// import { useState } from "react";
function Homepage() {

    // const uniqueCategories = [...new Set(products.map(product => product.category))];

    // const [sliderValue, setSliderValue] = useState(300);
    // const [productsrender,setProducts] = useState(products);
    // const [selectedCategories, setSelectedCategories] = useState([]);

    // const handleSliderChange = (event) => {
    //     setSliderValue(event.target.value);
    // };

    // const handleProductRange = () => {
    //     const filteredProducts = products.filter(product => 
    //         product.price <= sliderValue && 
    //         (selectedCategories.length === 0 || selectedCategories.includes(product.category))
    //     );
    //     setProducts(filteredProducts);
    // };

    // const handleCheckboxChange = (event) => {
    //     const { value, checked } = event.target;

    //     setSelectedCategories(prevCategories => {
    //         const newCategories = checked 
    //             ? [...prevCategories, value] 
    //             : prevCategories.filter(category => category !== value);
            

    //         const filteredProducts = products.filter(product => 
    //             product.price <= sliderValue && 
    //             (newCategories.length === 0 || newCategories.includes(product.category))
    //         );
            
    //         setProducts(filteredProducts);
    //         return newCategories; 
    //     });
        
    // };
    
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
