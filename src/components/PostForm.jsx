import React, { Component } from 'react';
import { createPost } from '../redux/actions';
import { connect } from 'react-redux';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return;
    }
    const newPost = {
      title,
      id: Date.now().toLocaleString(),
    };
    this.props.createPost(newPost);
    this.setState({
      title: '',
    });
  };
  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок Поста</label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={this.changeInputHandler}
            value={this.state.title}
          />
        </div>
        <button className="btn btn-success">Создать</button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
