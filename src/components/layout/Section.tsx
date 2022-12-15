import React from "react";

type Props = {
  children: JSX.Element;
};

function Section({ children }: Props) {
  return (
    <div className='lg:max-w-7xl 2xl:max-w-screen-2xl px-0 lg:px-4 2xl:px-8  mx-auto'>
      <main>{children}</main>
    </div>
  );
}

export default Section;
