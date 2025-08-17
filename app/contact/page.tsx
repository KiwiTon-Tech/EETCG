'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LocalBusinessJsonLd } from '../../components/JsonLd';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // In a real implementation, you would send this data to your backend or email service
      // For now, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-32">
      {/* Add JSON-LD structured data */}
      <LocalBusinessJsonLd />
      
      <div className="container">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[color:var(--color-navy)]">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Ready to transform your business? Reach out to our team of expert consultants for a personalized consultation.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            {submitSuccess ? (
              <div className="p-6 text-center">
                <svg 
                  className="w-16 h-16 mx-auto mb-4 text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <h3 className="mb-4 text-2xl font-bold text-[color:var(--color-navy)]">Thank You!</h3>
                <p className="mb-6 text-gray-600">
                  Your message has been received. We'll get back to you within 1-2 business days.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2 text-white transition-colors rounded bg-[color:var(--color-navy)] hover:bg-opacity-90"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="mb-6 text-2xl font-bold text-[color:var(--color-navy)]">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-navy)]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-navy)]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-navy)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-navy)]"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-700">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-navy)]"
                    >
                      <option value="">Select a service</option>
                      <option value="Project Management">Project Management</option>
                      <option value="Program Management">Program Management</option>
                      <option value="Strategic Planning">Strategic Planning</option>
                      <option value="Data & Analytics">Data & Analytics</option>
                      <option value="Vendor Management">Vendor Management</option>
                      <option value="AI Consulting">AI Consulting</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-navy)]"
                      required
                    ></textarea>
                  </div>
                  {submitError && (
                    <div className="p-4 mb-6 text-red-700 bg-red-100 rounded-md">
                      {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 text-white transition-colors rounded bg-[color:var(--color-navy)] hover:bg-opacity-90 disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-[color:var(--color-navy)]">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-[color:var(--color-gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:info@eliteenterprisetcg.com" className="text-[color:var(--color-navy)] hover:text-[color:var(--color-gold)]">
                      info@eliteenterprisetcg.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-[color:var(--color-gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">
                      Georgia
                    </p>
                    <p className="text-gray-600">
                      Serving clients nationwide
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-[color:var(--color-gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM EST
                    </p>
                    <p className="text-gray-600">
                      24/7 availability for urgent client needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-8 text-white rounded-lg bg-[color:var(--color-navy)]">
              <h3 className="mb-4 text-xl font-bold text-[color:var(--color-gold)]">Schedule a Consultation</h3>
              <p className="mb-6">
                Ready to take your business to the next level? Schedule a free 30-minute consultation with one of our expert consultants.
              </p>
              <Link 
                href="/consultants" 
                className="inline-block px-6 py-3 font-medium text-[color:var(--color-navy)] transition-colors bg-white rounded-md hover:bg-[color:var(--color-gold)] hover:text-white"
              >
                Meet Our Consultants
              </Link>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-center text-[color:var(--color-navy)]">Our Headquarters</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Google Maps embed of Augusta, Georgia */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106162.91797129547!2d-82.13399273541358!3d33.47173585775888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9d5dab7866379%3A0x5f7d4a55949d1aea!2sAugusta%2C%20GA!5e0!3m2!1sen!2sus!4v1718839465149!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Augusta, Georgia Map"
              aria-label="Map showing Augusta, Georgia location"
            ></iframe>
          </div>
          <div className="mt-6">
            <h3 className="mb-4 text-xl font-bold text-center text-[color:var(--color-navy)]">Our Consultants Nationwide</h3>
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
              While our headquarters is located in Georgia, our team of expert consultants is distributed across the United States. 
              This allows us to serve clients nationwide with local expertise and personalized service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="px-4 py-2 text-sm bg-gray-100 rounded-full">New Mexico</div>
              <div className="px-4 py-2 text-sm bg-gray-100 rounded-full">Georgia</div>
              <div className="px-4 py-2 text-sm bg-gray-100 rounded-full">California</div>
              <div className="px-4 py-2 text-sm bg-gray-100 rounded-full">Texas</div>
              <div className="px-4 py-2 text-sm bg-gray-100 rounded-full">New York</div>
              <div className="px-4 py-2 text-sm bg-gray-100 rounded-full">Florida</div>
              <div className="px-4 py-2 text-sm bg-gray-100 rounded-full">And more...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
