import React from "react";
import './Posts.css';
import Post from '../post/Post.js';

class Posts extends React.Component
{
    constructor(props)
    {
        super(props);
        let {posts}=props;
        this.state =
        {
            posts:props.posts
        }
    }

    render()
    {
        return(
            <div>
                {
                    // typeof(this.state.props)
                    this.state.posts.map(
                        post =>
                        (
                            <Post key= {post.id} title ={post.title} content={post.content}/>
                        )
                    )
                }
            </div>
        )
    }
}
export default Posts;