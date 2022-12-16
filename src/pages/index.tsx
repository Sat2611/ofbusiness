import Head from "next/head";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import TargetIcon from "../components/icons/TargetIcon";
import TickIcon from "../components/icons/TickIcon";
import { Section } from "../components/layout";

function getHoursDiff(startDate: any, endDate: any) {
  const msInHour = 1000 * 60 * 60;

  return Math.round(Math.abs(endDate - startDate) / msInHour);
}

export default function Home() {
  const [issues, setIssues] = useState<any>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const fetchMoreData = () => {
    setTimeout(() => {
      setPage(page + 1);
    }, 3000);
  };

  useEffect(() => {
    const fetchIssuesData = async () => {
      try {
        const result = await fetch(
          `https://api.github.com/repos/facebook/react/issues?page=${page}`
        );
        const response = await result.json();

        if (response.length > 0) {
          setError("");
          setIssues([...issues, ...response]);
        } else {
          setError("Something went wrong, Please try later!");
        }
      } catch (err) {
        console.log("error is-->", err);
      }
    };
    fetchIssuesData();
  }, [page]);

  return (
    <>
      <Head>
        <title>OfBusiness</title>
        <meta name='description' content='assignment for frontend role' />
        <meta name='keywords' content='facebook, frontend, assignment' />
      </Head>
      <div>
        <Section>
          <>
            <div className='lg:hidden text-sm px-3 flex space-x-6 mt-4 mb-2'>
              <div className='flex space-x-2 items-center'>
                <TargetIcon />
                <p>606 Open</p>
              </div>
              <div className='flex space-x-2 items-center'>
                <TickIcon />
                <p className='font-light'>10,104 Closed</p>
              </div>
            </div>
            <div className='max-w-7xl mx-auto border lg:my-8 rounded-md'>
              <div className='flex justify-center lg:justify-between px-3 py-4 border-b bg-gray-100 border-gray-200'>
                <div className='hidden lg:flex space-x-6'>
                  <div className='flex space-x-2 items-center'>
                    <TargetIcon />
                    <p>606 Open</p>
                  </div>
                  <div className='flex space-x-2 items-center'>
                    <TickIcon />
                    <p className='font-light'>10,104 Closed</p>
                  </div>
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
                {issues.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`p-3 ${
                      issues.length === index + 1
                        ? "border-none"
                        : "border-b border-gray-200"
                    } hover:bg-gray-100 flex space-x-3 items-start cursor-pointer`}
                  >
                    <TargetIcon />
                    <div className='space-y-2'>
                      <div className='flex space-y-1 flex-wrap max-w-5xl'>
                        <p className='font-medium mr-2 text-gray-800'>
                          {item.title}
                        </p>

                        {item?.labels?.map((detail: any, index: number) => (
                          <div key={index}>
                            <p
                              style={{ backgroundColor: `#${detail.color}` }}
                              className={`mr-2 rounded-full text-xs py-1 px-3 ${
                                detail.name === "Type: Bug" ? "text-white" : ""
                              }`}
                            >
                              {detail.name}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className='font-light text-xs'>
                        #{item?.number} opened{" "}
                        {getHoursDiff(new Date(), new Date(item.created_at)) <
                        24
                          ? `${getHoursDiff(
                              new Date(),
                              new Date(item.created_at)
                            )} hours`
                          : `${Math.floor(
                              getHoursDiff(
                                new Date(),
                                new Date(item.created_at)
                              ) / 24
                            )} days`}{" "}
                        ago by {item?.user?.login}
                      </p>
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            </div>
            {error && (
              <p className='text-2xl text-center font-medium my-20 text-red-500'>
                {error}
              </p>
            )}
          </>
        </Section>
      </div>
    </>
  );
}
