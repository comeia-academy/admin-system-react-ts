// ** Imports do React
import React from "react";

// ** Imports de componentes
import Input, { InputProps } from "../Input";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends InputProps {
  options: Option[];
}

const Select: React.FC<SelectProps> = ({ label, name, options, errors, touched, as="select" }) => {
  return (
    <Input
      label={label}
      name={name}
      as={as}
      errors={errors}
      touched={touched}>
        <option value="">Choose an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </Input>
  );
};

export default Select;
