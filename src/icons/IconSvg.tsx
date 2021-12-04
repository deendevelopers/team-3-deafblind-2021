import React, { FC } from 'react';
import { StyleProp } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import constants from 'theme/constants';
interface IPrivacyProps {
  color: string;
  size: number;
  style?: StyleProp<SVGElement>;
  onPress?: () => void;
}

const Privacy: FC<IPrivacyProps> = ({
  size = constants.iconSize,
  color = 'black',
  style,
  onPress,
  ...props
}) => {
  const path =
    'M12,3.19l7,3.11V11c0,4.52-2.98,8.69-7,9.93C7.98,19.69,5,15.52,5,11V6.3L12,3.19 M12,1L3,5v6c0,5.55,3.84,10.74,9,12 c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z';

  return (
    <Svg
      height={size}
      width={size}
      // @ts-ignore
      style={style}
      viewBox='0 0 24 24'
      onPress={onPress}
      {...props}
    >
      <Path d={path} fill={color} />
    </Svg>
  );
};

export default Privacy;
