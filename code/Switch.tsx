import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import { default as MuiSwitch } from '@material-ui/core/Switch';

interface Props {
  checked: boolean;
  color: 'primary' | 'secondary' | 'default';
  disabled: boolean;
  disableRipple: boolean;

  onChange: (checked: boolean) => void;
  width: number;
  height: number
}
interface State {
  checked: boolean;
}

export class Switch extends React.Component<Props, State> {
  static defaultProps = {
    width: 30,
    height: 30,
    disabled: false,
    disableRipple: true,
    checked: false,
  };

  static propertyControls: PropertyControls<Props> = {
    checked: { type: ControlType.Boolean, title: 'Checked' },
    disabled: { type: ControlType.Boolean, title: 'Disabled' },
    disableRipple: { type: ControlType.Boolean, title: 'Ripple' },
    color: {
      type: ControlType.Enum,
      title: 'Color',
      options: ['primary', 'secondary'],
    },
  };

  static getDerivedStateFromProps(nextProps: Props): State {
    return {
      checked: nextProps.checked,
    };
  }

  state = {
    checked: false,
  };

  onTap = () => {
    if (this.props.onChange) {
      this.props.onChange(!this.state.checked);
    } else {
      this.setState({
        checked: !this.state.checked,
      });
    }
  };

  render() {
    const { width, height } = this.props;
    const { color, disabled, disableRipple } = this.props;
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
        <MuiSwitch
          checked={this.state.checked}
          color={color}
          disabled={disabled}
          disableRipple={!disableRipple}
          onChange={this.onTap}
        />
      </div>
    );
  }
}
