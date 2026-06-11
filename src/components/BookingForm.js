'use client'

import emailjs from '@emailjs/browser'
import { useState } from 'react'

if (typeof window !== 'undefined') {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
}

export default function BookingForm() {
  const [formData, setFormData] = useState({
    client_name: '',
    client_email: '',
    client_phone: '',
    service_name: 'Residential Design',
    booking_date: '',
    booking_time: '',
    budget: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [showNotification, setShowNotification] = useState(false)

  const services = [
    'Residential Design',
    'Commercial Design',
    'Kitchen & Bath',
    'Office Redesign',
    'Consultation',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!formData.client_name || !formData.client_email || !formData.booking_date) {
        setStatus('error')
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 5000)
        setLoading(false)
        return
      }

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_BOOKING,
        {
          client_name: formData.client_name,
          client_email: formData.client_email,
          client_phone: formData.client_phone,
          service_name: formData.service_name,
          booking_date: formData.booking_date,
          booking_time: formData.booking_time,
          budget: formData.budget,
          message: formData.message,
          to_email: 'kolour.structures@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setStatus('success')
        setFormData({
          client_name: '',
          client_email: '',
          client_phone: '',
          service_name: 'Residential Design',
          booking_date: '',
          booking_time: '',
          budget: '',
          message: '',
        })
      }
    } catch (error) {
      console.error('Booking error:', error)
      setStatus('error')
    } finally {
      setShowNotification(true)
      setLoading(false)
      setTimeout(() => setShowNotification(false), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Book a Consultation</h1>
          <p className="text-xl text-gray-600">
            Schedule your free design consultation with our expert team
          </p>
        </div>

        {showNotification && (
          <div
            className={`mb-6 p-4 rounded-lg text-white font-semibold text-center ${
              status === 'success'
                ? 'bg-green-500'
                : status === 'error'
                ? 'bg-red-500'
                : 'bg-blue-500'
            }`}
          >
            {status === 'success'
              ? '✅ Booking confirmed! Check your email for details.'
              : status === 'error'
              ? '❌ Error booking. Please try again.'
              : '📅 Processing booking...'}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Full Name *
              </label>
              <input
                type="text"
                name="client_name"
                value={formData.client_name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Email *
              </label>
              <input
                type="email"
                name="client_email"
                value={formData.client_email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Phone
              </label>
              <input
                type="tel"
                name="client_phone"
                value={formData.client_phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Service Type
              </label>
              <select
                name="service_name"
                value={formData.service_name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Preferred Date *
              </label>
              <input
                type="date"
                name="booking_date"
                value={formData.booking_date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Preferred Time
              </label>
              <input
                type="time"
                name="booking_time"
                value={formData.booking_time}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
            >
              <option value="">Select budget...</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000 - $50,000">$25,000 - $50,000</option>
              <option value="$50,000+">$50,000+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Tell us about your project
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your space and design goals..."
              rows="5"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 px-6 rounded-lg font-bold text-lg text-white transition transform ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105'
            }`}
          >
            {loading ? '⏳ Booking...' : '📅 Book Consultation'}
          </button>

          <p className="text-center text-sm text-gray-600">
            We'll confirm your booking and send you a confirmation email within 2 hours
          </p>
        </form>
      </div>
    </div>
  )
}
