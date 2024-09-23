import Link from "next/link";

export function ContactMe() {
    return (
            <div>
                <h1 className="font-bold text-red-600 text-3xl flex justify-center items-center mb-8 space-x-8">Contact Me</h1>
           <form>
            <div>     
          <label htmlFor="name" className="block text-lg font-medium text-black mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Your Name"
          />
        </div>

    
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-black mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-lg font-medium text-black mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 border border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Subject"
          />
        </div>

    
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-black mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 border border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Your Message"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-500 text-white rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

