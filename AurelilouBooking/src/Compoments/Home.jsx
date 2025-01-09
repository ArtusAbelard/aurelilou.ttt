import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import tatoodos from '../assets/img/romyy.jpg'
import baniere from '../assets/img/Aurelilouart-baniere.jpg'

let pics = [1,1,1,1,1,1,1,1]    

export default function Home(props) {
    

    return (
        <div className='flex bg-white flex-col items-center min-w-screen '>
             <Navbar/>
        
             <div className='w-[70rem] h-[40rem]  mt-40 '> 
                <img src={baniere} alt="tatoodos" className='w-[70rem] h-[40rem] object-cover'/>
             </div>

{/* 
             <div className='w-[110rem] '> */}

                <div className='autoshow text-black flex flex-wrap justify-center items-center gap-5 overflow-x-hidden mt-10 mb-10'>
                {pics.map((element, index) => (
                    
                    <img  src={tatoodos} alt="tatoodos" className='w-[25rem] h-[30rem] object-cover ' key={index}/>
                    
                ))}
                </div>
        
               
            {/* </div> */}
    
            <div className='w-full border-b-[1px] border-black'></div>

            <div className='w-[110rem] autoshow  mt-10 mb-10'> 

                    <div className='flex justify-center items-center mt-5 w-full'><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=41%20rue%20Sylvain%20Guyaux,%20La%20Louvi%C3%A8re%207110+(D%20o%20t%20s%20&amp;%20F%20l%20o%20w%20e%20r%20ssiness%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
                
            </div>
            <div className='w-full border-b-[1px] border-black'></div>
            <Footer></Footer>
        </div>
    )
}
