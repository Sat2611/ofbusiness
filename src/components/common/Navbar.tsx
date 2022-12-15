import React from "react";
import { Section } from "../layout";

type Props = {};

const navLink = [
  {
    title: "Code",
    status: false,
    icon: "",
    number: "",
  },
  {
    title: "Issues",
    status: true,
    icon: "",
    number: 883,
  },
  // {
  //   title: "Pull requests",
  //   status: false,
  //   icon: "",
  //   number: 244,
  // },
  {
    title: "Actions",
    status: false,
    icon: "",
    number: "",
  },
  {
    title: "Projects",
    status: false,
    icon: "",
    number: "",
  },
  {
    title: "Wiki",
    status: false,
    icon: "",
    number: "",
  },
  {
    title: "Security",
    status: false,
    icon: "",
    number: "",
  },
  {
    title: "Insights",
    status: false,
    icon: "",
    number: "",
  },
];

function Navbar({}: Props) {
  return (
    <div className='bg-gray-100 px-4 border-b border-gray-300 pt-4'>
      <Section>
        <div className='space-y-8'>
          <div className='flex items-center'>
            <div>
              <svg
                aria-hidden='true'
                height='16'
                viewBox='0 0 16 16'
                version='1.1'
                width='16'
                data-view-component='true'
                className='color-fg-muted opacity-60 mr-2'
              >
                <path
                  fill-rule='evenodd'
                  d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'
                ></path>
              </svg>
            </div>
            <p className='text-blue-700 text-xl'>
              facebook / <span className='font-medium'>react</span>
            </p>
          </div>
          <div className='flex space-x-6 items-start max-w-sm lg:max-w-full overflow-auto'>
            {navLink.map((item, index) => (
              <div
                key={index}
                className={`flex space-x-2 pb-4 cursor-pointer ${
                  item.status ? "border-b-2 border-orange-500" : "border-none"
                }`}
              >
                <p className='text-sm lg:text-lg'>{item.title}</p>
                {item.number && (
                  <p className='text-xs font-medium bg-gray-200 rounded-3xl px-2 flex justify-center items-center'>
                    {item.number}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Navbar;
