import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const DataSource = {
  getComments() {},
  getBlogPost() {},
  addChangeListener(prop) {},
  removeChangeListener(prop) {},
};

function Comment({ comment }) {
  return <div>{comment}</div>;
}

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comments: DataSource.getComments(),
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }
  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }
  handleChange() {
    this.setState({
      comments: DataSource.getComments(),
    });
  }
  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment}></Comment>
        ))}
      </div>
    );
  }
}

function TextBlock({ text }) {
  return <div>{text}</div>;
}

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id),
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id),
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}

ReactDOM.render(<CommentList />, document.getElementById("root"));
