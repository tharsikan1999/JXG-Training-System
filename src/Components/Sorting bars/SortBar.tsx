import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames';

const SortBar = () => {
  return (
    
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 
          rounded-full 
          bg-transparent px-3 py-[0.25rem]
          text-sm font-normal text-gray-400 
          shadow-sm ring-1 ring-inset ring-amber-300">
          Sort by: zones
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-amber-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-CustomYellow' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Zone 1
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-CustomYellow' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Zone 2
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-CustomYellow' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Zone 3
                </a>
              )}
            </MenuItem>
            <form method="POST" action="#">
              <MenuItem>
                {({ focus }) => (
                  <button
                    type="submit"
                    className={classNames(
                      focus ? 'bg-gray-100 text-CustomYellow' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Zone 4
                  </button>
                )}
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default SortBar;






