import React, { useState } from "react";

const RegisterForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    country: "",
    neetRank: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Form submitted and email sent!");
        setFormData({
          name: "",
          contact: "",
          email: "",
          address: "",
          country: "",
          neetRank: "",
        });
        onClose();
      } else {
        alert("Error sending email: " + data.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to send request. Check console for more info.");
    }
  };

  // ✅ Prevent rendering when isOpen is false
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[999] flex justify-center items-center">
      <div className="bg-purple-700 bg-opacity-70 p-6 rounded-xl w-[350px] max-w-[90%] relative shadow-xl backdrop-blur-md text-center animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-2xl hover:text-red-500 hover:scale-110 transition-all"
        >
          ✖
        </button>
        <h2 className="text-white text-xl mb-4 font-semibold">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 rounded border border-white bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white"
          />
          <input
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="p-2 rounded border border-white bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white"
          />
          <input
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 rounded border border-white bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white"
          />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="p-2 rounded border border-white bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white"
          />
          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
            className="p-2 rounded border border-white bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white"
          />
          <input
            name="neetRank"
            type="number"
            min="1"
            placeholder="NEET Rank"
            value={formData.neetRank}
            onChange={handleChange}
            required
            className="p-2 rounded border border-white bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white"
          />
          <button
            type="submit"
            className="bg-white text-purple-700 py-2 mt-2 rounded font-bold transition-transform hover:bg-gray-200 hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
