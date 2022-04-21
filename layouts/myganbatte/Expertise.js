import React from "react";
import { Container } from "styles/GlobalStyle";
import styled from "styled-components";
import ExpertiseCard from "components/ExpertiseCard";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import useMediaQuery from "hooks/useMediaQuery";

const Cards = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    background-color: white;
    padding-bottom: 2rem;
  }
`;

const Slider = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 1rem;
  }
`;

const ShowMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 1.5rem;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

function Expertise() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const isBellow900px = useMediaQuery("(max-width : 900px)");
  const [show, setShow] = React.useState(false);

  return (
    <div className="bg-light-gray">
      <Container className="py-100px">
        <h1
          className={`fs-28px black opacity-0_8 weight-4 ${
            isBellow900px ? "mb-30px" : ""
          } `}
        >
          Our areas of circular expertise:
        </h1>

        {isBellow900px ? (
          <Cards>
            <ExpertiseCard
              icon="/shirt.svg"
              title="Textiles"
              desc="Towards a zero waste Industry. Preventing and reducing the textiles waste mountain. A circular textiles business is the step forward."
            />
            <ExpertiseCard
              icon="/finance.svg"
              title="Finance"
              desc="Finding and fixing financial, accounting, legal, and operational barriers in the journey of implementing circular businesses. "
            />
            <ExpertiseCard
              icon="/built.svg"
              title="Built Environment"
              desc="Changing the foundations of the world's biggest consumer of resources: the built environment."
            />

            {show ? (
              <>
                <ExpertiseCard
                  icon="/capital.png"
                  title="Capital Equipment"
                  desc="Closing the loop within the capital equipment industry to preserved and recovered value for products."
                />
                <ExpertiseCard
                  icon="/circular.png"
                  title="Circular Jobs"
                  desc="Ensuring a just transition for work and workers by defining circular jobs and maximising their societal benefits within."
                />
                <ExpertiseCard
                  icon="/measuring.png"
                  title="Measuring Circularity"
                  desc="Providing the guidance needed to select the most suitable metric to measure and fast-track circularity."
                />
                <ExpertiseCard
                  icon="/data.png"
                  title="data"
                  desc="Accelerating the transition to the circular economy by providing businesses, cities, and nations the correct data in a suitable format."
                />
                <ExpertiseCard
                  icon="/design.png"
                  title="Design for Circularity"
                  desc="Applying Circular Design Thinking to your product, business model, service, or brand."
                />
                <ExpertiseCard
                  icon="/digital.png"
                  title="Digital"
                  desc="Towards a zero waste Industry. Preventing and reducing the textiles waste mountain. A circular textiles business is the step forward."
                />
              </>
            ) : (
              ""
            )}

            <ShowMoreBtn className="pointer" onClick={() => setShow(!show)}>
              <span className="fs-14px purple weight-7">
                {show ? "Show fewer areas" : "Show more areas"}
              </span>
              {show ? (
                <MdOutlineKeyboardArrowUp size={26} color="#4450BF" />
              ) : (
                <MdOutlineKeyboardArrowDown size={26} color="#4450BF" />
              )}
            </ShowMoreBtn>
          </Cards>
        ) : (
          <Slider>
            <button ref={navigationPrevRef} className="pointer">
              <MdKeyboardArrowLeft size={30} color="#4450BF" />
            </button>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              navigation={{
                prevEl: navigationPrevRef?.current,
                nextEl: navigationNextRef?.current,
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  if (!swiper.params) return;
                  swiper.params.navigation.prevEl = navigationPrevRef?.current;
                  swiper.params.navigation.nextEl = navigationNextRef?.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              <SwiperSlide>
                <Cards>
                  <ExpertiseCard
                    icon="/shirt.svg"
                    title="Textiles"
                    desc="Towards a zero waste Industry. Preventing and reducing the textiles waste mountain. A circular textiles business is the step forward."
                  />
                  <ExpertiseCard
                    icon="/finance.svg"
                    title="Finance"
                    desc="Finding and fixing financial, accounting, legal, and operational barriers in the journey of implementing circular businesses. "
                  />
                  <ExpertiseCard
                    icon="/built.svg"
                    title="Built Environment"
                    desc="Changing the foundations of the world's biggest consumer of resources: the built environment."
                  />
                </Cards>
              </SwiperSlide>
              <SwiperSlide>
                <Cards>
                  <ExpertiseCard
                    icon="/capital.png"
                    title="Capital Equipment"
                    desc="Closing the loop within the capital equipment industry to preserved and recovered value for products."
                  />
                  <ExpertiseCard
                    icon="/circular.png"
                    title="Circular Jobs"
                    desc="Ensuring a just transition for work and workers by defining circular jobs and maximising their societal benefits within."
                  />
                  <ExpertiseCard
                    icon="/measuring.png"
                    title="Measuring Circularity"
                    desc="Providing the guidance needed to select the most suitable metric to measure and fast-track circularity."
                  />
                </Cards>
              </SwiperSlide>
              <SwiperSlide>
                <Cards>
                  <ExpertiseCard
                    icon="/data.png"
                    title="data"
                    desc="Accelerating the transition to the circular economy by providing businesses, cities, and nations the correct data in a suitable format."
                  />
                  <ExpertiseCard
                    icon="/design.png"
                    title="Design for Circularity"
                    desc="Applying Circular Design Thinking to your product, business model, service, or brand."
                  />
                  <ExpertiseCard
                    icon="/digital.png"
                    title="Digital"
                    desc="Towards a zero waste Industry. Preventing and reducing the textiles waste mountain. A circular textiles business is the step forward."
                  />
                </Cards>
              </SwiperSlide>
            </Swiper>

            <button ref={navigationNextRef} className="pointer">
              <MdKeyboardArrowRight size={30} color="#4450BF" />
            </button>
          </Slider>
        )}
      </Container>
    </div>
  );
}

export default Expertise;
