import * as React from 'react';
import {View, Text} from 'react-native';

export default function Contacts({NavBar}) {
    return(
        <View style = {{flex:1, alignItems :'center',justifyContent:'center'}}>
            <Text onPress={() => NavBar.navigate('Sos')}
            style = {{fontSize:26,fontWeight:'bold'}}> Contacts
            </Text>
        </View>
    );
}