import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function LoginFormScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic
    router.replace('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      <IconSymbol name="envelope.fill" size={80} color="#2B9EB3" />
      <ThemedText style={styles.logoText}>postcrd</ThemedText>

      <ThemedView style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <ThemedText style={styles.forgotPassword}>forgot password</ThemedText>
      </ThemedView>

      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <ThemedText style={styles.buttonText}>Log in</ThemedText>
      </Pressable>

      <ThemedView style={styles.createAccountContainer}>
        <ThemedText>New here? </ThemedText>
        <Link href="/(auth)/signup" asChild>
          <Pressable>
            <ThemedText style={styles.createAccountLink}>Create an account</ThemedText>
          </Pressable>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '200',
    marginBottom: 40,
    marginTop: 16,
  },
  form: {
    width: '100%',
    gap: 16,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: 16,
    backgroundColor: '#111',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#2B9EB3',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#333',
    width: '100%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  createAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createAccountLink: {
    color: '#2B9EB3',
    fontWeight: '600',
  },
}); 