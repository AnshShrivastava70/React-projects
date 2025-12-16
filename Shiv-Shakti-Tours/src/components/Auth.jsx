import React from 'react'
import Carousel from './Carousel/Carousel'

const Auth = () => {
  const Places = [
    { image: '/assets/slide/2.png' },
    { image: '/assets/slide/chardham.jpg' },
    { image: '/assets/slide/check.png' },
    { image: '/assets/slide/3.png' },
    { image: '/assets/slide/4.png' },
    { image: '/assets/slide/5.png' },
    { image: '/assets/slide/6.jpeg' }
    // { image: '/assets/slide/jnk.jpg', text: 'Jammu & Kashmir' },
    // { image: '/assets/slide/Jal_Mahal.jpg', text: 'Jal Mahal' }
  ]
  // const Places = [
  //   { image: '/assets/slide/India_Gate.jpg', text: 'Delhi One day Tour' },
  //   { image: '/assets/slide/check.jpg',  },
  //   { image: '/assets/slide/Hawa_Mahal.jpg', text: 'Hawa Mahal' },
  //   { image: '/assets/slide/Taj_Mahal.jpg', text: 'Taj Mahal' },
  //   { image: '/assets/slide/Holi.jpg', text: 'Holi of Vrindavan' },
  //   { image: '/assets/slide/Prem_mandir.jpg', text: 'Prem Mandir' },
  //   { image: '/assets/slide/jnk.jpg', text: 'Jammu & Kashmir' },
  //   { image: '/assets/slide/Jal_Mahal.jpg', text: 'Jal Mahal' }
  // ]

  return (
    <div
      id='home'
      className='relative flex justify-center items-center h-full max-w-full px-5 md:px-10 py-3 md:h-[95vh] md:w-full bg-slate-300 overflow-hidden'
    >
      <Carousel slides={Places} autoplayDelay={2000} autoplayEnabled={true} />
      <div className='absolute left-20 md:bottom-2/4 lg:bottom-1/4 z-10'>
        <h1 className='text-xs sm:text-3xl md:text-5xl lg:text-7xl m-3 text-white backdrop-blur-lg border border-transparent rounded-md px-2'></h1>
        <a href='#Cards'>
          {/* <button className='flex justify-between items-center bg-cyan-400 text-xs md:text-xl text-white  p-1 sm:p-2 md:p-2 m-3 hover:scale-105 hover:text-opacity-80 transition-all'>
            Book Now
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm4 6h5V7l5 5-5 5v-4H7v-2z'></path>
            </svg>
          </button> */}
        </a>
      </div>
    </div>
  )
}

export default Auth
