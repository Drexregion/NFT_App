import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...props}/> : null;

}
    
//   return (
//     <View>
//       <Text>FocusedStatusBar</Text>
//     </View>
//   )

export default FocusedStatusBar

// const styles = StyleSheet.create({})