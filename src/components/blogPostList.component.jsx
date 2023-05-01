import React, { useEffect, useState } from 'react';
import './blogPostList.scss';
import BlogPost from './blogpost/blogPost.component';
import Citation from './citation/citation.component';
import Comments from './comments/comments.component';
import blogData from '../assets/mock-data/blogpost.json';


const BlogPostList = () => {
  let [blogPost, setBlogPost] = useState([]);
  let [isExploreMode, setExploreMode] = useState(true);


  useEffect(() => {
    blogPost = blogData;
    setBlogPost(blogPost);
  }, [])

  const navigateToChildPost = (event) => {
    console.log('clickeddd', event);
    const url = `${window.location.origin}/post/${event?.id}?state=${encodeURIComponent(JSON.stringify(event))}`;
    window.open(url, '_blank');
  }


  return (
    <>
      <div className="list-title"> Article</div>
      <button className='explore-cls' onClick={() => setExploreMode(!isExploreMode)}>
        Explore</button>
      {blogPost.map((post) => {
        return (
          <div className={isExploreMode ? 'blog-list-block' : 'blog-list-wrapper'}>
            <div className="list-item citation-list">
              <div className={isExploreMode ? 'display-none' : ''}>
                <Citation citation={post.citation} reference={post.reference}></Citation>
              </div>
            </div>
            <div className=" post-list">
              <BlogPost key={post.id} post={post} isExploreMode={isExploreMode} onChildEvent={navigateToChildPost} />
            </div>
            <div className="citation-list comments-list">
              <div className={isExploreMode ? 'display-none' : ''}>
                <Comments comments={post.comments}></Comments>
              </div>
            </div>
          </div>
        )

      })}
    </>
  );
};

export default BlogPostList;
