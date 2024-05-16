import React from 'react'

function About() {
  return (
    <>

      <div className='flex flex-row justify-around p-20'>

        <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" 
        className='w-96' />

        <div className='w-1/2'>
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            React development is carried out by passionate developers
          </h2>
          <p className="mt-6 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
          </p>
          <p className="mt-4 text-gray-600">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
          </p>
        </div>
      </div>

    </>
  )
}

export default About
