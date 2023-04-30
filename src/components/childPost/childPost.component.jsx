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
            <BlogPost key={childPostList?.id} post={childPostList} isExploreMode={true} /> : ''
    )


}

export default ChildPost;