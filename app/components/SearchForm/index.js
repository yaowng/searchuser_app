import React from 'react';

class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { inputValue: this.props.inputValue };
    }
    render() {
        return(
            <form onSubmit="{this.handleSubmit}">
                <input 
                    type="text" 
                    placeholder="Search for a user"
                    value={this.state.inputValue}/>
                <input 
                    type="submit" 
                    value="Search"
                    onChange={this.handleChange}/>
            </form>
        );
    }

    handleChange(e) {
        this.setState({inputValue: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.inputValue) { return; }
        this.props.onSubmit(this.state.inputValue);
    }
}

SearchForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    inputValue: React.PropTypes.string.isRequired,
};

SearchForm.defaultProps = {
    inputValue: '',
};

export default SearchForm;