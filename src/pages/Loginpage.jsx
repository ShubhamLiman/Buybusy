import { Link } from "react-router"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import db from "../firestoreInitialsze";
import { collection,query,where,getDocs } from "firebase/firestore";
import { GetUserInfo } from "../userContext";
import { GetCart } from "../CartContext";
function Loginpage() {
  const navigate = useNavigate()
  const{setUser} = GetUserInfo()
  const{setCart} = GetCart();
  let email = useRef();
  let password = useRef();
  
  const users = collection(db,"users");

  async function handleLogin() {
      const q = query(users, where("email", "==", email.current.value), where("password", "==", password.current.value));
      let user = {}
      try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          console.log("No matching documents.");
          navigate("/");
        } else {
          querySnapshot.forEach((doc) => {
            user = {id: doc.id, ...doc.data()}
            setUser(user)
            setCart(user.cart)
          });
          navigate("/");
        }
      } catch (err) {
        console.error(err);
        navigate("/");
      }
  }
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""autoComplete="email" ref={email}/>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" autoComplete="password" ref={password}/>
                      </div>
                      <div className="flex items-center justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                              </div>
                          </div>
                      </div>
                      <button type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-500 focus:ring-red-50" onClick={(e)=>{
                          e.preventDefault;
                          handleLogin()
                      }}>Sign in</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline  text-blue-600">Sign up</Link>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Loginpage
