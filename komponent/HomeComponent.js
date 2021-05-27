import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import HeaderComponent from './HeaderComponent';
import NotifikasiComponent from './NotifikasiComponent';
import axios from 'axios'


const HomeComponent = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const getData = async () => {
    axios({
      method: 'get',
      url: `http://192.168.60.113:8000/api/notif`,
      headers : {
        Accept : 'aplication/json'
      }
    }).then(res => {
      setData(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={{flex: 1, backgroundColor : '#F3F6FF'}}>
      {
        loading ?
        <View style={{backgroundColor : '#fff', flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Text>Loading...</Text>
        </View> :
        <ScrollView>
         <HeaderComponent/>
         <NotifikasiComponent data={data}/>
        </ScrollView>
      }
    </View>
  );
};

export default HomeComponent;
