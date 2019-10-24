import React, { Component } from 'react';
import { connect } from 'react-redux';
import noteActions from '../Redux/actions/noteActions';

class EditNote extends Component {
  state = {
    title: '',
    content: ''
  };

  //////////////////////   WAY 1
  componentDidMount() {
    const noteId = parseInt(this.props.match.params.id);
    fetch(`http://localhost:3000/notes/${noteId}`)
      .then(r => r.json())
      .then(note => this.setState({ ...note }));
  }

  //////////////////////   WAY 2
  // static getDerivedStateFromProps(props, state) {
  //   if (state.title === '' && props.notes.length) {
  //     const noteId = parseInt(props.match.params.id);
  //     const note = props.notes.find(note => note.id === noteId);
  //     return {
  //       id: note.id,
  //       title: note.title,
  //       content: note.content
  //     };
  //   }
  //   return null;
  // }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { editNoteToDB, history } = this.props;
    editNoteToDB(this.state);
    history.push('/notes');
  };

  render() {
    const { title, content } = this.state;
    return (
      <form className="new-note-form" onSubmit={this.handleSubmit}>
        <h2>Edit Note</h2>
        <input
          onChange={this.handleChange}
          type="text"
          name="title"
          value={title}
        />
        <textarea
          onChange={this.handleChange}
          type="text"
          name="content"
          value={content}
        />
        <input type="submit" value="SAVE" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  editNoteToDB: noteActions.editNoteToDB
};

const mapStateToProps = state => ({ notes: state });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNote);
