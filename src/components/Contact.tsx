// components/Contact.tsx

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-gray-600">
          Feel free to reach out through the form below or connect with me on
          social media!
        </p>
        <form
          action="https://formsubmit.co/eranolorido@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
