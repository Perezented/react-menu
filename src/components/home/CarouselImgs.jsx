import React, { Component } from "react";
import Slider from "infinite-react-carousel";

import food0 from "../../utils/img/foods/jarritos-mexican-soda-3bJ76UZtQdQ-unsplash.jpg";
import food1 from "../../utils/img/foods/jarritos-mexican-soda-bA3VwdUYduY-unsplash.jpg";
import food2 from "../../utils/img/foods/jarritos-mexican-soda-oOTceVp6i3U-unsplash.jpg";
import food3 from "../../utils/img/foods/jarritos-mexican-soda-Vc7tSIs2gYU-unsplash.jpg";
import food4 from "../../utils/img/foods/jarritos-mexican-soda-ZNzz9Oyn5a8-unsplash.jpg";

export default class CarouselImgs extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: 0,
      className: "slider",
      dots: true,
      duration: 400,
      pauseOnHover: false
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="img0" src={food0} alt="" />
          </div>
          <div>
            <img src={food1} alt="" />
          </div>
          <div>
            <img src={food2} alt="" />
          </div>
          <div>
            <img src={food3} alt="" />
          </div>
          <div>
            <img src={food4} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
