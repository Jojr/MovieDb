import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

interface IDropdown {
  items: any;
  props: any;
  placeholder: string;
}

export const Picker: React.FC = ({items, placeholder}) => {
  //const items = props.items;
  let array = [];

  Object.keys(items).map(function (key, index) {
    console.log(items[key]);
    array.push({ label: items[key].name, value: items[key].id });
  });
  return (
    <RNPickerSelect
      placeholder={placeholder}
      onValueChange={(value) => console.log(value)}
      items={array}
    />
  );
};
