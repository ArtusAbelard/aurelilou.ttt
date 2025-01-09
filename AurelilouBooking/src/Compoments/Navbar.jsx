
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    

    return (
        
        <AppBar className=' flex justify-center align-center bg-white' color='white' position="fixed">
          <Toolbar className='text-black gap-9 flex justify-between bg-white '>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}

            <div className='flex gap-9 w-[20rem] ps-5'>

            <Link className='hover:text-black' to={'/aurelilou.ttt'}><h6 className='text-xl cursor-pointer lineunder font-normal'>Home</h6></Link>

            <Link className='hover:text-black' to={'/booking'}><h6 className='text-xl cursor-pointer lineunder font-normal'>Booking</h6></Link>

            <Link className='hover:text-black'> <h6 className='text-xl cursor-pointer lineunder font-normal'>About</h6> </Link>

            </div>
            

            <div className='flex '><a className='text-2xl text-center hover:text-black'  href="https://www.instagram.com/aurelilou.ttt/" target="_blank"><h6 className=' text-2xl text-center '>៚ D o t s & F l o w e r s</h6></a>
            </div>

            <div className='flex w-[20rem] '>

            </div>
            
            
            
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography> */}
            
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      
    )
}
