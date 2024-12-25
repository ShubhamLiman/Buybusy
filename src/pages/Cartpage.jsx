import { GetCart } from "../CartContext"

function Cartpage() {

  const { cart, setCart } = GetCart()
  
  return (
    <div className="container mx-auto my-8">
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Qty
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17
                        </th>
                        <td className="px-6 py-4">
                          <button className="flex items-center justify-center bg-gray-100 w-3.5 h-3.5">+</button>
                            <span className="px-2">1</span>
                          <button className="">-</button>
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    
                </tbody>
                <tfoot>
                    <tr className="font-semibold text-gray-400 uppercase bg-gray-700" >
                        <th scope="row" className="px-6 py-3 text-base">Total</th>
                        <td className="px-6 py-3">3</td>
                        <td className="px-6 py-3">21,000</td>
                    </tr>
                </tfoot>
            </table>
        </div>

    </div>
  )
}

export default Cartpage
