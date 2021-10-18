import Testimonial from "../components/testimonial";
import ContactForm from "../components/contact-form";

export default function Home() {
  return (
    <>
    <div className="min-h-screen home-top text-white">
      <div className="backdrop-filter backdrop-brightness-50 w-full min-h-screen justify-center text-center flex flex-col">
        <div>
          <h1 className="text-center md:text-5xl lg:text-6xl">
            Handy Man
          </h1>
          <p className="max-w-screen-sm text-xl text-center mx-auto pt-4 pb-4">Cupcake ipsum dolor sit amet caramels. Jelly-o sweet oat cake wafer bear claw. Fruitcake sugar plum oat cake donut gummi bears tiramisu bonbon candy canes. Jelly-o cake apple pie ice cream sugar plum toffee cookie gummi bears jujubes.</p>
          <div>
            <button type="button" className="mt-1 mr-1 md:mx-4 w-40	bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-700">Contact Me</button>
            <button type="button" className="mt-1 ml-1 md:mx-4 w-40	bg-green-600 py-2 px-4 rounded-full hover:bg-green-700">View Services</button>
          </div>
          </div>
        </div>

      <div className="custom-shape-divider-bottom-1628680838">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </div>

    <div className="bg-color">
      <div className="wrapper">
        <div className="md:-mt-24 flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-8 items-stretch px-4 md:px-12 pb-12 md:pb-24">
          <div className="w-full z-10 md:w-60 lg:w-72 bg-white p-4 shadow-lg text-center rounded-md">
            <div className="rounded-full h-20 w-20 bg-indigo-600 -mt-14 shadow-lg"><p className="icon-info text-white text-xl">100%</p></div>
            <h2 className="text-2xl">Satisfaction Guarenteed</h2>
            <p className="pt-2 text-lg text-gray-700">Trust our work, we offer 100% satisfaction so you can rest assured of a job well done.</p>
          </div>

          <div className="w-full z-10 md:w-60 lg:w-72 bg-white p-4 shadow-lg text-center rounded-md">
          <div className="rounded-full h-20 w-20 bg-blue-600 -mt-14 shadow-lg"><p className="icon-svg icon-info text-white text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg></p></div>
            <h2 className="text-2xl">Lowest Prices</h2>
            <p className="pt-2 text-lg text-gray-700">As a small business we run with low overheads and pass this benefit on to you.</p>
          </div>

          <div className="w-full z-10 md:w-60 lg:w-72 bg-white p-4 shadow-lg text-center rounded-md">
          <div className="rounded-full h-20 w-20 bg-purple-600 -mt-14 shadow-lg"><p className="icon-svg icon-info text-white text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></p></div>
            <h2 className="text-2xl">Bespoke Service</h2>
            <p className="pt-2 text-lg text-gray-700">All floorings are measured and cut to order, we can help you get the best for you money. </p>
          </div>

        </div>
      </div>
    </div>

    <div className="wrapper">
        <div className="py-12 md:py-24 justify-center text-center">
          <h2 className="text-4xl pb-3">Local Personal Service</h2> 
          <hr className="border-4	border-indigo-500 w-1/4 rounded mx-auto mb-3" />
          <p className="max-w-screen-sm mx-auto text-lg pb-4">We use the finest materials direct to your door, our fully trained carpenters will cut and measure all floorings, so sit back and relax while we take care of making your house your home. </p>
          <button type="button" className="mt-1 text-white mr-1 md:mx-4 w-40	bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-700">View The Range</button>
      </div>
    </div>
  
<Testimonial />
<div className="bg-color p-4 md:p-12 lg:px-24">
  <div className="wrapper">
    <div className="flex flex-col md:flex-row p-4 md:p-12 bg-white rounded-2xl">
      <div className="flex-1">

      </div>
      <div className="flex-1"><ContactForm /></div>

    </div>
  </div>
</div>
  
  </>
  );
}
