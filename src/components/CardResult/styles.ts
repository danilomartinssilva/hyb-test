import styled from 'styled-components/native';
import * as colors from '../../assets/theme/colors';
export const Container = styled.View`
  padding: 8px;
  background-color: ${colors.terciary};
  flex-direction: column;
  border-radius: 8px;
  margin: 16px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  margin: 8px;
`;
export const ContainerIconExtract = styled.TouchableOpacity`
  justify-content: center;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ContainerInfoSalary = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 8px;
  margin-bottom: 8px;
`;
export const TextDescriptionResume = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: ${colors.white};
`;

export const TextDescriptionValue = styled.Text`
  font-size: 16px;
  color: ${colors.secondary};
`;
export const ContainerInfoVisibility = styled.TouchableOpacity`
  justify-content: center;
`;
