import React from 'react'

const About = () => {
  return (
    <seciton className='relative w-full h-screen mt-16'>
        <div className='flex w-full h-screen'>
            <div className='flex flex-col w-[1150px] h-[650px] mx-auto mt-3 text-white gap-4'>
                <h1 className='text-6xl font-black '>About Rigby's Coin</h1>
                <p className='text-2xl '>Rigby is known for his high energy, mischievousness, and childlike behavior. He’s often the instigator of trouble, coming up with wild ideas or shortcuts that usually backfire.</p>
                <p className='text-2xl '>While he can be selfish or boastful at times, he’s also fiercely loyal to his friends, especially Mordecai. <br />Despite his flaws, Rigby grows and matures as the series progresses.</p>
            <div className='flex flex-row w-auto h-auto justify-self-center m-auto gap-17 mt-7'>
                <img src='/rigby1.gif' alt='bg' className='size-80 rounded-2xl shadow-2xl shadow-black'/>
                <img src='/rigby1.gif' alt='bg' className='size-80 rounded-2xl shadow-2xl shadow-black'/>
                <img src='/rigby1.gif' alt='bg' className='size-80 rounded-2xl shadow-2xl shadow-black'/>

            </div>
            </div>
        </div>
    </seciton>
  )
}

export default About