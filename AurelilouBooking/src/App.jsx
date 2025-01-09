import { useState } from 'react'
import './App.css'
import Navbar from './Compoments/Navbar'
import Home from './Compoments/Home'
import Booking from './Compoments/Booking'
import tatoodos from '.././src/assets/img/romyy.jpg'
import { createBrowserRouter, Router , RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/aurelilou.ttt',
    element: <Home></Home>,
  },
  {
    path: '/booking',
    element: <Booking></Booking>,
  }
])

function App() {
  const [count, setCount] = useState(0)
  let pics = [1,1,1,1,1,1,1,1]

  return <RouterProvider router={router} > 

  
  
  </RouterProvider>
}

export default App




// <div className='flex bg-white flex-col  min-w-screen'>
//      <Navbar/>



//      <div className=' text-black flex flex-wrap justify-center items-center gap-5 overflow-x-hidden mt-40'>
//       {pics.map((element, index) => (
//         <img src={tatoodos} alt="tatoodos" className='w-[25rem] h-[30rem] object-cover' key={index}/>
//       ))}
//      </div>

//      <div className='flex justify-center items-center mt-5 w-full'><iframe width="87.2%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=41%20rue%20Sylvain%20Guyaux,%20La%20Louvi%C3%A8re%207110+(D%20o%20t%20s%20&amp;%20F%20l%20o%20w%20e%20r%20ssiness%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
     
//     </div>