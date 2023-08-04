import React from "react"; 
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Price (props) {
  // Our api key from coinapi.io
  const apiKey = "765D3E3E-1BB0-4A9A-81D5-DFD76F7F9506";
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  // const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/cat?key=97c65a55-7309-481b-a5c6-72f2d66beb45`;

  

  //state to hold the coin data
  const [coin, setCoin] = useState("null");

  const getCoin = async () => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
      // console.log(data.meta.id); 
    } catch(e){
      console.error(e)
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin && coin.rate ? loaded() : loading();
};