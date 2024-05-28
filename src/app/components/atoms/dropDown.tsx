import React, { Dispatch, FC, SetStateAction } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

interface DropdownProps {
  options: string[] | null;
  label: string;
  initialOption?: string | null;
  setSelection: Dispatch<SetStateAction<string>>;
}

const DropdownSelector: FC<DropdownProps> = ({
  options,
  label,
  initialOption,
  setSelection,
}) => {
  return (
    <Dropdown className="mr-4">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {initialOption || label}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options?.map((element, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => setSelection(element)}
            href="#"
          >
            {element}
          </Dropdown.Item>
        ))}
        <Dropdown.Item onClick={() => setSelection('')} href="#">
          All
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownSelector;
