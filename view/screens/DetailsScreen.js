import React from "react";
import {View,Text,SafeAreaView,StyleSheet,Image} from "react-native";
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import COLORS from "../../consts/colors";
const DetailsScreen = ({navigation,route}) => {
    const plant = route.params;
    return ( 
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={style.header}>
    <EvilIcons name="chevron-left" size={40} onPress={() => navigation.goBack()}/>
    <EvilIcons name="heart" size={35} color={plant.like ? COLORS.red : COLORS.dark}/>
    </View>
    <View style={style.imageContainer}>
    <Image source={plant.img} style={{resizeMode:'contain',flex:1}}/>
    </View>
    <View style={style.detailsContainer}>
        <View 
        style={{
            marginLeft:20,
            flexDirection:'row',
            alignItems:"flex-end",
            }}>
           <View style={style.line}/>
           <Text style={{fontSize: 18, fontWeight:'bold'}}>Best Choice</Text>
         </View>
         <View
          style={{
            marginLeft:20,
            marginTop:20,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
            }}>
           <Text style={{fontSize:22,fontWeight:'bold'}}>{plant.name}</Text>
         </View>
         <View style={{flexDirection:'row',marginLeft:20,marginTop:5}} >
         <EvilIcons name="star" size={18} />
        <EvilIcons name="star" size={18} />
        <EvilIcons name="star" size={18} />
        <EvilIcons name="star" size={18} />
        <EvilIcons name="star" size={18} /> 
         </View>
         <View style={{paddingHorizontal:20,marginTop:10}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>About</Text>
        <Text 
        style={{
            color:'grey',
            fontSize:16,
            lineHeight:22,
            marginTop:20,
       }}>
        {plant.about}
        </Text>
         </View>
      </View>
    </SafeAreaView>
    );
};
const style = StyleSheet.create({
header: {
    paddingHorizontal:20,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between'
},
imageContainer:{
    flex: 0.45,
    marginTop: 20,
    justifyContent:'center',
    alignItems: 'center',
},
detailsContainer:{
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,

},
line:{
    width: 25,
    height:2,
    backgroundColor: COLORS.dark,
    marginBottom:5,
    marginRight: 3,
},
});


export default DetailsScreen;