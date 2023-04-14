import React from 'react';
import './blogPost.scss';
import ReactHtmlParser from 'html-react-parser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import CommentList from './CommentList';

const BlogPost = (props) => {
  const { post }  = props;

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    console.log('Link clicked:', href);
    props.onChildEvent(event);
  }

  const options = {
    replace: (domNode) => {
      if (domNode.name === 'a' && domNode.attribs && domNode.attribs.href) {
        const href = domNode.attribs.href;
        return (
          <a href={href} onClick={(e) => handleLinkClick(e, href)}>
            {domNode.children[0].data}
          </a>
        );
      }
    }
  };

 const handleClick = (event) => {
    console.log('on childd')
  }

  return (
    <div className="post">
      <h2 className="title">{post.title}</h2>
      <p className="body">{ReactHtmlParser(post.content, options)}</p>
      <button onClick={()=> handleClick('test')}>test</button>
      <Popup trigger={<button> Trigger</button>} position="right center" modal>
        <div>cursus efficitur. Donec convallis diam ac diam consectetur bibendum. Duis auctor, nunc at convallis aliquam, tellus dolor placerat nunc, vel maximus est lorem non dolor. Sed a dolor nec tortor facilisis iaculis at vel lectus. Sed vel lectus massa. Donec vitae eleifend sapien. Etiam in purus augue. Nullam convallis malesuada dolor quis gravida. Suspendisse potenti. 
            Proin rutrum erat non justo facilisis, a vulputate enim dictum. Thank you for reading!</div>
    </Popup>
      {/* <CommentList comments={post.comments} /> */}
    </div>
  );
};

export default BlogPost;
