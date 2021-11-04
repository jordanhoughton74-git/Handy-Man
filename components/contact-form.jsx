import emailjs from 'emailjs-com';
import {useState} from 'react';

export default function ContactForm() {

  const [form, setForm] = useState({
      name: "",
      email: "",
      message: ""
  });
  function handleChange(event) {
      const { name, value } = event.target;
      setForm(() => {
         return {
           [name]: value
  }
  ;});}

  function makeVisible(){
      let element = document.getElementById("submitText");
      element.classList.remove("invisible");
    
    }

  function sendEmail(e){
      e.preventDefault();

      emailjs.sendForm("service_lyxdm5a", "template_0ku1x0p", e.target, "user_JmyFU7LsCDhH5vpHThW4P")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setForm({
          name: "",
          email: "",
          message: ""   
      });
      makeVisible();
  }
    return (
        <>
            <div className="">
                <div className="bg-indigo-700 py-8 rounded-t-lg mb-2">
                    <p className="text-white text-center font-bold uppercase">How can we help?</p>
                </div>

        <form onSubmit={sendEmail}>
                <div>
          <div>
            <label className="uppercase text-sm text-gray-600 font-bold">Full Name</label>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              value={form.name} 
              name="name"
              id="name"
              onChange={handleChange} 
              />

          </div>
          <div className="mt-8">
            <label className="uppercase text-sm text-gray-600 font-bold">Phone Number</label>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              value={form.email} 
              onChange={handleChange}
              id="email"
              type="email" 
              name="email"
              />

          </div>
          <div className="mt-8">
            <label className="uppercase text-sm text-gray-600 font-bold">Message</label>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              value={form.message} 
              onChange={handleChange} 
              id="message"
              as="textarea" 
              name="message"
    />
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              type="submit"
              >
              Send Message
            </button>
            <p id="submitText" className="green-text invisible">Thank You! We'll get back to you shortly.</p>
          </div>
          </div>

        </form>

        </div>
        </>
    )
}