import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

interface InputSearchProps {
  onSearch: (value: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value.length >= 3) {
      onSearch(value);
    }
  };

  return (
    <Form.Control
      type="text"
      value={searchValue}
      onChange={handleInputChange}
      placeholder="Enter at least 3 characters"
    />
  );
};

export default InputSearch;
