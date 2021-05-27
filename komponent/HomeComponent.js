import React, {useState} from 'react';
import {View, Text} from 'react-native';
import HeaderComponent from './HeaderComponent';
import NotifikasiComponent from './NotifikasiComponent';


const HomeComponent = () => {
  const [loading, setLoading] = useState(false)

  return (
    <View style={{flex: 1, backgroundColor : '#F3F6FF'}}>
      {
        loading ?
        <View style={{backgroundColor : '#fff', flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Text>Loading...</Text>
        </View> :
        <View>
         <HeaderComponent/>
         <NotifikasiComponent/>
        </View>
      }
    </View>
  );
};

export default HomeComponent;
