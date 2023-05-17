import { Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import React from "react";
import { NFTData } from "../constants";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { EthPrice, NFTTitle, SubInfo } from "./SubInfo";

const NFTCard = ({ data }) => {
  // console.log(data);
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        // marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imageUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>
      <View
        style={{
          marginTop: -SIZES.font,
          marginBottom: SIZES.font,
          marginHorizontal: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <EthPrice price={data.price} />
        <RectButton
          minWidth={120}
          SizeFont={SIZES.font}
          handlePress={() => navigation.navigate("Details",  {data} )}
        />
      </View>
      {/* <Text>NFTCard</Text> */}
    </View>
  );
};

export default NFTCard;

// const styles = StyleSheet.create({});
