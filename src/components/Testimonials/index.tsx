import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Test1Image from './../../assets/img/test1.png';
import Test2Image from './../../assets/img/test2.png';
import Test3Image from './../../assets/img/test3.png';


const Testimonials = () => {

  const testimonials = [{
    name: 'Shirley Fultz',
    image: Test1Image,
    role: 'Designer',
    content: 'It\'s freeing to be able to catch up on customized news and not bedistracted by a social media element on the same site'
  }, {
    name: 'Theo Sorel',
    image: Test2Image,
    role: 'Engineer',
    content: 'I enjoy catching up with Fetch on my laptop, or on my phone when I\'m on the go!'
  }, {
    name: 'Daniel Keystone',
    image: Test3Image,
    role: 'Realtor',
    content: 'The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.'
  }];

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {
        testimonials.map(testimonial => {
          return (
            <div>
              <img src={testimonial.image} />
              <div className="myCarousel">
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
                <p>{testimonial.content}</p>
              </div>
            </div>
          )
        })
      }
    </Carousel>
  );
}

export default Testimonials;