import axios from "axios";
import React, { useEffect } from "react";

const ApiCall = () => {
  const getCategory = () => {
    axios
      .get(
        "https://mybusinessbusinessinformation.googleapis.com/v1/locations/17198295898980539095?readMask=serviceItems",
        {
          headers: {
            Authorization:
              "Bearer ya29.a0Aa4xrXOMmvjHHW2AUWETj8bX5edUAZP93ut8yDD5X1Tbvl80GKtBtiWghZEDRw1uHdqaFn1pq96zLilpTmC4i8F59PxohGpZqFNOR3cQHP-Vl7v6kypKwszkoJMNEQovKfPxu11cHR7lfIcbsRfPOzwRETIcRwaCgYKATASARISFQEjDvL9SV4p62byEjzZA_4zc5nhhg0165",
          },
        }
      )
      .then((res) => {
        console.log("response value", res);
      })
      .catch((Err) => {
        console.log("err values", Err);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);
  return <div>ApiCall</div>;
};

export default ApiCall;
