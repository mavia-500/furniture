import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
const BoxSpring = () => {
  const rendering=0
  const boxspring = [
    {
      category: "Box Spring",
      description:
        "A box spring is a supportive foundation placed beneath a mattress to provide extra height, stability, and shock absorption. It consists of a wooden or metal frame filled with springs or a solid core and is covered with fabric. Box springs help extend the life of the mattress by absorbing impact and ensuring even weight distribution. They are commonly used with traditional bed frames and are ideal for sleepers who prefer a higher bed profile and added support.",

      details: [
        {
          name: "Simple Box Spring",
          description: `Extra Support – Provides a sturdy, even base for the mattress, reducing sagging and improving durability.Increased Mattress Height – Raises the bed for easier access and a more traditional look.Shock Absorption – Absorbs movement and pressure, enhancing comfort and protecting the mattress.Improved Airflow – Elevates the mattress for better ventilation, helping keep it fresh.Cost-Effective – A simple box spring is budget-friendly and works well with most standard bed frames.`,
          size_price: [
            { size: "single/twin", price: 80 },
            { size: "double", price: 100 },
            { size: "queen", price: 115 },
          ],
          image: [
            "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754132969/box_spring_jdmftx.webp",
            "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754132969/box_springn_1_l9rbbr.webp",
            "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754133312/WhatsApp_Image_2025-08-02_at_4.14.30_PM_efp3si.jpg",
          ],
        },
        {
          name: "Split Box Spring",
          description: `Easier to Move and Transport – The split design comes in two pieces, making it simple to navigate through doorways, staircases, and tight spaces.Same Support as Standard Box Spring – Offers the same stability and mattress support as a single-piece box spring.Ideal for Larger Beds – Perfect for king or queen sizes where a full box spring may be too bulky to handle.Flexible Setup – Each half can be positioned separately for easier installation on bed frames.Durability – Reduces strain on the frame during movement, helping maintain structural integrity over time.`,
          size_price: [
            { size: "queen-split", price: 150 },
            { size: "king-split", price: 160 },
          ],
          image: [
            "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754135491/split_box_spring_a_tj1vem.webp",
            "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754135603/split_box_yh9z0b.jpg",
          ],
        },
      ],
    },
  ];
  return (
    <div id="foam-mattress" className="mt-20">
      {boxspring.map((boxspring,index) => (
        <div key={index}>
          <div className="flex justify-center items-center  bg-gray-100 px-4">
            <div className="max-w-lg p-8 text-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {boxspring.category}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {boxspring.description}
              </p>
            </div>
          </div>

          {/* //////////displaying card for categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
            {boxspring.details.map((detail, index) => (
              
              <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
                <ImageSlider images={detail.image} rendering={rendering} />
                 <Link to={`${detail.name}` } key={index} state={{detail}}>
                <h3 className="font-bold text-lg mb-2">{detail.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {detail.description}
                </p>

                <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out">
                  View
                </button>
                </Link>
              </div>
              
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxSpring;
