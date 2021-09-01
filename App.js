import React, { useState } from 'react';
import {
 LayoutAnimation,
 Platform,
 StyleSheet,
 Text,
 TouchableOpacity,
 UIManager,
 View,
 Image
} from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental){
   UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default function App() {
 const [expanded, setExpanded] = useState(false);
 return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setExpanded(!expanded)}
        }
      >
        <Text>Toque em mim para {expanded ? 'retrair' : 'expandir'}!</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={style.tile}>
          <Image style={styles.imagens} 
            source={{ uri: 'https://cdn.pixabay.com/photo/2012/04/05/00/32/lemon-25342_960_720.png' }}
          />
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  tile: {
    
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imagens: {
    width: 300,
    height: 300,
    alignItems: 'center',
    marginBottom: 30
  },
});
    

   