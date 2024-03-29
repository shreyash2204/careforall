import React from "react";

const AmountBtn = ({ amount, donationAmount, updateForm }) => {
  return (
    <button
      type="button"
      data-name={amount}
      className={`${
        donationAmount === amount ? "bg-yellow-400" : "bg-blue-300"
      } py-3 px-8 rounded-md text-sm font-semibold text-gray-800`}
      onClick={(e) => {
        updateForm({ donationAmount: e.target.dataset.name });
        console.log(e.target.dataset.name);
      }}>
      {amount}
    </button>
  );
};

export default AmountBtn;
