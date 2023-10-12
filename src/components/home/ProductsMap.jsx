import React from "react";
import { useNavigate } from "react-router";

const ProductsMap = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[400px] p-3 bg-orange-50 mb-5 mx-5 border relative rounded-md cursor-pointer"
    >
      <div className="text-2xl font bold absolute rounded-md top-0 right-0 bg-orange-600 text-white p-1 m-1">
        <span className="text-sm">$</span>
        {product?.price}
      </div>
      <img
        className="w-[200px] h-[200px] m-auto object-cover"
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 mt-3 text-xl font-bold">
        {product?.title}
      </div>
    </div>
  );
};

export default ProductsMap;