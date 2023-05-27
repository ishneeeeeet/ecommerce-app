import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card = ({ item, addToCart }) => {
  const { image, title, description, price } = item;

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="w-[300px] rounded-md border" key={item.key}>
      <img
        src={image}
        alt="Product"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {title} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {price}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
