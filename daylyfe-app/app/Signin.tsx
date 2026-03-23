import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import React, { useRef, useState } from 'react'
import SerifText from '@/components/SerifText'
import { router } from 'expo-router'

/**
 * ─── GOOGLE SIGN-IN SETUP ────────────────────────────────────────────────────
 *
 * 1. Install the package:
 *      npx expo install @react-native-google-signin/google-signin
 *
 * 2. In Google Cloud Console (https://console.cloud.google.com):
 *    a. Create a project (or use an existing one)
 *    b. Go to APIs & Services → Credentials → Create OAuth 2.0 Client ID
 *       - For iOS: choose "iOS" and enter your Bundle ID
 *       - For Android: choose "Android", enter your package name + SHA-1 fingerprint
 *         (get SHA-1 via: cd android && ./gradlew signingReport)
 *       - For Web (needed as the webClientId): choose "Web application"
 *    c. Copy the Web Client ID — you need this below.
 *
 * 3. Configure in your app's entry point (e.g. _layout.tsx):
 *      import { GoogleSignin } from '@react-native-google-signin/google-signin'
 *      GoogleSignin.configure({ webClientId: 'YOUR_WEB_CLIENT_ID' })
 *
 * 4. For Expo managed workflow, add to app.json:
 *      "plugins": ["@react-native-google-signin/google-signin"]
 *    Then rebuild: npx expo prebuild && npx expo run:ios / run:android
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Uncomment after installing the package:
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'

// ─── Types ────────────────────────────────────────────────────────────────────
type AuthMode = 'signin' | 'signup'

// ─── Main Component ───────────────────────────────────────────────────────────
const Signin = () => {
  const [mode, setMode] = useState<AuthMode>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fadeAnim = useRef(new Animated.Value(1)).current

  const switchMode = (next: AuthMode) => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start()
    setMode(next)
    setError(null)
  }

  // ─── Email/Password Auth ────────────────────────────────────────────────────
  const handleEmailAuth = async () => {
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      // TODO: Replace with your actual auth call, e.g. Firebase or Supabase:
      //
      // FIREBASE example:
      //   import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
      //   if (mode === 'signin') await signInWithEmailAndPassword(auth, email, password)
      //   else await createUserWithEmailAndPassword(auth, email, password)
      //
      // SUPABASE example:
      //   if (mode === 'signin') await supabase.auth.signInWithPassword({ email, password })
      //   else await supabase.auth.signUp({ email, password })

      await new Promise(res => setTimeout(res, 1000)) // remove this stub
      router.replace('/')
    } catch (e: any) {
      setError(e?.message ?? 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // ─── Google Auth ────────────────────────────────────────────────────────────
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)
    setError(null)
    try {
      // Uncomment after installing @react-native-google-signin/google-signin:
      //
      // await GoogleSignin.hasPlayServices()
      // const userInfo = await GoogleSignin.signIn()
      // const { idToken } = await GoogleSignin.getTokens()
      //
      // Then pass idToken to your backend or use with Firebase:
      // import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
      // const credential = GoogleAuthProvider.credential(idToken)
      // await signInWithCredential(auth, credential)

      await new Promise(res => setTimeout(res, 1200)) // remove this stub
      router.replace('/')
    } catch (e: any) {
      // Uncomment for real error handling:
      // if (e.code === statusCodes.SIGN_IN_CANCELLED) return // user cancelled
      // if (e.code === statusCodes.IN_PROGRESS) return       // already signing in
      setError('Google sign-in failed. Please try again.')
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Background decoration */}
      <View style={[styles.blob, styles.blobTop]} />
      <View style={[styles.blob, styles.blobBottom]} />

      <View style={styles.inner}>
        {/* App name */}
        <SerifText style={styles.appName}>DayLyfe</SerifText>
        <SerifText style={styles.tagline}>your day, your way.</SerifText>

        {/* Card */}
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>

          {/* Mode toggle */}
          <View style={styles.modeToggle}>
            <TouchableOpacity
              style={[styles.modeTab, mode === 'signin' && styles.modeTabActive]}
              onPress={() => switchMode('signin')}
            >
              <SerifText style={[styles.modeTabText, mode === 'signin' && styles.modeTabTextActive]}>
                Sign In
              </SerifText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modeTab, mode === 'signup' && styles.modeTabActive]}
              onPress={() => switchMode('signup')}
            >
              <SerifText style={[styles.modeTabText, mode === 'signup' && styles.modeTabTextActive]}>
                Sign Up
              </SerifText>
            </TouchableOpacity>
          </View>

          {/* Google button */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignIn}
            disabled={googleLoading}
          >
            {googleLoading ? (
              <ActivityIndicator size="small" color="#3D2C2C" />
            ) : (
              <>
                {/* Simple Google "G" using text since we avoid external icon deps here */}
                <SerifText style={styles.googleG}>G</SerifText>
                <SerifText style={styles.googleText}>Continue with Google</SerifText>
              </>
            )}
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <SerifText style={styles.dividerText}>or</SerifText>
            <View style={styles.dividerLine} />
          </View>

          {/* Email input */}
          <View style={styles.inputGroup}>
            <SerifText style={styles.inputLabel}>Email</SerifText>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              placeholderTextColor="#C4B5A5"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Password input */}
          <View style={styles.inputGroup}>
            <SerifText style={styles.inputLabel}>Password</SerifText>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor="#C4B5A5"
              secureTextEntry
            />
          </View>

          {/* Error */}
          {error && (
            <SerifText style={styles.errorText}>{error}</SerifText>
          )}

          {/* Forgot password (sign in only) */}
          {mode === 'signin' && (
            <TouchableOpacity 
            style={styles.forgotRow}
            
            >
              <SerifText style={styles.forgotText}>Forgot password?</SerifText>
            </TouchableOpacity>
          )}

          {/* Submit */}
          <TouchableOpacity
            style={[styles.submitButton, loading && styles.submitButtonLoading]}
            onPress={handleEmailAuth}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#3D2C2C" />
            ) : (
              <SerifText style={styles.submitText}>
                {mode === 'signin' ? 'Sign In →' : 'Create Account →'}
              </SerifText>
            )}
          </TouchableOpacity>

        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Signin

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6F0',
  },
  blob: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.4,
  },
  blobTop: {
    width: 280,
    height: 280,
    backgroundColor: '#F6BFBF',
    top: -70,
    left: -60,
  },
  blobBottom: {
    width: 220,
    height: 220,
    backgroundColor: '#FFE69E',
    bottom: -50,
    right: -40,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  appName: {
    fontSize: 42,
    color: '#3D2C2C',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 15,
    color: '#8A7A74',
    textAlign: 'center',
    marginBottom: 36,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 28,
    padding: 24,
    shadowColor: '#C4A99A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
    gap: 16,
  },
  modeToggle: {
    flexDirection: 'row',
    backgroundColor: '#F2EAE4',
    borderRadius: 14,
    padding: 4,
  },
  modeTab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  modeTabActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#C4A99A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 2,
  },
  modeTabText: {
    fontSize: 15,
    color: '#8A7A74',
  },
  modeTabTextActive: {
    color: '#3D2C2C',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1.5,
    borderColor: '#E0D0C4',
    borderRadius: 16,
    paddingVertical: 13,
    backgroundColor: '#FFFFFF',
  },
  googleG: {
    fontSize: 18,
    color: '#3D2C2C',
    fontWeight: '600',
  },
  googleText: {
    fontSize: 15,
    color: '#3D2C2C',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E8DDD8',
  },
  dividerText: {
    fontSize: 13,
    color: '#B0A09A',
  },
  inputGroup: {
    gap: 6,
  },
  inputLabel: {
    fontSize: 13,
    color: '#8A7A74',
    marginLeft: 4,
  },
  input: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: 16,
    color: '#3D2C2C',
    backgroundColor: '#FAF5F2',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 1.5,
    borderColor: '#EDE3DD',
  },
  errorText: {
    fontSize: 13,
    color: '#D4706A',
    textAlign: 'center',
  },
  forgotRow: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: 13,
    color: '#8A94A6',
  },
  submitButton: {
    backgroundColor: '#F6BFBF',
    borderRadius: 18,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#F6BFBF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 10,
    elevation: 4,
    marginTop: 4,
  },
  submitButtonLoading: {
    opacity: 0.7,
  },
  submitText: {
    fontSize: 17,
    color: '#3D2C2C',
  },
})