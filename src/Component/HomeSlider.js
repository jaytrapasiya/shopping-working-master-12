import React from 'react'
import slide1 from '../Images/slide1.jpg';
import slide2 from '../Images/slide2.jpg';
import slide3 from '../Images/slide3.jpg';




const HomeSlider = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <span> 
                                    <img className="bd-placeholder-img" src={slide1} width="100%" height="300rem" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
                                </span>
                            </div>
                            <div className="carousel-item">
                                <img className="bd-placeholder-img" src={slide2} width="100%" height="300rem" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            </div>
                            <div className="carousel-item">
                                <img className="bd-placeholder-img" src={slide3} width="100%" height="300rem" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="carousel-control-prev btn-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next btn-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSlider;
