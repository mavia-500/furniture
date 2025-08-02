import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaShare } from "react-icons/fa";
import CartFuntionality from "./CartFunctioanlity";
import Swal from "sweetalert2";
// import CartFuntionality from "./CartFuntionality";

const BedWholeDetails = () => {
  const location = useLocation();
  const details = location.state.detail; // Example: { title, price, discount, image, description }
  console.log(details);

  const [color, setColor] = useState("");
  const [price, setPrice] = useState();
  const [originalPrice, setOriginalPrice] = useState();
  const [size, setSize] = useState();
  const [counter, setCounter] = useState(1);
  const [cartOpen, setCartOPen] = useState(false);

  const handleThicknessChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    const sizeData = e.target.value;
    setSize(sizeData);
    if (sizeData) {
      const thicknessData = details.innerDetails.find(
        (item) => item.color === color
      );

      if (thicknessData) {
        const priceData = thicknessData.size_price.find(
          (item) => item.size === sizeData
        );
        setPrice(priceData.price);
        setOriginalPrice(priceData.price + 100);
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
    if(!size || !color){
      Swal.fire({
            title: "To Proceed to Add to Cart",
            text: "Please Select the Size and Color",
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

  return (
    <>
      <div className="min-h-screen mt-10 flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
          {/* Image Section */}
          <div className="bg-gray-100  justify-center p-4 sm:p-6 w-full md:w-1/2">
            <img
              className="w-full max-w-md h-auto object-contain rounded-lg"
              src="/public/bamboo7.webp"
              alt="Mattress"
            />
          </div>

          {/* Details Section */}
          <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2">
            {/* Title & Price */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              {details.name}
            </h1>

            {price != undefined || price != null ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 mt-4 sm:mt-6 gap-4">
                <p className="text-gray-600 text-base sm:text-lg">
                  <span className="text-green-600 font-semibold text-xl sm:text-2xl">
                    ${price}
                  </span>
                  <span className="line-through text-gray-400 ml-4 sm:ml-6">
                    ${originalPrice}
                  </span>
                </p>
                <button className="text-white bg-blue-600 px-4 py-1 rounded-md">
                  Sale
                </button>
              </div>
            ) : (
              <p className="text-gray-600 text-base sm:text-lg mb-4 mt-4 sm:mt-6">
                <span className="text-green-600 font-semibold text-base sm:text-lg">
                  Please select the Colour and Size to get the quote
                </span>
              </p>
            )}

            {/* Colour Selector */}
            <div className="mb-4 mt-4 sm:mt-5">
              <p className="text-gray-700 mb-2 font-medium">
                Please Select the Colour
              </p>
              <p className="text-gray-700 mb-2 font-medium">Colour</p>
              <select
                onChange={handleThicknessChange}
                value={color}
                className={`border w-full sm:w-40 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md ${cartOpen ? "pointer-events-none opacity-50" : ""}`}
              >
                <option value="">Select Colour</option>
                {details.innerDetails.map((color, index) => (
                  <option key={index} value={color.color}>
                    {color.color}
                  </option>
                ))}
              </select>
            </div>

            {/* Size Selector */}
            <div className="mb-4 mt-4 sm:mt-5">
              <p className="text-gray-600 text-sm sm:text-base">
                The size of a bedframe means how long, wide, and deep it is.
                Please see the chart below to understand the bedframe size
                instructions clearly.
              </p>
              <p className="text-gray-700 mb-2 font-medium mt-2">Size</p>
              <select
                onChange={handleSizeChange}
                value={size}
                className={`border w-full sm:w-40 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md ${cartOpen ? "pointer-events-none opacity-50" : ""}`}
              >
                <option value="">Select size</option>
                {details.innerDetails
                  .find((item) => item.color === color)
                  ?.size_price.map((size_price, index) => (
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

            {cartOpen &&
               (
                <div>
                  <CartFuntionality
                    isOpen={cartOpen}
                    onClose={() => setCartOPen(false)}
                    cartItems={{
                      name: details.name,
                      thickness: color, // Using color instead of undefined thickness
                      size: size,
                      price: price,
                      quantity: counter,
                      totalPrice: price,
                    }}
                  />
                </div>
              ) 
                
              }

            {/* Payment */}
            <div className="mt-4">
              <p className="text-red-800 text-sm sm:text-base">
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
              <p className="text-gray-600 text-sm sm:text-base">
                {details.description}
              </p>
            </div>

            {/* Shipping Info */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Shipping in Canada</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Shipping charges will range from $20 to $50 depending on your
                location. Delivery usually takes 1 to 2 business days.
              </p>
            </div>

            {/* Size Chart */}
            <div className="mt-6 overflow-x-auto">
              <h2 className="text-lg font-semibold mb-2">
                Bed Frame Size Chart
              </h2>
              <table className="w-full text-sm sm:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                      Material
                    </th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                      Colour
                    </th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                      Size
                    </th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                      Width
                    </th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                      Length
                    </th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                      Height
                    </th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {details.innerDetails.map((product) =>
                    product.size_price.map(
                      ({ size, width, length, height, price }, index) => (
                        <tr key={`${product.material}-${size}-${index}`}>
                          {index === 0 ? (
                            <>
                              <td
                                className="border border-gray-300 px-2 sm:px-4 py-2"
                                rowSpan={product.size_price.length}
                              >
                                {product.material}
                              </td>
                              <td
                                className="border border-gray-300 px-2 sm:px-4 py-2"
                                rowSpan={product.size_price.length}
                              >
                                {product.color}
                              </td>
                            </>
                          ) : null}
                          <td className="border border-gray-300 px-2 sm:px-4 py-2">
                            {size}
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-4 py-2">
                            {width}
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-4 py-2">
                            {length}
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-4 py-2">
                            {height}
                          </td>
                          <td className="border border-gray-300 px-2 sm:px-4 py-2">
                            ${price}
                          </td>
                        </tr>
                      )
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        Download assembly instruction {details.assembly_instruction}
      </div>
    </>
  );
};

export default BedWholeDetails;
