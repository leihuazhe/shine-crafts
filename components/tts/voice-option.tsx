import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import Select, { ClearIndicatorProps, DropdownIndicatorProps, MultiValueRemoveProps, components } from 'react-select';

interface OptionProps {
  voice: any;
  voices: any;
  onChange: (value: any) => void;
}

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
  return (
    <components.ClearIndicator {...props}>
      <LockClosedIcon />
    </components.ClearIndicator>
  );
};

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <LockClosedIcon />
    </components.MultiValueRemove>
  );
};

const bgStyle = "bg-inherit dark:bg-black/70";
const textStyle = "dark:text-white";

const controlStyles = {
  base: "border rounded-lg bg-inherit dark:bg-black/70 hover:cursor-pointer",
  focus: "border-primary-600 ring-1 ring-primary-500",
  nonFocus: "border-gray-300 hover:border-gray-400",
};
const placeholderStyles = "text-gray-500 pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "p-1 gap-1    bg-red";
const singleValueStyles = "leading-7 ml-1 dark:text-white     bg-red";
const multiValueStyles =
  "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5     bg-red";
const multiValueLabelStyles = "leading-6 py-0.5    bg-red";
const multiValueRemoveStyles =
  "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md    bg-red";
const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles =
  "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800    bg-red";
const indicatorSeparatorStyles = "bg-gray-300    bg-red";
const dropdownIndicatorStyles =
  "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black    bg-red";
const menuStyles = `p-1 mt-2 border border-gray-200 rounded-lg ${bgStyle} ${textStyle}     bg-red`;
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm     bg-red";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded",
  focus: "bg-gray-100 active:bg-gray-200",
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";


const ReactSelect = (props: any) => (
  <Select
    isMulti={false}
    closeMenuOnSelect={false}
    hideSelectedOptions={false}
    // unstyled
    // components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
    className="basic-single"
    classNamePrefix="select"
    // classNames={{
    //   control: ({ isFocused }) =>
    //     clsx(
    //       isFocused ? controlStyles.focus : controlStyles.nonFocus,
    //       controlStyles.base,
    //     ),
    //   placeholder: () => placeholderStyles,
    //   input: () => selectInputStyles,
    //   valueContainer: () => valueContainerStyles,
    //   singleValue: () => singleValueStyles,
    //   multiValue: () => multiValueStyles,
    //   multiValueLabel: () => multiValueLabelStyles,
    //   multiValueRemove: () => multiValueRemoveStyles,
    //   indicatorsContainer: () => indicatorsContainerStyles,
    //   clearIndicator: () => clearIndicatorStyles,
    //   indicatorSeparator: () => indicatorSeparatorStyles,
    //   dropdownIndicator: () => dropdownIndicatorStyles,
    //   menu: () => menuStyles,
    //   groupHeading: () => groupHeadingStyles,
    //   option: ({ isFocused, isSelected }) =>
    //     clsx(
    //       isFocused && optionStyles.focus,
    //       isSelected && optionStyles.selected,
    //       optionStyles.base,
    //     ),
    //   noOptionsMessage: () => noOptionsMessageStyles,
    // }}
    // theme={(theme) => ({
    //   ...theme,
    //   borderRadius: 0,
    //   colors: {
    //     ...theme.colors,
    //     primary25: 'hotpink',
    //     primary: 'black',
    //   },
    // })}
    {...props}
  />
)


const VoiceOption = ({
  voice,
  voices,
  onChange,
}: OptionProps) => {
  return (
    <div className="mt-4 rounded-lg text-center text-2xl">
      <ReactSelect
        isSearchable={false}
        value={voice}
        onChange={onChange}
        options={voices}
      />
    </div>
  );
};

export default VoiceOption;
