import ContactForm from "../components/contact-form";
import Head from 'next/head'

export default function ContactUs (){
    return (
<>
      <Head>
      <title>Contact Us | Zorilov Handyman</title>
      <meta name="title" content="Contact Us | Zorilov Handyman"/>
      <meta name="description" content="Welcome to Zorilov Handyman, get in contact for a free no obligation quote"/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="Contact Us |  Zorilov Handyman"/>
      <meta property="og:site_name" content="Zorilov Handyman"/>
      <meta property="og:url" content=""/>
      <meta property="og:description" content="Welcome to Zorilov Handyman, get in contact for a free no obligation quote"/>
      <meta property="og:type" content="website"></meta>
    </Head>
    <div className="bg-gray-600 py-10">

    </div>
        <div className="bg-color p-4 md:p-12 lg:px-24">
            <div className="wrapper">
                <div className="flex flex-col md:flex-row p-4 md:p-12 bg-white rounded-2xl">
                <div className="flex-1 flex flex-col my-auto">
        <h5 className="text-center font-bold uppercase pb-4 text-3xl">Get In Touch!</h5>
        <p className="text-gray-600 pb-4 md:pr-4">Whether you want a quote or just need to ask a question it all starts by filling out the form and getting in touch with us.  If you don't like forms, no worries give us a call, drop us an email or view us on our Social Media.</p>
        <div>
          <p className="pb-4 text-gray-600 flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
           <a href="tel:07596021207">07596 021207</a></p>
          <p className="text-gray-600 flex pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:stoyanzorilov@gmail.com">StoyanZorilov@Gmail.com</a></p>
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
 </>   )
}