import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ ProductDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < ProductDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: ProductDetail?.id,
        title: ProductDetail?.title,
        image: ProductDetail?.image,
        price: ProductDetail?.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="flex gap-10">
      <img
        className="w-[700px] h-[500px] object-cover"
        src={ProductDetail?.image}
        alt=""
      />
      <div>
        <div className="text-4xl font-bold">{ProductDetail?.title}</div>
        <div className="my-2 text-xl">{ProductDetail?.description}</div>
        <div className="my-2 text-xl"> Rating: {ProductDetail?.rating?.rate}</div>
        <div className="my-2 texl-xl"> Count: {ProductDetail?.rating?.count}</div>
        <div className="text-5xl font-bold">
          <span className="text-sm">$</span>
          {ProductDetail?.price}
        </div>
        <div>
          <div className="flex items-center gap-5 my-4">
            <button
              onClick={() => decrement()}
              className="text-5xl cursor-pointer"
            >
              -
            </button>
            <input
              className="w-20 text-center text-4xl font-bold "
              type="text"
              value={quantity}
              readOnly
            />
            <button
              onClick={() => increment()}
              className="text-4xl cursor-pointer"
            >
              +
            </button>
          </div>

          <p
            onClick={() => addBasket()}
            className="border rounded-md bg-orange-200 cursor-pointer my-4 w-[200px] text-2xl h-16 flex items-center justify-center"
          >
            Add to Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;