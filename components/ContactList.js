import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ConcatctContext from '../context/ConcatctContext';

function ContactList() {
  const { contactList, deleteContact } = useContext(ConcatctContext);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact List
        </h2>
      </div>

      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <>
          {contactList.map((contact) => (
            <div key={contact.id} className="flex justify-center">
              <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                      Name: {contact.firstName} {contact.lastName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Email: {contact.email}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                    <button
                      className="btn btn-circle btn-outline"
                      onClick={() => deleteContact(contact.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          ))}
          <div className="mt-10">
            <div className="mt-2.5">
              <Link
                type="button"
                className="block w-full rounded-md bg-purple-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                to="/*"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default ContactList;
