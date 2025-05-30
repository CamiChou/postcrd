import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExploreScreen() {
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
        <ThemedText type="title">Explore Travel Logs</ThemedText>
        
        <ThemedView style={styles.feedContainer}>
          {/* Sample travel log entries */}
          <ThemedView style={styles.logEntry}>
            <Image
              source={require('@/assets/images/partial-react-logo.png')}
              style={styles.locationImage}
            />
            <ThemedView style={styles.logContent}>
              <ThemedText type="subtitle">Paris, France</ThemedText>
              <ThemedText type="defaultSemiBold">@traveler123</ThemedText>
              <ThemedText>Beautiful evening at the Eiffel Tower...</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.logEntry}>
            <Image
              source={require('@/assets/images/partial-react-logo.png')}
              style={styles.locationImage}
            />
            <ThemedView style={styles.logContent}>
              <ThemedText type="subtitle">Kyoto, Japan</ThemedText>
              <ThemedText type="defaultSemiBold">@wanderlust</ThemedText>
              <ThemedText>Exploring ancient temples in the rain...</ThemedText>
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
  feedContainer: {
    gap: 16,
  },
  logEntry: {
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
    overflow: 'hidden',
  },
  locationImage: {
    width: '100%',
    height: 200,
  },
  logContent: {
    padding: 16,
    gap: 8,
  },
});
