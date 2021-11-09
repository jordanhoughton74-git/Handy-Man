import Head from 'next/head';
import Testimonial from "../components/testimonial";
import ContactForm from "../components/contact-form";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer, faPaintRoller, faPencilRuler, faRuler, faRulerCombined, faToolbox } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <>
    <Head>
      <title>Handyman Services Sittingbourne & Kent | Zorilov Handyman</title>
      <meta name="title" content="Handyman Services Kent & UK | Zorilov Handyman"/>
      <meta name="description" content="Welcome to Zorilov Handyman, we offer a wide range of handyman services covering Sittingbourne, Kent and the surrounding areas"/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="Handyman Services Kent & UK |  Zorilov Handyman"/>
      <meta property="og:site_name" content="Zorilov Handyman"/>
      <meta property="og:url" content=""/>
      <meta property="og:description" content="Welcome to Zorilov Handyman, we offer a wide range of handyman services covering Sittingbourne, Kent and the surrounding areas"/>
      <meta property="og:type" content="website"></meta>
    </Head>
    <div className="min-h-screen home-top text-white">
      <div className="backdrop-filter backdrop-brightness-50 w-full min-h-screen justify-center text-center flex flex-col">
        <div>
          <h1 className="text-center py-3 text-4xl md:text-5xl lg:text-6xl">
            Zorilov Handyman
          </h1>
          <p className="max-w-screen-sm text-xl text-center mx-auto p-4">Handyman and Renovations Services, serving Sittingbourne, Kent and the surrounds areas</p>
          <div>
            <Link href="/contact-us"><a><button type="button" className="mt-1 mr-1 md:mx-4 w-40	bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-700">Contact Us</button></a></Link>
            <Link href="/services"><a><button type="button" className="mt-1 ml-1 md:mx-4 w-40	bg-green-800 py-2 px-4 rounded-full hover:bg-green-600">View Services</button></a></Link>
          </div>
          </div>
        </div>

      <div className="custom-shape-divider-bottom-1628680838">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </div>

    <div className="bg-color tablet-view">
      <div className="wrapper">
        <div className="text-center my-auto lg:-mt-24 flex flex-col lg:flex-row justify-center space-y-12 lg:space-y-0 lg:space-x-8 items-stretch px-4 lg:px-12 pb-12 lg:pb-24">
          <div className="my-auto w-full z-10 lg:w-72 bg-white p-4 shadow-lg text-center rounded-md">
            <div className="rounded-full h-20 w-20 bg-indigo-700 -mt-14 shadow-lg"><p className="icon-info text-white text-xl">100%</p></div>
            <h2 className="text-2xl">Satisfaction Guaranteed</h2>
            <p className="pt-2 text-lg text-gray-700">Trust our work, we offer full satisfaction so you can rest assured of a job well done.</p>
          </div>

          <div className="w-full z-10 lg:w-72 bg-white p-4 shadow-lg text-center rounded-md">
          <div className="rounded-full h-20 w-20 bg-blue-600 -mt-14 shadow-lg"><p className="icon-svg icon-info text-white text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg></p></div>
            <h2 className="text-2xl">Lowest Prices</h2>
            <p className="pt-2 text-lg text-gray-700">As a small business we run with low overheads and pass this benefit on to you. <strong>You'll be suprised at the prices!</strong></p>
          </div>

          <div className="w-full z-10 lg:w-72 bg-white p-4 shadow-lg text-center rounded-md">
          <div className="rounded-full h-20 w-20 bg-purple-600 -mt-14 shadow-lg"><p className="icon-svg icon-info text-white text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></p></div>
            <h2 className="text-2xl">Bespoke Service</h2>
            <p className="pt-2 text-lg text-gray-700">All Handyman services are quoted and fulfilled to your spec, ensuring you get exactly what you want.</p>
          </div>

        </div>
      </div>
    </div>

    <div className="wrapper">
        <div className="py-12 px-2 md:py-24 justify-center text-center">
          <h3 className="text-4xl pb-3">Local Personal Service</h3> 
          <hr className="border-4	border-indigo-700 w-1/4 rounded mx-auto mb-3" />
          <p className="max-w-screen-sm mx-auto text-lg pb-4">We are a Handyman and Renovation specialist based in Sittingbourne, Kent and serve the surrounding areas. Satisfaction is key to the success of our family run business, so sit back and relax while we take care of making your house your home. </p>
          <Link href="/services"><a><button type="button" className="mt-1 text-white mr-1 md:mx-4 w-40	bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-700">View The Range</button></a></Link>
      </div>
    </div>
<div className="bg-color">
  <div className="wrapper text-center pb-20">
  <h4 className="text-3xl py-10 text-indigo-800 font-bold">What does Zorilov Handyman Do?</h4>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 items-stretch md:px-44">
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faHammer} /></span><p className="pt-5">Internal & External Repairs</p></div>
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faRulerCombined} /></span><p className="pt-5">Gypsum plasterboard as well as wall partitions</p></div>
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faRuler} /></span><p className="pt-5">Partial and complete plastering services</p></div>
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faPencilRuler} /></span><p className="pt-5">Floor and wall coverings</p></div>
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faPaintRoller} /></span><p className="pt-5">Partial and complete painting and decorating</p></div>
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faToolbox} /></span><p className="pt-5">Assembling or disassembling furniture</p></div>
    </div>
    <p className="pt-10 text-xl">And much more get in <Link href="/contact-us"><a className="text-indigo-800 hover:underline">contact now!</a></Link> Or find out more about our <Link href="/services"><a className="text-indigo-700 hover:underline">services.</a></Link></p>
  </div>
</div>  





<Testimonial />
<div className="bg-color p-4 md:p-12 lg:px-24">
  <div className="wrapper">
    <div className="flex flex-col md:flex-row p-4 md:p-12 bg-white rounded-2xl">
      <div className="flex-1 flex flex-col my-auto">
        <h5 className="text-center font-bold uppercase pb-4 text-3xl">Get In Touch!</h5>
        <p className="text-gray-600 pb-4 md:pr-4">Want to chat about our services? Get in touch and we can walk you through just how much we can do for you.</p>
        <div>
          <p className="pb-4 text-gray-600 flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
            <a href="tel:07596 021207">07596 021207</a></p>
          <p className="text-gray-600 flex pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:stoyanzorilov@gmail.com">StoyanZorilov@gmail.com</a></p>
            <hr className="md:mr-4"/>
          <h5 className="text-center font-bold uppercase py-4 text-3xl">Follow us on</h5>
          <ul className="text-gray-600">
            <li className="mb-2">
          <a href="/" className="pb-4" aria-label="Facebook">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="inline w-5 h-5 mr-4" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
           Facebook
          </a>
          </li>
          <li className="mb-2">
          <a aria-label="Twitter">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="inline w-5 h-5 mr-4" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
            Twitter
          </a>
          </li>
          <li className="mb-2">
          <a className="pb-4" aria-label="InstaGram">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="inline w-5 h-5 mr-4" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
            InstaGram
          </a>
          </li>
          <li className="mb-2">
          <a className="pb-4" aria-label="LinkedIn">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="inline w-5 h-5 mr-4" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
            LinkedIn
          </a>
          </li>
          </ul>
        </div>
      </div>
      <div className="flex-1"><ContactForm /></div>

    </div>
  </div>
</div>
  
  </>
  );
}
