import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// Initialize EmailJS with your User ID (replace 'YOUR_USER_ID' with your actual EmailJS User ID)
emailjs.init("v93TjfxfP-u2u1Cd-");

const sendEmail = (formData, cartProducts, subTotal, setFormData) => {

 
  const cartItems = cartProducts
    .map(
      (product, index) =>
        `Item ${index + 1}: ${product.name}, Size: ${
          product.size
        }, Thickness: ${product.thickness}, Quantity: ${
          product.quantity
        }, Price: $${product.price}`
    )
    .join("\n");

  // Prepare the email parameters
  const emailParams = {
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    city: formData.city,
    province: formData.province,
    postalCode: formData.postalCode,
    addional_note: formData.addional_note,
    shipping: formData.shipping,
    payment: formData.payment,
    cartItems: cartItems,
    subTotal: subTotal.toFixed(2),
  };

  // Send email using EmailJS
  return emailjs.send("service_6qa8q3u", "template_4xbcem7", emailParams).then(
    (response) => {
      if (response.status) {
        return Swal.fire({
          title: "Order Place Successfully",
          text: "You will get Confirmation Call before proceeding to delivery. Please press OK for further proceeding thanks",

          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then(() => {
         
            setFormData({});
            localStorage.setItem("cartDetails", JSON.stringify([]));
           
        });
      }
    },
    (error) => {
      if (error) {
        return Swal.fire({
          title: "Unable to Place Order",
          text: "Please Send Email to support team. Feel free",
          icon: "warning",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      }
    }
  );
};

export default sendEmail;
