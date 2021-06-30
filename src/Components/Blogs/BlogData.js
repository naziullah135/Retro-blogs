import React from 'react';

const BlogData = (props) => {
    const {id,title,body} = props.blog;
    return (
        <div className="card col-sm-4">
        <img src="" className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{body}</p>
        </div>
        <div className="text-center border-top-0 mb-1">
          <button
            // onClick={() => history.push(`event/${_id}`)}
            class="btn btn-success "
          >
            View Details
          </button>
        </div>
      </div>
    );
};

export default BlogData;