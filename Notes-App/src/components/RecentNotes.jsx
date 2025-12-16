import { Trash2, X, Pencil, Search } from "lucide-react";
import { useEffect, useState } from "react";

const RecentNotes = (props) => {
  const noResults = "No signals detected in this sector.";

  const [burst, setBurst] = useState(false);

  const clearSearch = () => {
    props.setSearch("");
    search.value = "";
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setBurst(true);
        setTimeout(() => setBurst(false), 250);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const disableSearch = props.notesArr.length === 0;
  return (
    <div>
      <section className="bg-slate-900 flex flex-col p-2">
        <h2 className="text-2xl lg:text-3xl py-4 lg:py-4 px-4 lg:px-8 text-center  font-bold text-blue-400 tracking-widest ">
          RECENT NOTES
        </h2>
        <div className="flex gap-4 lg:px-8 pb-8 lg:py-4 items-end justify-center lg:justify-start ">
          <label htmlFor="search">
            <Search />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search your universe..."
            disabled={disableSearch}
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
            className="bg-transparent outline-none  placeholder-neonBlue/60 caret-pink-600 text-white "
          />
          <button
            onClick={clearSearch}
            className={`
    text-gray-400 cursor-pointer transition-all duration-200
    hover:text-gray-600
    ${
      props.search === ""
        ? "opacity-0 scale-95 pointer-events-none"
        : "opacity-100 scale-100"
    }
  `}
            aria-label="Clear search"
          >
            <X />
          </button>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-4 lg:overflow-y-auto scrollbar-hide lg:h-[80vh] w-full lg:p-5 pb-7">
          {/* Placeholder for NO Recent Notes */}
          {props.notesArr.length === 0 && (
            <>
              <span className="text-xl lg:text-2xl py-4 neon-text text-neonBlue w-full text-center ">
                Your universe of notes hasn&apos;t formed yet.
              </span>
              <img
                src="https://i.ytimg.com/vi/dMMderLBH20/maxresdefault.jpg"
                alt="Forget about it..."
              />
            </>
          )}

          {props.notesArr?.length > 0 && props.filteredNotes?.length === 0 && (
            <div className="flex flex-col items-center   text-lg lg:text-2xl w-full text-center gap-2">
              <div
                className={`glitch-container ${burst ? "glitch-burst" : ""}`}
              >
                <span className="relative z-10">{noResults}</span>
                <span className="glitch-layer red ">{noResults}</span>
                <span className="glitch-layer blue ">{noResults}</span>
              </div>
              <img
                className="animate-pulse w-[80%] "
                src="https://static.vecteezy.com/system/resources/previews/024/803/291/non_2x/hud-sci-fi-interface-screen-danger-warning-view-design-virtual-reality-futuristic-technology-display-vector.jpg"
                alt="Forget about it..."
              />
              <p className="mt-4 text-xs font-mono tracking-[0.25em] text-cyan-400/60 animate-fade-in">
                SYSTEM SUGGESTION: refine query or initiate new note
              </p>
            </div>
          )}

          {props.filteredNotes.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] bg-cover h-40 lg:h-52 w-34 lg:w-36 rounded-2xl text-slate-800 py-5 px-4 "
              >
                <div className="h-11/12 w-full overflow-auto scrollbar-hide pb-7">
                  <h3 className="lg:text-lg font-bold leading-tight py-2 truncate overflow-hidden text-ellipsis whitespace-nowrap">
                    {elem.title}
                  </h3>
                  <p className="text-xs font-medium leading-tight text-gray-600 wrap-break-word">
                    {elem.details}
                  </p>
                </div>
                <div className="absolute bottom-2 right-2 flex gap-1">
                  <button
                    onClick={() => {
                      props.editNote(idx);
                    }}
                    className=" text-blue-400 hover:text-gray-100 hover:bg-blue-500 active:text-blue-500  rounded p-1 transition-all cursor-pointer"
                    aria-label="Edit Note"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => {
                      props.deleteNote(idx);
                    }}
                    className=" text-red-400 hover:text-gray-100 hover:bg-red-500 active:text-red-500  rounded p-1 transition-all cursor-pointer"
                    aria-label="Delete Note"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default RecentNotes;
