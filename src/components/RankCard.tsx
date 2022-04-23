import { useState } from "react";

export const RankCard = () => {
  const [modal, setModal] = useState(false);
  const overlay: any = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const onClickOpen = () => {
    setModal(!modal);
  };

  return (
    <>
      <div
        className="hover:bg-pink-300 p-2 m-2 rounded-lg bg-slate-300 text-center"
        onClick={onClickOpen}
      >
        <p>縦比</p>
        <p className="text-2xl text-pink-600">A</p>
      </div>
      {modal ? (
        <div className="" style={overlay} onClick={onClickOpen}>
          <div className="z-10 w-[70%] xl:w-[800px] h-[450px] p-5 mt-[100px] bg-white overflow-auto rounded-lg">
            <div className="relative">
              <p className="text-lg font-bold inline">いい</p>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white rounded-full inline-block w-[30px] p-auto absolute top-1 right-0"
                onClick={onClickOpen}
              >
                ×
              </button>
            </div>

            <div className="p-2 ">
              <div className="p-2 mb-3">
                <dt className="">【使った技術】</dt>
                <dd></dd>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
