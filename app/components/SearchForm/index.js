import React from 'react';
import Input from './Input';

class SearchForm extends React.Component{

    render() {
        return(
            <form onSubmit={this.props.onSubmit}>
            <label htmlFor="username">
                <br/>
                <Input
                id="username"
                type="text"
                placeholder="Search by username"
                value={this.props.username}
                onChange={this.props.onChangeUsername}
                />
            </label>
            <Input type="submit" value="Search" />
            </form>
        );
    }
}

SearchForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    onChangeUsername: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired,
};

SearchForm.defaultProps = {
    inputValue: '',
};

export default SearchForm;