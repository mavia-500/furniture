import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaShare } from "react-icons/fa";
import CartFuntionality from "./CartFunctioanlity";
import Swal from "sweetalert2";
import ImageSlider from "./ImageSlider";

const BoxWholeDetails = () => {
  const location = useLocation();
  const details = location.state.detail; // Example: { title, price, discount, image, description }
  // console.log(details);

  // const [thickness, setThickness] = useState("");
  const [price, setPrice] = useState();
  const [originalPrice, setOriginalPrice] = useState();
  const [size, setSize] = useState();
  const [counter, setCounter] = useState(1);
  const [cartOpen, setCartOPen] = useState(false);

  const handleSizeChange = (e) => {
    const sizeData = e.target.value;
    setSize(sizeData);
    if (sizeData) {
      const priceData = details.size_price.find(
        (item) => item.size === sizeData
      );

      if (priceData) {
        setPrice(priceData.price);
        setOriginalPrice(priceData.price + 50);
      }
    }
  };

  const handleCounter = (type) => {
    setCounter((prev) => {
      if (type === "increament") {
        return prev + 1;
      } else if (type === "decrement" && prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

   const handleCart=()=>{
    const disa="disable"
      if(!size ){
        Swal.fire({
              title: "To Proceed to Add to Cart",
              text: "Please Select the Size ",
              icon: "warning",
              // showCancelButton: true,
              confirmButtonColor: "#3085d6",
              // cancelButtonColor: "#d33",
              confirmButtonText: "OK",
            })
            return;
      }
  else{
    setCartOPen(true)
  
  }
       }

       const rendering=1
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 py-16 px-6 `}>
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        {/* Image Section */}
        <div className="bg-gray-100 flex justify-center  p-6">
          <ImageSlider images={details.image} rendering={rendering}/>
        </div>

        {/* Details Section */}
        <div className="p-8 flex flex-col justify-between">
          {/* Title & Price */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {details.name}
          </h1>

          {price != undefined || price != null ? (
            <div>
              <p className="text-gray-600 text-lg mb-4 mt-6">
                <span className="text-green-600 font-semibold text-2xl">
                  ${price}
                </span>
                <span className="line-through text-gray-400 ml-10">
                  {originalPrice}$
                </span>
                <button className=" text-white ml-10 bg-blue-600 w-13 ">
                  sale
                </button>
              </p>
            </div>
          ) : (
            <p className="text-green-600 text-lg mb-4 mt-6">
              please select the size to get the quote
            </p>
          )}

          {/* /////thickness */}
          <div className="mb-4 mt-5">
            <p className="text-gray-700 mb-2 font-medium">Size</p>
            <select
              onChange={handleSizeChange}
              value={size}
              className={`border w-40 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${cartOpen ? "pointer-events-none opacity-50" : ""}`}
            >
              <option value="">Select size</option>
              {details.size_price.map((size_price, index) => (
                <option key={index} value={size_price.size}>
                  {size_price.size}
                </option>
              ))}
            </select>
          </div>

          {/* Stock Info */}
          <p className="text-sm text-green-600 font-semibold mb-4">
            In stock! Usually ships within 24 hours.
          </p>

          {/* Quantity & Counter */}
          <div className="mb-4">
            <p className="text-gray-700 mb-2 font-medium">Quantity</p>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleCounter("decrement")}
                className={`px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200 ${cartOpen ? "pointer-events-none opacity-50" : ""}`}
              >
                -
              </button>
              <span>{counter}</span>
              <button
                onClick={() => handleCounter("increament")}
                className={`px-3 py-1 border rounded-lg bg-gray-100 hover:bg-gray-200 ${cartOpen ? "pointer-events-none opacity-50" : ""}`}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className={`w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold ${cartOpen ? "pointer-events-none opacity-50" : ""}`}
            onClick={handleCart}
          >
            Add to Cart
          </button>
          {cartOpen && (
            <CartFuntionality
              isOpen={cartOpen}
              onClose={() => setCartOPen(false)}
              cartItems={{
                name: details.name,
                size: size,
                price: price,
                quantity: counter,
                totalPrice: price*counter,
                image:details.image
              }}
            />
          )}

          {/* ////payment  */}

          <div className="flex justify-between mt-4">
            <p className="text-red-800">
              Payment on Delivery (Online or Cash both are accepted)
            </p>
          </div>
          {/* Share Option */}
          <div className="flex justify-between mt-4">
            <div className="flex items-center text-gray-500">
              <span className="mr-1">Share:</span>
              <FaShare className="ml-3" />
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600 text-sm">{details.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Shipping in Canada</h2>
            <p className="text-gray-600 text-sm">
              Shipping charges will range from $20 to $50 depending on your
              location. Delivery usually takes 1 to 3 business days.
            </p>
          </div>

          {/* Size Chart */}
          
        </div>
      </div>
    </div>
  );
};

export default BoxWholeDetails;
