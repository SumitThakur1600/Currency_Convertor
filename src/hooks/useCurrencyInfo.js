import { useEffect, useState } from "react";
function useCurrencyInfo(currency) {
    const [value,setValue]=useState({})
    useEffect(() => {
        const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_SodjZowr8iQnN8Nxt3YQO61xeOMOONCKXdFWSpU4&base_currency=${currency}`;
        fetch(url)
        .then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
        .then((newdata)=>{
            console.log(newdata.data);
            setValue(newdata.data);
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [currency]);
   return value;
}
export default useCurrencyInfo;