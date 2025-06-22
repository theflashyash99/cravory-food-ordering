const Contact = () => {
  return (
    <div className="mt-24">
      <h1 className="font-bold text-3xl text-center p-4 m-4">Contact Us</h1>

      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <button className="border border-black p-2 m-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
