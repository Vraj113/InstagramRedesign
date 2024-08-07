import NavBar from "../NavBar";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import GridOnIcon from "@mui/icons-material/GridOn";
const Saved = () => {
  return (
    <>
      <div className="w-full md:w-[80%] bg-black">
        <NavBar />
        <div className="flex w-full md:w-[79vw] bg-black text-zinc-100 justify-between p-5 text-lg font-bold">
          <div className="text-white">Saved</div>
          <div className="flex text-zinc-200 text-sm  gap-x-5">
            <div className="hover:cursor-pointer  flex flex-col items-center ">
              <div>
                <GridOnIcon />
              </div>
              <div className="-mt-5 text-3xl">.</div>
            </div>
            <div className="text-zinc-400 hover:cursor-pointer">
              <PlayLessonIcon />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap justify-center  gap-5 p-4 md:p-0">
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
            <div className="md:w-[280px] rounded-3xl overflow-hidden ">
              {" "}
              <img src="/feed2" alt="" />{" "}
            </div>
          </div>
          <div className="p-4 "></div>
        </div>
      </div>
    </>
  );
};
export default Saved;
