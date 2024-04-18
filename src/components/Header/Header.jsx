import React, {useState} from 'react'
import './Header.css'
import Logo from'../../assets/logo.jpeg';
import Bars from'../../assets/bars.png';

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">

    <img src={Logo} alt="" className='logo' />
    {menuOpened === false && mobile === true ? (
      <div
      style={{
        backgroundColor: "var(--appColor)",
        padding: "0.5rem",
        borderRdius: "5px",
      }}
      onClick={()=> setMenuOpened(true)}
      >
        <img src={Bars}
         alt="" 
         style={{ width: "1.5rem", height: "1.5rem"}}
         />
         </div>
    ):(
    <ul className='header-menu'>
        <li onClick={()=>setMenuOpened(false)}>Home</li>
        <li onClick={()=>setMenuOpened(false)}>Products</li>
        <li onClick={()=>setMenuOpened(false)}>Services</li>
        <li onClick={()=>setMenuOpened(false)}>Careers</li>
        <li onClick={()=>setMenuOpened(false)}>About</li>
        <button style={{ transform: 'translateX(-50%)', 
  backgroundColor: '#3f3fec', 
  position: 'absolute', 
  right: 0,
  color: '#ffffff', 
  padding: '10px 20px', 
  border: 'none', 
  borderRadius: '5px', 
  fontSize: '16px', 
  cursor: 'pointer'}}>Talk to an Experts</button>
    </ul>
  )}
    </div>
  )
};

export default Header