"use client";

const error = ({ error }: any) => {
  console.log(error);
  return <div className="">{error.message}</div>;
};

export default error;
