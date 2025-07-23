import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const categories = [
    {
      categoryName: "Foam Mattress",
      categoryDescription:
        "Our premium foam range includes breathable Simple Foam for everyday support, naturally fresh Bamboo Foam for enhanced hygiene, and cooling Memory Gel Foam that adapts to your body for ultimate comfort.",
      imageUrl: "",
      link: "/mattress#foam-mattress",
    },
    {
      categoryName: "Eurotop Mattress",
      categoryDescription:
        "Designed for superior back support, this mattress combines firm, high-density foam with a durable spring system to promote proper spinal alignment.It offers long-lasting support, reduced pressure points, and enhanced durability for a restful night’s sleep.",
      imageUrl: "",
      link: "/mattress#eurotop-mattress",
    },
    {
      categoryName: "Double Sided Mattress",
      categoryDescription:
        "Designed for superior back support, this mattress combines firm, high-density foam with a durable spring system to promote proper spinal alignment.It offers long-lasting support, reduced pressure points, and enhanced durability for a restful night’s sleep.",
      imageUrl: "",
      link: "/mattress#double-sided-mattress",
    },
    {
      categoryName: "Extra Firm Hard Mattress",
      categoryDescription:
        "Designed for superior back support, this mattress combines firm     high-density foam with a durable spring system to promote properspinal alignment.It offers long-lasting support, reduced pressurepoints, and enhanced durability for a restful night’s sleep.",
      imageUrl: "",
      link: "/mattress#extra-firm-hard-mattress",
    },
    {
      categoryName: "Storage Bed Frames",
      categoryDescription:
        "Storage bed frames are designed with built-in drawers orcompartments, offering a smart way to save space and keep your bedroom organized. They combine style and functionality, providing extra storage without taking up additional floor space.",
      imageUrl: "",
      link: "/bedframes#storage-bedframes",
    },
    {
      categoryName: "Metal Bed Frames",
      categoryDescription:
        "Metal bed frames are strong, durable, and easy to maintain,offering reliable support for your mattress. With sleek, modern designs or classic styles, they suit any bedroom décor while providing a sturdy foundation that lasts for years.",
      imageUrl: "",
      link: "/bedframes#metal-bedframes",
    },
    {
      categoryName: "Platform Bed Frames",
      categoryDescription:
        "Platform bed frames feature a low-profile design with a solid or slatted base, eliminating the need for a box spring. They offer strong, even support for your mattress and add a modern, minimalist touch to any bedroom.",
      imageUrl: "",
      link: "/bedframes#platform-bedframes",
    },
    {
      categoryName: " Platform Without HeadBoard",
      categoryDescription:
        "A platform bed frame without a headboard offers a clean, minimalist look that’s perfect for modern spaces. Its sturdy base provides excellent mattress support and allows you the freedom to customize your bedroom décor to suit your style.",
      imageUrl: "",
      link: "/bedframes#platform-without-headboard",
    },
    {
      categoryName: "Bunk Bed Frames",
      categoryDescription:
        "Bunk bed frames are a smart space-saving solution, featuring two  stacked beds—perfect for kids’ rooms or shared spaces. They combine functionality with fun, maximizing floor space while providing sturdy and safe sleeping arrangements.",
      imageUrl: "",
      link: "/bedframes#bunkned",
    },
    {
      categoryName: "Box Springs",
      categoryDescription:
        " A box spring is a supportive base made of a sturdy wooden or metal frame covered in fabric, often with springs or a metal grid inside. It sits under your mattress to provide extra support, absorb shock, and help extend the life of your mattress.",
      imageUrl: "",
      link: "/boxspring#boxspring",
    },
  ];
  return (
    <div className="pt-20">
      {" "}
      {/* To avoid overlap with fixed navbar */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to HILYAH
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Find the perfect mattress, bed frame, and box spring to complete your
          comfort zone and transform your bedroom into a place of pure
          relaxation. Whether you’re looking for plush comfort, firm support, or
          a balanced combination of both, our collection is designed to suit
          every sleeper’s needs. Pair your mattress with a durable and stylish
          bed frame and a supportive box spring to create the ideal foundation
          for restful nights and refreshed mornings. With thoughtfully crafted
          options, you can design a sleep setup that not only enhances comfort
          but also adds elegance to your bedroom space.
        </p>
        {/* <video>
        <source src="" />
        
       </video> */}
      </section>
      {/* Featured Categories */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* /////////////////foam mattress */}
          {categories.map(
            ({ categoryName, categoryDescription, imageUrl, link }) => (
              <Link to={`${link}`} key={categoryName}>
                <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
                  <img
                    src="/public/bamboo7.webp"
                    alt="Foam Mattress"
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2">{categoryName}</h3>
                  <p className="text-gray-600 text-sm">{categoryDescription}</p>

                  <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out">
                    View
                  </button>
                </div>
              </Link>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Main;
