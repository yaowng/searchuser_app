import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export default class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>
        Your Profile
      </h1>
    );
  }
}