import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

const AgePrefSvg = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={80} height={80.01} {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#6735ec" />
        <Stop offset={1} stopColor="#ff56ff" />
      </LinearGradient>
    </Defs>
    <Path
      data-name="Path 402"
      d="M62.818 15.553h3.636v3.636a3.636 3.636 0 0 0 7.273 0v-3.636h3.636a3.636 3.636 0 0 0 0-7.273h-3.636V4.643a3.636 3.636 0 1 0-7.273 0V8.28h-3.636a3.636 3.636 0 1 0 0 7.273Zm-40 7.273v36.363a3.636 3.636 0 1 0 7.273 0V22.825a3.636 3.636 0 0 0-7.273 0ZM75.909 30.1a3.636 3.636 0 0 0-2.836 4.291A32.727 32.727 0 1 1 47.618 8.934a3.708 3.708 0 0 0 1.455-7.273A39.272 39.272 0 0 0 41 1.007a40 40 0 1 0 40 40 39.273 39.273 0 0 0-.8-8 3.636 3.636 0 0 0-4.291-2.907Zm-38.545 0v3.636a10.909 10.909 0 0 0 2.836 7.271 10.909 10.909 0 0 0-2.836 7.273v3.636a10.909 10.909 0 0 0 10.909 10.909h3.636a10.909 10.909 0 0 0 10.909-10.909V48.28a10.909 10.909 0 0 0-2.836-7.273 10.909 10.909 0 0 0 2.836-7.273V30.1a10.909 10.909 0 0 0-10.909-10.911h-3.636A10.909 10.909 0 0 0 37.364 30.1Zm18.181 21.816a3.636 3.636 0 0 1-3.636 3.636h-3.636a3.636 3.636 0 0 1-3.636-3.636V48.28a3.636 3.636 0 0 1 3.636-3.636h3.636a3.636 3.636 0 0 1 3.636 3.636Zm0-21.818v3.636a3.636 3.636 0 0 1-3.636 3.636h-3.636a3.636 3.636 0 0 1-3.636-3.636V30.1a3.636 3.636 0 0 1 3.636-3.636h3.636a3.636 3.636 0 0 1 3.636 3.636Z"
      transform="translate(-1 -.997)"
      fill="url(#a)"
    />
  </Svg>
);

export default AgePrefSvg;
