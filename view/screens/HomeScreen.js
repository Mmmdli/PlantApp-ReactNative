import React from "react";
import {View,Text,StyleSheet, SafeAreaView,Image, TextInput, TouchableOpacity, FlatList, Dimensions} from "react-native";
import COLORS from "../../consts/colors";
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import plants from '../../consts/plants'
const width = Dimensions.get("screen").width/2-30
const HomeScreen = ({navigation}) => {
    const categories = ['POPULAR','ORGANIC','MY PLANTS'];

    const [categoryIndex,setCategoryIndex] = React.useState(0)

    const CategoryList = () => {
        return ( 
        <View style={style.categoryContainer}>
        {categories.map((item,index) => ( 
            <TouchableOpacity key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
             style={[
                style.categoryText,categoryIndex == index && style.categoryTextSelected
             ]}>
                {item}
                </Text>
                </TouchableOpacity>
        ))}
        </View>
        );
    };

    const Card = ({plant}) => {
      return (
        <TouchableOpacity onPress={()=>navigation.navigate("Details",plant)}>
       <View style={style.card}>
       <View style={{alignItems:'flex-end'}}>
        <View
        style={{
            width:30,
            height:30,
            borderRadius:15,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: plant.like
            ? 'rgba(245,42,42,0.2)'
            : 'rgba(0,0,0,0.2)'
        }}>
          <EvilIcons 
          name="heart" 
          size={18}
          color={plant.like ? COLORS.red : COLORS.dark}
          />
        </View>
       </View>
       <View style={{height: 100,alignItems: 'center'}}>
        <Image style={{flex: 1, resizeMode: 'contain'}} source={plant.img}
        />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 17,marginTop:10}}>
         {plant.name}
        </Text>
        <View style={{flexDirection:"row",justifyContent:'center',marginTop:5}}>
        <EvilIcons name="star" size={16} />
        <EvilIcons name="star" size={16} />
        <EvilIcons name="star" size={16} />
        <EvilIcons name="star" size={16} />
        <EvilIcons name="star" size={16} />
        <Text>{plant.rating}</Text>
        <View style={{
            height: 25,
            width: 25,
            backgroundColor: COLORS.green,
            borderRadius: 5,
            justifyContent:'center',
            alignItems:'center',
            marginLeft:45,
        }}>
            <Text
            style={{fontSize: 22,color:COLORS.white,fontWeight:'bold'}}
            >
             +
            </Text>  
        </View>
        </View>
       </View>
       </TouchableOpacity>
      )
    };
    
    return (
        <SafeAreaView
        style={{
            flex:1,
            paddingHorizontal: 20,
            backgroundColor: COLORS.white,
        }} >
 <View style={style.header}>
     <View>
        <Text style={{fontSize:25,fontWeight:'bold'}}>Welcome to</Text>
        <Text style={{fontSize:38,fontWeight: 'bold',color:COLORS.green}}>
            Plant Live
            </Text>
           </View>
          </View>
           
           <View style={style.searchContainer}>
         <EvilIcons name="search" size={25} style={{marginLeft:20}}/>
         <TextInput placeholder="Search" style={style.input}/>
           <View style={style.navicon}>
            <EvilIcons name ="navicon" size={30} color={COLORS.white}/>
           </View>
          </View>
          <CategoryList/>
          <FlatList 
           columnWrapperStyle={{justifyContent:'space-between'}}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
           }}
           numColumns={2}
           data={plants} 
           renderItem={({item}) => <Card plant={item}/>}
           />
        </SafeAreaView>
     ); 
};
const style = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
        searchContainer: {
        marginTop:20,
        height: 50,
        backgroundColor:COLORS.light,
         borderRadius:10, 
         flexDirection: 'row',
         alignItems: "center",
     },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        color:COLORS.dark,
        flex:1,
    },
    navicon: {
        marginLeft:10,
        height:50,
        width: 50,
        backgroundColor:COLORS.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold',
    },
    categoryTextSelected: {
        color: COLORS.green,
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:COLORS.green,
    },
    card: {
       height: 225,
       backgroundColor:COLORS.light,
       width,
       marginHorizontal: 2,
       borderRadius: 10,
       marginBottom: 20,
       padding: 15,
    }
});
export default HomeScreen;