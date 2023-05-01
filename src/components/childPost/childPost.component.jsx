import BlogPost from "../blogpost/blogPost.component";
import React, { useEffect, useState } from 'react';


const ChildPost = () => {
    const [childPostList, setchildPostList] = useState(null);
    console.log({ childPostList })

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const state = urlParams.get('state');
        setchildPostList(JSON.parse(decodeURIComponent(state)));
    }, []);

    return (

        childPostList ?
            <div className="post-wrapper">
                <h3>{childPostList?.title}</h3>
              <BlogPost key={childPostList?.id} post={childPostList} isExploreMode={true} />
            </div>
             : ''
    )


}

export default ChildPost;