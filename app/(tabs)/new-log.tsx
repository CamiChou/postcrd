import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NewLogScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Create New Log</ThemedText>
        <ThemedView style={styles.formContainer}>
          <ThemedView style={styles.inputGroup}>
            <ThemedText type="subtitle">Location</ThemedText>
            {/* Add location input component here */}
            <ThemedView style={styles.placeholder}>
              <ThemedText>Select or search for a location</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.inputGroup}>
            <ThemedText type="subtitle">Photos</ThemedText>
            {/* Add photo upload component here */}
            <ThemedView style={styles.placeholder}>
              <ThemedText>Add photos from your trip</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.inputGroup}>
            <ThemedText type="subtitle">Notes</ThemedText>
            {/* Add notes input component here */}
            <ThemedView style={styles.placeholder}>
              <ThemedText>Write about your experience...</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  headerImage: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  formContainer: {
    gap: 24,
  },
  inputGroup: {
    gap: 12,
  },
  placeholder: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    minHeight: 60,
    justifyContent: 'center',
  },
}); 