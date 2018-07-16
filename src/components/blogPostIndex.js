import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions';
import _ from 'lodash';
import { Link } from "react-router-dom";

class BlogPostIndex extends Component {
    componentDidMount() {
        this.props.fetchBlogPosts();
    }

    renderblogPosts() {
        return _.map(this.props.blogPost, post => {
           return(
                <li className= "list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
           );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a New BlogPost
                    </Link>
                </div>
                <h3> Blog Posts </h3>
                <ul>
                    {this.renderblogPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { blogPost : state.blogPost };
}

export default connect(mapStateToProps, { fetchBlogPosts })(BlogPostIndex);