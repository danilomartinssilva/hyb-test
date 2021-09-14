import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StatusBar, Text, View } from 'react-native';
import Header from '../../components/Header';
import * as  colors from '../../assets/theme/colors'
import CardResult from '../../components/CardResult';
import api from '../../services/api';
import CardMovement from '../../components/CardMovement';
import MovementsDTO from '../../dtos/MovementsDTO';
import ConfigurationPage from '../../dtos/PageConfigurationDTO';
import BalanceDTO from '../../dtos/BalanceDTO';

// import { Container } from './styles';



const ExtractScreen: React.FC = () => {
  const [balance,setBalance] = useState<BalanceDTO>({} as BalanceDTO)
  const [movements,setMovements] = useState<MovementsDTO[]>([])
  const [configurationPage,setConfigurationPage] = useState<ConfigurationPage>({} as ConfigurationPage)
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(0)  

  async function hadleLoadMovements(pageNumber=page){
    if(pageNumber===configurationPage?.totalPages) return;
    if(loading) return;
    setLoading(true)
    const request = await api.get(`payment-account-service/balance-and-statement/statement/a5f8c412-076c-41c9-ba08-87ffc87e8807?page=${page}&size=8`)
    const data = request.data;    
    setConfigurationPage(data)
    setMovements(movements.length ? [...movements,...data.content] : data.content)
    
    setPage(page+1)    
  }        

  useEffect(()=>{
    
    setLoading(true)
    async function handleGetBalance(){
      const request = await api.get(`/payment-account-service/balance-and-statement/balance/a5f8c412-076c-41c9-ba08-87ffc87e8807`)
      const data = request.data;
      setBalance(data)
    }
  
    handleGetBalance()
    hadleLoadMovements(0)
    
    setLoading(false)

  },[])

  useEffect(()=>{

  },[])
  
  
  return <>
                <View style = {{flex:1}}>
                  <View style = {{flex:.5}}>
                    <Header />
                    <CardResult value = {balance?.availableBalance} /> 

                  </View>
                  <View style = {{flex:1}}>

                    <FlatList data = {movements}
                     
                      onEndReachedThreshold={0.1}
                      onEndReached={()=>{
                        hadleLoadMovements()
                      }
                      
                      }
                      style = {{marginBottom:24}}
                      

                      
                      keyExtractor = {(item,index)=>item.id}                                            
                      renderItem = {({item,index})=><CardMovement {...item} />}                      
                      /> 

                  </View>

               </View>
          <StatusBar
            translucent
            backgroundColor={colors.secondary}          
          />


         </>
}

export default ExtractScreen;