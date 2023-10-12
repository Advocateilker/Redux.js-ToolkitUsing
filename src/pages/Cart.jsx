import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, itemCount, totalAmount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex item-center justify-end text-2xl">
            Total Amount:
            <span className="font-bold text-3xl ml-2">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-center mt-10">Cart is Empty...</h1>
          <Link to={"/"} className=" flex justify-center mt-5">
            Click here to continue shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;