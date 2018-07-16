import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogPost, deleteBlogPost } from "../actions";

class ShowBlogPost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBlogPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deleteBlogPost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}
        >
            Delete Post
        </button>

        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ blogPost }, ownProps) {
  return { post: blogPost[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBlogPost, deleteBlogPost })(ShowBlogPost);
