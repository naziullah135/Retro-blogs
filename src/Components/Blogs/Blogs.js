import React, { useEffect, useState } from 'react';
import BlogData from './BlogData';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h1 className="text-center">Blogs</h1>
            <div className="row">
                {
                    blogs.map(blog => <BlogData blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;