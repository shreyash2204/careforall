import React, { useState } from "react";
import useMultiStepForm from "../CustomHook/useMultiStepForm";
import AmountForm from "../components/AmountForm";
import DetailForm from "../components/DetailForm";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    mobileNo: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    donationAmount: "1000",
    donationPeriod: "once",
  });

  const changeHandler = (fields) => {
    setFormData({ ...formData, ...fields });
  };

  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([
      <AmountForm {...formData} updateForm={changeHandler} />,
      <DetailForm {...formData} updateForm={changeHandler} />,
    ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Form Submitted");
    console.log(formData);
  };

  //   console.log(step);
  return (
    <div
      className="relative border-[1px] border-yellow-400 p-4 pt-2 rounded-lg"
      style={{ width: "max-content" }}>
      <form className="" action="" onSubmit={onSubmit}>
        <div className="h-[30px] relative py-4 mb-4 flex items-center">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <div
            className="absolute text-sm font-medium text-gray-600 top-1/2 right-0 "
            style={{ transform: "translateY(-50%)" }}>
            Step {currentStepIndex + 1} of {steps.length}
          </div>
        </div>
        {step}
        <div className="mt-4 flex gap-2 justify-end"></div>
        <button className="w-full p-4 rounded-md bg-yellow-400 mt-8">
          {!isLastStep ? "Next" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;