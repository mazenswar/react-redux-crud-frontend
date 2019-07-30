import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { newNoteToDB } from "../../Redux/adapters/notesAdapter";
import "../../Stylesheets/newNote.scss";

class NewNote extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { newNoteToDB, history } = this.props;
    newNoteToDB(this.state);
    history.push("/notes");
  };

  render() {
    console.log(this.state);

    const { title, content } = this.state;
    return (
      <form className="new-note-form" onSubmit={this.handleSubmit}>
        <h2>Create New Note</h2>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <textarea name="content" value={content} onChange={this.handleChange} />
        <input type="submit" value="SAVE" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  newNoteToDB
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(NewNote)
);
