import { View, Text,Image } from 'react-native'
import React from 'react'
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";

const DetailsBid = ({bid}) => {
  return (
    <View style={{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:SIZES.base,
      paddingHorizontal:SIZES.base*2
    }}>
      <Image
      source ={bid.image}
      resizeMode="contain"
      style={{width:48,height:48}}/>
      <View>
        <Text style={{
          fontFamiy:FONTS.semiBold,
          fontSize:SIZES.small,
          color:COLORS.primary
          }}>
          Bid place by {bid.name}
        </Text>
        <Text style={{
          fontFamiy:FONTS.regular,
          fontSize:SIZES.small-2,
          color:COLORS.secondary,
          marginTop:3
          }}>
          {bid.date}
        </Text>
      </View>
      <EthPrice price ={bid.price}/>
    </View>
  )
}

export default DetailsBid