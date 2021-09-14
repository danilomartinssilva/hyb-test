import React from 'react';
import { Container ,
  ContainerIconExtract,
  ContainerInfo,
  ContainerInfoSalary,
  ContainerTitle,
  TextDescriptionResume,
  TextDescriptionValue, 
  Title,
  ContainerInfoVisibility} from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from '../../assets/theme/colors'
import formatMonetary from '../../utils/formatMonerary';
interface CardResultProps{
  value:number;

}

function  CardResult ({value}:CardResultProps)  {
  
  return <>
         <Container>
           <ContainerTitle>
             <Title>
               Conta Pessoa Física
             </Title>
             <ContainerIconExtract>
                  <MaterialCommunityIcons 
                  name = {'arrow-left-right'}
                  color = {colors.white}
                  size={20}
                  />
             </ContainerIconExtract>
             
           </ContainerTitle>

          <ContainerInfo>
            <ContainerInfoSalary>
              <TextDescriptionResume>Saldo disponível</TextDescriptionResume>
              {value && (
                <>
                  <TextDescriptionResume>R$ {' '} <TextDescriptionValue>{formatMonetary(value)}</TextDescriptionValue></TextDescriptionResume>              
                </>
              )}
            </ContainerInfoSalary> 
            <ContainerInfoVisibility>
              <MaterialCommunityIcons 
              name = "eye"
              size = {20}
              color = {colors.white}
              
              />
            </ContainerInfoVisibility>
          </ContainerInfo>

         </Container>
         </>
}

export default CardResult;