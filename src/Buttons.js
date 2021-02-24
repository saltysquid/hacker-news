import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, numberOfPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("-")}>
        prev
      </button>
      <p>
        {page + 1} of {numberOfPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("+")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
