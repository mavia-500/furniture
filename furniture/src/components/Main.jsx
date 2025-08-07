import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const categories = [
    {
      categoryName: "Foam mattress",
      categoryDescription:
        "Our premium foam range includes breathable Simple Foam for everyday support, naturally fresh Bamboo Foam for enhanced hygiene, and cooling Memory Gel Foam that adapts to your body for ultimate comfort.",
      imageUrl:
        "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754292563/Job12_240309_view5_240321_zjsrko.webp",
      link: "/mattress#Foam-Mattress",
    },
    {
      categoryName: "Eurotop Mattress",
      categoryDescription:
        "Designed for superior back support, this mattress combines firm, high-density foam with a durable spring system to promote proper spinal alignment.It offers long-lasting support, reduced pressure points, and enhanced durability for a restful night’s sleep.",
      imageUrl:
        "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293772/9_OrthopaedicEurotop_view2_230718_eecw5v.webp",
      link: "/mattress#Eurotop-Mattress",
    },
    {
      categoryName: "HD Double Sided Mattress",
      categoryDescription: `
An HD double-sided mattress is a high-density mattress designed to be flipped and used on both sides, extending its lifespan and maintaining consistent comfort. These mattresses are built with durable, high-density foams . `,
      imageUrl:
        "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754301554/0001605_oasis-luxury-mattress-set_1000_b3u18b.jpg",
      link: "/mattress#HD-Double-Sided-Mattress",
    },
    {
      categoryName: "Extra Firm(Hard) Mattress",
      categoryDescription:
        `
An Extra Firm (Hard) Mattress is designed to provide maximum support with minimal cushioning, making it ideal for people who prefer a firm sleeping surface. It helps maintain proper spinal alignment and reduces sinking, which can benefit back and stomach sleepers or individuals with back pain.`,
      imageUrl:
        "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754302700/stonehengemattresssidemjmfurniture_800x_e3biot.webp",
      link: "/mattress#Extra-Firm(Hard)-Mattress",
    },
    {
      categoryName: "Storage Bed Frames",
      categoryDescription:
        "Storage bed frames are designed with built-in drawers orcompartments, offering a smart way to save space and keep your bedroom organized. They combine style and functionality, providing extra storage without taking up additional floor space.",
      imageUrl:
        "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754136430/h2125_spxvv7.jpg",
      link: "/bedframes#Storage-Bed-Frames",
    },
    {
      categoryName: "Metal Bed Frames",
      categoryDescription:
        "Metal bed frames are strong, durable, and easy to maintain,offering reliable support for your mattress. With sleek, modern designs or classic styles, they suit any bedroom décor while providing a sturdy foundation that lasts for years.",
      imageUrl:
        "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754142196/2201B_zw6itc.jpg",
      link: "/bedframes#Metal-Bed-Frames",
    },
    {
      categoryName: "Platform With Head Board",
      categoryDescription:
        "Platform bed frames feature a low-profile design with a solid or slatted base, eliminating the need for a box spring. They offer strong, even support for your mattress and add a modern, minimalist touch to any bedroom.",
      imageUrl:
        "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754143251/2110-linen_light-grey_WEB_cq3459.jpg",
      link: "/bedframes#Plat-Form-Bed-Frame-With-Head-Board",
    },
    {
      categoryName: " Platform Without HeadBoard",
      categoryDescription:
        "A platform bed frame without a headboard offers a clean, minimalist look that’s perfect for modern spaces. Its sturdy base provides excellent mattress support and allows you the freedom to customize your bedroom décor to suit your style.",
      imageUrl:
        "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754142794/T2400Web_kjnuga.png",
      link: "/bedframes#Platform-Without-HeadBoard",
    },
    {
      categoryName: "Bunk Bed Frames",
      categoryDescription:
        "Bunk bed frames are a smart space-saving solution, featuring two  stacked beds—perfect for kids’ rooms or shared spaces. They combine functionality with fun, maximizing floor space while providing sturdy and safe sleeping arrangements.",
      imageUrl:
        "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754146721/T2700GWeb_xetaxm.png",
      link: "/bedframes#Bunk-Bed-Frames",
    },
    {
      categoryName: "Box Springs",
      categoryDescription:
        " A box spring is a supportive base made of a sturdy wooden or metal frame covered in fabric, often with springs or a metal grid inside. It sits under your mattress to provide extra support, absorb shock, and help extend the life of your mattress.",
      imageUrl:
        "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754135491/split_box_spring_a_tj1vem.webp",
      link: "/boxspring",
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
                    src={imageUrl}
                    alt="Foam Mattress"
                    className="mx-auto mb-4 h-60 w-full"
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
