import React from 'react';
import BlogCard from '../reuseable/BlogCard';

export default function Blogs() {
  return (
    <div className="section-padding">
      <h2 className="section-heading">Our Blogs</h2>
      <div className="card_div">
        <BlogCard />
      </div>
    </div>
  );
}
