import React from 'react';
export const Header = ({ title, description }: { title: string, description: string }) => {
   return (
       <div className="w-full flex flex-col md:flex-row global-container text-white items-start
       md:items-center px-5 sm:px-8 md:px-12 lg:px-0 py-4 md:py-8">
           <h2 className="text-4xl font-black basis-2/4 font-['abril']">{title}</h2>
           <h3 className="basis-2/4 md:border-l border-l-purple-600/40 md:px-4 pt-2 md:py-4 text-sm sm:text-[1rem]">{description}</h3>
       </div>
   );
};
