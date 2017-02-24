import React from 'react';
import SearchForm from 'components/SearchForm';

function Header(props) {
  return (
    <div>
      <SearchForm
        onSubmit={this.props.onSubmit}
        inputValue={this.props.searchTerm}
      />
    </div>
  );
}

Header.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
};

export default Header;
