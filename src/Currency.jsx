import Loader from "./Loader.jsx";
import { useState, useEffect } from 'react';
import "./Currency.css";
import './scss/styles.scss';
import { Typography } from "@material-tailwind/react";

function Currency() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [outputAmount, setOutputAmount] = useState('');
  const [secondCurrency, setSecondCurrency] = useState('USD');

  const currency = "IDR";
  const apiUrl = `https://open.er-api.com/v6/latest/${currency}`;

  useEffect(() => {
      setLoading(true);
      fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data && data.rates) {
      const rate = 1 / data.rates[secondCurrency];
      const decimalPlaces = rate < 1 ? 4 : rate < 10 ? 3 : rate < 100 ? 2 : 1;
      const newOutputAmount = rate.toFixed(decimalPlaces);
      setOutputAmount(newOutputAmount);
    }
  }, [secondCurrency, data]);

  const handleSecondCurrencyChange = (event) => {
    setSecondCurrency(event.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  return (


    <>
      {/* <div className="container row align-items-center"> */}
        <div className="form-floating col align-items-center input-group mb-3 w-full flex items-center gap-x-0 gap-y-0 my-3">
          <div class="flex-1">
            <Typography>
              {outputAmount} IDR
            </Typography>
          </div>
          <div class="flex-1">
            <select
              className="form-select border-none"
              id="SecondCurrency"
              value={secondCurrency}
              onChange={handleSecondCurrencyChange}
              aria-label="Currency 2"
            >
            
            {data && Object.entries(data.rates).map(([currency, rate]) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Currency;
