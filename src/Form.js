import React from 'react';
import PropTypes from 'prop-types';

class EditForm extends React.Component {
  render() {
    return (
      <div>
        this will be a form
      </div>
    );
  }
}

EditForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditForm;
