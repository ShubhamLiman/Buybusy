// import PropTypes from 'prop-types';
import { GetFiltervalue } from "../Filtercontext";
import { GetCart } from "../CartContext";
import { GetUserInfo } from "../userContext";
// {uniqueCategories, productsrender, handleCheckboxChange, handleProductRange, handleSliderChange, sliderValue}
function Products() {
//    console.log(GetCart());
    const {user} = GetUserInfo();    
    const{handleAddtoCart}=GetCart();
    const {uniqueCategories, productsrender, handleCheckboxChange, handleProductRange, handleSliderChange, sliderValue} = GetFiltervalue();
    
  return (
    <>
        <div className="container flex mx-auto ">
            <div className="Filtercontainer w-1/5 my-8 relative">
                <div className="rangeContainer fixed top-60 left-20 right-0">
                    <h1 className="font-bold text-2xl">Price</h1>
                    <div className="slider-container flex">
                        <span className="slider-label" id="min-label">20</span>
                        <input
                            type="range" 
                            id="slider" 
                            min="20" 
                            max="300" 
                            step="10"
                            value={sliderValue}
                            onChange={() => {
                                handleSliderChange(event);
                                handleProductRange();
                            }} 
                        />
                        <span className="slider-label" id="max-label">300</span>
                    </div>
                    <h1 className="slider-value">
                        Price upto: {sliderValue}
                    </h1>
                </div>
                <div className="catagoryContain fixed top-80 left-20 right-0">
                    <h1 className="font-bold text-2xl">categories</h1>
                    <form>
                        {uniqueCategories.map((c, i) => {
                            return (
                                <div key={i}>
                                    <input type="checkbox" id={c} name={c} value={c} onChange={handleCheckboxChange} />
                                    <label htmlFor={c}>{c}</label>
                                </div>
                            )
                        })}
                    </form>
                </div>
            </div>
            <div className="Productscontainer grid grid-cols-3 gap-3 m-4">
                {
                    productsrender.map((p,i) => {
                        return(
                            <div key={i} className="w-full max-w-sm h-100 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="p-8 rounded-t-lg" src={p.image} alt="product image" />
                                </a>
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{p.product_name}</h5>
                                    
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${p.price}</span>
                                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{
                                            handleAddtoCart(p,user.id);
                                        }}>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Products
