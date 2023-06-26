import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from "@material-ui/core";
import img1 from './Images/Logo 1.png';
function Header() {
  return (
    <div className='header'>
         <img
            className="header__icon"
            src={img1}
            alt=""
          />

        <div className='header__center'>
            <input type='text'>

            </input>
            <SearchIcon></SearchIcon>
        </div>

        
        <div className='header__right'>
          <p>Become a host</p>
          <LanguageIcon></LanguageIcon>
          <ExpandMoreIcon></ExpandMoreIcon>
          <Avatar></Avatar>
        </div>
        
    </div>
  )
}

export default Header
