import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex h-[32rem] text-black items-center bg-orange-100 px-6">
          <div>
            <p className="text-6xl font-bold">Best CAR</p>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              incidunt sint numquam laudantium distinctio temporibus, repellat
              enim pariatur illo, voluptate reprehenderit? Quod nulla quaerat
              sint provident harum soluta sit eveniet.
            </p>
            <p className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 bg-orange-300 flex items-center justify-center">
              Details
            </p>
          </div>
          <img
            className="w-[72rem]"
            src="https://autostalk.co.uk/wp-content/uploads/2023/08/rolls_royce_ghost_top_10.webp"
            alt=""
          />
        </div>
        <div className="!flex h-[32rem] text-black gap-4 items-center bg-orange-100 px-6">
          
          <img
            className="w-[72rem]"
            src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx"
            alt=""
          />
          <div>
            <p className="text-6xl font-bold">Best CAR</p>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              incidunt sint numquam laudantium distinctio temporibus, repellat
              enim pariatur illo, voluptate reprehenderit? Quod nulla quaerat
              sint provident harum soluta sit eveniet.
            </p>
            <p className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 bg-orange-300 flex items-center justify-center">
              Details
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;