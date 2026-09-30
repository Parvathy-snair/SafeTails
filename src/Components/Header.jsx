import React,{useEffect,useState} from 'react';
import logo from "../assets/logoreact.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {BiDonateHeart} from "react-icons/bi";
import {FiUser} from "react-icons/fi";
import {Link} from 'react-router-dom';

function Header(){
const[isLoggedIn,setIsLoggedIn]=useState(false);
const[menuOpen,setMenuOpen]=useState(false);

useEffect(()=>{
setIsLoggedIn(localStorage.getItem("isLoggedIn")==="true");
},[]);

return(
<Box sx={{flexGrow:1}}>
<AppBar position="static" sx={{backgroundColor:'#000000'}}>
<Toolbar sx={{minHeight:'65px',px:{xs:2,md:4}}}>

<IconButton
size="large"
edge="start"
color="inherit"
onClick={()=>setMenuOpen(!menuOpen)}
sx={{mr:1,display:{xs:'block',md:'none'}}}>
<MenuIcon/>
</IconButton>

<img src={logo} alt="SafeTails" style={{width:"58px",height:"58px",objectFit:"contain"}}/>

<Typography variant="h5" component="div" sx={{flexGrow:1,ml:1,fontWeight:'bold'}}>
<span style={{color:'white'}}>Safe</span><span style={{color:'#d5a92f'}}>Tails</span>
</Typography>

<Box sx={{display:{xs:'none',md:'flex'},alignItems:'center',gap:1}}>
<Button component={Link} to="/" color="inherit">Home</Button>
<Button component={Link} to="/Rescue" color="inherit">Rescue</Button>
<Button component={Link} to="/Adoption" color="inherit">Adoption</Button>
<Button component={Link} to="/Report" color="inherit">Report</Button>

{isLoggedIn?
<Button component={Link} to="/UserDashboard" color="inherit">
<FiUser size={18} className="me-1"/>My Account
</Button>:
<Button component={Link} to="/Login" color="inherit">Login</Button>}

<Button component={Link} to="/Donate" sx={{backgroundColor:'#d5a92f',color:'#000',fontWeight:'bold',px:2,borderRadius:'30px'}}>
<BiDonateHeart size={20} className="me-1"/>DONATE
</Button>
</Box>

</Toolbar>

{menuOpen&&(
<Box sx={{display:{xs:'block',md:'none'},backgroundColor:'#111',px:3,pb:2}}>
<Button component={Link} to="/" onClick={()=>setMenuOpen(false)} sx={{display:'block',width:'100%',textAlign:'left',color:'white',py:1.5}}>Home</Button>
<Button component={Link} to="/Rescue" onClick={()=>setMenuOpen(false)} sx={{display:'block',width:'100%',textAlign:'left',color:'white',py:1.5}}>Rescue</Button>
<Button component={Link} to="/Adoption" onClick={()=>setMenuOpen(false)} sx={{display:'block',width:'100%',textAlign:'left',color:'white',py:1.5}}>Adoption</Button>
<Button component={Link} to="/Report" onClick={()=>setMenuOpen(false)} sx={{display:'block',width:'100%',textAlign:'left',color:'white',py:1.5}}>Report</Button>

{isLoggedIn?
<Button component={Link} to="/UserDashboard" onClick={()=>setMenuOpen(false)} sx={{display:'block',width:'100%',textAlign:'left',color:'white',py:1.5}}>
<FiUser className="me-2"/>My Account
</Button>:
<Button component={Link} to="/Login" onClick={()=>setMenuOpen(false)} sx={{display:'block',width:'100%',textAlign:'left',color:'white',py:1.5}}>Login</Button>}

<Button component={Link} to="/Donate" onClick={()=>setMenuOpen(false)} sx={{mt:1,width:'100%',backgroundColor:'#d5a92f',color:'#000',fontWeight:'bold',borderRadius:'30px'}}>
<BiDonateHeart size={20} className="me-1"/>DONATE
</Button>
</Box>
)}

</AppBar>
</Box>
);
}

export default Header;