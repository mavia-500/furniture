import React from 'react'

const ReturnPolicy = () => {
  return (
    <div id="returns">
        {" "}
        <div className="bg-gray-50 py-16 px-6 md:px-20">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
              Return Policy
            </h1>
            <p className="text-gray-600 mb-8 text-center text-lg">
              At{" "}
              <span className="font-semibold text-gray-800">Hilyah</span>
              , your satisfaction is our priority. Please review our return
              policy for smooth and hassle-free returns.
            </p>

            {/* Policy Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div className="p-5 bg-gray-100 rounded-xl hover:shadow transition">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  1. Eligibility
                </h2>
                <p className="text-gray-600">
                  Products must be in original packaging and unassembled. For
                  hygienic reasons, opened mattresses cannot be returned.
                </p>
              </div>

              {/* Point 2 */}
              <div className="p-5 bg-gray-100 rounded-xl hover:shadow transition">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  2. Return Period
                </h2>
                <p className="text-gray-600">
                  You may return or exchange items within{" "}
                  <span className="font-semibold text-gray-800">
                    15 days of purchase
                  </span>{" "}
                  if bought directly from{" "}
                  hilyah
                  
                  .
                </p>
              </div>

              {/* Point 3 */}
              <div className="p-5 bg-gray-100 rounded-xl hover:shadow transition">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  3. Refund Process
                </h2>
                <p className="text-gray-600">
                  Refunds exclude original shipping/handling and return shipping
                  costs. Refunds are issued to the original payment method only.
                </p>
              </div>

              {/* Point 4 */}
              <div className="p-5 bg-gray-100 rounded-xl hover:shadow transition">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  4. Damaged Products
                </h2>
                <p className="text-gray-600">
                  If your product is damaged during transit, save the
                  box/product and contact  our support team.
                  <span className="font-semibold text-gray-800">
                  hilyah967@gmail.com
                  </span>
                  . Our team is available Monday–Saturday to assist you.
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-10 text-center">
              <p className="text-gray-600 text-lg">
                Still have questions?{" "}
               
                  Contact our support team
               
                — we’re here to help!
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ReturnPolicy