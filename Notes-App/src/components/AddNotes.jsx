const AddNotes = (props) => {
  return (
    <div>
      <section className="flex flex-col gap-4 p-6 lg:p-10 lg:h-screen h-[75vh] justify-center lg:justify-start">
        <h1 className=" text-2xl lg:text-3xl text-star font-bold tracking-widest">
          ADD NOTES
        </h1>
        <input
          onChange={(e) => {
            props.setTitle(e.target.value);
          }}
          className="w-full caret-pink-600 placeholder-neonBlue/60 rounded outline-none p-2 border-2 border-pink-600 text-xl lg:text-2xl "
          type="text"
          placeholder="Enter Note Heading"
          value={props.title}
        />
        <textarea
          className="h-52 w-full outline-none rounded p-2 border-2 border-pink-600 placeholder-neonBlue/60 caret-pink-600 text-xl lg:text-2xl "
          type="text"
          placeholder="Enter Details..."
          value={props.details}
          onChange={(e) => {
            props.setDetails(e.target.value);
          }}
        />
        <button
          onClick={props.add}
          className="w-full rounded-xl border-blue-400 border-2 bg-blue-400 hover:bg-gray-800 active:text-blue-400  text-gray-800 cursor-pointer font-semibold hover:text-white p-1.5 lg:p-3 transition-all"
        >
          Add
        </button>
      </section>
    </div>
  );
};
export default AddNotes;
