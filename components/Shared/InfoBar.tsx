// import { useSelector } from "react-redux";
// import { RootState } from "../../tools/store";
// import Image from "next/image";
const infoBar = () => {
  //   const selectedFile = useSelector(
  //     (state: RootState) => state.selectedFile.value
  //   );

  return (
    //     // a 200 pixel wide and full height div that is fixed to the right side of the screen
    <div className="fixed right-0 h-full bg-gray-400 p-4 gap-4 overflow-hidden w-80 ">
      {/* <div className="px-2  bg-slate-200 rounded w-full flex justify-center mb-4 "> */}
      {/* <svg
           xmlns="http:www.w3.org/2000/svg"
           fill="none"
           strokeWidth="1.5"
           viewBox="0 0 24 24"
           stroke="currentColor"
           className="w-44 h-44"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
           />
         </svg> */}
    </div>
    //       <hr className="border-slate-800  w-full mb-4" />
    //       {selectedFile && (
    //         <div className="overflow-hidden text-ellipsis  ">
    //           {/* <p>Hello this is a test of overlfow wow so this is </p> */}

    //           <div className=" flex overflow-hidden whitespace-nowrap gap-4 items-center  mb-2">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke-width="1.5"
    //               stroke="currentColor"
    //               className="w-8 h-8"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    //               />
    //             </svg>

    //             <p className="overflow-hidden text-ellipsis">{selectedFile.url}</p>

    //             {/* <p>Testingurl.com</p> */}
    //           </div>
    //           <div className="flex gap-4 items-center mb-2">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke-width="1"
    //               stroke="currentColor"
    //               className="w-6 h-6"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //               />
    //             </svg>

    //             <p>{selectedFile.price}</p>
    //           </div>

    //           <div className="flex gap-4 items-center mb-2">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke-width="1.5"
    //               stroke="currentColor"
    //               className="w-6 h-6"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
    //               />
    //             </svg>
    //             <p>{new Date(selectedFile.purchased_on!).toLocaleDateString()}</p>
    //           </div>

    //           <textarea
    //             id="notes"
    //             name="notes"
    //             className=" rounded  py-2 px-3 text-grey-darker w-full h-32 bg-slate-200 resize-none "
    //             value={selectedFile.note!}
    //           />
    //         </div>
    //       )}
    // </div>
  );
};

export default infoBar;
