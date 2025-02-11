import React from 'react';

const allocation = [
  { name: "Investors", percentage: 30 },
  { name: "Holders", percentage: 15 },
  { name: "Treasury", percentage: 16 },
  { name: "Liquidity", percentage: 17 },
  { name: "Supply", percentage: 17 },
  { name: "What", percentage: 13 },

];

const Tokenomics = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="flex flex-col w-full h-screen">
        <div className="flex flex-col w-[1350px] h-[600px] m-auto text-white">
          <h1 className="text-center text-7xl font-bold">TOKENOMICS</h1>

          <div className="flex flex-row w-[1350px] h-[650px] m-auto mt-12 text-white">
            {/* Left Column */}
            <div className="flex flex-col w-[270px] h-[300px] ml-32 mt-12 gap-8">
              {allocation.slice(0, 3).map((item, index) => (
                <button
                  key={index}
                  className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-amber-200 flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black shadow-lg"
                >
                  <h1 className="text-2xl m-auto">{item.name}</h1>
                  <h1 className="text-3xl m-auto">{item.percentage}%</h1>
                </button>
              ))}
            </div>

            {/* Center Image */}
            <img
              src="t2.png"
              alt="token"
              className="w-[300px] h-[250px] ml-28 my-auto mt-12"
            />

            {/* Right Column */}
            <div className="flex flex-col w-[270px] h-[300px] ml-32 mt-12 gap-8">
              {allocation.slice(3).map((item, index) => (
                <button
                  key={index}
                  className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-amber-200 flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black shadow-lg"
                >
                  <h1 className="text-2xl m-auto">{item.name}</h1>
                  <h1 className="text-3xl m-auto">{item.percentage}%</h1>
                </button>
              ))}
            </div>
          </div>

          {/* Token ID Section */}
          <button className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-amber-200 flex flex-row w-auto h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black m-auto mb-8 shadow-lg">
            <h1 className="text-2xl ml-3">ID:</h1>
            <h1 className="text-3xl ml-[15px] mr-3">00000000000000000000</h1>
            <button>
              <img src="/copy.png" alt="copy" className="size-8 m-auto" />
            </button>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;







// const Tokenomics = () => {
//   return (
//     <section className='relative w-full h-screen'>
//         <div className='flex flex-col w-full h-screen'>
//         <div className='flex flex-col w-[1350px] h-[600px] m-auto text-white'>
//             <h1 className='text-center text-7xl font-bold'>TOKENOMICS</h1>
//         <div className='flex flex-row w-[1350px] h-[650px] m-auto mt-12 text-white'>
//             <button className='flex flex-col w-[270px] h-[300px] ml-32 mt-12 gap-8'>
//             <button className='transition duration-150 ease-in-out flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black'>
//              <h1 className='text-2xl m-auto'>Investors</h1>
//              <h1 className='text-3xl m-auto'>15%</h1>
//            </button>

           
//            <button className='transition duration-150 ease-in-out flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black'>
//              <h1 className='text-2xl m-auto'>Investors</h1>
//              <h1 className='text-3xl m-auto'>15%</h1>
//            </button>

           
//            <button className='transition duration-150 ease-in-out flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black'>
//              <h1 className='text-2xl m-auto'>Investors</h1>
//              <h1 className='text-3xl m-auto'>15%</h1>
//            </button>
//            </div>
//           <img src='t2.png' alt='token' className='w-[300px] h-[250px]  ml-28 my-auto mt-12' />

//           <div className='transition duration-150 ease-in-out flex flex-col w-[270px] h-[300px] ml-32 mt-12 gap-8'>
//             <button className='flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black'>
//              <h1 className='text-2xl m-auto'>Investors</h1>
//              <h1 className='text-3xl m-auto'>15%</h1>
//            </button>

           
//            <button className='transition duration-150 ease-in-out flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black'>
//              <h1 className='text-2xl m-auto'>Investors</h1>
//              <h1 className='text-3xl m-auto'>15%</h1>
//            </button>

           
//            <button className='transition duration-150 ease-in-out flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black'>
//              <h1 className='text-2xl m-auto'>Investors</h1>
//              <h1 className='text-3xl m-auto'>15%</h1>
//            </button>
//            </div>



//            </div>
//            <button className='transition duration-150 ease-in-out flex flex-row w-auto h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black m-auto mb-8'>
//              <h1 className='text-2xl ml-3'>ID:</h1>
//              <h1 className='text-3xl ml-[15px] mr-3'>00000000000000000000</h1> <button><img src='/copy.png' alt='copy' className='size-8 m-auto'/></button>
//            </button>
//         </button>
//         </button>

        

//           </div>
          
//     </section>
//   )
// }

// export default Tokenomics




// <div className='flex flex-col w-[270px] h-[250px]'>
//             <div className='flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black ml-32 mt-32'>
//             <h1 className='text-2xl ml-3'>Investors</h1>
//             <h1 className='text-3xl ml-[45px]'>15%</h1>
//           </div>
//           <div className='flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black ml-32 mt-5'>
//             <h1 className='text-2xl ml-3'>Investors</h1>
//             <h1 className='text-3xl ml-[45px]'>15%</h1>
//           </div>
//           <div className='flex flex-row w-[270px] h-[75px] p-3 border-2 rounded-2xl bg-amber-100 text-black font-black ml-32 mt-5'>
//             <h1 className='text-2xl ml-3'>Investors</h1>
//             <h1 className='text-3xl ml-[45px]'>15%</h1>
//           </div>
//           </div>