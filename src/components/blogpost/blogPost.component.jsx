import React, { useState } from 'react';
import './blogPost.scss';
import ReactHtmlParser from 'html-react-parser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import CommentList from './CommentList';

const BlogPost = (props) => {
  const { post } = props;
  const [show, setShow] = useState(false);
  const [childPosts, setChildPosts] = useState({});

  const handleLinkClick = (event, docId) => {
    event.preventDefault();
    console.log('Link clicked:', docId);
    console.log({post})
    const childPost = post.child_posts.find((item)=> item.id == docId);
    console.log({childPost})
    setChildPosts(childPost)


    setShow(true)
    props.onChildEvent(event);
  }

  const options = {
    replace: (domNode) => {
      if (domNode.name === 'a' && domNode.attribs && domNode.attribs.href) {
        const docId = domNode.attribs.href;
        return (
          <a href={docId} onClick={(e) => handleLinkClick(e, docId)}>
            {domNode.children[0].data}
          </a>
        );
      }
    }
  };

  const onClosePopup = () => {
    setShow(false);
  }

  return (
    <div className="post">
      <h2 className="title">{post.title}</h2>  
      <span className="body">{ReactHtmlParser(post.content, options)}</span>
      <Popup open={show} position="right center" onClose={onClosePopup} modal>
        {close => (
          <div>
            <div className="post">
            <div className='header-flex'>
              <h2 className="title">{childPosts.title}</h2>
              <span className="close" onClick={close}>
              X
            </span>
              </div>
              <span className="body">{childPosts.content}
              </span>
            </div>
            
          </div>
        )}

      </Popup>
      {/* <CommentList comments={post.comments} /> */}
    </div>
  );
};

export default BlogPost;
