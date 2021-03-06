import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: ''
        };
    };

    onInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        
        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post);
    }

    render(){
        return (
            <div>
                <h1>Add Post</h1>

                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title}
                            onChange={this.onInputChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea 
                            name="body" 
                            value={this.state.body}
                            onChange={this.onInputChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };
};

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);