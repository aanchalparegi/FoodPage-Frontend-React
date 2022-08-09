import React from "react";
import "./style.css";

const MenuCard = ({ menuData }) => {
  // console.log("innnn",menuData)
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {

          const {id,name,category,image,description}=curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                    {description}                    </span>
                    <div className="card-read">Read</div>
                    <img src={image} alt="images" className='card-media'></img>
                    <span className="card-tag  subtle">Order Now</span>
                  </div>
                </div>
          </div>
            </>
          );
        })}
      </section>
    </>

    // <div>menuCard</div>
  );
};

export default MenuCard;
