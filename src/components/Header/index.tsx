import React from 'react';

import {
  AvatarCircle,
  BioContainer,
  ButtonConfiguration,
  Container,
  UserInfoContainer,
  UserInfoText,
} from './styles';
import * as colors from '../../assets/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <BioContainer>
        <UserInfoContainer>
          <AvatarCircle source={{uri: 'https://i.pravatar.cc/40'}} />

          <UserInfoText> Danilo Martins</UserInfoText>
        </UserInfoContainer>
        <ButtonConfiguration>
          <Ionicons name="settings-outline" size={25} color={colors.white} />
        </ButtonConfiguration>
      </BioContainer>
    </Container>
  );
};

export default Header;
