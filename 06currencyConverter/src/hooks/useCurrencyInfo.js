import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  console.log(currency);
  const { data, setData } = useState({});
  useEffect( async ()  => {
    try {
      const fetchData = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
    //   const dataRes = res.json
        // console.log(fetchData)
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
