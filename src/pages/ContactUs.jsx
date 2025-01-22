import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
import Footer from "../components/footer/Footer";
import ContactUsImg from "../assets/images/contact-us.png";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
    reset(); // Reset the form fields
  };

  return (
    <>
      <div className="bg-gray-100 mt-[200px] tracking-wider">
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          Contact Us
        </h2>
        <div className=" py-8">
          <ToastContainer />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto px-4 border bg-white">
            {/* Left Section: Form */}
            <div className="w-full flex justify-center order-2 lg:order-1 p-4 ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md bg-black rounded-lg shadow-lg p-6 space-y-4"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-orange-500"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Name is required.",
                      minLength: {
                        value: 6,
                        message: "Name must be at least 6 characters.",
                      },
                      maxLength: {
                        value: 40,
                        message: "Name cannot exceed 40 characters.",
                      },
                    })}
                    placeholder="Enter your full name"
                    className={`mt-1 block w-full px-4 py-2 border ${
                      errors.name ? "border-red-500" : "border-orange-500"
                    } rounded-lg bg-transparent
            outline-none text-white shadow-sm focus:ring-orange-500 focus:border-orange-500`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-orange-500"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a valid email address.",
                      },
                    })}
                    placeholder="Enter your email"
                    className={`mt-1 block w-full px-4 py-2 border ${
                      errors.email ? "border-red-500" : "border-orange-500"
                    } rounded-lg text-white outline-none bg-transparent shadow-sm 
             focus:ring-orange-500 focus:border-orange-500`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-orange-500"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", {
                      required: "Subject is required.",
                    })}
                    placeholder="Enter the subject"
                    className={`mt-1 block w-full px-4 py-2 border ${
                      errors.subject ? "border-red-500" : "border-orange-500"
                    } rounded-lg text-white outline-none bg-transparent shadow-sm focus:ring-orange-500 focus:border-orange-500`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-orange-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Message is required.",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters long.",
                      },
                    })}
                    rows="4"
                    placeholder="Enter your message"
                    className={`mt-1 block w-full px-4 py-2 border ${
                      errors.message ? "border-red-500" : "border-orange-500"
                    } rounded-lg resize-none text-white outline-none bg-transparent shadow-sm focus:ring-orange-500 focus:border-orange-500`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    className="w-full  !text-orange-500
            !font-bold !tracking-wider !mt-2 !py-2 !rounded-full shadow 
            !border-orange-500 focus:!border-orange-500 focus:!ring-orange-500"
                    variant="outlined"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Section: Image and Content */}
            <div className="w-full flex flex-col items-center justify-center mt-8 md:mt-0 lg:order-2 p-4">
              <img
                src={ContactUsImg}
                alt="Contact Illustration"
                className="rounded-lg shadow-lg"
              />
              <p className="mt-6 text-lg text-gray-700 text-center">
                Have questions or need help? We're here to assist! Fill out the
                form, and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
