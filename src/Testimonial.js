import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';
import testimonialImg from './testimonials.jpg';

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  console.log(people);
  return (
    <main>
      <div className='container'>
        <div className='row py-100 justify-content-between'>
          <div className='col-lg-5'>
            <div className='subtitle'>
              <div className='line'></div>
              <span>Testimonials</span>
            </div>
            <h2 className='heading'>
              <span>Whate</span> People <br /> Say about <span>Monir</span>
            </h2>
            <article className='textimonial'>
              <p>{text}</p>
              <div className='media'>
                <div className='media-img'>
                  <img src={image} alt='' />
                  <span className='quote-icon'>
                    <FaQuoteRight />
                  </span>
                </div>

                <div className='media-body'>
                  <div className='user-info'>
                    <h4>{name}</h4>
                    <span>{job}</span>
                  </div>

                  <div className='nav-btn'>
                    <button className='btn' onClick={prevPerson}>
                      <FaChevronLeft />
                    </button>
                    <button className='btn' onClick={nextPerson}>
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className='col-lg-6'>
            <img
              className='rounded'
              src={testimonialImg}
              alt='Testimonial img'
            />
          </div>
        </div>
      </div>
      <p>
        More project please visit{' '}
        <a href='https://monirhossain.com'>Monir Hssain</a>
      </p>
    </main>
  );
};

export default Testimonial;
