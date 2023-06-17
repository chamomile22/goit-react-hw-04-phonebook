import React from 'react';
import PropTypes from 'prop-types';
import { Label, InputLabel, InputField } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Label>
        <InputLabel>Find contact by name</InputLabel>
        <InputField
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </Label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
