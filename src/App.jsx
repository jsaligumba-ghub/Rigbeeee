import How from "./sections/How";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tokenomics from "./sections/Tokenomics";
import { Socials } from "./sections/Socials";

export default function App() {
  return (
    <div className='relative w-full h-full'>
    <img src='/rb.jpg' alt='bg' className='fixed inset-0 max-lg:w-full max-lg:h-full w-full h-full object-cover scale-110' />
    <img src='/zzzz.png' alt='bg' className='absolute size-[650px] ml-[870px] mt-[150px] scale-x-[-1] animate-bounce' />
    <img src='/zzzz.png' alt='bg' className='absolute size-[650px] mr-[650px] mt-[150px] animate-bounce' />
    <img src='/zzzz.png' alt='bg' className='absolute size-[650px] mr-[650px] mt-[1150px]' />
    <img src='/zzzz.png' alt='bg' className='absolute size-[650px] right-1 mt-[1650px] scale-x-[-1]' />


      <Hero />
      <About />
      <How />
      <Tokenomics />
      <Socials />
    </div>
  )
}