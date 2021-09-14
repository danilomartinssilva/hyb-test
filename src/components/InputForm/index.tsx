import React, {forwardRef} from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  TextInput,
  ErroMessage,
  DescriptionError,
  ContainerInput,
  Label,
} from './styles';

interface InputProps {
  style?:any;
  label:string;
  icon?:string;
  onPressIcon:()=>void;
  messageError?:string;
}
function InputForm({style,label,icon,onPressIcon,messageError,...rest}:InputProps) {
  
  return (
    <Container style={style}>
      {label && <Label>{label}</Label>}
      <ContainerInput>
        <TextInput {...rest} />
        {icon && (
          <Ionicons
            onPress={onPressIcon}
            name={icon}
            style={{margin: 6}}
            size={20}
          />
        )}
      </ContainerInput>

      {messageError && (
        <ErroMessage>
          <DescriptionError>{messageError}</DescriptionError>
        </ErroMessage>
      )}
    </Container>
  );
}
export default forwardRef(InputForm);
