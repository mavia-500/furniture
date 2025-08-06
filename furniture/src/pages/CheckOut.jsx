import React, { useEffect, useState } from "react";
import sendEmail from "../components/SendingEmail";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate=useNavigate()
  // const [subTotal, setSubTotal] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    addional_note: "",
   
  });

  // console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData,cartProducts,subTotal,setFormData)
    setTimeout(()=>{
      navigate('/')  
    
    },3000)
    
  };

  const cartProducts = JSON.parse(localStorage.getItem("cartDetails"));
  // console.log(cartProducts);

  
  const subTotal = cartProducts.reduce((acc, product) => acc + product.totalPrice, 0);
  // Format cart items for email

  // console.log(subTotal);
  return (
    <div className="mt-20 flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto px-4">
      {/* LEFT: Checkout Form */}
      <div className="flex-1">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-md rounded-xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="border p-3 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Optional"
              onChange={handleChange}
              className="border p-3 rounded w-full"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="border p-3 rounded w-full"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              className="border p-3 rounded w-full"
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="border p-3 rounded w-full"
              required
            />
            <input
              placeholder="Province"
              name="province"
              onChange={handleChange}
              className="border p-3 rounded w-full"
              required
            />

            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code (e.g. M1B 2K3)"
              onChange={handleChange}
              className="border p-3 rounded w-full uppercase"
              required
            />

            <textarea
              name="addional_note"
              onChange={handleChange}
              placeholder="Addional Note if any"
              className="border p-3 rounded w-full uppercase"
            />
          </div>

          {/* Shipping Method */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Shipping Method</h3>
            <span className="ml-2">Standard (1–2 days) — $20–$50-Same day delivery also avaliable</span>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <span className="ml-2">
              Credit Card and Cash on Delivery both are accepted
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* RIGHT: Cart Products */}
      <div className="w-full lg:w-1/3 bg-gray-50 p-4 rounded-xl shadow-md space-y-4 max-h-[600px] overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
          Your Cart
        </h2>

        {cartProducts.length === 0 ? (
          <p className="text-gray-500 text-center">Cart is empty</p>
        ) : (
          cartProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg p-3 space-y-2 border"
            >
              {/* Product Info */}
              <div className="relative  flex items-center space-x-4">
                <img
                  className=" w-20 h-20 rounded-lg object-contain border"
                  src="/bed.webp"
                  alt="Product"
                />
                <p className="absolute top-0 left-0 w-4 h-4 flex items-center justify-center text-white text-xs font-bold bg-amber-500 rounded-full border border-amber-500">
                  {product.quantity}
                </p>

                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {product.size} / {product.thickness}
                  </p>
                  <p className="text-base font-bold text-green-700">
                    <span className="text-sm text-gray-400 ">{product.quantity} x</span>  ${product.price}
                  </p>
                </div>
              </div>

              {/* Subtotal & Total */}
            </div>
          ))
        )}
        <div className="mt-10 flex justify-between text-sm border-t pt-2 text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium">${subTotal}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold border-t pt-3">
          <span>Total</span>
          <span className="text-green-700">${subTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
