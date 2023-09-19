import React, { useState } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, List ,Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


const Barra=()=> {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      
    },
    {
      text: "Sobre",
     
    },
    {
      text: "Depoimentos",
      
    },
    {
      text: "Contato",
    
    },
    {
      text: "Reservas",

    },
  ];

  return (
    <nav className='nav-logo-container'>
     <h1>Andreysson@Dev</h1>
     <div className='navbar-links-container'>
        <a>Home</a>
        <a>Sobre mim</a>
        <a>Projetos</a>
        <a>Contato</a>
        <a></a>
        <button className='primary-button'>Click Aqui!!</button>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={()=> setOpenMenu(false)} anchor="right">
        <Box
          sx={{width:250}}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        > 
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disabledPadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Barra