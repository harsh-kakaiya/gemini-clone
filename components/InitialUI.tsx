import Image from 'next/image'
import React from 'react'

const InitialUI = () => {
  return (
    <div className='h-full w-full flex items-center justify-center flex-col gap-5 text-white'>
        <Image className='h-auto w-96 object-cover' src="/inertia.jpg" alt='Image' height={400} width={400}/>
        <h1 className='text-4xl text-center font-bold gradient-text'>Meet Inertia your AI assistant</h1>
        <p className='text-lg text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus impedit delectus quam earum.</p>
    </div>
  )
}

export default InitialUI