import React from 'react';

export const ImageModal = ({ imgUrl, imgType, onClose }: { imgUrl: string, imgType: 'img' | 'vid', onClose: () => void }) => {
   return (
       <div className={`w-full h-screen z-50 bg-black/95 backdrop-blur-xl flex justify-center items-center fixed top-0 left-0 right-0 cursor-pointer`} onClick={onClose}>
           <div className={`w-full h-full flex justify-center items-center`}>
               {
                   imgUrl ?
                       imgType === 'img' ?
                       <img className={`max-w-[70%] max-h-[70%] rounded-3xl border border-purple-600/90`} src={imgUrl}/>
                           : <video className={`max-w-[70%] max-h-[70%] rounded-3xl border border-purple-600/90`} src={imgUrl} autoPlay={true} loop={true}/>
                           : null
               }
           </div>
       </div>
   )
}
