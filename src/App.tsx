import React from 'react';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-12 gap-2"> {/* Layout */}
      <div className="bg-blue-100 col-span-3 rounded-lg ml-4 mr-1 mt-3 mb-3">Teams col</div> {/* Teams */}
      <div className="grid col-span-8 gap-2 rounded-lg"> {/* Content */}
        <div className="grid grid-rows-12 gap-2">
          <img className="w-full row-span-6 bg-slate-200 rounded-lg mb-1 mt-3" alt="" src="https://ahanonline.com/logo/headerLogo.svg" />
          <img className="w-full row-span-2 bg-slate-200 rounded-lg mb-1" alt="" src="https://ahanonline.com/logo/headerLogo.svg" />
          <img className="w-full row-span-2 bg-slate-200 rounded-lg mb-1" alt="" src="https://ahanonline.com/logo/headerLogo.svg" />
          <img className="w-full row-span-2 bg-slate-200 rounded-lg mb-1" alt="" src="https://ahanonline.com/logo/headerLogo.svg" />
          <img className="w-full row-span-2 bg-slate-200 rounded-lg mb-3" alt="" src="https://ahanonline.com/logo/headerLogo.svg" />
        </div>
      </div>
      <div className="bg-gray-200 col-span-1 rounded-lg mr-3 mt-3 mb-3 m-2"> {/* Menu */}
        <ul>
          <li className="mt-8 mb-4">
            <a href="#" className="py-2 px-3 inline-block w-full h-full text-gray-500 font-bold">
              <svg className="inline h-6 w-6 -mt-1 ml-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="py-2 px-3 inline-block w-full h-full text-gray-500 font-bold">
              <svg className="inline h-6 w-6 -mt-1 ml-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="py-2 px-3 inline-block w-full h-full text-gray-500 font-bold">
              <svg className="inline h-6 w-6 -mt-1 ml-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="py-2 px-3 inline-block w-full h-full text-gray-500 font-bold">
              <svg className="inline h-6 w-6 -mt-1 ml-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="py-2 px-3 inline-block w-full h-full text-gray-500 font-bold">
              <svg className="inline h-6 w-6 -mt-1 ml-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
