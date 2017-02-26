import React from 'react';
import Input from './Input';

function SearchForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="username">
        <br />
        <Input
          id="username"
          type="text"
          placeholder="Search by username"
          value={props.username}
          onChange={props.onChangeUsername}
        />
      </label>
      <Input type="submit" value="Search" />
    </form>
  );
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
