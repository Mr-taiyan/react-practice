import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const DataSourse = {
  getComments() {},
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
      comments: DataSourse.getComments(),
    };
  }

  componentDidMount() {
    DataSourse.addChangeListener(this.handleChange);
  }
  componentWillUnmount() {
    DataSourse.removeChangeListener(this.handleChange);
  }
  handleChange() {
    this.setState({
      comments: DataSourse.getComments(),
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

ReactDOM.render(<CommentList />, document.getElementById("root"));
