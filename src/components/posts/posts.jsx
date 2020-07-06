import React, { Component } from "react";

import axios from "axios";

import PostCard from "./postCard.jsx";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/postcard/")
      .then((response) => {
        console.log(response.data);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container" id="practise">
        <div className="row justify-content-center">
          {this.state.posts.map((post) => (
            <PostCard key={post.id} cardInfo={post.cardInfo} />
          ))}
        </div>
      </div>
    );
  }
}
export default Posts;
