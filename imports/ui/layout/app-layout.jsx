import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ content }) => (
  <div id="content">
    {content}
  </div>
);

AppLayout.propTypes = {
  content: PropTypes.element.isRequired,
};

export default AppLayout;
