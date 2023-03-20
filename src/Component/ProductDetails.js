import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import axios from 'axios';


const ProductDetails = () => {
    const [productDetail, setProductDetails] = useState({})
    const { productid } = useParams();
    const { id, category, description, image, price, title } = productDetail;

    console.log("productDetail", productDetail)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + productid)
            .then((response) => {
                setProductDetails(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [productid])


    return (
        <div>
            <div className="row d-flex justify-content-center product_detail_container">
                <div className="col-4 details_image">
                    <img src={image} alt="Arrow" className="detail_image" />
                </div>

                <div className="col-4 jsutify-content-center text-start product_details">
                    <div className="row">
                        <div className="col-3">
                            <p>Product Id </p>
                        </div>
                        <div className="col-8">
                            <span>{id}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <p>Name </p>
                        </div>
                        <div className="col-9">
                            <span>{title}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <p>Description </p>
                        </div>
                        <div className="col-9">
                            <span>{description}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <p>Category</p>
                        </div>
                        <div className="col-9">
                            <span>{category}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <p>Price</p>
                        </div>
                        <div className="col-9">
                            <span>₹ {price} /-</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails;
