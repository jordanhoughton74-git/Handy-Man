import Head from 'next/head'
import Link from 'next/link'
import ReactCompareImage from 'react-compare-image';

export default function About (){
    return (
        <>
        <Head>
        <title>About | Zorilov Handyman</title>
        <meta name="title" content="About | Zorilov Handyman"/>
        <meta name="description" content="Welcome to Zorilov Handyman from here you can find information about Zorilov Handyman"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="en"/>
        <meta property="og:title" content="About |  Zorilov Handyman"/>
        <meta property="og:site_name" content="Zorilov Handyman"/>
        <meta property="og:url" content=""/>
        <meta property="og:description" content="Welcome to Zorilov Handyman from here you can find information about Zorilov Handyman"/>
        <meta property="og:type" content="website"></meta>
        </Head>
    <div className="handyman-top">
        <h1 className="py-40 text-center text-white text-3xl font-bold">About</h1>

    </div>
    <div className="wrapper pt-10 pb-4">  
        <div className="flex flex-col md:flex-row p-4 md:p-12">
            <div className="flex-1 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold italic pb-5">Why Choose Us?</h2>
                <hr className="border-4	border-indigo-500 w-1/4 rounded mb-3" />
                <p className="py-4">We are a local results driven handyman company based in Sittingbourne, 
                    Kent serving the surrounding areas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="pt-2 text-xl italic text-indigo-700">Fast Turnaround</p>
                    <p className="text-gray-700">We work on an efficient turnaround and let you 
                    know how long it will take at the beginning so you are not left guessing.</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="pt-2 text-xl italic text-indigo-900">Quality Guaranteed</p>
                    <p className="text-gray-700">Being a small business my clients are a showcase of my work,
                    I aim for 100% satisfaction on any job.</p>    
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                <p className="pt-2 text-xl italic text-yellow-600">Free Quote</p>
                    <p className="text-gray-700">Why not give us a call or fill out the contact form and we'll
                    get back to you with a free no obligation quote</p>   
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                <p className="pt-2 text-xl italic text-yellow-900">No Job Too Small</p>
                    <p className="text-gray-700">No job is too small, we provide Handyman Services around Kent for any person.</p>   
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className="px-4 md:px-40 lg:px-80 text-center bg-color">
        <h3 className="py-6 text-2xl font-semibold italic text-indigo-900">Before & After</h3>
        <hr className="border-4	border-indigo-500 w-1/4 rounded mb-3 mx-auto" />

        <p className="pb-5 text-xl">The construction of a wall in a clients garden</p>
        <ReactCompareImage className="pb-10" leftImageAlt="before the wall was renovated" rightAlt="after the wall was renovated" leftImage="images/before-after/before-wall.webp" rightImage="images/before-after/after-wall.webp" />
        <p className="py-5 text-xl">The client wanted a stylish patio to complement the garden works we carried out</p>
        <ReactCompareImage leftImageAlt="before patio" rightAlt="after patio" leftImage="images/before-after/before-patio.webp" rightImage="images/before-after/after-patio.webp" />

    </div>
    <div className="bg-color text-center pt-10 pb-20">
        <div className="wrapper">

            <h4 className="text-2xl semi-bold italic py-10 text-indigo-900">Don't Just Take Our Word For It, Here Is What Our Customers Are Saying!</h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-24 pb-5">
                    <div className="bg-white rounded-md shadow-lg p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-600 -mt-10 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" /></svg>
                        <p className="text-xl">"I recommend Stoyan, who personally did a very good job, repaired the roof of my shed, painted the shed and I no longer have a problem with leaks.  Thank you, Stoyan."</p>
                        <p className="text-left text-gray-600">Chery</p>
                     </div>
                     <div className="bg-white rounded-md shadow-lg p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-600 -mt-10 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" /></svg>
                        <p className="text-xl">"Had a few small jobs needed to be done around the house, found Stoyan’s number, came round, very friendly and good at his job, will recommend him to anyone."</p>
                        <p className="text-left text-gray-600">Suelan</p>
                     </div>
                     <div className="bg-white rounded-md shadow-lg p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-600 -mt-10 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" /></svg>
                        <p className="text-xl">"Stoyan, just a quick message to say thank you so much for the work you have completed on our house.   Everything looks great and you worked so professionally.  Once again many thanks."</p>
                        <p className="text-left text-gray-600">Russ</p>
                     </div>
            </div>
            <Link href="/contact-us"><a><button type="button" className="mt-1 text-white mr-1 md:mx-4 w-40 bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-700">Book Now </button></a></Link>

        
        </div>
    </div>

        </>
    )
}