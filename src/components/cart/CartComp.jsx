import React, { useEffect } from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="my-10 flex items-center justify-between">
      <img className="w-[150px] h-[150px] object-cover" src={cart.image} alt="" />
      <div className="w-[476px]">
        <div className="text-3xl font-bold">{cart.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">
        <span className="text-xs text-red-900 font-bold">$</span>
        {cart.price} -
        <span className="text-red-900 font-bold">{cart.quantity}</span> Qty
      </div>
      <button
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-orange-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center"
      >
        Delete Product
      </button>
    </div>
  );
};

export default CartComp;