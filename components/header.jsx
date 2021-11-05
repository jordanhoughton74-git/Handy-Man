import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const solutions = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Services',
    href: 'services',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Contact Us',
    href: 'contact-us',
  },
]

export default function Example() {
  return (
    <header>
    <nav className="wrapper navbar flex items-center justify-between flex-wrap bg-teal-500 pt-6 pl-2 lg:px-12">
      <div className="flex items-center flex-shrink-0 text-white">
      <Link href="/"><a aria-label="home"><svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="30"
      version="1.1"
      viewBox="0 0 1213.675 243.303"
      xmlSpace="preserve"
    >
      <defs>
        <clipPath id="clipPath850" clipPathUnits="userSpaceOnUse">
          <path d="M0 1000h1000V0H0z"></path>
        </clipPath>
      </defs>
      <g transform="matrix(1.33333 0 0 -1.33333 -59.83 788.319)">
        <g transform="translate(565.036 408.762)">
          <path
            fill="#ffffff"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            d="M0 0v44.497h7.511V25.208h22.09v19.289h7.511V0h-7.511v18.207H7.511V0z"
          ></path>
        </g>
        <g transform="translate(640.024 425.82)">
          <path
            fill="#ffffff"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            d="M0 0l-8.084 18.335L-16.169 0zm-19.225-6.937l-4.456-10.122h-8.02l19.605 44.497h8.023l19.605-44.497H7.513L3.056-6.937z"
          ></path>
        </g>
        <g transform="translate(695.088 453.259)">
          <path
            fill="#ffffff"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            d="M0 0h7.511v-44.497H-.637l-25.209 32.466v-32.466h-7.511V0h7.511L0-33.229z"
          ></path>
        </g>
        <g>
          <g clipPath="url(#clipPath850)">
            <g transform="translate(747.479 431.042)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c0 10.186-5.836 15.277-17.506 15.277h-7.513v-30.491h8.34c5.389 0 9.516 1.283 12.381 3.851C-1.434-8.795 0-5.009 0 0m1.146 16.391C5.431 12.509 7.575 7.108 7.575.19c0-6.917-2.081-12.393-6.239-16.422-4.16-4.034-10.525-6.048-19.097-6.048H-32.53v44.497h15.278c7.978 0 14.11-1.942 18.398-5.826"
              ></path>
            </g>
            <g transform="translate(782.234 408.762)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h-7.639v17.568l-16.55 26.929h8.21l12.16-20.244L8.339 44.497h8.213L0 17.568z"
              ></path>
            </g>
            <g transform="translate(811.963 408.762)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h-7.512v44.497H4.201L17.633 16.55l13.432 27.947h11.649V0h-7.512v34.757L19.671 3.882h-4.202L0 34.757z"
              ></path>
            </g>
            <g transform="translate(892.552 425.82)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-8.084 18.335L-16.169 0zm-19.225-6.937l-4.456-10.122h-8.02l19.606 44.497h8.022l19.605-44.497H7.513L3.056-6.937z"
              ></path>
            </g>
            <g transform="translate(947.616 453.259)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h7.512v-44.497H-.637l-25.209 32.466v-32.466h-7.511V0h7.511L0-33.229z"
              ></path>
            </g>
            <g transform="translate(357.478 588.108)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-54.87-93.592H-.824v-22.574h-95.073l54.704 93.757h-48.773V0z"
              ></path>
            </g>
            <g transform="translate(403.618 559.273)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.448-3.46-14.335-13.183-14.17-29.496 0-2.634.165-8.402 2.966-14.994 5.932-14.664 19.937-22.079 35.262-22.079 11.533 0 17.96 4.119 21.749 7.25 8.898 7.25 13.347 18.619 13.347 29.823 0 4.451-.659 15.161-8.733 24.716C47.125-.823 37.734 7.909 22.904 7.744 19.279 7.744 8.733 7.085 0 0m37.239 30.317c6.427-1.482 21.42-5.766 33.284-19.772C75.466 4.613 84.529-9.228 84.529-29.99c0-4.613-.33-14.17-4.944-25.21C69.7-79.257 47.784-90.296 22.739-90.296c-5.931 0-23.727.494-38.886 11.698-8.239 6.097-23.233 20.761-23.233 47.785 0 4.448.329 14.829 4.942 26.2 9.393 23.396 31.802 36.579 56.518 36.579 2.307 0 8.568-.165 15.159-1.649"
              ></path>
            </g>
            <g transform="translate(529.343 537.358)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h9.063c6.756.165 13.511.659 17.301 7.25.824 1.482 2.143 4.119 2.143 8.238 0 1.647-.165 5.932-3.296 9.557-4.285 4.943-10.546 5.437-16.643 5.601H0zm6.427 50.914c3.131 0 6.096 0 9.226-.164 12.524-.495 24.716-3.296 32.132-14.83 5.109-7.744 5.438-16.313 5.438-19.444 0-10.545-4.12-21.914-13.348-27.847-3.295-2.141-5.602-2.964-12.852-4.613l33.614-49.432H30.648L-.165-16.313v-49.103h-24.551v116.33z"
              ></path>
            </g>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M625.903 471.942h-25.376v116.33h25.376z"
            ></path>
            <g transform="translate(677.807 588.273)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0v-93.425h39.71v-22.905h-65.085V0z"
              ></path>
            </g>
            <g transform="translate(757.064 559.273)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.448-3.46-14.335-13.183-14.171-29.496 0-2.634.165-8.402 2.967-14.994 5.932-14.664 19.936-22.079 35.261-22.079 11.534 0 17.961 4.119 21.75 7.25 8.897 7.25 13.347 18.619 13.347 29.823 0 4.451-.66 15.161-8.733 24.716C47.125-.823 37.733 7.909 22.903 7.744 19.278 7.744 8.732 7.085 0 0m37.238 30.317c6.427-1.482 21.421-5.766 33.284-19.772C75.466 4.613 84.528-9.228 84.528-29.99c0-4.613-.329-14.17-4.943-25.21-9.886-24.057-31.801-35.096-56.847-35.096-5.93 0-23.726.494-38.885 11.698-8.24 6.097-23.234 20.761-23.234 47.785 0 4.448.33 14.829 4.943 26.2 9.392 23.396 31.802 36.579 56.518 36.579 2.307 0 8.568-.165 15.158-1.649"
              ></path>
            </g>
            <g transform="translate(869.445 588.273)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l22.574-66.898a267.82 267.82 0 004.448-15.323c.825-2.967 1.319-5.933 1.813-8.899 1.812 6.756 3.625 13.347 5.602 19.938 1.483 4.614 2.966 8.897 4.45 13.348L58.329 0h27.354L40.205-116.33H15.818L-27.683 0z"
              ></path>
            </g>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M214.959 557.248h-51.026v-23.254h51.026z"
            ></path>
            <g transform="translate(299.677 557.238)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-13.557-23.248h-62.66V0z"
              ></path>
            </g>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M163.933 471.942h51.026v23.255h-51.026z"
            ></path>
            <g transform="translate(263.502 495.207)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0l-13.58-23.27h-26.462V0z"
              ></path>
            </g>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M258.814 565.017h-65.122v23.247h65.122z"
            ></path>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M244.725 526.223h-51.026v-23.255h51.026z"
            ></path>
            <g transform="translate(253.227 526.234)">
              <path
                fill="#ffffff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h28.374l-13.58-23.27H0z"
              ></path>
            </g>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M95.898 557.248H44.872v-23.254h51.026z"
            ></path>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M155.429 557.248h-51.026v-23.254h51.026z"
            ></path>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M44.873 471.942h51.026v23.255H44.873z"
            ></path>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M104.403 471.942h51.026v23.255h-51.026z"
            ></path>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M125.664 588.272H74.638v-23.254h51.026z"
            ></path>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M185.194 588.272h-51.026v-23.254h51.026z"
            ></path>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M74.638 502.968h51.026v23.255H74.638z"
            ></path>
            <path
              fill="#ffffff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M185.194 526.223h-51.026v-23.255h51.026z"
            ></path>
          </g>
        </g>
      </g>
    </svg></a></Link>
      </div>
      <div className="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow text-right text-white">
          <Link href="/"><a className="block mt-4 text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-indigo-300 mr-4">
            Home
          </a></Link>
          <Link href="/services"><a className="block mt-4 text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-indigo-300 mr-4">
            Services
          </a></Link>
          <Link href="/about"><a className="block mt-4 text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-indigo-300 mr-4">
            About
          </a></Link>
          <Link href="/contact-us"><a className="block mt-4 text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-indigo-300">
            Contact Us
          </a></Link>
        </div>
      </div>

      <div className="w-ful px-4 z-10 lg:hidden">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? '' : 'text-opacity-90'}
                    text-white group px-3 py-2 rounded-md inline-flex items-center border-2	focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
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
                <Popover.Panel className="absolute right-0 z-10 w-52 max-w-sm text-right pl-2 mt-3 transform sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {solutions.map((item) => (
                        <Popover.Button key={item.name} onClick={() => (open = false)}>

                        <Link href={item.href}><a
                          
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>

                          </div>
                        </a></Link>
                        </Popover.Button>
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
    </header>
  )
}

