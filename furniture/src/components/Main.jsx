import React from 'react';


const Main = () => {
  return (
    <div className="pt-20"> {/* To avoid overlap with fixed navbar */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to HILYAH
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Find the perfect mattress, bed frame, and box spring to complete your comfort zone.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">


{/* /////////////////foam mattress */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
            <img src="/public/bamboo7.webp" alt="Foam Mattress" className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Foam Mattress</h3>
            <p className="text-gray-600 text-sm">Our premium foam range includes breathable Simple Foam for everyday support, naturally fresh Bamboo Foam for enhanced hygiene, and cooling Memory Gel Foam that adapts to your body for ultimate comfort.</p>
          </div>


{/* //////orthopedic spring mattress */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
            <img src="/public/bamboo7.webp" alt="Orthopedic spring mattress" className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Eurotop Mattress</h3>
            <p className="text-gray-600 text-sm">Designed for superior back support, this mattress combines firm, high-density foam with a durable spring system to promote proper spinal alignment.It offers long-lasting support, reduced pressure points, and enhanced durability for a restful night’s sleep.</p>
          </div>


         

{/* /////////////////////double sided mattress/ */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
            <img src="/public/bamboo7.webp" alt="double mattress" className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Double Sided Mattress</h3>
            <p className="text-gray-600 text-sm">Designed for superior back support, this mattress combines firm, high-density foam with a durable spring system to promote proper spinal alignment.It offers long-lasting support, reduced pressure points, and enhanced durability for a restful night’s sleep.</p>
          </div>


          {/* /////////////Extra Firm Mattress */}

          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
            <img src="/public/bamboo7.webp" alt="Extra firm mattress" className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Extra Firm Hard Mattress</h3>
            <p className="text-gray-600 text-sm">Designed for superior back support, this mattress combines firm, high-density foam with a durable spring system to promote proper spinal alignment.It offers long-lasting support, reduced pressure points, and enhanced durability for a restful night’s sleep.</p>
          </div>


{/* ////////storage bedframes */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
            <img src="/public/bed.webp" alt="Bed Frame" className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Storage Bed Frames</h3>
            <p className="text-gray-600 text-sm">Storage bed frames are designed with built-in drawers or compartments, offering a smart way to save space and keep your bedroom organized. They combine style and functionality, providing extra storage without taking up additional floor space.</p>
          </div>


          {/* ///////////////////metal bedframes */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
            <img src="/public/bed.webp" alt="Bed Frame" className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Metal Bed Frames</h3>
            <p className="text-gray-600 text-sm">Metal bed frames are strong, durable, and easy to maintain, offering reliable support for your mattress. With sleek, modern designs or classic styles, they suit any bedroom décor while providing a sturdy foundation that lasts for years.</p>
          </div>


          {/* //////////PLATFORM BEDframes */}
          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
            <img src="/public/bed.webp" alt="Bed Frame" className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Platform Bed Frames</h3>
            <p className="text-gray-600 text-sm">Platform bed frames feature a low-profile design with a solid or slatted base, eliminating the need for a box spring. They offer strong, even support for your mattress and add a modern, minimalist touch to any bedroom.</p>
          </div>


          {/* ////plateform without headborads */}

          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
            <img src="/public/bed.webp" alt="Bed Frame" className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Platform Without HeadBoard</h3>
            <p className="text-gray-600 text-sm">A platform bed frame without a headboard offers a clean, minimalist look that’s perfect for modern spaces. Its sturdy base provides excellent mattress support and allows you the freedom to customize your bedroom décor to suit your style.</p>
          </div>

          {/* ////bunk bed */}

          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
            <img src="/public/bed.webp" alt="Bed Frame" className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Bunk Bed Frames</h3>
            <p className="text-gray-600 text-sm">Bunk bed frames are a smart space-saving solution, featuring two stacked beds—perfect for kids’ rooms or shared spaces. They combine functionality with fun, maximizing floor space while providing sturdy and safe sleeping arrangements.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
            <img src="/public/boxspring.webp" alt="Box Spring" className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Box Springs</h3>
            <p className="text-gray-600 text-sm">A box spring is a supportive base made of a sturdy wooden or metal frame covered in fabric, often with springs or a metal grid inside. It sits under your mattress to provide extra support, absorb shock, and help extend the life of your mattress.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Main;
