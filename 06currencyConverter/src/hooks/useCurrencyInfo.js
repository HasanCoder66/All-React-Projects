import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  // console.log(currency);
  const { data, setData } = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    ).then(res => res.json())
    .then((data) => {
      console.log(data)
      setData(data);
    });
  }, [data]);
}



export default useCurrencyInfo;
