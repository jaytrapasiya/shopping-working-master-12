import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { qtyIncrementProduct, qtyDecrementProduct } from '../Redux/Action/cartAction';


const Cart = () => {
    const cartItem = useSelector((state) => state.allCartItems);
    const dispatch = useDispatch();
    let subtotal = 0


    return (
        <div className="container-fluid">
            <div className="d-flex cartHeader ">
                <p style={{marginLeft:"3rem"}}>Product ID</p>
                <p style={{marginLeft:"5.5rem"}}>Product</p>
                <p style={{marginLeft:"16rem"}}>Product Name</p>
                <p style={{marginLeft:"13.6rem"}}>Total Quntities</p>
                <p style={{marginLeft:"6rem"}}>Product Price</p>
                <p style={{marginLeft:"5rem"}}>Total Amount</p>
            </div>
            <div className="cart_div">
                {
                    Object.keys(cartItem.cartItems).map((index) => {
                        { subtotal = Math.round(subtotal + cartItem.cartItems[index].total) }
                        return (<div className="d-flex justify-content-around Bag" key={index}>
                            <div className="bag_id">
                                <p>{cartItem.cartItems[index].id}</p>
                            </div>
                            <div className="bag_image">
                                <img src={cartItem.cartItems[index].image} alt="Images" className="bag_product" />
                            </div>
                            <div className="bag_title d-flex justify-content-center">
                                <p>{cartItem.cartItems[index].title}</p>
                            </div>
                            <div className="d-flex btndiv">
                                <button className="btnince" onClick={() => dispatch(qtyIncrementProduct(cartItem.cartItems[index].id))}>+</button>
                                <p className="bag_qty">{cartItem.cartItems[index].qty}</p>
                                <button className="btndecr" onClick={() => dispatch(qtyDecrementProduct(cartItem.cartItems[index].id))}>-</button>
                            </div>
                            <div className="bag_price">
                                <p>{cartItem.cartItems[index].price}</p>
                            </div>
                            <div className="bag_total">
                                <p>{cartItem.cartItems[index].total}</p>
                            </div>
                        </div>
                        );
                    })
                }
                <div className="subtotal_div">
                    <p className="subtotal">Total <span>{subtotal}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cart;
