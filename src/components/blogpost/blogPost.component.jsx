import React, { useState } from 'react';
import './blogPost.scss';
import ReactHtmlParser from 'html-react-parser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const BlogPost = (props) => {
  const { post, isExploreMode, onChildEvent } = props;
  const [show, setShow] = useState(false);
  const [childPosts, setChildPosts] = useState({ title: '', content: '' });

  const handleLinkClick = (event, docId) => {
    event.preventDefault();
    console.log('Link clicked:', docId);
    console.log({ post })
    const childPost = post.child_post.find((item) => item.id == docId);
    setChildPosts(childPost)
    console.log({ childPosts })
    setShow(true)
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

  const onExpandView = (childpost) => {
    onChildEvent(childpost); // navigate to parent and then open childPost component
  }

  return (
    <div className={isExploreMode ? 'expanded-post' : 'shrink-post'}>
      <div className='post'>
        <h2 className="title">{post?.title}</h2>
        <span className="body">{ReactHtmlParser(post?.content, options)}</span>
        <Popup open={show} position="right center" onClose={onClosePopup} modal>
          {close => (
            <div>
              <div className="post">
                <div className='header-flex'>
                  <h2 className="title">{childPosts?.title}</h2>
                  <span className="close" onClick={() => onExpandView(childPosts)}>
                  <img src={require('../../assets/icons/expand.png')} class="img-expand" />
                  </span>
                </div>
                <span className="body modal">{ReactHtmlParser(childPosts?.content, '')}</span>
              </div>

            </div>
          )}
        </Popup>
        {/* <CommentList comments={post.comments} /> */}
      </div>
    </div>
  );
};

export default BlogPost;
