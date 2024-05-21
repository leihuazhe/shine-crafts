import { Voice } from '@/lib/lang_constants';
import React from 'react';
import chroma from "chroma-js";

import { useTheme } from "next-themes"
import Select, { StylesConfig } from 'react-select';

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});


function colorStyle(isDark: boolean): StylesConfig<Voice> {
  const themeColor = isDark ? '#fff' : '#000';
  return {
    control: (styles) => ({ ...styles, backgroundColor: isDark ? 'black' : 'white' , textColor: themeColor }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
            ? data.color
            : isFocused
              ? color.alpha(0.1).css()
              : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    input: (styles) => ({ ...styles, ...dot()}),
    placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
    singleValue: (styles, { data }) => ({ ...styles, color: themeColor, ...dot(themeColor) }),
    //Let the item to
    valueContainer: (base, state) => ({
      ...base,
      justifyContent: "center"
    }),
  }
}

interface OptionProps {
  voice: Voice;
  voices: Voice[];
  onChange: (value: any) => void;
}

const VoiceOptionV2 = ({
  voice,
  voices,
  onChange,
}: OptionProps) => {
  const { setTheme, theme } = useTheme()

  return (
    <div className="mt-4 rounded-lg text-center text-xl">
      <Select
        className="items-center text-center"
        defaultValue={voice}
        options={voices}
        styles={colorStyle(theme == 'dark')}
        onChange={onChange}
      />
    </div>
  );
};

export default VoiceOptionV2;
