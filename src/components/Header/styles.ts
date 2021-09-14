import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import * as colors from '../../assets/theme/colors';
export const Container = styled(LinearGradient).attrs({
  colors: [colors.secondary, colors.gray],
})`
  flex: 1;
`;
export const BioContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;
export const UserInfoContainer = styled.View`
  flex-direction: row;
  height: 60px;
  align-items: center;
`;
export const UserInfoText = styled.Text`
  font-size: 12px;
  color: white;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  margin-top: 16px;
  text-transform: uppercase;
`;
export const AvatarCircle = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 16px;
  margin-top: 16px;
`;

export const ButtonConfiguration = styled.TouchableOpacity`
  padding: 4px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  margin-top: 8px;
`;
