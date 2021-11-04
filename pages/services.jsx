import Image from 'next/image'
import Head from 'next/head'
export default function services(){
    return(
    <>
    <Head>
      <title>Services | Zorilov Handyman</title>
      <meta name="title" content="Services | Zorilov Handyman"/>
      <meta name="description" content="Welcome to Zorilov Handyman, view our wide range of services that we offer in Sittingbourne, Kent"/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="Services |  Zorilov Handyman"/>
      <meta property="og:site_name" content="Zorilov Handyman"/>
      <meta property="og:url" content=""/>
      <meta property="og:description" content="Welcome to Zorilov Handyman, view our wide range of services that we offer"/>
      <meta property="og:type" content="website"></meta>
    </Head>
    <div className="services-top text-white">
      <div className="backdrop-filter backdrop-brightness-50 w-full h-full justify-center text-center flex flex-col">
          
    <div className="wrapper">
        <div className="py-24 justify-center text-center">
          <h2 className="text-4xl pb-3 font-semibold">View the wide range of handyman services offered</h2> 
          <hr className="border-4	border-indigo-500 w-1/4 rounded mx-auto mb-3" />
          <p className="max-w-screen-sm mx-auto text-lg pb-4 italic">We discuss your project with you to find the exact materials that suit all budgets and requirements. </p>
          <button type="button" className="mt-1 text-white mr-1 md:mx-4 w-40 bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-700">Book Now </button>
      </div>
    </div>
    </div>
    </div>
    <div className="bg-color p-2 md:p-6">
        <div className="wrapper-2">
            <div className="bg-white">
        
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-last md:order-first line-space brightness-50">
                    <Image 
                    src="/images/Carpet.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    />
                </div>


                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Plastering</h2>

                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-6 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        Cupcake ipsum dolor sit amet caramels. Jelly-o sweet oat cake wafer bear claw. Fruitcake sugar plum oat cake donut gummi bears tiramisu bonbon candy canes. Jelly-o cake apple pie ice cream sugar plum toffee cookie gummi bears jujubes.</p>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                
                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Carpet Laying</h2>
                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-6 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        Cupcake ipsum dolor sit amet caramels. Jelly-o sweet oat cake wafer bear claw. Fruitcake sugar plum oat cake donut gummi bears tiramisu bonbon candy canes. Jelly-o cake apple pie ice cream sugar plum toffee cookie gummi bears jujubes.</p>
                </div>
                <div className="line-space brightness-50">
                    <Image 
                    src="/images/HardwoodFloor.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    />
                    </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-last md:order-first line-space brightness-50">
                    <Image 
                    src="/images/WoodenFloor.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    />
                    </div>
                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Painting & Decorating</h2>
                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-6 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        Cupcake ipsum dolor sit amet caramels. Jelly-o sweet oat cake wafer bear claw. Fruitcake sugar plum oat cake donut gummi bears tiramisu bonbon candy canes. Jelly-o cake apple pie ice cream sugar plum toffee cookie gummi bears jujubes.</p>
                </div>

            </div>
            </div>
        </div>
    </div>
    </>
    )
}