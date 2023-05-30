"use client";

import { Post } from "@/service/posts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostItem from "./PostItem";

type Props = {
  posts: Post[];
};

export default function CarouselPosts({ posts }: Props) {
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px mx-2"
      >
        {posts.map((post) => (
          <PostItem key={post.path} post={post} />
        ))}
      </Carousel>
    </>
  );
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
