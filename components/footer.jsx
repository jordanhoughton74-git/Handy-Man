import Link from "next/link"

export default function Footer(){
    return(
        <>

  <footer className="text-gray-600 body-font bg-gray-700">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg className="fill-current text-white h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span className="ml-3 text-xl text-white">Handy Man</span>
        </a>
        <p className="mt-2 text-sm text-white">Local Handy Man and Renovation Services</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <p className="title-font font-bold text-white tracking-widest text-md mb-3">Useful Links</p>
          <nav className="list-none mb-10">
            <li>
              <Link href="/"><a className="text-white hover:text-red-300">Home</a></Link>
            </li>
            <li>
            <Link href="/services"><a className="text-white hover:text-red-300">Services</a></Link>
            </li>
            <li>
            <Link href="/about"><a className="text-white hover:text-red-300">About</a></Link>
            </li>
           
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <p className="title-font font-bold text-white tracking-widest text-md mb-3">Contact</p>
          <nav className="list-none mb-10">
          <li>
            <Link href="/contact-us"><a className="text-white hover:text-red-300">Contact Us</a></Link>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="mailto:Handy.Man@gmail.com">Handy.Man@Gmail.com</a>
            </li>
            <li>
              <a className="text-white hover:text-red-300" href="tel:0000000000">00000 000000</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <p className="title-font font-bold text-white tracking-widest text-md mb-3">Legal</p>
          <nav className="list-none mb-10">
            <li>
              <Link href="/privacy-policy"><a className="text-white hover:text-red-300">Privacy Policy</a></Link>
            </li>
           
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-gray-900">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left">© {new Date().getFullYear()} Handy Man</p>
        <p className="text-white text-sm text-center sm:text-left pl-5">Website Created by <a className="hover:text-red-300" target="_blank" rel="noopener noreferrer" href="https://houghtonwebdesign.co.uk/">Houghton Web Design</a></p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-200" aria-label="Facebook">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-200" aria-label="Twitter">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-200" aria-label="InstaGram">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-200" aria-label="LinkedIn">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>


        </>
    )
}