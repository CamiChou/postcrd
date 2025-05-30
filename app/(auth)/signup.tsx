import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function SignupScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // TODO: Implement signup logic
    router.replace('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <IconSymbol name="envelope.fill" size={60} color="#2B9EB3" />
        <ThemedText style={styles.logoText}>postcrd</ThemedText>
      </ThemedView>

      <ThemedView style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#666"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
        />
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
      </ThemedView>

      <Pressable style={styles.signupButton} onPress={handleSignup}>
        <ThemedText style={styles.buttonText}>Sign up</ThemedText>
      </Pressable>

      <ThemedView style={styles.loginContainer}>
        <ThemedText>Already have an account? </ThemedText>
        <Link href="/(auth)/login" asChild>
          <Pressable>
            <ThemedText style={styles.loginLink}>Log in</ThemedText>
          </Pressable>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '200',
    marginTop: 16,
  },
  form: {
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
  signupButton: {
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
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLink: {
    color: '#2B9EB3',
    fontWeight: '600',
  },
}); 