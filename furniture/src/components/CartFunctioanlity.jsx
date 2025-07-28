import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const CartFuntionality = ({ isOpen, onClose, cartItems }) => {
  // console.log(cartItems);
  const [price, setPrice] = useState(0);
  const [cartDetails, setCartDetails] = useState([]);
  console.log(cartDetails);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartDetails")) || [];

    setCartDetails(() => [...savedCart, cartItems]);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
  }, [cartDetails]);

  const handleCounter = (index, type) => {
    setCartDetails((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity:
                type === "increament"
                  ? item.quantity + 1 
                  : item.quantity > 1
                  ? item.quantity - 1 
                  : 1,
            }
          : item
      )
    );
  };

  const handelDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this item from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const remainingItems = cartDetails.filter((_, i) => index !== i);
        setCartDetails(remainingItems);
        Swal.fire("Deleted!", "Your item has been removed.", "success");
      }
    });
  };
let finalPrice=0
useEffect(()=>{
  setPrice(()=>{
    cartDetails.map((cartitem)=>{
       return finalPrice=finalPrice+cartitem.price
    })
    return finalPrice
  })
},[cartDetails])
  
console.log(price)
  return (
    // Overlay Background
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-black shadow-lg p-5 transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="flex justify-between text-white items-center border-b pb-3 mb-4 mt-20 ">
          <h2 className="text-xl font-semibold ">Your Cart</h2>
          <button className=" hover:bg-green-800 text-2xl" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartDetails.length === 0 ? (
            <p className="text-gray-500 text-center">Cart is empty</p>
          ) : (
            cartDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-2 rounded"
              >
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <button
                      className="cursor-pointer"
                      onClick={() => handelDelete(index)}
                    >
                      <RiDeleteBin6Line
                        size={"25"}
                        className=" text-green-800 ml-3"
                      />
                    </button>
                  </div>
                  <p className="text-sm ">{item.size}</p>
                  <p className="text-sm">Thickness: {item.thickness}</p>
                  <div className="space-x-5  flex mt-5">
                    <button
                      onClick={() => handleCounter(index, "increament")}
                      className="  px-3 py-1 border rounded-2xl bg-gray-100 hover:bg-gray-200"
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleCounter(index, "decrement")}
                      className="px-3 py-1 border rounded-2xl bg-gray-100 hover:bg-gray-200"
                    >
                      -
                    </button>
                  </div>

                  <div className="mt-5">
                    <img className="h-35 w-45" src="/bed.webp" alt="" />
                  </div>
                  <p className="text-4xl mt-5 text-gray-600">
                    {" "}
                    <b>${item.quantity * item.price}</b>{" "}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <p className="text-white">final price:{price}</p>
        </div>

        {/* Checkout Button */}
        {/* {cartItems.length > 0 && ( */}
        <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Checkout
        </button>
        {/* // )} */}
      </div>
    </div>
  );
};

export default CartFuntionality;
