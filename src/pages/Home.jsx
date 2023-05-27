import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/products`, {
          headers: {
            Authorization: `Bearer de413da37464efa0deb96d831f52b45c7eff0ba9f2b1a9cb637e7f7631826379e6084f0b30bd808320ff20e8ded50afc4a7e505dfbcdd703bf97a1fe908a5833007fb93039184dbbe0d19bb3eb6b103fc21ade5ac2595fb8bf6bbeb19f4b38674c4608f97f40b9b81b8e6da63ca304350252a3422d9622d8c800e0231c44e224`,
          },
        });
        setProducts(response.data.data);
       console.log(response.data.data);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {products.map((item) => (<Card item={item}/>))}
    </div>
  );
}
