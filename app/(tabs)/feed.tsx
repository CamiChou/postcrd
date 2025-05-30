import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function FeedScreen() {
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
        <ThemedText type="title">Feed</ThemedText>
        <ThemedView style={styles.postContainer}>
          <ThemedText type="subtitle">Recent Posts</ThemedText>
          {/* Placeholder for posts - you can replace this with actual post components */}
          <ThemedView style={styles.post}>
            <ThemedText type="defaultSemiBold">Sample Post 1</ThemedText>
            <ThemedText>This is a sample post content. Replace with real content.</ThemedText>
          </ThemedView>
          <ThemedView style={styles.post}>
            <ThemedText type="defaultSemiBold">Sample Post 2</ThemedText>
            <ThemedText>Another sample post content. Replace with real content.</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  postContainer: {
    gap: 12,
  },
  post: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    gap: 8,
  },
  headerImage: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
}); 