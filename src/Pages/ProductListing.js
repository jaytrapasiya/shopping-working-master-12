import React, { useEffect } from 'react';
import ProductCard from '../Component/ProductCard';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../Redux/Action/productAction';
import { useParams } from 'react-router-dom';


const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const { cateName } = useParams();

    const fatchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log(err)
            })
        if (response.status === 200) {
            dispatch(setProducts(response.data))
        }
        else {
            console.warn("Same Technical Issue......!")
        }
    }

    useEffect(() => {
        fatchProducts();
    }, [])

    return (
        <div >
            <div className="d-flex justify-content-evenly flex-wrap m-1 p-1 b_white">
                {
                    Object.keys(products).map((id,index) => {
                        if (products[id].category === cateName || !cateName) {
                            return (
                                <ProductCard list={products[id]} key={index} />
                            )
                        }
                        return null;
                    })
                }
            </div>
        </div>
    )
}

export default ProductListing;
