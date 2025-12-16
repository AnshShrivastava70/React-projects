import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_znolv5t', // Replace with your EmailJS service ID
        'template_wio3nbn', // Replace with your EmailJS template ID
        form.current,
        'oVhZfT_tosoexLLaI' // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-center',
            autoClose: 3000
          })
          form.current.reset()
          setSubject('');
          setTourPackage('');
          setMessage('');
        },
        error => {
          toast.error('Failed to send message. Please try again.', {
            position: 'top-center',
            autoClose: 3000
          })
          console.error('Email sending failed:', error.text)
        }
      )
  }

  const [subject, setSubject] = useState('')
  const [tourPackage, setTourPackage] = useState('')

  const handleSubjectChange = e => {
    setSubject(e.target.value)
  }

  const handleTourPackageChange = e => {
    setTourPackage(e.target.value)
  }

  return (
    <div>
      <section id='contact' className='bg-slate-100'>
        <div className='py-8 lg:py-14 px-10 md:px-16 mx-auto max-w-full '>
          <h2 className='mb-4 text-2xl md:text-5xl tracking-tight font-extrabold text-center text-black border-4 p-4 border-yellow-400'>
            Contact Us
          </h2>
          <p className='m-auto max-w-[60ch] mb-8 text-sm md:text-2xl lg:mb-16 font-light text-center text-black '>
            Have a question, feedback, or need assistance with planning your
            next tour? Reach out to us—we're here to help!
          </p>
          <div className='grid md:grid-flow-col md:grid-cols-2 gap-1 '>
            <form ref={form} onSubmit={sendEmail} className='space-y-8 '>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-black'
                >
                  <span className='text-red-500 text-lg'>*</span> Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                  placeholder='e.g., Sachin Tendulkar'
                  required
                />
              </div>
              <div className='grid md:grid-flow-col md:grid-cols-2 gap-2 w-full'>
                <div>
                  <label
                    htmlFor='phone'
                    className='block mb-2 text-sm font-medium text-black'
                  >
                    <span className='text-red-500 text-lg'>*</span> Your Phone
                    Number:
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5'
                    placeholder='E.g., +91 123 456 7890'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='phone-alt'
                    className='block mb-2 text-sm font-medium text-black px-1'
                  >
                    <span className='text-red-500 text-lg'></span> Alternate Ph.
                    No.(Optional):
                  </label>
                  <input
                    type='tel'
                    id='phone-alt'
                    name='phoneAlt'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5'
                    placeholder='E.g., +91 987 654 3210'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-black'
                >
                  <span className='text-red-500 text-lg'>*</span> Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                  placeholder='e.g., name@example.com'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='subject'
                  className='block mb-2 text-sm font-medium text-black'
                >
                  <span className='text-red-500 text-lg'>*</span> Subject
                </label>
                <select
                  id='subject'
                  name='subject'
                  className='block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
                  value={subject}
                  onChange={handleSubjectChange}
                  required
                >
                  <option value='' disabled>
                    Select a subject
                  </option>
                  <option value='support'>Customer Support</option>
                  <option value='feedback'>Feedback</option>
                  <option value='inquiry'>Inquiry</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              {/* Conditional Tour Packages Dropdown */}
              {subject === 'inquiry' && (
                <div className='mb-4'>
                  <label
                    htmlFor='tourPackage'
                    className='block mb-2 text-sm font-medium text-black'
                  >
                    <span className='text-red-500 text-lg'></span> Select Tour
                    Package
                  </label>
                  <select
                    id='tourPackage'
                    name='tourPackage'
                    className='block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
                    value={tourPackage}
                    onChange={handleTourPackageChange}
                   
                  >
                    <option value='' disabled>
                      Select a tour package
                    </option>
                    <option value='One Day Tour'>One Day Tour</option>
                    <option value='Delhi Darshan Tour'>Delhi Darshan Tour</option>
                    <option value='Char Dham Yatra'>Char Dham Yatra</option>
                    <option value='Agra-Mathura-Vrindavan'>Agra-Mathura-Vrindavan Tour</option>
                    <option value='Vaishnodevi Tour'>Mata Vaishno Devi Tour</option>
                    <option value='Himachal Pradesh'>Himachal Pradesh Tour</option>
                    <option value='Agra Tour'>Agra Tour</option>
                    <option value='Mathura-Vrindavan'>Mathura-Vrindavan Tour</option>
                    <option value='Jaipur'>Jaipur Tour</option>
                    <option value='Khatu Shyam Ji & Salasar Balaji Temple'>Khatu Shyam Ji & Salasar Balaji Temple</option>
                    <option value='Ayodhya'>Ayodhya Tour</option>
                    <option value='Omkareshwar & Mahakaleshwar Temple'>Omkareshwar & Mahakaleshwar Temple</option>
                    <option value='Uttarakhand'>Uttarakhand Tour</option>
                    <option value='Amritsar'>Amritsar Tour</option>
                  </select>
                </div>
              )}
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium text-black'
                >
                  <span className='text-red-500 text-lg'>*</span> Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='6'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  placeholder='Write your message here...'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='block w-full py-1 px-2 md:py-3 md:px-5 text-sm font-medium text-center text-purple-600 rounded-md border-2 sm:w-fit hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-900 md:text-purple-600 md:hover:text-yellow-50 p-2 md:w-1/2 border-purple-800 transition-all'
              >
                Send Message
              </button>
            </form>
            <aside
              className='md:grid md:grid-flow-row p-16 hidden absolute md:relative'
              style={{
                backgroundImage: "url('/assets/contactUS.png')",
                backgroundSize: 'auto 25rem',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center'
              }}
            ></aside>
          </div>
          <ToastContainer />
        </div>
      </section>
    </div>
  )
}

export default Contact
