'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feature from "./Feature";
export default class Responsive extends Component {
    render() {
        var settings = {
            arrows: false,
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="container mx-auto py-10 px-5">
                <h3>Features</h3>
                <Slider {...settings} className="container mx-auto">
                    <Feature

                        title="Agile Development"
                        content="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
                        link="/contact"
                    />
                    <Feature

                        title="Dedicated Team"
                        content="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
                        link="/contact"
                    />
                    <Feature

                        title="Excellent support"
                        content="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
                        link="/contact"
                    />
                    <Feature

                        title="Data Protection"
                        content="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
                        link="/contact"
                    />
                    <Feature

                        title="Quality Deliverance"
                        content="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
                        link="/contact"
                    />
                    <Feature

                        title="Dedicated Team"
                        content="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
                        link="/contact"
                    />
                </Slider>
            </div>
        );
    }
}
