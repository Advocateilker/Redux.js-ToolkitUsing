import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct, getProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import ProductsMap from "./ProductsMap";
import ReactPaginate from "react-paginate";

const Product = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  useEffect(() => {
    if (category) {
      dispatch(getCategoryProduct(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);
  const [itemOffset, setItemOffset] = useState(0);
  //------------------
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
  //------------------

  return (
    <div>
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-between flex-wrap">
            {currentItems
              ?.sort((a, b) =>
                sort === "inc"
                  ? a.price - b.price
                  : sort === "dec"
                  ? b.price - a.price
                  : null
              )
              .map((product, i) => (
                <ProductsMap product={product} key={i} />
              ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            pageLinkClassName="page-link" // Pasif sayfa bağlantıları için sınıf
            activeClassName="active-page-link" // Aktif sayfa bağlantısı için sınıf
          />
        </>
      )}
    </div>
  );
};

export default Product;