import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";
import { getDetailProduct } from "../redux/productSlice";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { ProductDetail, ProductDetailStatus } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  return (
    <div>
      {ProductDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp ProductDetail={ProductDetail} />
      )}
    </div>
  );
};

export default Details;