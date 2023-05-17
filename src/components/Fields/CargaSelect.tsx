import React from 'react';
import Select from 'react-select';

export function CargaSelect() {
  const [value, setValue] = React.useState<{
    value: string;
    label: string;
  } | null>(null);
  const options = [
    { value: '1', label: 'option 1' },
    { value: '2', label: 'option 2' },
    { value: '3', label: 'option 3' },
    { value: '4', label: 'option 4' },
    { value: '5', label: 'option 5' },
    { value: '6', label: 'Lorem, ipsum.' },
  ];

  return (
    <Select
      isClearable={true}
      isSearchable={true}
      options={options}
      value={value}
      onChange={setValue}
    />
  );
}
