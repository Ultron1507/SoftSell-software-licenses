import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  licenseType: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !formData.email.includes("@"))
      newErrors.email = "Valid email is required.";
    if (!formData.company) newErrors.company = "Company is required.";
    if (!formData.licenseType) newErrors.licenseType = "Select a license type.";
    if (!formData.message) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Message submitted successfully!");
      setFormData(initialState);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-white p-8 rounded-lg shadow"
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              type="text"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              type="email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Company</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              type="text"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">License Type</label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            >
              <option value="">Select a type</option>
              <option value="Office Suite">Office Suite</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Design Software">Design Software</option>
              <option value="Other">Other</option>
            </select>
            {errors.licenseType && (
              <p className="text-red-500 text-sm">{errors.licenseType}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
