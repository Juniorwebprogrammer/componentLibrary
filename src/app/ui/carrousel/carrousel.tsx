import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import "@coreui/coreui/dist/css/coreui.min.css";

const CarouselComponent = ({ items, interval = 3000 }) => {
  return (
    <CCarousel controls dark indicators transition="crossfade" interval={interval}>
      {items.map((item, index) => (
        <CCarouselItem key={index}>
          <CImage className="d-block w-100" src={item.image} alt={item.alt} />
        </CCarouselItem>
      ))}
    </CCarousel>
  );
};

export default CarouselComponent;
