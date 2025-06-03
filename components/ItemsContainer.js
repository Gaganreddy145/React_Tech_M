import { useEffect } from "react";
import Item from "./Item";
const ItemsContainer = () => {
  const fetchData = async () => {
    try {
        const fetchdata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await fetchdata.json();
    console.log(data);
    } catch (error) {
        console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="items-container">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default ItemsContainer;
