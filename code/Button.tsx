import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import { default as MuiButton } from '@material-ui/core/Button';

interface Props {
  color: 'primary' | 'secondary' | 'default';
  size: 'small' | 'medium' | 'large';
  variant: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab';
  href: string;
  text: string;
  disabled: boolean;
  disableRipple: boolean;
  fullWidth: boolean;
  width: number; height: number;
  onClick: () => void;
}

export class Button extends React.Component<Props> {
  static defaultProps = {
    width: 101,
    height: 40,

    color: 'primary',
    size: 'medium',
    variant: 'raised',
    href: '',
    text: 'Click me',
    disabled: false,
    disableRipple: false,
    fullWidth: false,
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: 'Title' },
    href: { type: ControlType.String, title: 'URL' },
    disabled: { type: ControlType.Boolean, title: 'Disabled' },
    disableRipple: { type: ControlType.Boolean, title: 'Ripple' },
    fullWidth: { type: ControlType.Boolean, title: 'Full Width' },
    color: {
      type: ControlType.Enum,
      title: 'Color',
      options: ['primary', 'secondary', 'default'],
    },
    size: {
      type: ControlType.Enum,
      title: 'Size',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      type: ControlType.Enum,
      title: 'Variant',
      options: ['text', 'flat', 'outlined', 'contained', 'raised', 'fab'],
    },
  };

  render() {
    const {
      text,
      href,
      disabled,
      disableRipple,
      fullWidth,
      color,
      size,
      variant,
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
        <MuiButton
          href={href}
          disabled={disabled}
          disableRipple={disableRipple}
          fullWidth={fullWidth}
          color={color}
          size={size}
          variant={variant}
        >
          {text || Button.defaultProps.text}
        </MuiButton>
      </div>
    );
  }
}
