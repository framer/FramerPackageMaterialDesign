import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import { default as MuiTextField } from '@material-ui/core/TextField';

interface Props {
  defaultValue: string;
  disabled: boolean;
  error: boolean;
  fullWidth: boolean;
  label: string;
  type: 'number' | 'password' | 'text' | 'search';
  margin: 'none' | 'dense' | 'normal';
  multiline: boolean;
  required: boolean;

  onChange: (text: string) => void;
  width: number;
  height: number
}

export class TextField extends React.Component<Props> {
  static defaultProps = {
    width: 170,
    height: 60,

    defaultValue: '',
    disabled: false,
    error: false,
    fullWidth: false,
    label: 'Awesome label',
    type: 'text',
    margin: 'normal',
    multiline: false,
    required: false,
  };

  static propertyControls: PropertyControls<Props> = {
    defaultValue: { type: ControlType.String, title: 'Default' },
    label: { type: ControlType.String, title: 'Label' },
    disabled: { type: ControlType.Boolean, title: 'Disabled' },
    multiline: { type: ControlType.Boolean, title: 'Multiline' },
    required: { type: ControlType.Boolean, title: 'Required' },
    error: { type: ControlType.Boolean, title: 'Error' },
    fullWidth: { type: ControlType.Boolean, title: 'Full Width' },
    margin: {
      type: ControlType.Enum,
      title: 'Margin',
      options: ['none', 'dense', 'normal'],
    },
    type: {
      type: ControlType.Enum,
      title: 'Type',
      options: ['text', 'number', 'password', 'search'],
    },
  };

  render() {
    const {
      label,
      type,
      fullWidth,
      defaultValue,
      error,
      multiline,
      required,
      disabled,
      margin,
    } = this.props;
    const { width, height } = this.props;
    return (
      <div
        style={{
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MuiTextField
          color="primary"
          label={label}
          type={type}
          fullWidth={fullWidth}
          defaultValue={defaultValue}
          multiline={multiline}
          required={required}
          disabled={disabled}
          margin={margin}
          error={error}
        >
          test
        </MuiTextField>
      </div>
    );
  }
}
