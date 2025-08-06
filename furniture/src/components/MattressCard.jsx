import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ImageSlider from "./ImageSlider.jsx"
const MattressCard = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const rendering=0;
  
  const mattressData = [
    {
      category: "Foam-Mattress",
      categoryDescription: `A simple foam mattress offers basic comfort and support using a
              single layer of foam, making it a budget-friendly and lightweight
              option for everyday use. On the other hand, a bamboo mattress
              features a breathable cover made from bamboo fibers, which helps
              regulate temperature and resist moisture, providing a cooler and
              more eco-friendly sleep experience. Together, both options cater
              to different needs—simplicity and affordability with foam, and
              natural freshness with bamboo.`,
      details: [
        {
          name: "Regular Foam Mattress",
          description:
            "Flippable mattress 5 inches thickness. Made up of regular good quality foam. Closed corners for long last life. Packed in strong grip plastic bag",
            image:["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293231/F3-1_unszt9.png","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293229/F2-1_oyxpnz.png","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293229/5inch_view2_231110_bivlfd.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293229/2_80a80fa0-2fbc-46a9-93ce-00235317758f_k4naak.webp"],
          innerDetails: [
            {
              thickness: `3"`,
              size_price: [
                { size: "twin/single", originalPrice: 100, finalPrice: 40 },
              ],
            },

            {
              thickness: `5"`,
              size_price: [
                { size: "twin/single", originalPrice: 110, finalPrice: 60 },
                { size: "double/full", originalPrice: 160, finalPrice: 120 },
                { size: "queen", originalPrice: 170, finalPrice: 135 },
              ],
            },
          ],
        },
        {
          name: "Bamboo Foam Mattress",
          description:
            "Completely springless design. High quality foam covered with stretchable organic fabric. Comfort Level: Medium",
            image:["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293467/IMG_5895_lcrxvk.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293468/bamboo7_mattress_view2_230709_3_1_lhjawt.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293467/bamboo-7_-mattress_view1_230709_3-1-scaled_h2rh8j.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293472/K1_j8y9uz.png"],
          innerDetails: [
            {
              thickness: `7"`,
              size_price: [
                { size: "twin/single", originalPrice: 140, finalPrice: 95 },
                { size: "double/full", originalPrice: 200, finalPrice: 150 },
                { size: "queen", originalPrice: 250, finalPrice: 185 },
                { size: "king", originalPrice: 300, finalPrice: 230 },
              ],
            },
          ],
        },
        {
          name: "Memory Foam Gel Mattress",
          description: `A medium-firm foam mattress offering balanced support and pressure relief, suitable for all sleeping positions. 10" height, 3 premium layers. Cooling gel-infused foam for a cooler night's rest. Backed by a 10-year warranty. 
      Key Features:
      - Three-Layer Comfort: Memory foam, comfort layer, and high-density base support foam.
      - Hypoallergenic Cover: Soft and gentle cover for a hygienic sleep surface.
      - Easy Shipping & Setup: Mattress arrives compressed and boxed, expands in minutes.
      - Versatile Usage: Works with all types of bed frames (box springs, floors, slatted bases, platforms, adjustable beds, hospital beds).
      - 10-Year Warranty: Peace of mind for a decade.
      - Fiberglass-Free: Safe sleeping environment.
      - Free Shipping in Canada: Dispatch next day, delivery in 1-5 days.`,
      image:["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754292563/Job12_240309_view5_240321_zjsrko.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754292563/Job12_240309_view3_240310_1_t78wl6.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754292563/Job12_240309_view2_240310_2_1_nucdu1.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754292563/Job12_240309_view1_240310_3_wbykry.webp"],
          innerDetails: [
            {
              thickness: `10"`,
              size_price: [
                { size: "twin/single", originalPrice: 150, finalPrice: 95 },
                { size: "double/full", originalPrice: 210, finalPrice: 150 },
                { size: "queen", originalPrice: 260, finalPrice: 185 },
                { size: "king", originalPrice: 330, finalPrice: 230 },
              ],
            },
          ],
        },
      ],
    },

    {
      category: "Eurotop-Mattress",
      categoryDescription: `A Euro‑top mattress is a type of pillow-top mattress where the cushioning layer is sewn flush with the edges and located beneath the fabric cover. Unlike traditional pillow-tops—which are visibly stitched on top and may have gaps—Euro-tops present a sleek, uniform appearance  
      Benefits of Euro‑Top Mattresses: Integrated Aesthetic & Feel ,Increased Durability,Stronger Edge Support,Excellent Motion Isolation,Luxurious Feel at a Reasonable Price
       `,
      details: [
        {
          name: "Orthopaedic (Euro Top) Mattress",
          description: ` Experience comfort and support with our  Orthopaedic Euro Top Mattress. It features a sturdy  coil,  spring system with double tempered coils and edge guard for lasting support. Wrapped in special fabric with black edge tape, it combines ½ inch medium firm foam and 20 Oz Hallow Fibre for comfort. The Euro Top includes 1½ inch high-density foam over a ¾ inch foam support base, enhanced with a heavy-duty fibre pad for lumbar support and a ¼ inch quilted border for elegance and extra comfort.Rest Assured with Our Guarantee: This mattress comes with a  warranty, ensuring long-lasting durability and peace of mind. Sleep with confidence, knowing your investment is protected. 
          Comfort Level: Medium Firm  `,
          image:["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293772/9_OrthopaedicEurotop_view2_230718_eecw5v.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293772/9_-Orthopaedic-Euro-top_view1_230718-scaled_kjnupc.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293772/Image_na6myg.jpg","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754293943/submitReview_J2OP6K2Gmh6BGKPswIyL_1702244062193_9A4755B7-0193-4D53-BF38-422E90535031_mny1k4.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754294084/Job10_View2_231125_2_kq1bny.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754294082/2a_df3ea1.webp"],
          innerDetails: [
            {
              thickness: `10"`,
              size_price: [
                { size: "twin/single", originalPrice: 250, finalPrice: 150 },
                { size: "double/full", originalPrice: 260, finalPrice: 170 },
                { size: "queen", originalPrice: 290, finalPrice: 200 },
                { size: "king", originalPrice: 310, finalPrice: 265 },
              ],
            },
            {
              thickness: `12"`,
              size_price: [
                { size: "twin/single", originalPrice: 110, finalPrice: 220 },
                { size: "double/full", originalPrice: 350, finalPrice: 270 },
                { size: "queen", originalPrice: 420, finalPrice: 365 },
                { size: "king", originalPrice: 460, finalPrice: 395 },
              ],
            },
          ],
        },
        {
          name: "High Density pillow top Mattress",
          description: `Sink into layers of comfort with the CloudRest HD Pillow Top Mattress, expertly crafted to deliver plush softness on the surface and resilient support beneath. Built with a solid high-density foam core, this mattress ensures proper spinal alignment and lasting durability, while the generously padded pillow top creates a cushiony feel ideal for a luxurious night’s rest. The pillow top layer is stitched directly onto the mattress surface, adding a thick, cloud-like buffer that gently cradles your body—relieving pressure on the hips, shoulders, and joints. Underneath, the HD foam base provides strong, consistent support that resists sagging and maintains shape over time, making it perfect for both back and side sleepers. Wrapped in a premium, breathable fabric cover with quilted detailing, the CloudRest enhances airflow and moisture control, keeping your sleep environment fresh and cool. Its hypoallergenic, dust-mite-resistant materials make it a safe and comfortable choice for sensitive sleepers. Whether you’re upgrading your master suite or furnishing a guest bedroom, the CloudRest HD Pillow Top Mattress offers the perfect balance of softness, support, and long-lasting quality—designed for those who want every night to feel like a retreat.`,
          image:["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754295008/Dreamstar-Classic-Pillowtop-Mattress_neugon.jpg","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754295007/Dreamstar-Classic-Pillowtop-Mattress-for-Sale-600x600_olg50g.jpg","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754295005/Dreamstar-Classic-Pillowtop-Mattress-Toronto-600x600_shvxju.jpg"],
          innerDetails: [
            {
              thickness: `9"`,
              size_price: [
                { size: "twin/single", originalPrice: 255, finalPrice: 155 },
                { size: "double/full", originalPrice: 290, finalPrice: 210 },
                { size: "queen", originalPrice: 310, finalPrice: 265 },
                { size: "king", originalPrice: 350, finalPrice: 285 },
              ],
            },
          ],
        },
        {
          name: "High Density  Eurotop Mattress",
          description: `Indulge in plush comfort without sacrificing support with the Luxora HD EuroTop Mattress, crafted to deliver hotel-style luxury right in your bedroom. Featuring a thick, high-density foam core and an extra layer of soft EuroTop padding, this mattress provides a beautifully balanced sleep surface—firm at the core for alignment, yet sumptuously soft at the top for comfort. The EuroTop layer is seamlessly stitched into the mattress, offering a cleaner, more upscale appearance than traditional pillow tops while eliminating the feeling of separation between layers. This design enhances body contouring and helps relieve pressure points, especially at the hips and shoulders, for deeper, uninterrupted sleep. The Luxora is built with durable HD foam that resists sagging, maintaining its shape and support for years. It’s wrapped in a breathable, knitted fabric cover that promotes airflow and regulates temperature, keeping you cool and comfortable through the night. Whether you’re a side, back, or combination sleeper, the Luxora HD EuroTop Mattress offers a perfect blend of support, softness, and sophistication—ideal for those who crave both orthopedic benefits and plush, cloud-like rest.`,
          image:["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754300778/high_density_1_ii57m3.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754300780/highdenisity_mattonly_close_2000x_auipae.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754300779/highdensity_set_right_2000x_eb8bnc.webp"],
          innerDetails: [
            {
              thickness: `10"`,
              size_price: [
                { size: "twin/single", originalPrice: 180, finalPrice: 165 },
                { size: "double/full", originalPrice: 260, finalPrice: 235 },
                { size: "queen", originalPrice: 360, finalPrice: 285 },
                { size: "king", originalPrice: 400, finalPrice: 330 },
              ],
            },
            {
              thickness: `12"`,
              size_price: [
                { size: "twin/single", originalPrice: 310, finalPrice: 240 },
                { size: "double/full", originalPrice: 440, finalPrice: 340 },
                { size: "queen", originalPrice: 450, finalPrice: 395 },
                { size: "king", originalPrice: 550, finalPrice: 495 },
              ],
            },
          ],
        },
      ],
    },

    {
      category: "HD-Double-Sided-Mattress",
      categoryDescription: `A double-sided mattress is designed to be flipped and used on both sides, offering extended durability and more even wear over time. Each side typically has the same comfort layers, allowing you to rotate and flip the mattress regularly to maintain its shape and support. This type of mattress is a practical, long-lasting option for those looking to get the most value and lifespan from their purchase.
       `,
      details: [
        {
          name: "High Density Double Sided Mattress",
          description: ` Indulge in plush comfort without sacrificing support with the Luxora HD EuroTop Mattress, crafted to deliver hotel-style luxury right in your bedroom. Featuring a thick, high-density foam core and an extra layer of soft EuroTop padding, this mattress provides a beautifully balanced sleep surface—firm at the core for alignment, yet sumptuously soft at the top for comfort. The EuroTop layer is seamlessly stitched into the mattress, offering a cleaner, more upscale appearance than traditional pillow tops while eliminating the feeling of separation between layers. This design enhances body contouring and helps relieve pressure points, especially at the hips and shoulders, for deeper, uninterrupted sleep.The Luxora is built with durable HD foam that resists sagging, maintaining its shape and support for years. It’s wrapped in a breathable, knitted fabric cover that promotes airflow and regulates temperature, keeping you cool and comfortable through the night. Whether you’re a side, back, or combination sleeper, the Luxora HD EuroTop Mattress offers a perfect blend of support, softness, and sophistication—ideal for those who crave both orthopedic benefits and plush, cloud-like rest.  `,
          image:["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754301554/0001605_oasis-luxury-mattress-set_1000_b3u18b.jpg","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754301556/0001606_oasis-luxury-mattress-set_1000_u5s3z6.jpg","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754301879/0001607_oasis-luxury-mattress_1000_ewnjhm.jpg","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754301550/20250417165455_madeincanada_svjwet.jpg","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754301551/20250401133210_img_4190_i1gdf7.jpg"],
          innerDetails: [
            {
              thickness: `12"`,
              size_price: [
                { size: "double/full", originalPrice: 420, finalPrice: 365 },
                { size: "queen", originalPrice: 530, finalPrice: 430 },
                { size: "king", originalPrice: 560, finalPrice: 475 },
              ],
            },
          ],
        },
      ],
    },

    {
      category: "Extra-Firm(Hard)-Mattress",
      categoryDescription: `An extra firm hard mattress offers the highest level of support with minimal sinkage, making it ideal for back and stomach sleepers or those with back pain. It keeps the spine properly aligned by preventing the body from sinking too deeply into the mattress. This type of mattress is especially suitable for people who prefer a very solid sleeping surface and need extra support for better posture and pressure relief.
       `,
      details: [
        {
          name: "Extra Firm Mattress",
          description: `The SpineSure Extra Firm Mattress is specifically engineered for those who need uncompromising support and proper body alignment throughout the night. Designed with medical-grade firmness in mind, this mattress features a dense core of ultra-high-density foam or a reinforced spring system that offers maximum resistance against sinking—ideal for sleepers who prefer a firm, stable surface or suffer from chronic back pain. Unlike softer mattresses that contour deeply, the SpineSure provides a flat, supportive feel that helps maintain correct posture, reduces pressure on the lower back, and prevents spinal misalignment. Its no-sink construction ensures even weight distribution, making it especially suitable for stomach and back sleepers. The mattress is topped with a breathable, quilted cover crafted from anti-allergenic fabric that resists dust mites and maintains a cool, hygienic sleep environment. With minimal motion transfer and durable edge support, the SpineSure Extra Firm Mattress offers not just orthopedic benefits but also long-lasting performance—even under heavier body weight.Ideal for those who demand structured support and long-term durability, SpineSure is the mattress of choice for a restorative and balanced sleep experience. `,
          image:["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754302554/Beautyrest-Traditional-line-fabric_d67c81c3-1ce0-4401-abc9-2a67756d0e4a_mwg6wv.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754302700/stonehengemattresssidemjmfurniture_800x_e3biot.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754302703/stonehengetopmjmfurniture_800x_eex5il.webp","https://res.cloudinary.com/dkbyjjnw5/image/upload/v1754302555/BeautyrestDr.HardTightTopExtraFirmMattress_cgbxva.webp"],
          innerDetails: [
            {
              thickness: `8"`,
              size_price: [
                { size: "twin/single", originalPrice: 200, finalPrice: 160 },
                { size: "double/full", originalPrice: 310, finalPrice: 240 },
                { size: "queen", originalPrice: 330, finalPrice: 265 },
                { size: "king", originalPrice: 400, finalPrice: 330 },
              ],
            },
            {
              thickness: `12"`,
              size_price: [
                { size: "double/full", originalPrice: 550, finalPrice: 430 },
                { size: "queen", originalPrice: 580, finalPrice: 495 },
                { size: "king", originalPrice: 600, finalPrice: 585 },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      {mattressData.map((mattresData) => (
        <div key={mattresData.category} id={`${mattresData.category}`}>
          <div className="flex justify-center items-center  bg-gray-100 px-4">
            <div className="max-w-lg p-8 text-center border border-gray-200 bg-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {mattresData.category}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {mattresData.categoryDescription}
              </p>
            </div>
          </div>

          {/* //////////displaying card for categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 mb-10">
            {mattresData.details.map((detail) => (
                <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition " key={detail.name}>
                  
                  <ImageSlider images={detail.image}  rendering={rendering}/>

                  
                
                <Link  to={`${detail.name}`} state={{ detail }}>
              
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

export default MattressCard;
