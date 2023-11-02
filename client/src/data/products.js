import { SERVER_URL, GET_PRODUCTS_ENDPOINT } from "../config";
export const fetchProducts = async () => {
  const fetchURL = SERVER_URL + GET_PRODUCTS_ENDPOINT;
  const headers = {
    'Content-Type': 'application/json',
  };
  const response = await fetch(
    fetchURL,
    {
      method: 'GET',
      headers: headers,
    }
  );
  const responseData = await response.json();
  if(response.ok) {
    console.log(responseData);
    return responseData;
  }
  else {
    console.log("some error occured", responseData);
  };

};
