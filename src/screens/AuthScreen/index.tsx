import React from 'react';
import {StatusBar} from 'react-native';
import * as colors from '../../assets/theme/colors';
import ButtonForm from '../../components/ButtonForm';
import InputForm from '../../components/InputForm';
import {SCREENS} from '../../routes/constants/route-names';


import {Container} from './styles';
interface AuthProps {
  navigation: any;
}

function AuthScreen({navigation}: AuthProps) {
  return (
    <>
      <StatusBar backgroundColor={colors.secondary} />
      <Container>
        <InputForm label="Email" onPressIcon={() => {}} o />
        <InputForm
          label="Senha"
          onPressIcon={() => {}}
          secureTextEntry={true}
        />
        <ButtonForm
          onPress={() => {
            navigation.navigate('AppStack', {
              screen: SCREENS.EXTRACT_NAVIGATOR_SCREENS.EXTRACT,
            });
          }}
          type="submit"
          style={{margin: 8}}
          onPressIcon={() => {}}>
          Entrar
        </ButtonForm>
      </Container>
      
    </>
  );
}
export default AuthScreen;
