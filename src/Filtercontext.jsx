import { createContext,useState,useContext } from "react";

import { products } from "./assets/productsinfo";


const filterContext = createContext();


export function GetFiltervalue(){
    const value = useContext(filterContext);
    return value;
};



export const FilterProvider = ({children}) => {
    
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    
    const [sliderValue, setSliderValue] = useState(300);
    const [productsrender,setProducts] = useState(products);
    const [selectedCategories, setSelectedCategories] = useState([]);


    const handleSliderChange = (event) => {
            setSliderValue(event.target.value);
        };
    
        const handleProductRange = () => {
            const filteredProducts = products.filter(product => 
                product.price <= sliderValue && 
                (selectedCategories.length === 0 || selectedCategories.includes(product.category))
            );
            setProducts(filteredProducts);
        };
    
        const handleCheckboxChange = (event) => {
            const { value, checked } = event.target;
    
            setSelectedCategories(prevCategories => {
                const newCategories = checked 
                    ? [...prevCategories, value] 
                    : prevCategories.filter(category => category !== value);
                
    
                const filteredProducts = products.filter(product => 
                    product.price <= sliderValue && 
                    (newCategories.length === 0 || newCategories.includes(product.category))
                );
                
                setProducts(filteredProducts);
                return newCategories; 
            });
            
        };

            const handleInputChange = (e) => {
                const value = e.target.value;

                if (value.trim() === "") {
                    setProducts(products); // Clear suggestions if input is empty
                } else {
                    const filteredSuggestions = products.filter((p) =>
                    p.product_name.toLowerCase().includes(value.toLowerCase())
                    );
                    setProducts(filteredSuggestions);
                }
            };
  return (
    <filterContext.Provider value={{
        uniqueCategories,
        sliderValue,
        setSliderValue,
        productsrender,
        setProducts,
        selectedCategories,
        setSelectedCategories,
        handleSliderChange,
        handleProductRange,
        handleCheckboxChange,
        handleInputChange
    }}>
        {children}
    </filterContext.Provider>
  )
}



