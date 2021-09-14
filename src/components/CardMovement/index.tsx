import React from 'react';
import MovementsDTO from '../../dtos/MovementsDTO';
import {
  Container,
  ContainerInfo,
  ContainerMovement,
  DescriptionInfo,
  TitleNameInfo,
  TitleValue,
} from './styles';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import formatMonetary from '../../utils/formatMonerary';
// import { Container } from './styles';

function CardMovement({
  transactionDate,
  transactionType,
  transactionValue,
  isCashIn,
}: MovementsDTO) {
  return (
    <Container>
      <ContainerInfo>
        <TitleNameInfo>José da Silva</TitleNameInfo>
        <DescriptionInfo>{transactionType}</DescriptionInfo>
        <DescriptionInfo>
          {new Date(transactionDate).toLocaleDateString('pt-br')}
        </DescriptionInfo>
      </ContainerInfo>
      <ContainerMovement>
        <MaterialComunityIcons
          name="arrow-up"
          size={14}
          color={isCashIn ? 'green' : 'red'}
        />

        <>
          <TitleValue>R$ {formatMonetary(transactionValue) || 0}</TitleValue>
        </>
      </ContainerMovement>
    </Container>
  );
}

export default CardMovement;
