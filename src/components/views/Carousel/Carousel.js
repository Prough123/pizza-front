import React from "react";
import { Carousel } from "react-responsive-carousel";
import slideOne from "./1.png"
import slideTwo from "./2.png"

export default () => (
    <Carousel autoPlay showStatus={false} showThumbs={false} infiniteLoop={true}>
        <div>
            <img alt="asd" src={slideOne} />
        </div>
        <div>
            <img alt="asd" src={slideTwo} />
        </div>
        {/* <div>
            <img alt="" src="https://images.dominos.by/media/dominos/sliders/ru/big/2020/04/06/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80_%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D1%8F%D0%B5%D0%BC_%D0%BF%D0%BE_%D0%B2%D1%81%D0%B5%D0%BC%D1%83_%D0%BC%D0%B8%D0%BD%D1%81%D0%BA%D1%83_1320%D1%85400_min_2.png" />
        </div> */}

    </Carousel>
);