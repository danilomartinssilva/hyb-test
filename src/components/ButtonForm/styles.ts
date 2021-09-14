import styled from 'styled-components/native';

import * as colors from '../../assets/theme/colors';

export const Container = styled.TouchableOpacity`
  height: 40px;
  background: ${(props: {type: string}) =>
    props.type === 'submit' ? `${colors.primary}` : `${colors.white}`};
  align-self: stretch;
  justify-content: center;
  flex-direction: row;

  align-items: center;
  border-color: ${colors.gray};
  border-width: ${(props: {type: string}) =>
    props.type !== 'submit' ? `${0.8}px` : '1px'};
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${(props: {type: string}) =>
    props.type === 'submit' ? `${colors.white}` : '#999999'};
`;
