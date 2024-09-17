import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from "expo-router";

import { images } from "../../constants";
import FormField from '../../components/FormField';

import CustomButton from "../../components/CustomButton";

import { auth } from '../../firebaseConfig'; // Firebase auth
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase signup method

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password || !form.username) {
      alert('All fields are required');
      return;
    }

    setisSubmitting(true);

    try {
      // Firebase sign-up method
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);

      // The user is successfully created
      const user = userCredential.user;
      console.log('User registered:', user);

      alert('User successfully signed up!');

      // Optional: Navigate to the next screen or save the username in your database

    } catch (error) {
      console.error('Error signing up:', error);
      alert(error.message); // Show error to the user
    }

    setisSubmitting(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up to Aora</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />

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
            title="Sign up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
