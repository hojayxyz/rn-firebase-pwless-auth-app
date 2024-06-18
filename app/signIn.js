import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import CustomKeyboardView from '../components/CustomKeyboardView';

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef('');

  const handleLogin = async () => {
    if (!emailRef.current) {
      Alert.alert('Sign In', 'Please enter an email address');
      return;
    }
    // login process
    console.log('login', emailRef.current);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <CustomKeyboardView>
        <StatusBar style="light" />
        <View
          style={{
            gap: 32,
            flex: 1,
          }}
        >
          <View style={{ alignItems: 'center', marginTop: 100 }}>
            <Image
              style={{
                width: 200,
                height: 200,
              }}
              resizeMode="contain"
              source={require('../assets/images/adaptive-icon.png')}
            />
          </View>
          <View style={{ alignItems: 'center', gap: 24 }}>
            <Text style={{ fontSize: 24, fontWeight: '100', color: 'white' }}>
              Passwordless App
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                maxWidth: 300,
                gap: 18,
                paddingHorizontal: 18,
                alignItems: 'center',
                backgroundColor: 'black',
                borderRadius: 12,
                borderColor: 'gray',
                borderWidth: 1,
              }}
            >
              <Octicons name="mail" size={24} color="white" />
              <TextInput
                onChangeText={(value) => {
                  emailRef.current = value;
                }}
                style={{
                  flex: 1,
                  fontWeight: '300',
                  fontSize: 18,
                  color: 'white',
                  paddingVertical: 12,
                  outline: 'none',
                }}
                placeholder="Email address"
                placeholderTextColor="gray"
                inputMode="email"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </View>

            <View style={{ width: '100%', maxWidth: 300 }}>
              {loading ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 18,
                  }}
                >
                  <ActivityIndicator size="large" color="white" />
                </View>
              ) : (
                <Pressable
                  onPress={handleLogin}
                  style={({ pressed }) => ({
                    backgroundColor: 'black',
                    opacity: pressed ? 0.5 : 1,
                    borderRadius: 12,
                    borderColor: 'white',
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 18,
                    elevation: 3,
                  })}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '300',
                      color: 'white',
                    }}
                  >
                    Login with magic email link
                  </Text>
                </Pressable>
              )}
            </View>

            <View
              style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '200' }}>
                Don't have an account?
              </Text>
              <Pressable
                onPress={() => {
                  router.push('/signUp');
                }}
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
              >
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: '300',
                    fontSize: 16,
                  }}
                >
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </CustomKeyboardView>
    </SafeAreaView>
  );
}
