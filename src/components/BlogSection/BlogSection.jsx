import React from "react";
import "./BlogSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import BlogCard from "../BlogCard/BlogCard";
import { v4 as uuidV4 } from "uuid";
import { blogsData } from "../../data";
import ScrollAnimation from "react-animate-on-scroll";

function BlogSection() {
  const title = "blog";
  const subtitle =
    "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam.";
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={true}>
      <section className="blog__section__parent" id="blog">
        <div className="page__section blog__section__container">
          <SectionTitle title={title} subtitle={subtitle} />
          <div className="blog__cards__container">
            {blogsData.map((blog) => (
              <BlogCard key={uuidV4()} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default BlogSection;
