import { clientReviews } from '../constants/index.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clients = () => {
  const settings = {
    dots: true,
    infinite: clientReviews.length > 1,
    speed: 500,
    slidesToShow: clientReviews.length > 2 ? 2 : clientReviews.length, // Number of reviews to show at a time
    slidesToScroll: 1, // How many reviews to scroll on each swipe
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: clientReviews.length > 1 ? 2 : 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="c-space my-20">
      <h3 className="head-text my-12">Hear from My Clients</h3>

      <div className="className">
        <Slider {...settings}>
          {clientReviews.map((item) => (
            <div key={`review-${item.id}`} className="client-review !w-[90%] h-[16rem] lg:h-[13rem]">
              <div className="flex justify-between flex-col h-full">
                <div className="w-full flex justify-between items-center">
                  <p className="text-white-800 font-light">{item.review}</p>

                  <img src={item.freelance} className=" w-12 h-12 lg:w-20 lg:h-20" />
                </div>

                <div className="client-content">
                  <div className="flex gap-3">
                    <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                    <div className="flex flex-col">
                      <p className="font-semibold text-white-800">{item.name}</p>
                      <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                    </div>
                  </div>

                  <div className="flex self-end items-center gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
