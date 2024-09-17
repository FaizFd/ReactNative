import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from "expo-router";

import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";

const { width } = Dimensions.get('window');  // Get device width

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    // Submission logic
  };

  // Responsive styles
  const isTablet = width >= 768;  // Typical tablet width breakpoint
  const containerStyles = isTablet ? 'w-[80%] min-h-[70vh] px-6' : 'w-full min-h-[80vh] px-4';
  const titleFontSize = isTablet ? 'text-3xl' : 'text-2xl';  // Larger font for tablets

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className={`${containerStyles} justify-center my-6 mx-auto`}>
          <Image source={images.logo} resizeMode="contain" className="w-[130px] h-[40px]" />
          <Text className={`${titleFontSize} text-white font-psemibold mt-10`}>Log in to Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up">
              <Text className="text-lg font-psemibold text-secondary">Sign Up</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
