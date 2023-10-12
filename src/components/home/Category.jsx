import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import { getProducts } from "../../redux/productSlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="w-1/5 bg-orange-100 p-3 max-h-screen">
      <div className="border-b pb-1 text-xl font-bold ">CATEGORY</div>
      <p className="cursor-pointer" onClick={() => dispatch(getProducts())}>
        All Categories
      </p>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg mt-2 px-2 cursor-pointer hover:bg-gray-300 p-2"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;