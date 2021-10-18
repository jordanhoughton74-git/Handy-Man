
export default function ContactForm() {
    return (
        <>
            <div className="">
                <div className="bg-indigo-500 py-8 rounded-t-lg mb-2">
                    <p className="text-white text-center font-bold uppercase">How can we help?</p>
                </div>

                <form>
                <div className="">
          <div>
            <label className="uppercase text-sm text-gray-600 font-bold">Full Name</label>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              />

          </div>
          <div className="mt-8">
            <label className="uppercase text-sm text-gray-600 font-bold">Email</label>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              />

          </div>
          <div className="mt-8">
            <label className="uppercase text-sm text-gray-600 font-bold">Message</label>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              
              />
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              type="submit"
              >
              Send Message
            </button>
          </div>
          </div>

        </form>

        </div>
        </>
    )
}