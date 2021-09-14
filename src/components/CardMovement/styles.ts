import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';
export const Container = styled.View`
  height: 80px;
  background-color: #ededed;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;

export const ContainerMovement = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: 80px;
`;
export const TitleValue = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const ContainerInfo = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;
export const TitleNameInfo = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
export const DescriptionInfo = styled.Text`
  font-size: 10px;
`;
export const DateInfo = styled.Text`
  font-size: 10px;
`;
