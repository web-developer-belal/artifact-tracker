import { toast } from "react-toastify";

const Contact = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    toast.success("Message send successfully.");
    form.reset();
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-gray-600">
        Have a question or feedback? Reach out to us!
      </p>
      <form onSubmit={handelSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
        <textarea
          placeholder="Your message"
          rows="5"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
