import React from 'react';
import '../iauction.css';
import HomeSlider from '../Component/HomeSlider';
import HomeProductCard from '../Component/HomeProductCard';
import cat1 from '../Images/tv.png';
import cat2 from '../Images/jewel.jpeg';
import cat3 from '../Images/mancloth.jpg';
import cat4 from '../Images/womancloth.jpg';


const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 ">
                    <HomeSlider />
                </div>
                <div className="col-12 ">
                    <div className="d-flex justify-content-evenly flex-wrap m-2 p-1 b_white">
                        <HomeProductCard image={cat1} cateName={"electronics"}/>
                        <HomeProductCard image={cat2} cateName={"jewelery"}/>
                        <HomeProductCard image={cat3} cateName={"men's clothing"}/>
                        <HomeProductCard image={cat4} cateName={"women's clothing"}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
