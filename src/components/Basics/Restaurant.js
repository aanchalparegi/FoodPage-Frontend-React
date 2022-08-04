import React, { useState } from 'react'
import "./style.css"
import MenuCard from './MenuCard'
import Menu from './menuApi'
const Restaurant = () => {
  const [menuData,setMenuData]=useState(Menu);
  console.log("menuuuu",menuData)
  return (
    <>
    <MenuCard  menuData={menuData} />

    </>
    
  )
}

export default Restaurant