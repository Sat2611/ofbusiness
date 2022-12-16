import React from "react";

type Props = {};

function TargetIcon({}: Props) {
  return (
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
  );
}

export default TargetIcon;
