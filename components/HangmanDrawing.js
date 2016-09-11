import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import React, {
  PropTypes,
} from 'react';

let strokeDefaults = {
  stroke: 'black',
  fill: 'none',
  strokeWidth: 2,
};


export default class HangmanDrawing extends React.Component {
    render() {
        return (
            <Svg
                height="300"
                width="300"
            >
            { (this.props.strikes > 0) && (
              // Head
              <Circle
                  cx="150"
                  cy="50"
                  r="40"
                  {...strokeDefaults}
              />
            )}

            { (this.props.strikes > 1) && (
              // Body
              <Line
                x1="150"
                y1="90"
                x2="150"
                y2="200"
                {...strokeDefaults}
              />
            )}

            { (this.props.strikes > 2) && (
              // Left arm
              <Line
                x1="150"
                y1="150"
                x2="70"
                y2="100"
                {...strokeDefaults}
              />
            )}

            { (this.props.strikes > 3) && (
              // Right arm
              <Line
                x1="150"
                y1="150"
                x2="230"
                y2="100"
                {...strokeDefaults}
              />
            )}

            { (this.props.strikes > 4) && (
              // Left leg
              <Line
                x1="150"
                y1="200"
                x2="80"
                y2="300"
                {...strokeDefaults}
              />
            )}

            { (this.props.strikes > 5) && (
              // Right leg
              <Line
                x1="150"
                y1="200"
                x2="220"
                y2="300"
                {...strokeDefaults}
              />
            )}

          </Svg>
        );
    }
}
