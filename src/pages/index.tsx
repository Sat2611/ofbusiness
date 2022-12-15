import Head from "next/head";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Section } from "../components/layout";

export default function Home() {
  const [issues, setIssues] = useState(Array.from({ length: 20 }));
  const fetchMoreData = () => {
    setTimeout(() => {
      setIssues(issues.concat(Array.from({ length: 20 })));
    }, 3000);
  };

  // console.log("isss", issues);
  return (
    <>
      <Head>
        <title>OfBusiness</title>
      </Head>
      <div>
        <Section>
          <>
            <div className='lg:hidden text-sm px-3 flex space-x-6 mt-4 mb-2'>
              <div className='flex space-x-2 items-center'>
                <div className=''>
                  <svg
                    aria-hidden='true'
                    height='16'
                    viewBox='0 0 16 16'
                    version='1.1'
                    width='16'
                    data-view-component='true'
                    className='text-green-700'
                  >
                    <path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                    <path
                      fillRule='evenodd'
                      d='M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                    ></path>
                  </svg>
                </div>
                <p>606 Open</p>
              </div>
              <p className='font-light'>10,104 Closed</p>
            </div>
            <div className='max-w-7xl mx-auto border lg:my-8 rounded-md'>
              <div className='flex justify-center lg:justify-between px-3 py-4 border-b bg-gray-100 border-gray-200'>
                <div className='hidden lg:flex space-x-6'>
                  <div className='flex space-x-2 items-center'>
                    <div className=''>
                      <svg
                        aria-hidden='true'
                        height='16'
                        viewBox='0 0 16 16'
                        version='1.1'
                        width='16'
                        data-view-component='true'
                        className='text-green-700'
                      >
                        <path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                        <path
                          fillRule='evenodd'
                          d='M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                        ></path>
                      </svg>
                    </div>
                    <p>606 Open</p>
                  </div>
                  <p className='font-light'>10,104 Closed</p>
                </div>
                <div className='flex justify-center space-x-8 font-light'>
                  <p>Author</p>
                  <p>Label</p>
                  <p className='hidden lg:block'>Projects</p>
                  <p className='hidden lg:block'>Milestones</p>
                  <p>Assignee</p>
                  <p>Sort</p>
                </div>
              </div>
              <InfiniteScroll
                dataLength={issues.length}
                next={fetchMoreData}
                hasMore={true}
                loader={
                  <div className='flex justify-center py-4'>Loading...</div>
                }
              >
                {issues.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 ${
                      issues.length === index + 1
                        ? "border-none"
                        : "border-b border-gray-200"
                    } hover:bg-gray-100 flex space-x-3 items-start cursor-pointer`}
                  >
                    <div className=''>
                      <svg
                        aria-hidden='true'
                        height='16'
                        viewBox='0 0 16 16'
                        version='1.1'
                        width='16'
                        data-view-component='true'
                        className='text-green-700'
                      >
                        <path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                        <path
                          fillRule='evenodd'
                          d='M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                        ></path>
                      </svg>
                    </div>
                    <div className='space-y-2'>
                      <div className='flex space-y-1 flex-wrap max-w-5xl'>
                        <p className='font-medium mr-2 text-gray-800'>
                          Bug: with Jest and Testing Library, React schedules
                          work with wrong Jest timers functions
                        </p>

                        <p className='bg-[#FBCA04] mr-2 rounded-full text-xs py-1 px-3'>
                          Component: Developer Tools
                        </p>
                        <p className='bg-[#D4C5F9] mr-2 rounded-full text-xs py-1 px-3'>
                          Status: Unconfirmed
                        </p>
                        <p className='bg-red-700 mr-2 text-white rounded-full text-xs py-1 px-3'>
                          Type: Bug
                        </p>
                      </div>
                      <p className='font-light text-xs'>
                        #25889 opened 4 hours ago by satyam
                      </p>
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            </div>
          </>
        </Section>
      </div>
    </>
  );
}
