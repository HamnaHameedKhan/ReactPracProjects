import React, { useEffect, useState } from 'react'

function UseCurrencyData(currency) {

  const api={
    "USD":1,
  "AED":3.6725,
  "AFN":72.4339,
  "ALL":93.8961,
  "AMD":388.1877,
  "ANG":1.7900,
  "AOA":844.3615,
  "ARS":864.7500,
  "AUD":1.5403,
  "AWG":1.7900,
  "AZN":1.7008,
  "BAM":1.8305,
  "BBD":2.0000,
  "BDT":109.7162,
  "BGN":1.8299,
  "BHD":0.3760,
  "BIF":2863.4023,
  "BMD":1.0000,
  "BND":1.3637,
  "BOB":6.9254,
  "BRL":5.1204,
  "BSD":1.0000,
  "BTN":83.4890,
  "BWP":13.8085,
  "BYN":3.2635,
  "BZD":2.0000,
  "CAD":1.3736,
  "CDF":2769.8684,
  "CHF":0.9169,
  "CLP":941.7980,
  "CNY":7.2449,
  "COP":3853.8935,
  "CRC":507.3846,
  "CUP":24.0000,
  "CVE":103.1988,
  "CZK":23.5041,
  "DJF":177.7210,
  "DKK":6.9811,
  "DOP":58.4775,
  "DZD":134.3321,
  "EGP":47.8527,
  "ERN":15.0000,
  "ETB":57.3869,
  "EUR":0.9359,
  "FJD":2.2596,
  "FKP":0.7993,
  "FOK":6.9811,
  "GBP":0.7993,
  "GEL":2.6846,
  "GGP":0.7993,
  "GHS":13.6827,
  "GIP":0.7993,
  "GMD":66.7187,
  "GNF":8575.5165,
  "GTQ":7.7718,
  "GYD":209.1428,
  "HKD":7.8223,
  "HNL":24.7215,
  "HRK":7.0517,
  "HTG":132.5152,
  "HUF":365.3552,
  "IDR":16262.8697,
  "ILS":3.7406,
  "IMP":0.7993,
  "INR":83.4890,
  "IQD":1308.7420,
  "IRR":42047.9013,
  "ISK":140.2253,
  "JEP":0.7993,
  "JMD":156.0983,
  "JOD":0.7090,
  "JPY":157.3776,
  "KES":134.6947,
  "KGS":88.9698,
  "KHR":4052.9607,
  "KID":1.5406,
  "KMF":460.4404,
  "KRW":1382.9706,
  "KWD":0.3080,
  "KYD":0.8333,
  "KZT":441.8214,
  "LAK":21534.1155,
  "LBP":89500.0000,
  "LKR":297.4995,
  "LRD":193.7360,
  "LSL":18.7559,
  "LYD":4.8627,
  "MAD":10.1006,
  "MDL":17.6850,
  "MGA":4429.7373,
  "MKD":57.4341,
  "MMK":2101.3689,
  "MNT":3382.8779,
  "MOP":8.0571,
  "MRU":39.4304,
  "MUR":46.2906,
  "MVR":15.4437,
  "MWK":1739.5846,
  "MXN":17.1001,
  "MYR":4.7688,
  "MZN":63.7800,
  "NAD":18.7559,
  "NGN":1349.4372,
  "NIO":36.8184,
  "NOK":11.0832,
  "NPR":133.5823,
  "NZD":1.6944,
  "OMR":0.3845,
  "PAB":1.0000,
  "PEN":3.7462,
  "PGK":3.8309,
  "PHP":57.7419,
  "PKR":278.8389,
  "PLN":4.0418,
  "PYG":7481.0334,
  "QAR":3.6400,
  "RON":4.6437,
  "RSD":109.2568,
  "RUB":93.3396,
  "RWF":1298.4402,
  "SAR":3.7500,
  "SBD":8.5014,
  "SCR":14.2904,
  "SDG":543.5453,
  "SEK":10.9959,
  "SGD":1.3635,
  "SHP":0.7993,
  "SLE":22.7233,
  "SLL":22723.3430,
  "SOS":571.1780,
  "SRD":33.9737,
  "SSP":1583.5117,
  "STN":22.9299,
  "SYP":12955.6318,
  "SZL":18.7559,
  "THB":37.1089,
  "TJS":10.9211,
  "TMT":3.4971,
  "TND":3.1436,
  "TOP":2.3496,
  "TRY":32.4055,
  "TTD":6.7621,
  "TVD":1.5406,
  "TWD":32.6134,
  "TZS":2591.4651,
  "UAH":39.5243,
  "UGX":3805.8832,
  "UYU":38.2030,
  "UZS":12582.4296,
  "VES":36.4730,
  "VND":25309.0744,
  "VUV":120.9044,
  "WST":2.7500,
  "XAF":613.9206,
  "XCD":2.7000,
  "XDR":0.7591,
  "XOF":613.9206,
  "XPF":111.6847,
  "YER":250.0987,
  "ZAR":18.7491,
  "ZMW":26.7298,
  "ZWL":13.4301
  }

    // const [data,setData]=useState({})   //empty object for not crashing the api
  //   useEffect(()=>{
  //       fetch(`https://v6.exchangerate-api.com/v6/7d433426ebc9ed622822fe42/latest/USD`)  //fetch data of

  //     .then((res)=>res.json())
  //     .then((res)=>setData(res[currency]))
  //   }, [currency]);


  // console.log(data);
  // return data

  // useEffect(() => {
  //    // Check if the currency exists in the API object before setting the state
  //    if (currency in api) {
  //     setData(api[currency]);
  //   }
  // }, [currency,api]);

  // console.log(data);
  // return data;

  
  useEffect(() => {
    const [data,setData]=useState()  
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/7d433426ebc9ed622822fe42/latest/USD');
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rates');
        }
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();

    // Clean-up function
    return () => {
      // Any clean-up code here, if needed
    };
  }, []); 
}

export default UseCurrencyData


