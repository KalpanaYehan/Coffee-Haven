import React from "react";
import Slider from "react-slick";

const ReviewsData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Coffee Haven is my go-to spot for a morning pick-me-up. The coffee is always freshly brewed, and the flavors are incredible. The staff is friendly and always makes me feel welcome. I can't recommend this place enough!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "I love coming to Coffee Haven to unwind after a long day. The ambiance is cozy, and the decor is charming. The lattes are delicious, and the pastries are to die for. It's the perfect place to relax with a good book or catch up with friends.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Every visit to Coffee Haven is a wonderful experience. The coffee is consistently excellent, and the cozy atmosphere makes it a great place to work or relax. The staff is attentive and always serves with a smile. I can't imagine starting my day anywhere else.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Satya Narayan",
    text: "I recently discovered Coffee Haven, and I'm hooked! The coffee is rich and flavorful, and their pastries are simply amazing. Whether I'm grabbing something to go or sitting down to enjoy my drink, it's always a great experience. Highly recommended!",
    img: "https://picsum.photos/103/103",
  },
];

const Reviews = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-yellow-50">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Reviews
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {ReviewsData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
