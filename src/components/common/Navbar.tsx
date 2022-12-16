import React from "react";
import MobIcon from "../icons/MobIcon";
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
            <MobIcon />
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
