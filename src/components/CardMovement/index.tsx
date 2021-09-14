import React from 'react';
import { Text, View } from 'react-native';
import MovementsDTO from '../../dtos/MovementsDTO';
import { Container, ContainerInfo, ContainerMovement, DescriptionInfo, TitleNameInfo,TitleValue } from './styles';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import formatMonetary from '../../utils/formatMonerary';
// import { Container } from './styles';



function CardMovement({id,payerReceiverName,transactionDate,
  transactionType,transactionValue,balanceAfterTransaction,isCashIn}:MovementsDTO){
    
    return (
      <Container>
        <ContainerInfo>
          <TitleNameInfo>
            José da Silva             
          </TitleNameInfo>
          <DescriptionInfo>
            {transactionType}
          </DescriptionInfo>          
          <DescriptionInfo>
            {new Date(transactionDate).toLocaleDateString('pt-br')}
          </DescriptionInfo>
        </ContainerInfo>
        <ContainerMovement>
          <MaterialComunityIcons 
            name="arrow-up"
            size = {14}
            color={isCashIn ? 'green' : 'red'}

          />
          <TitleValue>
          R$ {formatMonetary(transactionValue)}
           
          </TitleValue>

        </ContainerMovement>

      </Container>
    )
  }

export default CardMovement;