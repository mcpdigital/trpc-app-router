import React from "react";

const divs = () => {
  return (
    <>
      <div className="text-white text-center text-2xl mt-4 mb-4">
        <h1>Using GRID and FLEX with Tailwind</h1>
      </div>
      <div className="text-4xl text-white text-center">GRID</div>
      <div className="grid gap-y-4 text-white m-4">
        GRID-COLS-4 bg-zinc-900 grid grid-cols-4 gap-x-2 break-words
        overflow-hidden
        <div className="bg-zinc-900 grid grid-cols-4 gap-x-2 break-words overflow-hidden rounded">
          <div className=" bg-amber-700 col-start-1 gap-y-2 text-center shadow-inner rounded">
            <div>COL1 bg-amber-700 col-start-1 gap-y-2 text-center</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div className=" bg-amber-400 col-start-2 gap-y-2 text-center shadow-inner rounded">
            <div>COL2 bg-amber-400 col-start-2 gap-y-2 text-center</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>

          <div className="bg-slate-300 text-black overflow-hidden col-start-4 min-w-[25%] text-center shadow-inner rounded">
            <div>
              COL4 bg-slate-300 text-black overflow-hidden col-start-4
              min-w-[25%] text-center
            </div>
            <div className="bg-gray-500">bg-gray-500</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
        GRID-COLS-3 grid grid-cols-3 gap-x-2 break-words overflow-hidden
        <div className="bg-blue-800 grid grid-cols-3 gap-x-2 break-words overflow-hidden rounded">
          <div className="bg-gray-500 text-right shadow-inner rounded">
            <div>COL1 bg-gray-500 text-right</div>
            <div className="bg-slate-300 text-black">
              bg-slate-300 text-black
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>

          <div className="bg-pink-800 break-words overflow-hidden text-center shadow-inner rounded">
            <div>
              <div>
                COL2 bg-pink-800 break-words overflow-hidden text-center
              </div>
              <div className="bg-slate-300 text-black">
                bg-slate-300 text-black
              </div>
              <div>div 2</div>
              <div className="bg-slate-300 text-black">3</div>
              <div>div 4</div>
            </div>
          </div>
          <div className="bg-violet-700 break-words overflow-hidden gap-y-2 text-left shadow-inner rounded">
            <div>
              <div>
                COL3 bg-violet-700 break-words overflow-hidden gap-y-2 text-left
              </div>
              <div className="bg-slate-700">bg-slate-700</div>
              <div>2</div>
              <div className="bg-slate-700">3</div>
              <div>4</div>
            </div>
          </div>
        </div>
        GRID-COLS-2 bg-zinc-900 grid grid-cols-2 gap-x-2 break-words
        overflow-hidden text-center
        <div className="bg-zinc-900 grid grid-cols-2 gap-x-2 break-words overflow-hidden text-center shadow-inner rounded">
          <div>
            <div className=" bg-red-950 col-start-1 gap-y-2 shadow-inner rounded">
              <div>COL1 bg-red-950 col-start-1 gap-y-2</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </div>

          <div>
            <div className=" bg-red-400 col-start-2 gap-y-2 shadow-inner rounded">
              <div>COL2 bg-red-400 col-start-2 gap-y-2</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </div>
        </div>
        <div className="text-4xl text-center mt-4">FLEX</div>
        <div className="grid gap-y-4 text-white mt-2">
          FLEX-COLS-4 flex flex-cols-4 flex-auto justify-between gap-x-2
          break-words overflow-hidden max-w-[100%]
          <div className="bg-zinc-900 flex flex-cols-4 flex-auto justify-between gap-x-2 break-words overflow-hidden max-w-[100%]">
            <div className=" bg-amber-700 col-start-1 gap-y-2 text-center shadow-inner rounded">
              <div>
                COL1 bg-amber-700 col-start-1 gap-y-2 text-center shadow-inner
                rounded
              </div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
            <div className=" bg-amber-400 col-start-2 gap-y-2 text-center shadow-inner rounded">
              <div>
                COL2 bg-amber-400 col-start-2 gap-y-2 text-center shadow-inner
                rounded
              </div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>

            <div className="bg-slate-300 text-black overflow-hidden col-start-4 text-center shadow-inner rounded">
              <div>
                COL4 bg-slate-300 text-black overflow-hidden col-start-4
                text-center shadow-inner rounded
              </div>
              <div className="bg-gray-500">bg-gray-500</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </div>
          FLEX-COLS-3 bg-blue-800 flex flex-cols-3 flex-auto justify-center
          gap-x-2 break-words overflow-hidden
          <div className="bg-blue-800 flex flex-cols-3 flex-auto justify-center gap-x-2 break-words overflow-hidden shadow-inner rounded ">
            <div className="bg-gray-500 text-right shadow-inner rounded">
              <div>COL1 bg-gray-500 text-right</div>
              <div className="bg-slate-300 text-black">
                bg-slate-300 text-black
              </div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>

            <div className="bg-pink-800 break-words overflow-hidden text-center shadow-inner rounded">
              <div>
                <div>
                  COL2 bg-pink-800 break-words overflow-hidden text-center
                </div>
                <div className="bg-slate-300 text-black">
                  bg-slate-300 text-black
                </div>
                <div>div 2</div>
                <div className="bg-slate-300 text-black">3</div>
                <div>div 4</div>
              </div>
            </div>
            <div className="bg-violet-700 break-words overflow-hidden gap-y-2 text-left shadow-inner rounded">
              <div>
                <div>
                  COL3 bg-violet-700 break-words overflow-hidden gap-y-2
                  text-left
                </div>
                <div className="bg-slate-300 text-black">1</div>
                <div>2</div>
                <div className="bg-slate-300 text-black">3 - bg-slate-300</div>
                <div>4</div>
              </div>
            </div>
          </div>
          FLEX-COLS-2 bg-zinc-900 flex flex-cols-2 gap-x-2 break-words
          overflow-hidden text-center justify-evenly
          <div className="bg-zinc-900 flex flex-cols-2  gap-x-2 break-words overflow-hidden text-center justify-evenly">
            <div>
              <div className=" bg-red-950 col-start-1 gap-y-2 shadow-inner rounded p-1">
                <div>COL1 bg-red-950 col-start-1 gap-y-2 </div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>

            <div>
              <div className=" bg-red-400 col-start-2 gap-y-2 shadow-inner rounded p-1">
                <div>COL2 bg-red-400 col-start-2 gap-y-2</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default divs;
