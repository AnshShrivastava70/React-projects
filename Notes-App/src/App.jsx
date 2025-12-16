import { useState, useEffect } from "react";
import AddNotes from "./components/AddNotes";
import RecentNotes from "./components/RecentNotes";
import EditNotes from "./components/EditNotes";
import { ToastContainer, toast } from "react-toastify";
import useDebounce from "./hooks/useDebounce";

const App = () => {
  const [notesArr, setNotesArr] = useState([]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingText, setEditingText] = useState("");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("Notes") || "[]");
    console.log(savedNotes);
    if (savedNotes) {
      setNotesArr(savedNotes);
      console.log(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notesArr));
  }, [notesArr]);

  const add = () => {
    {
      if (title.trim() !== "" || details.trim() != "") {
        setNotesArr((prev) => [...prev, { title, details }]);
        console.log("added note...");
        console.log(notesArr);
        toast.success("Your Note Was Added");

        //Clears Inputfields
        setTitle("");
        setDetails("");
      }
    }
  };

  const deleteNote = (idx) => {
    const arr = [...notesArr];
    arr.splice(idx, 1);
    setNotesArr(arr);
    toast.info("Your Note was Deleted...");
  };

  const editNote = (idx) => {
    setIsEditing(idx);
    setEditingText(notesArr[idx].details);
    setEditingTitle(notesArr[idx].title);
    console.log(editingTitle);
    console.log(editingText);
  };

  const handleSave = () => {
    if (isEditing === null || isEditing === false) return;
    if (editingTitle.trim() === "" && editingText.trim() === "") {
      toast.error("Cannot save an empty note!");
      return;
    }
    setNotesArr((prev) =>
      prev.map((note, idx) =>
        idx === isEditing
          ? { ...note, title: editingTitle, details: editingText }
          : note
      )
    );

    toast.success("Your Note was Saved Successfully...");
    console.log(notesArr);
    setIsEditing(null);
    setEditingTitle("");
    setEditingText("");
  };

  const handleCancel = () => {
    setIsEditing(null);
    setEditingTitle("");
    setEditingText("");
  };

  const filteredNotes = notesArr.filter((note) => {
    const query = debouncedSearch.toLowerCase();

    return (
      note.title.toLowerCase().includes(query) ||
      note.details.toLowerCase().includes(query)
    );
  });
  console.log(debouncedSearch);

  return (
    <div className="bg-gray-800 w-full text-white max-h-auto">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className="text-2xl text-center pt-4 text-pink-600 tracking-widest underline underline-offset-8">
        Notes App
      </h1>
      <div className="relative lg:grid lg:grid-rows-1 lg:grid-flow-col lg:grid-cols-2 gap-2 lg:h-full w-full mt-8 bg-black">
        {/* <div className="relative lg:grid grid-flow-row grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-flow-col lg:grid-cols-2 gap-2 lg:h-full w-full mt-8 bg-black"> */}
        <AddNotes
          add={add}
          title={title}
          setTitle={setTitle}
          details={details}
          setDetails={setDetails}
        />
        <RecentNotes
          notesArr={notesArr}
          filteredNotes={filteredNotes}
          setNotesArr={setNotesArr}
          deleteNote={deleteNote}
          editNote={editNote}
          search={search}
          setSearch={setSearch}
        />
        <EditNotes
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editingText={editingText}
          setEditingText={setEditingText}
          editingTitle={editingTitle}
          setEditingTitle={setEditingTitle}
          notesArr={notesArr}
          setNotesArr={setNotesArr}
          handleCancel={handleCancel}
          handleSave={handleSave}
        />
      </div>
    </div>
  );
};
export default App;
