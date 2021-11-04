import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
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
          <Link href="/contact-us"><a><button type="button" className="mt-1 text-white mr-1 md:mx-4 w-40 bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-700">Book Now </button></a></Link>
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
                    src="/services/External-Repair.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    alt="External Repairs"
                    />
                </div>


                <div className="relative justify-center my-auto p-4 bg-test">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Internal and External Repairs</h2>

                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-12 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        We offer a wide range of internal or external repairs to properties, if you have an issue drop us a message and we'll get back to you!</p>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                
                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Partial or Complete Repairs</h2>
                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-12 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        Need a quick and painless repair made be it partial or complete? We have you have covered!</p>
                </div>
                <div className="line-space brightness-50">
                    <Image 
                    src="/services/Partial-Repairs.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    alt="Partial Repairs"
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
                    alt="Gypsum Plasterboard"
                    />
                    </div>
                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Gypsum Plasterboard and Wall Partitions</h2>
                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-12 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        Zorilov Handyman offers complete Gypsum Plasterboard services be it wall partions or wall coverings</p>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                
                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Partial Painting</h2>
                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-12 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        No job is too small, need something only partially painted, we can give you a no obligation quote!</p>
                </div>
                <div className="line-space brightness-50">
                    <Image 
                    src="/services/Partial-Painting.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    alt="Partial Painting"
                    />
                    </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-last md:order-first line-space brightness-50">
                    <Image 
                    src="/services/Painting.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    alt="Painting & Decorating"
                    />
                    </div>
                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Painting & Decorating</h2>
                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-12 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        At Zorilov Handyman we believe that Painting and Decorating can make or break a house, so we offer a first class service to make the dream a reality.</p>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                
                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Bathroom, Toilets and Dry Room Repairs</h2>
                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-12 lg:px-16 lg:py-10 text-xl md:text-2xl">
                       Our experienced staff can take care of any repair problem you have, let us know if you have an issue.</p>
                </div>
                <div className="line-space brightness-50">
                    <Image 
                    src="/services/Toilets.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    alt="Bathroom Makeover"
                    />
                    </div>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-last md:order-first line-space brightness-50">
                    <Image 
                    src="/services/Floor.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    alt="Decking Installation"
                    />
                    </div>
                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Floor and Wall Coverings</h2>
                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-12 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        We can handle the best be it <strong>Faience, Terracotta, Granite, Laminate</strong> and much more.</p>
                </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2">
                
                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Plastering</h2>
                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-12 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        Need a wall replastered or repaired? Zorilov Handyman has this solved with our first class plastering services.</p>
                </div>
                <div className="line-space brightness-50">
                    <Image 
                    src="/services/Plastering.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    alt="plastering"
                    />
                    </div>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-last md:order-first line-space brightness-50">
                    <Image 
                    src="/services/Furniture.jpg" 
                    width={880} 
                    height={880} 
                    className="max-width"
                    alt="furniture assembly"
                    />
                    </div>
                <div className="relative justify-center my-auto p-4">
                <div className="absolute top-0 left-0 z-10 grid-grey w-16 h-16 md:w-40 md:h-40 md:ml-8 md:mt-12"></div>

                    <h2 className="relative text-4xl text-gray-800 z-20 font-semibold italic">Assembling and Disassembling Furniture</h2>
                    <p className="relative text-gray-600 serif z-20 font-normal italic px-6 py-12 lg:px-16 lg:py-10 text-xl md:text-2xl">
                        We can assemble new furniture, disassemble old furniture for your needs or we can even lend a hand in moving furniture to new rooms.</p>
                </div>

            </div>
            </div>
            <div className="text-center pb-8">
                <p className="text-3xl pt-10 pb-4">And <strong>much more</strong>, do not hesitate to get in touch!</p>
                <Link href="/contact-us"><a><button type="button" className="mt-1 text-white mr-1 md:mx-4 w-40	bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-700">Contact Us</button></a></Link>

            </div>
        </div>
    </div>
    </>
    )
}