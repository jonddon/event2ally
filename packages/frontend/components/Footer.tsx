import Image from "next/image"

const Footer  =()=>{
    return (<>
<div>
  {/* FOOTER 2 MOBILE */}
  <footer className="text-white bg-black-c100 md:hidden">
    {/* Footer Top */}
    <div className="mx-auto bg-gray-800 px-11">
    </div>
    {/* Footer Middle */}
    <div className="container flex flex-col p-4 mx-auto overflow-hidden lg:flex-row">
      <div className="w-full p-2 mx-auto">
        {/* Accordions */}
      <div className="flex justify-center">
      <Image src="/logo.svg"
                  height='50'
                  width='50'
               
                  />
      </div>
        <div className="w-full overflow-hidden tab">
          <input className="absolute hidden opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
          <div className="relative label">
            <label className="block px-3 py-2 font-medium tracking-wide text-white uppercase cursor-pointer" htmlFor="tab-multi-two">
              Event2Ally
            </label>
            <div className="absolute inset-0 flex items-center justify-end w-full pointer-events-none flex-end">
              <svg className="w-8 icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          <div className="overflow-hidden leading-normal tab-content">
            <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full overflow-hidden tab">
          <input className="absolute hidden opacity-0" id="tab-multi-three" type="checkbox" name="tabs" />
          <div className="relative label">
            <label className="block px-3 py-2 font-medium tracking-wide text-white uppercase cursor-pointer" htmlFor="tab-multi-three">
              Follow Us
            </label>
            <div className="absolute inset-0 flex items-center justify-end w-full pointer-events-none flex-end">
              <svg className="w-8 icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          <div className="overflow-hidden leading-normal tab-content">
            <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Instagram</a></li>
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Twitter</a></li>
            </ul>
          </div>
        </div>
          <div className="w-full overflow-hidden tab">
          <input className="absolute hidden opacity-0" id="tab-multi-three" type="checkbox" name="tabs" />
          <div className="relative label">
            <label className="block px-3 py-2 font-medium tracking-wide text-white uppercase cursor-pointer" htmlFor="tab-multi-three">
              Support
            </label>
            <div className="absolute inset-0 flex items-center justify-end w-full pointer-events-none flex-end">
              <svg className="w-8 icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          <div className="overflow-hidden leading-normal tab-content">
            <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Help Center</a></li>
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">FAQs</a></li>
      
            </ul>
          </div>
        </div>

        <div className="w-full overflow-hidden tab">
          <input className="absolute hidden opacity-0" id="tab-multi-four" type="checkbox" name="tabs" />
          <div className="relative label">
            <label className="block px-3 py-2 font-medium tracking-wide text-white uppercase cursor-pointer" htmlFor="tab-multi-four">
              Browse Events
            </label>
            <div className="absolute inset-0 flex items-center justify-end w-full pointer-events-none flex-end">
              <svg className="w-8 icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          <div className="overflow-hidden leading-normal tab-content">
            <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Online Events</a></li>
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Offline Events</a></li>
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Hybrid </a></li>
              <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="flex flex-col items-center justify-center p-6 mt-4 text-gray-600 border-t border-gray-800 md:flex-row">
      <div>© {new Date().getFullYear()} Event2Ally.</div>
      <div>&nbsp;All rights reserved.<div>
        </div>
      </div></div></footer>
  {/* FOOTER 2 DESKTOP */}
  <footer className="hidden text-white bg-black-c100 md:block">
    {/* Footer Top */}
    {/* Footer Middle */}
    <div className="container flex flex-col justify-between p-4 mx-auto overflow-hidden lg:flex-row">
      <div className="container block mt-6 text-sm md:flex lg:mt-0">
        <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
          <li className="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">
          <Image src="/logo.svg"
                  height='50'
                  width='50'
                 
                  />
          </li>
        </ul>
        <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
          <li className="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">Event2Ally</li>
          <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline text-bold hover:text-white">Privacy Vuuur</a>
          </li>
          <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Terms of Service</a></li>
        </ul>
        <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
          <li className="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">Follow Us</li>
          <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Instagram</a></li>
          <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">LinkendIn</a></li>
          <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Twitter</a></li>
        </ul>
        <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
          <li className="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">Support</li>
          <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Help Center</a></li>
          <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Faqs</a></li>
        </ul>
        <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
          <li className="inline-block px-3 py-2 font-medium tracking-wide text-white uppercase">Browse Events</li>
          <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Online Events</a></li>
          <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Offline Events</a></li>
          <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 no-underline hover:text-white">Hybrid Events</a></li>
        </ul>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="flex flex-col items-center justify-center p-6 mt-4 text-gray-600 border-t border-gray-800 md:flex-row">
      <div>© {new Date().getFullYear()} Event2Ally</div>
      <div>&nbsp;All rights reserved.<div>
        </div>
      </div></div></footer>
</div>


    </>)
}

export default Footer

//   curated from 
//  https://codepen.io/rockynhatnguyen/pen/OJRXxYW
