import React from 'react'
import './styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import FaceIcon from '@mui/icons-material/Face';
import {useNavigate} from "react-router-dom"

function Header() {
  
  let navigate = useNavigate()

  
  return (
    <div className='header'>
      <div className='header__left'>
        <img onClick={() => navigate('/', {replace: true})} className='logo' src={require('../Assets/restBooking.png')}></img>
      </div>
      <div className='header__mid'>
        <div className='search-elements'>
          <input className='search-input' type='text'/>
          <SearchIcon className='search-icon' fontSize='small'/>
        </div>
      </div>
      <div className='header__right'>
        <p>Host your room</p>
        <LanguageIcon style={{ marginRight: 30, cursor: 'pointer'}} fontSize='small'/>
        <div className='profile'>
          <MenuIcon style={{ marginRight: 5, cursor: 'pointer'}} fontSize='small'/>
          <FaceIcon style={{ color: 'gray', cursor: 'pointer'}} fontSize='large'/>
        </div>
      </div>
    </div>
  )
}

export default Header