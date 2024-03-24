import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import { defaultStyles } from '@/constants/styles'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useOAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

enum strategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple',
  Facebook = 'oauth_facebook'
}

const Page = () => {
  useWarmUpBrowser();
  const router = useRouter();

  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: 'oauth_apple' })
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: 'oauth_google' })
  const { startOAuthFlow: facebookAuth } = useOAuth({ strategy: 'oauth_facebook' })

  const onSelectAuth = async (selectedStrategy: strategy) => {
    const selectedAuth = {
      [strategy.Google]: googleAuth,
      [strategy.Apple]: appleAuth,
      [strategy.Facebook]: facebookAuth
    };

    try {
      const { createdSessionId, setActive } = await selectedAuth[selectedStrategy]();

      if (createdSessionId) {
        setActive!({ session: createdSessionId })
        router.back()
      }

    } catch (error) {
      console.error('Oauth Error', error)
    }
  };

  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='none' placeholder='Email' style={[defaultStyles.inputField, { marginBottom: 30 }]} />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.separatorView}>
        <View style={{
          flex: 1,
          borderBlockColor: '#000',
          borderBottomWidth: StyleSheet.hairlineWidth
        }} />
        <Text style={styles.separator}>or</Text>
        <View style={{
          flex: 1,
          borderBlockColor: '#000',
          borderBottomWidth: StyleSheet.hairlineWidth
        }} />
      </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity style={styles.btnOutLIne}>
          <Ionicons name='call-outline' size={25} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutLineText}>Continue with Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutLIne} onPress={() => onSelectAuth(strategy.Apple)}>
          <Ionicons name='logo-apple' size={25} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutLineText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutLIne} onPress={() => onSelectAuth(strategy.Google)}>
          <Ionicons name='logo-google' size={25} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutLineText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutLIne} onPress={() => onSelectAuth(strategy.Facebook)}>
          <Ionicons name='logo-facebook' size={25} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutLineText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  separatorView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
  separator: {
    fontFamily: 'mon-sb',
    color: Colors.grey,
  },
  btnOutLIne: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  btnOutLineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  }
});

export default Page;
