import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Dimensions, Platform } from "react-native";
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import { images } from '../constants';
import CustomButton from "../components/CustomButton";

const { width, height } = Dimensions.get('window');

export default function App(){
  const isTablet = width > 768; // Detect tablet screen size

  return (
    <SafeAreaView style={{ backgroundColor: '#161622', height: '100%' }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <View style={{ 
          width: '100%', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '85%', 
          paddingHorizontal: 16,
        }}>
          <Image 
           source={images.logo}
           style={{ width: isTablet ? 200 : 130, height: isTablet ? 120 : 84 }}
           resizeMode="contain"
          />

          <Image 
            source={images.cards}
            style={{ maxWidth: 380, width: '100%', height: isTablet ? 400 : 300 }}
            resizeMode="contain"
          />

          <View style={{ position: 'relative', marginTop: 20 }}>
            <Text style={{ 
              fontSize: isTablet ? 36 : 24, 
              color: '#fff', 
              fontWeight: 'bold', 
              textAlign: 'center' 
            }}>
              Discover Endless Possibilities with{' '} 
              <Text style={{ color: '#FFC107' }}>Aora</Text>
            </Text>
            <Image 
              source={images.path}
              style={{ width: isTablet ? 180 : 136, height: isTablet ? 25 : 15, position: 'absolute', bottom: -8, right: isTablet ? -10 : -8 }}
              resizeMode="contain"
            />
          </View>
          
          <Text style={{ 
            fontSize: isTablet ? 18 : 14, 
            fontFamily: 'Poppins-Regular', 
            color: '#ddd', 
            marginTop: 20, 
            textAlign: 'center' 
          }}>
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>

          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles={{ 
              width: '100%', 
              marginTop: 20, 
              paddingVertical: isTablet ? 16 : 12 
            }}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style="light"/>
    </SafeAreaView>
  );
}
