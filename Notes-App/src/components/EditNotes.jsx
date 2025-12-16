

const EditNotes = (props) => {
  // If not editing anything → don't show overlay
  if (props.isEditing === null) return null;

  const disableSave =
    props.editingText.trim() == "" && props.editingTitle == "";

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md grid place-items-center z-50">
      <section className="flex flex-col gap-4 p-4 lg:p-8 bg-gray-800 rounded-2xl w-11/12 lg:w-1/2">
        <h1 className="text-2xl lg:text-3xl font-bold text-white">Edit Your Note</h1>

        <input
          onChange={(e) => props.setEditingTitle(e.target.value)}
          className="w-full caret-blue-600 rounded outline-none p-2 border-2 border-blue-600 text-lg lg:text-2xl"
          type="text"
          placeholder="Enter Note Heading"
          value={props.editingTitle}
        />

        <textarea
          onChange={(e) => props.setEditingText(e.target.value)}
          className="h-52 w-full outline-none rounded p-2 border-2 border-blue-600 caret-blue-600 text-lg lg:text-2xl"
          placeholder="Enter Details..."
          value={props.editingText}
        />

        <div className="flex gap-3 items-center justify-center">
          
          <button
            onClick={props.handleSave}
            className={`w-full rounded-xl border-2 border-pink-600 bg-pink-600 text-white text-xs lg:text-base font-semibold p-3 transition-all ${
              disableSave
                ? "opacity-50 cursor-not-allowed "
                : "opacity-100 hover:bg-transparent hover:text-pink-600 cursor-pointer"
            }`}
          >
            Save Changes
          </button>

          <button
            onClick={props.handleCancel}
            className="w-full rounded-xl text-xs lg:text-base border-2 border-pink-600 text-pink-600 font-semibold p-3 hover:bg-pink-600 hover:text-white cursor-pointer transition-all"
          >
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditNotes;
