import React, { useEffect, useState } from "react";
import AmountBtn from "../components/AmountBtn.jsx";



const AmountForm = ({ donationAmount, donationPeriod, updateForm }) => {

  const customAmount = [
    {
      amount: "1000",
      fact: "Ensure 10 children are completely immunized against preventable deadly diseases through the govt system",
    },
    {
      amount: "2000",
      fact: "Ensure proper nutrition for 12 premature underweight babies by connecting them to govt. healthcare services",
    },
    {
      amount: "3000",
      fact: "Ensure 6 out-of-school children are enrolled back in school",
    },
    {
      amount: "5000",
      fact: "Establish education centres to help 20 former child labourers complete their education",
    },
  ];

  return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(auto, 200px))",
          gap: "2rem",
          // marginBottom: "2rem",
          placeContent: "center",
        }}>
        <button
          type="button"
          data-name="once"
          className={`${
            donationPeriod === "once" ? "bg-yellow-400" : "bg-blue-300"
          } py-3 px-8 rounded-lg text-sm font-medium text-gray-800`}
          onClick={(e) => {
            updateForm({ donationPeriod: e.target.dataset.name });
          }}>
          Give Once
        </button>
        <button
          type="button"
          data-name="monthly"
          className={`${
            donationPeriod === "monthly" ? "bg-yellow-400" : "bg-blue-300"
          } py-3 px-8 rounded-lg text-sm font-medium text-gray-800`}
          onClick={(e) => {
            updateForm({ donationPeriod: e.target.dataset.name });
          }}>
          Give Monthly
        </button>

        <p className="text-sm col-span-full">Choose an amount to donate</p>

        <AmountBtn amount={customAmount[0].amount} donationAmount={donationAmount} updateForm={updateForm} />
        <AmountBtn amount={customAmount[1].amount} donationAmount={donationAmount} updateForm={updateForm} />

        <p className="col-span-full text-[13px] flex items-center justify-center text-center font-light h-[30px]">
          {customAmount.find((item) => item.amount === donationAmount).fact}
        </p>

        <AmountBtn amount={customAmount[2].amount} donationAmount={donationAmount} updateForm={updateForm} />
        <AmountBtn amount={customAmount[3].amount} donationAmount={donationAmount} updateForm={updateForm} />

        
      </div>
  );
};

export default AmountForm;
