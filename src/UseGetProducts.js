import axios from "axios";
import { useState, useEffect } from "react";
import { endpoint } from "./api";
const useGetProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(endpoint);
      // let usersData = res.data.map((user) => ({
      //   ...user,
      //   available: true,
      //   selected: false,
      // }));
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return [data, loading];
};

export default useGetProducts;
