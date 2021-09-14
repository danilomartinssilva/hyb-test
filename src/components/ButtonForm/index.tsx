import React from 'react';
import {Container, Title} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ButtonProps {
  children: any;
  style?: any;
  type?: string;
  icon?: string;
  iconColor?: string;
  onPressIcon: () => void;
  onPress: () => void;
  
}

export default function ButtonForm({
  children,
  style,
  type,
  icon,
  iconColor,
  onPressIcon,
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} style={style} {...rest}>
      {icon && (
        <Ionicons
          onPress={onPressIcon}
          name={icon}
          color={iconColor}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{margin: 6}}
          size={20}
        />
      )}
      <Title type={type}>{children}</Title>
    </Container>
  );
}
