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
          <p className="max-w-screen-sm text-xl text-center mx-auto p-4">Handyman and Renovations Services serving Sittingbourne, Kent and the surrounds areas</p>
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
  <div className="wrapper text-center pb-20 px-10">
  <h4 className="text-3xl py-10 text-indigo-800 font-bold">What does Zorilov Handyman Do?</h4>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 items-stretch md:px-44">
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faHammer} /></span><p className="pt-5">Internal & External Repairs</p></div>
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faRulerCombined} /></span><p className="pt-5">Gypsum plasterboard as well as wall partitions</p></div>
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faRuler} /></span><p className="pt-5">Partial and complete plastering services</p></div>
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faPencilRuler} /></span><p className="pt-5">Floor and wall coverings</p></div>
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faPaintRoller} /></span><p className="pt-5">Partial and complete painting and decorating</p></div>
    <div><span className="p-4 bg-blue-700 rounded text-white text-2xl"><FontAwesomeIcon icon={faToolbox} /></span><p className="pt-5">Assembling or disassembling furniture</p></div>
    </div>
    <p className="pt-10 text-xl">And much more, get in <Link href="/contact-us"><a className="text-indigo-800 hover:underline">contact now!</a></Link> Or find out more about our <Link href="/services"><a className="text-indigo-700 hover:underline">services.</a></Link></p>
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


          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="rgba(75, 85, 99)" viewBox="0 0 308 308">
      <path d="M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348a140.77 140.77 0 011.812-2.153c1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802C90 87.918 80.89 98.74 80.89 117.772c0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69h.001c2.46 0 4.429-.193 6.166-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.348-2.216-3.671-3.331-6.612-4.743z" />
      <path d="M156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716a3.998 3.998 0 004.999 5.096l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853C240.143 300.27 308 232.923 308 150.143 308 67.354 240.143 0 156.734 0zm0 268.994c-23.539 0-46.338-6.797-65.936-19.657a3.996 3.996 0 00-3.406-.467l-40.035 12.726 12.924-38.129a4.002 4.002 0 00-.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 0-65.543 53.754-118.867 119.826-118.867 66.064 0 119.812 53.324 119.812 118.867.001 65.535-53.746 118.851-119.811 118.851z" />
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
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="inline w-5 h-5 mr-4" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
           Facebook
          </li>
          <li className="mb-2">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="inline w-5 h-5 mr-4" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
            InstaGram
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
