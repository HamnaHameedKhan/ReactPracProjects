import React from 'react'

function Contact() {
  return (
    <>
      <div className='flex flex-cols justify-center p-20'>

        <div className='bg-gray-400 p-10 rounded-md'>
          <h1 className='font-bold text-2xl'>Get in touch</h1>
          <p>Fill in the form to start a conversation</p>

          <ul className='pt-5 list-disc'>
            <li> Acme inc street ,Postal code </li>
            <li>+9234657</li>
            <li>info@gmail.com</li>
          </ul>
        </div>

        <form className="p-6 flex flex-col justify-center w-96">
          <div className="flex flex-col">
            <label for="name" className="hidden">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label for="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label for="tel" className="hidden">
              Number
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telephone Number"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="md:w-32 bg-zinc-800 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
          >
            Submit
          </button>
        </form>

      </div>
    </>
  )
}

export default Contact
