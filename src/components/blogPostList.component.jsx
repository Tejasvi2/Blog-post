import React, { useEffect, useState } from 'react';
import './blogPostList.scss';
import BlogPost from './blogpost/blogPost.component'

const BlogPostList = () => {

  let [blogPost, setBlogPost] = useState([]);


  useEffect(() => {
    blogPost = [
      {
        "id": 1,
        "isParent": true,
        "date": "April 11, 2023",
        "title": "A Trip to Japan",
        "content": "<p>Welcome to my blog! This is my first post. Lorem ipsum dolor sit amet, consectetur <a href='data1' className='child-post-link'>adipiscing </a> elit. Nullam vitae est sapien. Phasellus dignissim, ipsum in bibendum varius, ipsum nulla maximus erat, ac dapibus turpis velit in est. Sed molestie lectus et dolor <a href='data'>lobortis</a> euismod. Nullam vel nibh nec purus cursus efficitur. Donec convallis diam ac diam consectetur bibendum. Duis auctor, nunc at convallis aliquam, tellus dolor placerat nunc, vel maximus est lorem non dolor. Sed a dolor nec tortor facilisis iaculis at vel lectus. Sed vel lectus massa. Donec vitae eleifend sapien. Etiam in purus augue. Nullam convallis malesuada dolor quis gravida. Suspendisse potenti. Proin rutrum erat non justo facilisis, a vulputate enim dictum. Thank you for reading!</p>",
        "child_posts": [
          {
            "id": "data1",
            "isParent": false,
            "title": "Exploring Tokyo",
            "content": "Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.",
            "img": " "
          },
          {
            "id": "data",
            "isParent": false,
            "title": "Visiting Kyoto",
            "content": "Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.",
            "img": ""
          },
          {
            "title": "Trying Japanese cuisine",
            "isParent": false,
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "img": ""
          }
        ],
        "citation": {
          "cited_by": [
            {
              "description": "Huynen J, McCall R and Griffin M. Towards design recommendations for training of security critical agents in mixed reality environments. Proceedings of the 32nd International BCS Human Computer Interaction Conference. (1-5).",
              "link": "https://doi.org/10.14236/ewic/HCI2018.84"
            },
            {
              "description": "  K, Peever N, Klarkowski M, Ploderer B, Mitchell J and Johnson D. Using Applied Games to Engage mHealth Users. Proceedings of the 2018 Annual Symposium on Computer-Human Interaction in Play. (511-522).",
              "link": "https://doi.org/10.1145/3242671.3242686"
            },
            {
              "description": "Cheng K, Lin V, Nijhawan K, Westhem A and Bernstein M. Apps with Benefits. Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems. (2452-2458)",
              "link": "https://doi.org/10.1145/3027063.3053276"
            }
          ]
        }
      },
      {
        "id": 2,
        "title": "My second Blog Post",
        "date": "April 11, 2023",
        "isParent": true,
        "content": "Welcome to my blog! This is my first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae est sapien. Phasellus dignissim, ipsum in <a href='data3'>bibendum</a> varius, ipsum nulla maximus erat, ac dapibus turpis velit in est. Sed molestie lectus et dolor lobortis euismod. Nullam vel nibh nec purus cursus efficitur. Donec convallis diam ac diam consectetur bibendum. Duis auctor, nunc at convallis aliquam, tellus dolor placerat nunc, vel maximus est lorem non dolor. Sed a dolor nec tortor facilisis iaculis at vel lectus. Sed vel lectus massa. Donec vitae eleifend sapien. Etiam in purus augue. Nullam convallis malesuada dolor quis gravida. Suspendisse potenti. Proin rutrum erat non justo facilisis, a vulputate enim dictum. Thank you for reading! ",
        "child_posts": [
          {
            "id": "data3",
            "isParent": false,
            "title": "Exploring Anime",
            "content": "Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.",
            "img": ""
          }
        ]
      }
    ]
setBlogPost(blogPost);
  }, [])

const toggleShowHide = () => {
  console.log('clickeddd')
}

const post = blogPost.map((post) => (
  <BlogPost key={post.id} post={post} onChildEvent={toggleShowHide} />
));


return (
  <>
    <div className="list-title">Wikipedia Article: JAPAN</div>
    <div className="post-list">
      {post}
    </div>
  </>
);
};

export default BlogPostList;
