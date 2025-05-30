import { Link, router } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <IconSymbol name="envelope.fill" size={100} color="#2B9EB3" />
      <ThemedText style={styles.logoText}>postcrd</ThemedText>

      <Pressable 
        style={styles.loginButton}
        onPress={() => router.push('/(auth)/login-form')}>
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