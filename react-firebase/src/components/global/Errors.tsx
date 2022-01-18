import React from "react";

interface IProps {
  errors: string[];
}
const Errors = ({ errors }: IProps) => {
  return (
    <ul>
      {errors?.map((error, idx) => (
        <li key={idx}>{error}</li>
      ))}
    </ul>
  );
};

export default Errors;
