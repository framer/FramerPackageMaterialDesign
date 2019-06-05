import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import { default as MuiTypography } from '@material-ui/core/Typography';

interface Props {
  align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  color:
  | 'inherit'
  | 'primary'
  | 'textSecondary'
  | 'secondary'
  | 'error'
  | 'default';
  gutterBottom: boolean;
  noWrap: boolean;
  paragraph: boolean;
  variant:
  | 'display4'
  | 'display3'
  | 'display2'
  | 'display1'
  | 'headline'
  | 'title'
  | 'subheading'
  | 'body2'
  | 'body1'
  | 'caption'
  | 'button';
  text: string;

  onClick: () => void;
  width: number;
  height: number
}

export class Typography extends React.Component<Props> {
  static defaultProps = {
    width: 101,
    height: 40,

    align: 'left',
    color: 'textSecondary',
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
    variant: 'body1',
    text: '',
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: 'Text' },
    gutterBottom: { type: ControlType.Boolean, title: 'Gutter' },
    noWrap: { type: ControlType.Boolean, title: 'No Wrap' },
    paragraph: { type: ControlType.Boolean, title: 'Paragraph' },
    color: {
      type: ControlType.Enum,
      title: 'Color',
      options: [
        'inherit',
        'primary',
        'textSecondary',
        'secondary',
        'error',
        'default',
      ],
    },
    align: {
      type: ControlType.Enum,
      title: 'Align',
      options: ['inherit', 'left', 'center', 'right', 'justify'],
    },
    variant: {
      type: ControlType.Enum,
      title: 'Variant',
      options: [
        'display4',
        'display3',
        'display2',
        'display1',
        'headline',
        'title',
        'subheading',
        'body2',
        'body1',
        'caption',
        'button',
      ],
    },
  };

  render() {
    const {
      text,
      gutterBottom,
      noWrap,
      paragraph,
      color,
      align,
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
        <MuiTypography
          gutterBottom={gutterBottom}
          noWrap={noWrap}
          paragraph={paragraph}
          color={color}
          align={align}
          variant={variant}
        >
          {text || Typography.defaultProps.text}
        </MuiTypography>
      </div>
    );
  }
}
