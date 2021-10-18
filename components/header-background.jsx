import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const solutions = [
  {
    name: 'Home',
    href: '##',
  },
  {
    name: 'Services',
    href: '##',
  },
  {
    name: 'About',
    href: '##',
  },
]

export default function Example() {
  return (
    <nav className="wrapper flex items-center justify-between flex-wrap bg-teal-500 pt-6 pl-2m pb-6 lg:px-12">
      <div className="flex items-center flex-shrink-0 text-black">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div className="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow text-right text-black">
          <a href="#responsive-header" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-black">
            Blog
          </a>
        </div>
      </div>

      <div className="w-ful px-4 z-10 lg:hidden">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? '' : 'text-opacity-90'}
                    text-black group px-3 py-2 rounded-md inline-flex items-center border-2	focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75`}
              >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-30 w-52 max-w-sm text-right pl-2 mt-3 transform sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >

                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>

                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </nav>
  )
}

