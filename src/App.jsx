import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';
import { fetchTokenAsync } from './store/Slices/fetchTokenSliceAsync';
import { fetchUserAsync } from './store/Slices/fetchUserSliceAsync';
import backGroundImg from './img/main/hero-img.png';
import { Tooltip as ReactTooltip } from 'react-tooltip';

function App() {
  const users = useSelector((state) =>
    Object.values(state.users.users).sort((a, b) => new Date(b.registration_timestamp) - new Date(a.registration_timestamp))
  );
  let { nextUrl, page, count } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync({ page, count }));
    dispatch(fetchTokenAsync());
  }, [dispatch, page, count]);

  const handleClick = () => {
    const numberOfPage = page + 1;
    dispatch(fetchUserAsync({ page: numberOfPage, count }));
  };

  return (
    <div className='my-0 mx-auto max-w-screen-lg'>
      <div
        className="flex items-center h-[650px] my-0 mx-auto bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backGroundImg})` }}
      >
        <div className="my-0 mx-auto max-w-sm flex flex-col items-center text-center gap-8">
          <h1 className="text-3xl font-bold text-4xl text-white">
            Test assignment for <br /> front-end developer
          </h1>
          <p className="text-white">
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
          </p>
          <button className="w-[100px] h-[34px] rounded-[80px] bg-primary hover:bg-hover">Sign Up</button>
        </div>
      </div>

      <div className='mt-28 flex flex-col gap-10'>
        <h1 className='flex justify-center text-4xl'>
          Working with GET request
        </h1>

        <ul className='grid gap-[20px] lg:gap-x-[80px] xl:gap-x-[160px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
          {users.map(item => (
            <li key={item.id} className='w-[328px] md:w-[344px] lg:w-[282px] xl:w-[370px] h-[254px] bg-[#f5f5f5] rounded-[16px] p-5 flex flex-col items-center text-[16px]'>
              <img src={item.photo} className='w-[70px] h-[70px] rounded-full mb-5' />
              <h4 className='mb-5 w-full text-center overflow-hidden text-ellipsis whitespace-nowrap'>{item.name}</h4>
              <div className='text-center w-full'>
                <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{item.position}</p>
                <p className='relative overflow-hidden text-ellipsis whitespace-nowrap' data-tooltip-id={`email-tooltip-${item.id}`} data-tooltip-content={item.email}>
                  {item.email}
                </p>
                <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{item.phone}</p>
              </div>
              <ReactTooltip id={`email-tooltip-${item.id}`} place="top" type="dark" effect="float" />
            </li>
          ))}
        </ul>

        {nextUrl && (
          <div className="flex justify-center">
            <button onClick={handleClick} className='w-[100px] h-[34px] rounded-[80px] bg-primary hover:bg-hover'>
              Show more
            </button>
          </div>
        )}
      </div>
      <Form />
    </div>
  );
}

export default App;
