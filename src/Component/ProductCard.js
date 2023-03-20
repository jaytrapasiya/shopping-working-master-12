import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, qtyIncrementProduct, qtyDecrementProduct } from '../Redux/Action/cartAction';




const ProductCard = (props) => {
    const dispatch = useDispatch();
    const isCartProduct = useSelector((state) => state.allCartItems)
    const userIsAuth = useSelector((state) => state.userIsAuth)
    const { id, image, title, price } = props.list;


    const productAddToCart = (id, image, title, price) => {
        const qty = 1
        const total = price
        dispatch(addToCart({ id, image, title, price, qty, total }))
    }


    const isProductAddedToCard = () => {
        return !!isCartProduct.cartItems.find((product) => product.id === id);
    }


    const productInCartQty = () => {
        const index = isCartProduct.cartItems.findIndex((getIndex) => {
            return (getIndex.id === id)
        })
        return isCartProduct.cartItems[index].qty
    }



    return (
        <div className="justify-content-center m-3">
            <div className="cardbody">
                <Link to={`/product/details/${id}`} style={{ textDecoration: "none" }}>
                    <img src={image} alt="images" className="imagebody" />
                    <div className="card_title">
                        <p>{title}</p>
                    </div>
                    <div className="card_content mx-3 justify-content-center">
                        <p>Price : <span>{price} /-Rs</span></p>
                    </div>
                </Link>
                <div className="addtocard">
                    {!isProductAddedToCard() ?
                        <div>
                            <button className="addtocartbtn"
                                disabled={!userIsAuth.isAuth}
                                onClick={() => productAddToCart(id, image, title, price)}>Add To Cart
                            </button>
                        </div>
                        :
                        <div className="d-flex justify-content-center">
                            <button className="btndecr"
                                onClick={() => dispatch(qtyDecrementProduct(id))}>
                                -
                            </button>
                            {
                                <p className="bag_qty"> {productInCartQty()} </p>
                            }
                            <button className="btnince"
                                onClick={() => dispatch(qtyIncrementProduct(id))}>
                                +
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard;

ProductCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number
}