import React, { useEffect, useState } from 'react';
import './blogPostList.scss';
import BlogPost from './blogpost/blogPost.component'

const BlogPostList = () => {

  let [blogPost, setBlogPost] = useState([]);
  

  useEffect(()=>{
    blogPost = [
      {
      "id": 1,
      "isParent":true,
      "date": 'April 11, 2023',
      "title": "A Trip to Japan",
      "content": "<p>Welcome to my blog! This is my first post. Lorem ipsum dolor sit amet, consectetur <a href='data1'>adipiscing </a> elit. Nullam vitae est sapien. Phasellus dignissim, ipsum in bibendum varius, ipsum nulla maximus erat, ac dapibus turpis velit in est. Sed molestie lectus et dolor <a href='data'>lobortis</a> euismod. Nullam vel nibh nec purus cursus efficitur. Donec convallis diam ac diam consectetur bibendum. Duis auctor, nunc at convallis aliquam, tellus dolor placerat nunc, vel maximus est lorem non dolor. Sed a dolor nec tortor facilisis iaculis at vel lectus. Sed vel lectus massa. Donec vitae eleifend sapien. Etiam in purus augue. Nullam convallis malesuada dolor quis gravida. Suspendisse potenti. Proin rutrum erat non justo facilisis, a vulputate enim dictum. Thank you for reading!</p>",
      "child_posts": [
        {
          "id": "data1",
          "isParent": false,
          "title": "Exploring Tokyo",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          "img": ''
        },
        {
          "id": "data",
          "isParent": false,
          "title": "Visiting Kyoto",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          "img": ''
        },
        {
          "title": "Trying Japanese cuisine",
          "isParent": false,
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          "img": ''
        }
      ]
    },
    {
      id: 2,
      title: 'My second Blog Post',
      date: 'April 11, 2023',
      "isParent": true,
      content: `
        Welcome to my blog! This is my first post.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae est sapien. Phasellus dignissim, ipsum in bibendum varius, ipsum nulla maximus erat, ac dapibus turpis velit in est. Sed molestie lectus et dolor lobortis euismod. Nullam vel nibh nec purus cursus efficitur. Donec convallis diam ac diam consectetur bibendum. Duis auctor, nunc at convallis aliquam, tellus dolor placerat nunc, vel maximus est lorem non dolor. Sed a dolor nec tortor facilisis iaculis at vel lectus. Sed vel lectus massa. Donec vitae eleifend sapien. Etiam in purus augue. Nullam convallis malesuada dolor quis gravida. Suspendisse potenti. Proin rutrum erat non justo facilisis, a vulputate enim dictum.
        Thank you for reading!
      `
    }
  ];
    setBlogPost(blogPost);
  }, [])
  
 const toggleShowHide = () => {
   console.log('clickeddd')
  }

  const post = blogPost.map((post) => (
    <BlogPost key={post.id} post={post} onChildEvent={toggleShowHide}  />
  ));
  
  
  return (
    <div className="post-list">
      {post}
    </div>
  );
};

export default BlogPostList;
