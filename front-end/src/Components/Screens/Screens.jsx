import regularSeatingPlan from '../../Images/Screens-RegularSeatingPlan.jpg';
import deluxeSeatingPlan from '../../Images/Screens-DeluxeSeatingPlan.jpg';
import regularScreenPhoto from '../../Images/Screens-RegularScreenPhoto.jpg';
import deluxeScreenPhoto from '../../Images/Screens-DeluxeScreenPhoto.jpg';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  Container
} from 'reactstrap';

const items = [
    {
        src: regularScreenPhoto,
        altText: 'Regular Screen',
        caption: 'Regular Screen'
    },
    {
        src: regularSeatingPlan,
        altText: 'Regular Seating Plan',
        caption: 'Regular Seating Plan'
      },
    {
        src: deluxeScreenPhoto,
        altText: 'Deluxe Screen',
        caption: 'Deluxe Screen'
    },
    {
        src: deluxeSeatingPlan,
        altText: 'Deluxe Seating Plan',
        caption: 'Deluxe Seating Plan'
    }
];

const Screens = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <>
        <Container>
          <h1 style={{textAlign: "center"}}>Screens</h1>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Container>
      </>
    );
}

export default Screens;