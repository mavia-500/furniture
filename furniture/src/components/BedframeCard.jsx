import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const BedframeCard = () => {

const location=useLocation();
 useEffect(()=>{
const id=location.hash.replace("#","")
const element=document.getElementById(id)
if(element){
  element.scrollIntoView({behavior:"smooth"})

}
 },[location])
  const BedframesData = [
    {
      category: "Storage-Bed-Frames",
      categoryDescription: `Storage bed frames are functional bed designs that come with built-in storage compartments, such as drawers, shelves, or lift-up platforms. They help maximize space by providing convenient storage for items like bedding, clothes, or personal belongings—perfect for smaller rooms or anyone looking to reduce clutter. Storage beds combine comfort and practicality, making them a smart solution for organized living.`,
      details: [
        {
          name: "H2125 Storage Bed Frame",
          description: `Achieve the perfect blend of style and functionality with our contemporary storage platform bed. This bed is a masterclass in form and function, offering you the best of both world Ample Storage:Experience the convenience of two large front drawers that provide abundant storage space. Say goodbye to clutter and hello to organized bliss. Soft Button Tufted, Adjustable Headboard: Indulge in the soft button tufted, adjustable headboard that not only enhances the overall aesthetic but also offers customizable comfort. It’s a showstopper that brings sophistication to your space. Style and Utility in Perfect Harmony: =Why compromise when you can have it all? This bed seamlessly combines chic style with practicality, creating an ambience of elegance and convenience in your bedroom. Elevate your sleeping experience to a whole new level. Redefine your space and embrace a world of style and storage with this remarkable bed.Weight Capacities (lb): Single: 400 | Full: 500 | Queen: 500 | King 650`,
          assembly_instruction:"pdf file link",
          capacity_twin:400,
          capacity_double:500,
            capacity_queen:500,
            capacity_king:650,
          color_charcoal_linen: {
            material:"Linen Fabric",
            color:"charcoal",
            single_price: { size: "twin/single", price: 240,width:`40"`,length:`76"`,height:`43-57` },
            double_price: { size: "double/full", price: 340,width:`55"`,length:`76"`,height:`43-57` },
            queen_price: { size: "twin/single", price: 400,width:`61"`,length:`81"`,height:`43-57`  },
            king_price: { size: "twin/single", price: 490,width:`80"`,length:`81"`,height:`43-57` },
          },
          color_cgray_linen: {
            material:"Linen Fabric",
            color:"Grey",
            single_price: { size: "twin/single", price: 240,width:`40"`,length:`76"`,height:`43-57` },
            double_price: { size: "double/full", price: 340,width:`55"`,length:`76"`,height:`43-57` },
            queen_price: { size: "queen", price: 400,width:`61"`,length:`81"`,height:`43-57` },
            king_price: { size: "king", price: 490,width:`80"`,length:`81"`,height:`43-57` },
          },
        },
        {
            name: "H2120 Storage Bed Frame",
            description: `Experience the perfect fusion of style and functionality with our contemporary storage platform bed. Designed to transform your bedroom into a sanctuary of elegance, this bed boasts a host of impressive features.Stylish Storage Solution:Maximize your space with two large front drawers that offer ample storage for all your essentials. Keep your bedroom clutter-free and beautifully organized.Tufted, Adjustable Headboard:Indulge in the allure of a tufted, adjustable headboard that not only looks stunning but also provides customizable comfort. It’s a statement piece that adds sophistication to your space.Style and Storage in Harmony:Why choose between style and function when you can have both? This bed harmoniously combines sleek aesthetics with practicality, enhancing your bedroom’s overall appeal.Elevate your sleeping experience with a bed that defines the perfect balance between form and function. Redefine your bedroom today and unlock a world of convenience and style.Weight Capacities (lb):  Full: 500 | Queen: 500 | King: 650`,
            assembly_instruction:"pdf file link",
           
          capacity_double:500,
            capacity_queen:500,
            capacity_king:650,
            color_black: {
              material:"Leatherette Fabric",
              color:"black",
              double_price: { size: "double/full", price: 350,width:`55"`,length:`76"`,height:`43-57` },
              queen_price: { size: "queen", price: 400,width:`61"`,length:`81"`,height:`43-57`  },
              king_price: { size: "king", price: 490,width:`80"`,length:`81"`,height:`43-57` },
            },
            color_white: {
              material:"Leatherette Fabric",
              color:"White",
              double_price: { size: "double/full", price: 350,width:`55"`,length:`76"`,height:`43-57` },
              queen_price: { size: "queen", price: 400,width:`61"`,length:`81"`,height:`43-57` },
              king_price: { size: "king", price: 490,width:`80"`,length:`81"`,height:`43-57` },
            },

            color_white: {
                material:"Linen Fabric",
                color:"Grey",
                double_price: { size: "double/full", price: 350,width:`55"`,length:`76"`,height:`43-57` },
                queen_price: { size: "queen", price: 400,width:`61"`,length:`81"`,height:`43-57` },
                king_price: { size: "king", price: 490,width:`80"`,length:`81"`,height:`43-57` },
              },
          },
          {
            name: "H2334 Storage PlatForm Bed Frame",
            description: `Discover the perfect blend of style and functionality with our modern storage bed, designed to elevate your bedroom decor while offering practical storage solutions. Here’s why you’ll love it:Sophisticated Design:Featuring channel tufted, soft velvet fabric and brushed gold metal trim, this bed exudes luxury and contemporary elegance, making it a statement piece in any bedroom.Ample Storage:Say goodbye to clutter! With four spacious pull-out basket drawers, you’ll have ample space to store bedding, clothing, and other essentials, keeping your bedroom tidy and organized.No Box Spring Needed:Enjoy a streamlined setup with the sturdy metal mattress support that eliminates the need for a box spring, providing both convenience and a sleek, modern look.Durable Construction:Crafted with high-quality materials, this bed is designed to last, offering both stability and support for a comfortable night’s sleep.Versatile Style:The combination of soft velvet and gold accents makes this bed a versatile addition to any decor style, seamlessly blending with both modern and classic aesthetics.Transform your bedroom into a luxurious retreat with our stylish storage bed.Weight Capacities (lb): Full: 500 | Queen: 500 | King: 650`,
            capacity_double:500,
            capacity_queen:500,
            capacity_king:650,
            assembly_instruction:"pdf file link",
            color_black: {
              material:"Velvet",
              color:"black",
              double_price: { size: "double/full", price: 350,width:`55"`,length:`76"`,height:`42"` },
              queen_price: { size: "queen", price: 400,width:`63"`,length:`82"`,height:`42"` },
              king_price: { size: "king", price: 490,width:`81"`,length:`82"`,height:`42"` },
            },
            color_white: {
              material:"Velvet",
              color:"Off-White",
              double_price: { size: "double/full", price: 350,width:`55"`,length:`76"`,height:`42"` },
              queen_price: { size: "queen", price: 400,width:`63"`,length:`82"`,height:`42"` },
              king_price: { size: "king", price: 490,width:`81"`,length:`82"`,height:`42"` },
            },
          },

          {
            name: "H2152 Storage PlatForm Bed Frame",
            description: `DescriptionElevate your bedroom’s storage and style with our platform bed. Whether you’re seeking ample storage solutions or a chic, contemporary look, this bed is designed to meet your needs and exceed your expectations. Experience a clutter-free, elegant, and comfortable bedroom like never before.Abundant Storage:Experience a clutter-free bedroom with our platform bed’s storage prowess. It boasts two foot-board drawers and two side drawers, allowing you to neatly stow away your belongings, ensuring a clean and organized space.Elegant Design:Draped in beautiful charcoal grey or white, linen-style fabric, this platform bed complements various decor styles while adding a touch of elegance to your bedroom.Contemporary Elegance:Our platform bed is a visual masterpiece, featuring deep button tufting and clean lines. It seamlessly blends modern design with timeless elegance, elevating your bedroom decor.Smooth Glides:Enjoy effortless access to your stored items with the full extension metal glides on the drawers. The smooth gliding mechanism ensures convenience and easy organization.Slumber in Style:With sturdy slats included, this platform bed eliminates the need for a box spring. You can rest comfortably and securely in style.Weight Capacities (lb): Full: 550 | Queen: 650 | King: 700`,
            assembly_instruction:"pdf file link",
           
          capacity_double:550,
            capacity_queen:650,
            capacity_king:700,
            color_charcoal_grey: {
              material:"Linen",
              color:"Charcoal Grey",
              double_price: { size: "double/full", price: 535,width:`57"`,length:`78"`,height:`44"` },
              queen_price: { size: "queen", price: 565,width:`63"`,length:`83"`,height:`44"`  },
              king_price: { size: "king", price: 680,width:`81"`,length:`83"`,height:`44"` },
            },
            color_white: {
              material:"Linen",
              color:"White",
              double_price: { size: "double/full", price: 535,width:`57"`,length:`78"`,height:`44"` },
              queen_price: { size: "queen", price: 565,width:`63"`,length:`83"`,height:`44"` },
              king_price: { size: "king", price: 680,width:`81"`,length:`83"`,height:`44"` },
            },
          },

          {
            name: "H2100 Storage Captain's Bed Frame",
            description: `Upgrade your space with a captain’s daybed that offers not only a comfortable sleeping solution but also convenient storage options and a pull-out trundle for guests. Solid wood construction ensures durability, and the included slats make it a hassle-free choice. Make the most of your space with this versatile and stylish daybed.Space-Saving Marvel:Our 39″ Captain’s Daybed is the perfect solution for those tight on space. It combines sleeping, storage, and versatility in one elegant piece of furniture, making the most of your room.Solid Wood Durability:Crafted from solid wood, this daybed is built to last. It offers a sturdy sleeping space that ensures durability and reliability for years to come.Trundle and Drawers:When space is a premium, you need options. This daybed features a side drawer that pulls out to reveal both a trundle for an additional mattress (sold separately) and three deep drawers, providing extra storage space for your convenience.Slats Included:No need for a bulky box spring. This daybed comes with slats, offering excellent mattress support and eliminating the need for an additional purchase.Elegant and Functional:With its stylish design and multi-functional features, our Captain’s Daybed marries form and function perfectly. It’s a smart choice for any room where space and style are equally important.Weight Capacity: 300lbs

`,
            assembly_instruction:"pdf file link",
           
          capacity_double:300,
            color_navy_blue: {
              material:"Wood",
              color:"Navy Blue",
              double_price: { size: "double/full", price: 695,width:`43"`,length:`81"`,height:`35.5"` },
              },
              color_espresso: {
                material:"Wood",
                color:"Espresso",
                double_price: { size: "double/full", price: 695,width:`43"`,length:`81"`,height:`35.5"` },
                },

                color_grey: {
                    material:"Wood",
                    color:"Grey",
                    double_price: { size: "double/full", price: 695,width:`43"`,length:`81"`,height:`35.5"` },
                    },

                    color_white: {
                        material:"Wood",
                        color:"White",
                        double_price: { size: "double/full", price: 695,width:`43"`,length:`81"`,height:`35.5"` },
                        },
          },
      ],
    },

    {
      category: "Metal-Bed-Frames",
      categoryDescription: `A metal bed frame is a durable and sturdy foundation designed to support a mattress and box spring or mattress alone. Typically made from steel or iron, metal frames are valued for their strength, longevity, and minimal maintenance. They come in various styles, from simple, minimalist designs to decorative options with headboards and footboards. Metal frames are often lightweight, easy to assemble, and provide excellent support without sagging. Many designs include under-bed storage space, making them practical for compact rooms. Their sleek appearance suits both modern and traditional bedroom décor.Do you want me to write this for a website product description (short and sales-focused) or detailed informational content?
           `,
      details: [
        {
          name: "H2201 Metal PlatForm Bed Frame",
          description: ` Revitalize your bedroom with our contemporary metal platform bed. Its chic style, combined with the sturdy steel frame and convenient metal slat system, delivers a sleek and modern sleeping experience. With no box spring needed, setting up your bed has never been easier.Contemporary Design:Elevate your bedroom with a modern touch. Our platform bed boasts a simple and contemporary design, featuring clean lines that convey chic style.Sturdy Steel Frame:Crafted from high-quality steel, this bed’s frame promises exceptional stability and lasting durability. You can rest easy knowing your bed is built to withstand the test of time.Leatherette Headboard:The leatherette headboard not only offers a sleek and stylish appearance but also provides comfortable support for when you want to relax, read, or watch TV in bed.Metal Slat System:Say goodbye to the hassle of a traditional box spring. Our bed comes with a convenient metal slat system that ensures even support for your mattress, enhancing overall comfort.No Box Spring Required:Enjoy a minimalist and modern profile. With no box spring required, this bed simplifies your setup and maintenance, giving your bedroom a clean and uncluttered look.Elevate your bedroom to the next level of sophistication and functionality today!Weight Capacities (lb): Single: 400 | Full: 500 | Queen: 600 `,
          assembly_instruction:"pdf file link",
           
          capacity_single:400,
          capacity_double:500,
            capacity_queen:600,
            
            color_black: {
              material:"Metal + Leatherette",
              color:"black",
              single_price: { size: "single/twin", price: 235,width:`39"`,length:`75"`,height:`38"` },
              double_price: { size: "double/full", price: 310,width:`54"`,length:`75"`,height:`38"` },
              queen_price: { size: "queen", price: 340,width:`60"`,length:`81"`,height:`38"`  },
              },
            color_white: {
                material:"Metal + Leatherette",
                color:"white",
                single_price: { size: "single/twin", price: 235,width:`39"`,length:`75"`,height:`38"` },
                double_price: { size: "double/full", price: 310,width:`54"`,length:`75"`,height:`38"` },
                queen_price: { size: "queen", price: 340,width:`60"`,length:`81"`,height:`38"`  },
                },
        },
        {
          name: "H2233 Metal Bed Frame",
          description: `Introducing a platform bed that’s more than just a place to sleep; it’s a bold statement of contemporary design. With sharp lines, a sturdy metal frame, and a beautifully distressed grey wood look, this bed promises to create a sleeping area that leaves a lasting impression.Striking Contemporary Aesthetics:Our platform bed boasts a bold and contemporary design with its sharp lines, metal frame, and distinctive distressed grey wood finish. It’s not just a bed; it’s a work of art.Distressed Grey Wood Look:The distressed wood finish adds a touch of rustic charm and character to your bedroom, creating an inviting and stylish ambience.Metal Slat System, No Box Spring Required:The metal slat system ensures reliable mattress support without the need for a box spring, simplifying your setup and enhancing your comfort.Elevate your bedroom to new heights of style and functionality. Redefine your sleeping experience with our bold contemporary platform bed and make a bold statement today.Weight Capacities (lb): Single: 400 | Full: 500 | Queen: 600
    
    `,
    assembly_instruction:"pdf file link",
    capacity_single:400,
    capacity_double:500,
      capacity_queen:600,
    color_black_finish: {
        material:"Metal + Wood",
        color:"black",
        single_price: { size: "single/twin", price: 200,width:`40"`,length:`77"`,height:`38"` },
        double_price: { size: "double/full", price: 250,width:`55"`,length:`77"`,height:`38"` },
        queen_price: { size: "queen", price: 310,width:`61"`,length:`82"`,height:`38"`  },
        },
      color_distressed_grey: {
          material:"Metal + Leatherette",
          color:"Distressed Grey",
          single_price: { size: "single/twin", price: 200,width:`40"`,length:`77"`,height:`38"` },
          double_price: { size: "double/full", price: 250,width:`55"`,length:`77"`,height:`38"` },
          queen_price: { size: "queen", price: 310,width:`61"`,length:`82"`,height:`38"`  },
          },
          
        },
        {
          name: "H2310 Balre Metal Bed Frame",
          description: `Introducing a bed that combines classic style and modern convenience. Crafted in sturdy metal, this platform bed features a timeless curved headboard and elegant vertical slats on both the headboard and foot-board, bringing a touch of traditional charm to your bedroom.Timeless Classic Design:Our platform bed exudes timeless charm with its classic curved headboard and vertical slats. It’s a stylish addition that complements a variety of decor themes.Sturdy Metal Construction:Crafted from durable metal, this bed is built to last, ensuring that your investment in style is also an investment in quality and longevity.Metal Mattress Support, No Box Spring Required:Enjoy the convenience of included metal mattress support, eliminating the need for a box spring. Setting up your bed has never been easier, and your comfort is guaranteed. Elevate your bedroom with a bed that combines classic style, durability, and functionality. Redefine your decor and make a bold statement today.Weight Capacities (lb): Single: 400 | Full: 500

`,
assembly_instruction:"pdf file link",
capacity_single:400,
capacity_double:500,
  
color_black: {
    material:"Metal ",
    color:"black",
    single_price: { size: "single/twin", price: 230,width:`40"`,length:`77"`,height:`38"` },
    double_price: { size: "double/full", price: 280,width:`55"`,length:`77"`,height:`38"` },
    },
  
          
        },

        {
            name: "H2300  Metal PlateForm Bed Frame",
            description: `Enhance your bedroom’s ambience with our Metal Platform Bed, which effortlessly combines classic elegance and modern convenience. The sturdy metal construction, coupled with a timeless design, ensures both style and durability. The white powder-coated finish adds a touch of sophistication, and the efficient metal mattress support offers comfort and reliability. Say goodbye to the hassle of a box spring and embrace a simpler and more stylish bedroom arrangement. Upgrade your sleep space today!Classic Elegance:Add a timeless touch to your bedroom with our metal platform bed. Crafted from sturdy metal, its design features a gracefully curved foot-board and headboard that exudes classic style.Sleek White Powder Coating:The bed is finished with a pristine white powder coating that enhances its visual appeal. This sleek finish complements a variety of decor styles, making it a versatile addition to your bedroom.Sturdy Metal Construction:Crafted from robust metal, this bed is built to last. It ensures long-term durability, so you can enjoy its classic design for years to come.Efficient Metal Mattress Support:Experience optimum support for your mattress with the included metal support system. It promotes restful sleep by providing consistent and comfortable support.No Box Spring Required:Streamline your bedroom setup with the convenience of no box spring. This feature not only simplifies your life butalso adds a modern touch to your bedroom.Weight Capacities (lb): Single: 400 | Full: 500


  
  `,
  assembly_instruction:"pdf file link",
  capacity_single:400,
  capacity_double:500,
    
  color_white: {
      material:"Metal ",
      color:"black",
      single_price: { size: "single/twin", price: 190,width:`40"`,length:`77"`,height:`38"` },
      double_price: { size: "double/full", price: 240,width:`55"`,length:`77"`,height:`38"` },
      },
            
          },


          {
            name: "H2400 Simple Metal  Bed Frame",
            description: `Elevate Your Bedroom with our Modern Metal Bed Frame!Discover a combination of style, durability, and convenience with our Modern Metal Bed Frame. This versatile bed frame is designed to enhance your bedroom, and here are five important features that make it a standout choice: Sturdy Metal Frame: Crafted from high-quality metal, this bed frame provides unwavering support and stability. It’s built to last, ensuring you can enjoy restful nights of sleep for years to come.Metal Slats for Support:Say goodbye to the hassle of traditional box springs. Our bed frame includes metal slats that offer excellent support to your mattress. This not only streamlines your setup but also provides extra comfortCentre Support:We’ve designed this bed frame with a central support system, ensuring that your mattress remains evenly and securely in place. It’s a thoughtful addition for a good night’s sleep.No Box Spring Required:Embrace a more modern and uncluttered bedroom aesthetic. With our bed frame, you can skip the traditional box spring. Enjoy a cleaner, sleeker look while still receiving the support you need.Versatile for Any Room:This bed frame is perfect for various settings. Whether it’s a kid’s room, guest room, or your own space, its contemporary design seamlessly fits into any bedroom decor.Invest in your bedroom’s style and comfort with our Modern Metal Bed Frame. The sturdy metal frame, support slats, and no-box-spring-needed design offer both convenience and long-lasting value. It’s the perfect choice to elevate your bedroom without breaking the bank Weight Capacity: 400 lbs


  
  `,
  assembly_instruction:"pdf file link",
  capacity_single:400,
  
    
  color_black: {
      material:"Metal ",
      color:"black",
      single_price: { size: "single/twin", price: 140,width:`40"`,length:`77"`,height:`38"` },
      },
            
          },


          {
            name: "H2412 Simple Metal  Bed Frame",
            description: `Crafted for those who seek a blend of sleek design and unwavering durability, this bed promises to elevate your sleep sanctuary to new heights.Industrial Strength Support:Say goodbye to squeaky frames and wobbly nights. Our platform bed boasts an interlocking metal slat support system, engineered for industrial-grade strength. Rest assured, your mattress will be cradled in stability, ensuring peaceful slumber night after night.Minimalistic Design:Clean lines and minimalist charm define our platform bed’s aesthetic. The slatted headboard and basic footboard exude simplicity, creating a contemporary focal point for any bedroom setting. Embrace the beauty of understated elegance with our thoughtfully designed piece.Enhanced Structural Integrity:We understand the importance of a robust foundation. That’s why our platform bed features a center support, providing additional reinforcement for optimal structural integrity. Enjoy peace of mind knowing your bed is built to withstand the test of time.Durable Black Metal Finish:Designed to impress, the black metal finish frame not only adds a touch of sophistication but also embodies durability and resilience. Crafted to withstand the demands of daily use, our bed frame effortlessly combines style with substance.Lightweight Yet Strong:Who says strength has to come with bulk? Our platform bed defies convention by offering a lightweight construction without compromising on durability. Easily maneuver and assemble your bed without the hassle, thanks to its cleverly engineered design.Transform your bedroom into a sanctuary of style and comfort with our Platform Bed with Industrial Strength Support.Weight Capacity: 400 lbs

  `,
  assembly_instruction:"pdf file link",
  capacity_single:400,
  
    
  color_black: {
      material:"Metal ",
      color:"black",
      single_price: { size: "single/twin", price: 140,width:`39"`,length:`77"`,height:`38"` },
      },
            
          },


          
      ],
    },

    {
      category: "Plat-Form-Bed-Frame-With-Head-Board",
      categoryDescription: `A platform bed frame with a headboard combines style and functionality by offering a sturdy, low-profile base with an attached headboard for added comfort and aesthetics. Unlike traditional frames, it does not require a box spring, as the slatted or solid surface supports the mattress directly. The integrated headboard provides a comfortable backrest for reading or lounging and enhances the overall look of the bedroom. Platform frames with headboards come in various materials, including wood, metal, or upholstered designs, catering to modern and classic interiors alike.
           `,
      details: [
        {
          name: "H2113 PlatForm Bed Frame",
          description: ` Transform your bedroom into a stylish haven of comfort and charm with our button-tufted bed. The adjustable headboard and button tufting add elegance, while the sturdy support ensures a restful night’s sleep. Experience the perfect fusion of style and function in your personal retreat.Adjustable Headboard:Tailor your sleeping space to perfection with our bed featuring an adjustable (43″-57″) headboard. It adapts effortlessly to the height requirements of your mattress, ensuring the ideal sleeping experience.Button Tufted Elegance:Subtle button tufting adds a touch of timeless elegance to your bedroom. It’s the perfect stylish upgrade that elevates the aesthetics of your sleeping sanctuary.Customizable Comfort:This bed combines style with functionality, allowing you to create a bed tailored to your unique needs. You’re in control, ensuring that your bed is not only beautiful but also incredibly comfortable.Sturdy Support:We understand the importance of sound sleep. That’s why our bed requires a box spring, providing the essential support your mattress needs for long-lasting comfort.Quality Craftsmanship:Crafted with meticulous attention to detail, our bed is a testament to quality craftsmanship. Its durability and timeless design make it a valuable addition to your bedroom decor.Weight Capacities (lb): Single: 300 | Full: 500 | Queen: 500 | King: 650  `,

          assembly_instruction:"pdf file link",
    capacity_single:300,
    capacity_double:500,
      capacity_queen:500,
      capacity_king:650,
    color_black: {
        material:"Fabric",
        color:"black",
        single_price: { size: "single/twin", price: 250,width:`40"`,length:`76"`,height:`43-57"` },
        double_price: { size: "double/full", price: 290,width:`55"`,length:`76"`,height:`43-57"` },
        queen_price: { size: "queen", price: 330,width:`61"`,length:`81"`,height:`43-57"`  },
        king_price: { size: "king", price: 410,width:`80"`,length:`81"`,height:`43-57"`  },
        },
      color_White: {
          material:"Fabric",
          color:"White",
          single_price: { size: "single/twin", price: 250,width:`40"`,length:`76"`,height:`43-57"` },
          double_price: { size: "double/full", price: 290,width:`55"`,length:`76"`,height:`43-57"` },
          queen_price: { size: "queen", price: 330,width:`61"`,length:`81"`,height:`43-57"`  },
          king_price: { size: "king", price: 410,width:`80"`,length:`81"`,height:`43-57"`  },
          },
        },

        {
            name: "H2110 Adjustable HeadBoard Bed Frame",
            description: `Transform your bedroom into a sanctuary of comfort and style with our adjustable headboard bed. The customizable headboard height provides a tailored look, and the bed’s sturdy support ensures a great night’s sleep. This is where style meets function in perfect harmony.Adjustable Headboard:Say goodbye to the one-size-fits-all approach. Our bed features an adjustable headboard that can be set to a height between 43″ and 57″, catering to the specific requirements of your mattress and your unique style.Customizable Elegance:With the ability to fine-tune the headboard height, you’re in control of your bedroom’s aesthetic. This bed effortlessly adapts to your preferences, allowing you to create a personalized and elegant sleeping space.Sturdy Support:We believe in the perfect blend of form and function. This bed is designed to require a box spring, ensuring that you not only enjoy a tailored look but also the essential support for your mattress.Quality Craftsmanship:Crafted with precision and attention to detail, our bed is a testament to quality craftsmanship. Its durability and timeless design make it an investment in your bedroom’s ambience.Elevate Your Sleep:Enjoy the perfect combination of style and functionality that our bed brings to your bedroom. It’s more than just a place to sleep; it’s a reflection of your personality and a haven of comfort.Weight Capacities (lb): Single: 300 | Full: 500 | Queen: 500 | King: 650

  `,
  
            assembly_instruction:"pdf file link",
      capacity_single:300,
      capacity_double:500,
        capacity_queen:500,
        capacity_king:650,
      color_black: {
          material:"Fabric",
          color:"black",
          single_price: { size: "single/twin", price: 225,width:`40"`,length:`76"`,height:`43-57"` },
          double_price: { size: "double/full", price: 250,width:`55"`,length:`76"`,height:`43-57"` },
          queen_price: { size: "queen", price: 280,width:`61"`,length:`81"`,height:`43-57"`  },
          king_price: { size: "king", price: 400,width:`80"`,length:`81"`,height:`43-57"`  },
          },
        color_white: {
            material:"Fabric",
            color:"White",
            single_price: { size: "single/twin", price: 225,width:`40"`,length:`76"`,height:`43-57"` },
            double_price: { size: "double/full", price: 250,width:`55"`,length:`76"`,height:`43-57"` },
            queen_price: { size: "queen", price: 280,width:`61"`,length:`81"`,height:`43-57"`  },
            king_price: { size: "queen", price: 400,width:`80"`,length:`81"`,height:`43-57"`  },
            },

            color_grey: {
                material:"Fabric",
                color:"grey gb",
                single_price: { size: "single/twin", price: 225,width:`40"`,length:`76"`,height:`43-57"` },
                double_price: { size: "double/full", price: 250,width:`55"`,length:`76"`,height:`43-57"` },
                queen_price: { size: "queen", price: 280,width:`61"`,length:`81"`,height:`43-57"`  },
                king_price: { size: "queen", price: 400,width:`80"`,length:`81"`,height:`43-57"`  },
                },
          },

          {
            name: "H2190 PlateForm Bed Frame",
            description: `Enhance your sleeping space with our contemporary bed featuring deep panel tufting and luxurious velvet fabric. The elimination of the box spring requirement simplifies setup and ensures a clean, modern look. Choose a neutral color that suits your style and elevate your bedroom to new heights of elegance and luxury.Panel Tufting:Our contemporary styled bed features a panel tufting, a meticulous detail that not only enhances the comfort but also adds an exquisite, luxurious touch to your bedroom decor.Velvet Fabric:The neutral color options in plush velvet fabric exude opulence and sophistication. The soft texture of velvet not only feels comfortable but also adds an element of elegance to your sleeping space.No Box Spring Required:Say goodbye to the hassle of box springs. Our bed is thoughtfully designed to eliminate the need for a box spring, providing a clean, modern profile and a convenient setup.Tailored Design:The contemporary design of this bed ensures it fits seamlessly into any bedroom style. Whether you prefer a minimalist, modern, or traditional aesthetic, this bed complements your space with ease.Luxury and Sophistication:Our bed is more than just a piece of furniture; it’s an embodiment of luxury and sophistication. Its attention to detail and plush materials create an atmosphere of opulence that will transform your bedroom into a sanctuary of comfort and style.Weight Capacities (lb): Full: 550 | Queen: 650 | King: 700

  `,
  
            assembly_instruction:"pdf file link",
      
      capacity_double:500,
        capacity_queen:650,
        capacity_king:700,
      color_charcoal: {
          material:"Velvet",
          color:"Charcoal",
          double_price: { size: "double/full", price: 350,width:`58"`,length:`80"`,height:`44"` },
          queen_price: { size: "queen", price: 390,width:`64"`,length:`86"`,height:`44"`  },
          king_price: { size: "king", price: 450,width:`82"`,length:`86"`,height:`44"`  },
          },
          color_grey: {
            material:"Velvet",
            color:"Grey",
            double_price: { size: "double/full", price: 350,width:`58"`,length:`80"`,height:`44"` },
            queen_price: { size: "queen", price: 390,width:`64"`,length:`86"`,height:`44"`  },
            king_price: { size: "king", price: 450,width:`82"`,length:`86"`,height:`44"`  },
            },

            color_off_white: {
                material:"Velvet",
                color:"Off-White",
                double_price: { size: "double/full", price: 350,width:`58"`,length:`80"`,height:`44"` },
                queen_price: { size: "queen", price: 390,width:`64"`,length:`86"`,height:`44"`  },
                king_price: { size: "king", price: 450,width:`82"`,length:`86"`,height:`44"`  },
                },
          },


          {
            name: "H2342 Bed Frame",
            description: `Introducing our Fusion Platform Bed, a harmonious blend of traditional charm and modern elegance.Classic & Modern Fusion:Our Fusion Platform Bed effortlessly combines traditional features like the gracefully curved headboard and side posts with modern elements like cut insets. The result is a bed that bridges the gap between old-world charm and contemporary sophistication, bringing a unique fusion to your bedroom.Sturdy Wood Frame:Crafted with a robust wood frame structure, this bed offers exceptional durability. You can rest easy knowing that this isn’t just a bed; it’s an investment in a long-lasting and comfortable night’s sleep.Solid Wood Slats:The bed is equipped with solid wood slats that deliver outstanding mattress support. With these sturdy slats in place, your mattress will maintain its condition, and you’ll experience uninterrupted, restful sleep.No Box Spring Required:Say goodbye to the need for a bulky box spring. Our platform bed provides all the support you need, creating a sleek and modern profile in your bedroom. Embrace the simplicity and elegance of this design.Cozy Sleeping Haven:The Fusion Platform Bed is designed with your comfort and peace in mind. It’s not just a piece of furniture; it’s a promise of a cozy sleeping haven that you can enjoy for years to come.Elevate your bedroom with the perfect blend of classic and modern design. Our Fusion Platform Bed is more than just a bed; it’s a statement piece that transforms your bedroom into a welcoming and stylish retreat. Redefine your sleeping experience with a touch of traditional warmth and a dash of contemporary style. Upgrade your space with our Fusion Platform Bed today!Weight Capacities (lb): Single: 400 | Full: 500

  `,
  
            assembly_instruction:"pdf file link",
      
      capacity_single:400,
        capacity_double:500,
        
      color_dark_expresso_finish: {
          material:"Wood",
          color:"Dark Expresso Finish",
          single_price: { size: "single/twin", price: 220,width:`39"`,length:`79"`,height:`35"` },
          double_price: { size: "double", price: 260,width:`54"`,length:`79"`,height:`35"`  },
          },
          color_white_finish: {
            material:"Wood",
            color:"White Finish",
            single_price: { size: "single/twin", price: 220,width:`39"`,length:`79"`,height:`35"` },
            double_price: { size: "double", price: 260,width:`54"`,length:`79"`,height:`35"`  },
            },

           
          },

          {
            name: "H2175 Plat Form Bed Frame",
            description: `Crafted with deep, horizontal channel tufting and a palette of neutral color options, this bed exudes sophistication and opulence, transforming any sleeping space into a sanctuary of style.Deep Channel Tufting:Indulge in the artistry of deep, horizontal channel tufting, creating a bold, elegant focal point for your bedroom. It’s more than a bed; it’s a statement of refinement.Neutral Color Choices:Choose from our range of neutral hues to seamlessly harmonize with your decor, providing the canvas for your personal design expression.No Box Spring Needed:Enjoy the ease and convenience of a bed that doesn’t require a box spring, simplifying your setup without compromising on mattress support. Your comfort is our priority.Elevate your sleeping experience to a realm of luxury and sophistication. Redefine your bedroom and embrace a future of style and comfort. Shop now for the ultimate in contemporary living.Weight Capacities (lb): Single: 350 | Full: 500 | Queen: 600 | King: 650
  `,
  
            assembly_instruction:"pdf file link",
      capacity_single:350,
      capacity_double:500,
        capacity_queen:600,
        capacity_king:650,
      color_grey: {
          material:"Linen + Leatherette",
          color:"Grey",
          single_price: { size: "single/twin", price: 210,width:`42"`,length:`79"`,height:`43"` },
          double_price: { size: "double/full", price: 230,width:`57"`,length:`79"`,height:`43"` },
          queen_price: { size: "queen", price: 250,width:`63"`,length:`84"`,height:`43"`  },
          king_price: { size: "king", price: 300,width:`81"`,length:`84"`,height:`43"`  },
          },
        color_white: {
            material:"Linen + Leatherette",
            color:"White",
            single_price: { size: "single/twin", price: 210,width:`42"`,length:`79"`,height:`43"` },
            double_price: { size: "double/full", price: 230,width:`57"`,length:`79"`,height:`43"` },
            queen_price: { size: "queen", price: 250,width:`63"`,length:`84"`,height:`43"`  },
            king_price: { size: "queen", price: 300,width:`81"`,length:`84"`,height:`43"`  },
            },

            color_black: {
                material:"Linen + Leatherette",
                color:"black",
                single_price: { size: "single/twin", price: 210,width:`42"`,length:`79"`,height:`43"` },
                double_price: { size: "double/full", price: 230,width:`57"`,length:`79"`,height:`43"` },
                queen_price: { size: "queen", price: 250,width:`63"`,length:`84"`,height:`43"`  },
                king_price: { size: "queen", price: 300,width:`81"`,length:`84"`,height:`43"`  },
                },
          },


          {
            name: "H2380 Plat Form Bed Frame",
            description: `Prepare for a sleep experience like no other as you enter the world of luxury with our impressive platform bed. Crafted with meticulous attention to detail, this bed is designed to elevate your bedroom to new heights of sophistication.Deep Button Tufting:Immerse yourself in a world of elegance with deep button tufting that adds texture and depth to your bedroom.Nail-head Accented Wings:The nail-head accented wings add a touch of regal charm to the design, creating a headboard that truly stands out and makes a statement in your space.Chrome Accent Legs:The bed’s chrome accent legs exude modernity and bring a touch of sleek style to your bedroom, all while providing sturdy support.Draped in Beautiful Velvet Fabric:Elegance and comfort come together with the exquisite velvet fabric, making this bed a tactile delight that invites you to rest in opulence.Slats Included, No Box Spring Required:Experience hassle-free setup with included slats that provide reliable mattress support, eliminating the need for a box spring. Your comfort is our priority.Re-imagine your sleep space with a bed that’s a masterpiece of design and luxury. Make a bold statement with your bedroom decor today.Weight Capacities (lb): Full: 550 | Queen: 650 | King: 700


  `,
  
            assembly_instruction:"pdf file link",
      
      capacity_double:550,
        capacity_queen:650,
        capacity_king:700,
      color_grey: {
          material:"Velvet",
          color:"Grey",
          double_price: { size: "double/full", price: 540,width:`66"`,length:`82"`,height:`55"` },
          queen_price: { size: "queen", price: 590,width:`72"`,length:`87"`,height:`55"`  },
          king_price: { size: "king", price: 670,width:`91"`,length:`87"`,height:`55"`  },
          },
        color_off_white: {
            material:"Velvet",
            color:"Off-White",
            double_price: { size: "double/full", price: 540,width:`66"`,length:`82"`,height:`55"` },
            queen_price: { size: "queen", price: 590,width:`72"`,length:`87"`,height:`55"`  },
            king_price: { size: "king", price: 670,width:`91"`,length:`87"`,height:`55"`  },
            },

            color_black: {
                material:"Velevet",
                color:"black",
                double_price: { size: "double/full", price: 540,width:`66"`,length:`82"`,height:`55"` },
          queen_price: { size: "queen", price: 590,width:`72"`,length:`87"`,height:`55"`  },
          king_price: { size: "king", price: 670,width:`91"`,length:`87"`,height:`55"`  },
          },


          color_blue: {
            material:"Velevet",
            color:"blue",
            double_price: { size: "double/full", price: 540,width:`66"`,length:`82"`,height:`55"` },
      queen_price: { size: "queen", price: 590,width:`72"`,length:`87"`,height:`55"`  },
      king_price: { size: "king", price: 670,width:`91"`,length:`87"`,height:`55"`  },
      },
          },

      ],
    },

    {
      category: "Platform-Without-HeadBoard",
      categoryDescription: `A platform bed frame without a headboard offers a minimalist and versatile foundation for your mattress. It features a low-profile design with sturdy slats or a solid surface, eliminating the need for a box spring. This style is ideal for those who prefer a clean, modern look or wish to pair the frame with a separate headboard or wall décor. Its simple construction makes it lightweight, easy to assemble, and often provides ample under-bed storage space, making it a practical choice for small or multi-functional bedrooms.
           `,
      details: [
        {
          name: "H2400 Metal Platform  bedframe ",
          description: `Elevate Your Bedroom with our Modern Metal Bed Frame Discover a combination of style, durability, and convenience with our Modern Metal Bed Frame. This versatile bed frame is designed to enhance your bedroom, and here are five important features that make it a standout choice:Sturdy Metal Frame:Crafted from high-quality metal, this bed frame provides unwavering support and stability. It’s built to last, ensuring you can enjoy restful nights of sleep for years to come.Metal Slats for Support:Say goodbye to the hassle of traditional box springs. Our bed frame includes metal slats that offer excellent support to your mattress. This not only streamlines your setup but also provides extra comfortCentre Support:We’ve designed this bed frame with a central support system, ensuring that your mattress remains evenly and securely in place. It’s a thoughtful addition for a good night’s sleep.No Box Spring Required:Embrace a more modern and uncluttered bedroom aesthetic. With our bed frame, you can skip the traditional box spring. Enjoy a cleaner, sleeker look while still receiving the support you need.Versatile for Any Room:This bed frame is perfect for various settings. Whether it’s a kid’s room, guest room, or your own space, its contemporary design seamlessly fits into any bedroom decor.Invest in your bedroom’s style and comfort with our Modern Metal Bed Frame. The sturdy metal frame, support slats, and no-box-spring-needed design offer both convenience and long-lasting value. It’s the perfect choice to elevate your bedroom without breaking the bank.Weight Capacity: 400 lbs`,
          assembly_instruction:"pdf file link",
      
          capacity_single:550,
            
          color_black: {
              material:"Metal",
              color:"Black",
              single_price: { size: "single/twin", price: 140,width:`40"`,length:`77"`,height:`15"` },
              },
        },


        {
            name: "H2430 Wood Platform  bedframe ",
            description: `Discover the perfect blend of value and contemporary style with our sturdy, low profile bed. It’s more than just a bed; it’s a statement of sophistication and convenience.Great Value Contemporary Style:This bed offers unbeatable value without compromising on modern aesthetics. It’s designed to fit seamlessly into your space, making a unique statement of style.Slat Cover for Mattress Protection:Your mattress deserves the best care. That’s why we’ve included a slat cover that not only safeguards your mattress but also reinforces its support. It’s a thoughtful touch that ensures longevity.Grey Linen Fabric Trim:Elegance meets versatility with the subtle grey linen fabric trim, adding a touch of sophistication to your space and allowing it to seamlessly blend with your existing decor.No Box Spring Required:Simplify your setup with a bed that doesn’t require a box spring, providing both comfort and ease. Your comfort is our priority.Elevate your sleep space to a realm of style and comfort. Redefine your bedroom with a bed that’s as unique as you are.Weight Capacities (lb): Single: 400 | Full: 550 | Queen: 650 | King: 700`,
            assembly_instruction:"pdf file link",
        
            capacity_single:400,
            capacity_double:550,
        capacity_queen:650,
        capacity_king:700,
      color_charcoal: {
          material:"Linen",
          color:"Charcoal",
          single_price: { size: "single/twin", price: 160,width:`39"`,length:`75"`,height:`16"` },
          double_price: { size: "double/full", price: 190,width:`54"`,length:`75"`,height:`16"` },
          queen_price: { size: "queen", price: 210,width:`60"`,length:`80"`,height:`16"`  },
          king_price: { size: "king", price: 240,width:`78"`,length:`80"`,height:`16"`  },
          },
          },


          {
            name: "H2430  Platform  bedframe ",
            description: `Discover the perfect blend of value and contemporary style with our sturdy, low profile bed. It’s more than just a bed; it’s a statement of sophistication and convenience.Great Value Contemporary Style:This bed offers unbeatable value without compromising on modern aesthetics. It’s designed to fit seamlessly into your space, making a unique statement of style.Slat Cover for Mattress Protection:Your mattress deserves the best care. That’s why we’ve included a slat cover that not only safeguards your mattress but also reinforces its support. It’s a thoughtful touch that ensures longevity.Grey Linen Fabric Trim:Elegance meets versatility with the subtle grey linen fabric trim, adding a touch of sophistication to your space and allowing it to seamlessly blend with your existing decor.No Box Spring Required:Simplify your setup with a bed that doesn’t require a box spring, providing both comfort and ease. Your comfort is our priority.Elevate your sleep space to a realm of style and comfort. Redefine your bedroom with a bed that’s as unique as you are.Weight Capacities (lb): Single: 400 | Full: 550 | Queen: 650 | King: 700`,
            
            assembly_instruction:"pdf file link",
        
            capacity_single:400,
            capacity_double:550,
        capacity_queen:650,
        capacity_king:700,
      color_charcoal: {
          material:"Linen",
          color:"Charcoal",
          single_price: { size: "single/twin", price: 160,width:`39"`,length:`75"`,height:`16"` },
          double_price: { size: "double/full", price: 190,width:`54"`,length:`75"`,height:`16"` },
          queen_price: { size: "queen", price: 210,width:`60"`,length:`80"`,height:`16"`  },
          king_price: { size: "king", price: 240,width:`78"`,length:`80"`,height:`16"`  },
          },
          },

          {
            name: "H2450  Platform  bedframe ",
            description: `Introducing the perfect solution for small spaces and accommodating overnight guests with ease. Our sturdy wire grid bed frame is designed to provide both convenience and comfort, ensuring you make the most of your living space.Space-Saving Elegance:This compact bed frame is a space-saving marvel. It easily collapses for storage, making it ideal for small spaces or when you need to create an extra sleeping area for guests.Reinforced Mattress Support:We’ve reinforced the frame to guarantee robust mattress support, so you can enjoy restful nights with peace of mind, whether for yourself or your guests.No Box Spring Required:Simplify your setup and maximize your space. This bed frame eliminates the need for a box spring, streamlining the process and enhancing your comfort.Experience the perfect blend of space-saving design and functionality with our Compact Wire Grid Bed Frame – because your small space should be versatile and stylish.Weight Capacities (lbs): Single: 600 | Full: 750 | Queen: 850 | King: 950

`,
            
            assembly_instruction:"pdf file link",
        
            capacity_single:600,
            capacity_double:750,
        capacity_queen:850,
        capacity_king:950,
      color_black: {
          material:"Metal",
          color:"Black",
          single_price: { size: "single/twin", price: 140,width:`39"`,length:`75"`,height:`13"` },
          double_price: { size: "double/full", price: 170,width:`54"`,length:`75"`,height:`13"` },
          queen_price: { size: "queen", price: 200,width:`60"`,length:`80"`,height:`13"`  },
          king_price: { size: "king", price: 240,width:`78"`,length:`80"`,height:`13"`  },
          },
          },

        
      ],
    },


    {
      category: "Bunk-Bed-Frames",
      categoryDescription: `A bunk bed frame is a space-saving bed design that stacks two or more beds vertically, making it ideal for shared rooms, kids’ bedrooms, or dorms. Built with sturdy materials like metal or wood, bunk beds maximize floor space while providing comfortable sleeping arrangements for multiple people. Many designs include safety features such as guardrails and ladders, and some offer convertible options that can separate into individual beds. They are perfect for maximizing functionality in small spaces without compromising on comfort or style.
           `,
      details: [
        {
          name: "H2710 Wood Bunk bedframe ",
          description: `Upgrade your child’s sleeping space with our Twin Over Twin Storage Bunk Bed. This functional and stylish piece is designed to provide safety, convenience, and timeless aesthetics, making it a perfect addition to your home.Ample Storage Space:Say goodbye to clutter! Our bunk bed is equipped with two large drawers, providing the perfect solution for storing toys, clothes, and essentials. Maximize the use of your child’s room and keep it organized effortlessly.Safety First with Full-Length Guardrails:Your child’s safety is our top priority. The full-length guardrails surrounding the top bunk ensure that your child sleeps securely, granting you peace of mind.Easy Access with Coordinating Ladder:Our built-in ladder offers safe and convenient access to the top bunk, so your child can enjoy a comfortable night’s sleep and playtime adventures with ease.Timeless Aesthetics with Clean Lines:The clean lines and charming design elements of our bunk bed, combined with pine solids, create a relaxed and comforting style that suits various room decors. Choose from three classic finishes: espresso, grey, or white.Hassle-Free Setup with Fully Assembled Foot and Headboards:We value your time. That’s why our bunk bed comes with fully assembled foot and headboards, streamlining the installation process.Our Twin Over Twin Storage Bunk Bed is more than just a bed; it’s a solution that combines storage, safety, and style. Create a comfortable and organized environment for your child while enhancing the overall look of their bedroom. Choose the perfect finish to complement your decor and make bedtime an adventure for your child. Upgrade your child’s room with our Twin Over Twin Storage Bunk Bed today and experience the difference!Weight capacity (lbs) : Top: 200 | Bottom: 250`,
          assembly_instruction:"pdf file link",
      
          capacity_top:200,
          capacity_bottom:250,
            
          color_Expresso: {
              material:"Wood",
              color:"Expresso",
              single_price: { size: "single/twin", price: 590,width:`43"`,length:`79"`,height:`65"` },
              },

              color_white: {
                material:"Wood",
                color:"White",
                single_price: { size: "single/twin", price: 590,width:`43"`,length:`79"`,height:`65"` },
                },

                color_grey_finish: {
                  material:"Wood",
                  color:"Grey Finish",
                  single_price: { size: "single/twin", price: 590,width:`43"`,length:`79"`,height:`65"` },
                  },
        },


        {
            name: "H2830 Steel Bunk Bed Frame ",
            description: `Upgrade your living space with our contemporary steel bunk bed – it’s more than just furniture; it’s an invitation to experience the perfect combination of style, safety, and space-saving convenience.Elegant Design:Our contemporary bunk bed seamlessly blends elegance and function. It’s not just a bed; it’s a striking piece of furniture that enhances the aesthetics of any room.Modern Aesthetics:Crafted with durable steel framing, this bunk bed radiates a stylish modern look. It’s more than just a bed; it’s a modern design statement.Safety First:Designed with safety as a top priority, this bunk bed features full-length guardrails to keep your loved ones secure. The sturdy integrated ladder ensures easy and safe access to the top bunk.Space-Saving Solution:Ideal for any space-saving needs, this bunk bed offers a practical way to maximize your room’s floor space. It’s not just a bed; it’s a smart choice for compact living.Double Size Lower Bunk:The lower bunk is double-sized, perfect for an older child or overnight guests. It’s not just a bed; it’s a comfortable and versatile sleeping solution.Elevate Your Space with Our Contemporary Steel Bunk Bed – Where Elegance Meets Functionality!Weight capacity (lbs): Top: 200 | Bottom: 350

`,
            assembly_instruction:"pdf file link",
        
            capacity_top:200,
          capacity_bottom:350,
            
          color_black: {
              material:"Metal",
              color:"black",
              single_price: { size: "single/twin", price: 490,width:`56"`,length:`78"`,height:`60"` },
              },

              color_white: {
                material:"Metal",
              color:"White",
              single_price: { size: "single/twin", price: 490,width:`56"`,length:`78"`,height:`60"` },
              },

                color_silver: {
                  material:"Metal",
                  color:"Silver",
                  single_price: { size: "single/twin", price: 490,width:`56"`,length:`78"`,height:`60"` },
                  },
          },


          {
            name: "H2700  Bunk Bed Frame ",
            description: `Elevate Your Child’s Bedroom with Our Contemporary Bunk Bed!Unlock the potential of your child’s room with our beautifully crafted Contemporary Bunk Bed. This versatile piece is designed to provide comfort, safety, and style, ensuring it meets both your child’s needs for adventure and your expectations for quality.Quality Craftsmanship:Crafted with meticulous attention to detail, our bunk bed showcases quality craftsmanship that ensures durability and longevity. It’s a wise investment for your child’s bedroom.Classic Details for Timeless Style:Classic design elements give this bunk bed a timeless appeal that complements a wide range of room aesthetics, making it a versatile addition to your child’s space.Safety First with a Handy Step Ladder:The incorporated step ladder provides easy and safe access to the top bunk. It complies with safety standards and features an opening at the top for added peace of mind.Storage Maximization with Drawers:Say goodbye to clutter! Our bunk bed includes a pair of drawers beneath it, offering valuable storage space to keep your child’s room organized and tidy.Easy Setup with Fully Assembled Headboard and Foot-board:We understand your time is valuable. That’s why our bunk bed comes with fully assembled headboard and foot-board, ensuring a hassle-free setup process.With our Contemporary Bunk Bed, you’re not just getting a bed; you’re investing in a space-saving solution that combines safety, style, and functionality. Give your child room to explore and play while providing them with a cozy and organized environment. Upgrade your child’s sleeping space with our Contemporary Bunk Bed today, and watch their imagination soar! Weight capacity (lbs): Top: 200 | Bottom: 350`,
            
            assembly_instruction:"pdf file link",
        
            capacity_top:200,
          capacity_bottom:350,
            
          color_expresso: {
              material:"Wood",
              color:"Expresso",
              single_price: { size: "single/twin", price: 650,width:`79"`,length:`57"`,height:`65"` },
              },

              color_grey: {
                material:"Wood",
                color:"grey",
                single_price: { size: "single/twin", price: 650,width:`79"`,length:`57"`,height:`65"` },
                },

                color_honey: {
                  material:"Wood",
                  color:"honey",
                  single_price: { size: "single/twin", price: 650,width:`79"`,length:`57"`,height:`65"` },
                  },

                  color_white: {
                    material:"Wood",
                    color:"white",
                    single_price: { size: "single/twin", price: 650,width:`79"`,length:`57"`,height:`65"` },
                    },
          },

         

        
      ],
    },
  ];
  return (
    <div  className="mt-20">
      {BedframesData.map((BedframesData) => (
        <>
          <div id= {`${BedframesData.category}`} className="flex justify-center items-center  bg-gray-100 px-4">
            <div className="max-w-lg p-8 text-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {BedframesData.category}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {BedframesData.categoryDescription}
              </p>
            </div>
          </div>

          {/* //////////displaying card for categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
            {BedframesData.details.map((detail) => (
              <div  className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
                <img
                  src="bed.jpg"
                  alt="Foam Mattress"
                  className="mx-auto mb-4"
                />
                <h3 className="font-bold text-lg mb-2">{detail.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {detail.description}
                </p>

                <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out">
                  View
                </button>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default BedframeCard;
