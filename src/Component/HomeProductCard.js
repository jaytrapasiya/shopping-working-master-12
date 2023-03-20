import React, { useEffect, useState } from 'react';
import '../iauction.css';
import { Link } from 'react-router-dom';



const HomeProductCard = (props) => {



    return (
        <div className="justify-content-center m-2">
            <Link to={`/product/${props.cateName}`} style={{textDecoration:"none"}}>
                <div className="categorybody">
                    <img src={props.image} alt="images" style={{ width: "10rem", height: "8rem", marginTop: "2rem" }} />
                    <p style={{ color: "red", fontWeight: "bolder", fontSize: "1.2rem", margin: "0px 5px" }}>{props.cateName}</p>
                </div>
            </Link>
        </div>
    )
}

export default HomeProductCard;
