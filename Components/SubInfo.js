import { View, Text, Image } from "react-native";
import React from "react";
import { assets, COLORS, SIZES, SHADOWS, FONTS } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};
export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" ,width:60}}>
      <Image source={assets.eth} 
      resizeMode="contain"
      style={{width:20,height:20,marginRight:2}}/>
      <Text style={{fontFamily:FONTS.medium,fontSize:SIZES.font,color:COLORS.primary}}>
        {price}
      </Text>
    </View>
  );
};
export const People = () => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {[assets.person01, assets.person02, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} Key={`People-${index}`} />
        )
      )}
    </View>
  );
};
export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        size: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};
export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: -SIZES.base,
        backgroundColor: '#F5F5F5',
        justifyContent: "center",
        borderRadius:4,
        ...SHADOWS.light,
        elevation: 2,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        EndDate
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
};
export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
