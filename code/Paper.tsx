import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import { default as MuiPaper } from '@material-ui/core/Paper';
import { default as MuiTypography } from '@material-ui/core/Typography';

interface Props {
  square: boolean;
  padding: number;
  paddingSplit: boolean;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  elevation:
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '11'
  | '22'
  | '23'
  | '24';
  text: string;
  title: string;

  onClick: () => void;
  width: number; height: number
}

export class Paper extends React.Component<Props> {
  static defaultProps = {
    width: 101,
    height: 101,

    square: true,
    padding: 10,
    elevation: '4',
    text: 'Text',
    title: 'Title',
  };

  static propertyControls: PropertyControls<Props> = {
    title: { type: ControlType.String, title: 'Title' },
    text: { type: ControlType.String, title: 'Text' },
    padding: {
      type: ControlType.FusedNumber,
      title: 'Padding',
      splitKey: 'paddingSplit',
      splitLabels: ['Common', 'Separate'],
      valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
      valueLabels: ['Top', 'Right', 'Bottom', 'Left'],
      min: 0,
    },
    square: { type: ControlType.Boolean, title: 'Square' },
    elevation: {
      type: ControlType.Enum,
      title: 'Elevation',
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '11',
        '22',
        '23',
        '24',
      ],
    },
  };

  render() {
    const { text, title, square, elevation, padding } = this.props;
    const { width, height } = this.props;

    let style: React.CSSProperties = {};
    if (this.props.paddingSplit) {
      const {
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
      } = this.props;
      style = {
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
      };
    } else {
      style.padding = this.props.padding;
    }
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
        <MuiPaper square={square} elevation={parseInt(elevation, 10)}>
          <div style={style}>
            <MuiTypography variant="headline" component="h3">
              {title}
            </MuiTypography>
            <MuiTypography component="p">{text}</MuiTypography>
          </div>
        </MuiPaper>
      </div>
    );
  }
}
