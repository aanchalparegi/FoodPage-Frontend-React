import React, { useState } from 'react'
import "./style.css"
import MenuCard from './MenuCard'
import Menu from './menuApi'
import Navbar from './Navbar'
const Restaurant = () => {
  const [menuData,setMenuData]=useState(Menu);

const unique=[...new Set(Menu.map((curElem)=>{
  return curElem.category;
 })
),"All",
];
// }
console.log("üniqqq",unique)

const filterItem=(category)=>{
  if(category==="All"){
    setMenuData(Menu);
    return;
  }
  const updatedList=Menu.filter((curElem)=>{
    return curElem.category === category
  });
  setMenuData(updatedList);
};
  // console.log("menuuuu",menuData)
  return (
    <>
    <Navbar filterItem={filterItem} unique={unique} />
  
    <MenuCard  menuData={menuData} />
    </>
    
  )
}

export default Restaurant