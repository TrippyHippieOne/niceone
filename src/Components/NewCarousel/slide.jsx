import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./slide.css";

const Slider = () => {
    const sliderData = [
        {
          image: "/NiceOne3.jpg",
          heading: "Slide One",
          desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        },
        {
          image: "/NiceOne2.jpg",
          heading: "Slide Two",
          desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        },
        {
          image: "/NiceOne1.jpg",
          heading: "Slide Three",
          desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
        },
      ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === slideLength - 1 ? 0 : currentSlide + 1
        );
        console.log("next");
    };

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? slideLength - 1 : currentSlide - 1
        );
        console.log("prev");
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                return (
                    <div
                        className={
                            index === currentSlide ? "slide current" : "slide"
                        }
                        key={index}
                    >
                        {index === currentSlide && (
                            <div>
                                <img
                                    src={slide.image}
                                    alt="slide"
                                    className="image"
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;
