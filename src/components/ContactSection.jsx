import React, { useState } from 'react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Building2 } from 'lucide-react';

export default function ContactSection({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    productInterested: 'Packaged Drinking Water',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (showToast) {
        showToast('Success! Your enquiry has been received by SBVS ENTERPRISES.', 'success');
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-sky-600" />
            Contact & Enquiries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Get In <span className="gradient-text-sky">Touch</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out for B2B wholesale enquiries, retail dealership, event orders, or product details.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-500 to-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Business Details & Google Map Preview */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs uppercase font-bold tracking-widest text-sky-600">
                {COMPANY_INFO.category}
              </p>

              <div className="space-y-4 pt-2 border-t border-slate-100">
                
                {/* Address Card */}
                <div className="flex items-start gap-4 text-sm text-slate-700">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Address</strong>
                    <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {COMPANY_INFO.address.full}
                    </span>
                  </div>
                </div>

                {/* Phone Placeholder */}
                <div className="flex items-start gap-4 text-sm text-slate-700">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Phone Number</strong>
                    <span className="text-slate-600 text-xs sm:text-sm">
                      {COMPANY_INFO.contact.phonePlaceholder}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Button Card */}
                <div className="flex items-start gap-4 text-sm text-slate-700">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">WhatsApp</strong>
                    <a
                      href={COMPANY_INFO.contact.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 underline inline-flex items-center gap-1"
                    >
                      Connect on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email Placeholder */}
                <div className="flex items-start gap-4 text-sm text-slate-700">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Email</strong>
                    <span className="text-slate-600 text-xs sm:text-sm">
                      {COMPANY_INFO.contact.emailPlaceholder}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Interactive Location Area Visual */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xl overflow-hidden space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 px-2">
                <span className="flex items-center gap-1.5 text-sky-700">
                  <MapPin className="w-4 h-4 text-rose-500" /> Plant & Business Location
                </span>
                <span className="text-slate-500 font-normal">East Godavari, AP</span>
              </div>
              
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
                <iframe
                  title="SBVS Enterprises Location Map"
                  src="https://maps.google.com/maps?q=Rowthulapudi,East%20Godavari,Andhra%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                  Business Enquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your requirements below and our team will get back to you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-slate-900">Enquiry Submitted!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to SBVS ENTERPRISES. We have received your query for <strong>{formData.productInterested}</strong> and will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        mobile: '',
                        email: '',
                        productInterested: 'Packaged Drinking Water',
                        quantity: '',
                        message: ''
                      });
                    }}
                    className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-md hover:bg-sky-600 transition"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      />
                    </div>

                    {/* Product Interested In */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">Product Interested In *</label>
                      <select
                        name="productInterested"
                        value={formData.productInterested}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition bg-white"
                      >
                        <option value="Packaged Drinking Water">Packaged Drinking Water (250ml - 2L)</option>
                        <option value="Lemon Soda">Lemon Soda</option>
                        <option value="Plain Soda">Plain Soda</option>
                        <option value="Zeera Soda">Zeera Soda</option>
                        <option value="Lemon Drink">Lemon Drink</option>
                        <option value="Clear Lemon Drink">Clear Lemon Drink</option>
                        <option value="Orange Drink">Orange Drink</option>
                        <option value="Grape Drink">Grape Drink</option>
                        <option value="Cola Drink">Cola Drink</option>
                        <option value="Pickles">Pickles</option>
                        <option value="Powders">Powders</option>
                        <option value="Snacks">Snacks</option>
                        <option value="General Business Inquiry">General B2B Inquiry</option>
                      </select>
                    </div>

                  </div>

                  {/* Quantity / Requirement */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">Quantity / Requirement</label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="e.g. 50 cases of 500ml water bottles for event / shop stock"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Describe your delivery location, event details, or dealership query..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-sky-500/25 transition transform hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Enquiry
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
