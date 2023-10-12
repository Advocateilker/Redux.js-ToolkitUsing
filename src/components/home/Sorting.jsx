import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-orange-100 my-5 p-5 flex items-center justify-end text-black">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-orange-300 py-3 px-5"
        name=""
        id=""
        defaultValue=""
      >
        <option disabled value="">
          Sort by
        </option>
        <option value="inc">Increment</option>
        <option value="dec">Decrement</option>
      </select>
    </div>
  );
};

export default Sorting;