import React from "react";

const AmountBtn = ({ amount, donationAmount, updateForm }) => {
  return (
    <button
      type="button"
      data-name={amount}
      className={`${
        donationAmount === amount ? "bg-gradient" : "bg-blue-300"
      } py-4 w-full rounded-md text-sm font-semibold text-gray-800`}
      onClick={(e) => {
        updateForm({ donationAmount: e.target.dataset.name });
        console.log(e.target.dataset.name);
      }}>
      {amount}
    </button>
  );
};

export default AmountBtn;
