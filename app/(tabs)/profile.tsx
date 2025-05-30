import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
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
        <ThemedView style={styles.profileHeader}>
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.profilePicture}
          />
          <ThemedView style={styles.profileInfo}>
            <ThemedText type="title">Your Name</ThemedText>
            <ThemedText>@username</ThemedText>
          </ThemedView>
        </ThemedView>
        
        <ThemedView style={styles.statsContainer}>
          <ThemedView style={styles.statItem}>
            <ThemedText type="defaultSemiBold">Posts</ThemedText>
            <ThemedText>24</ThemedText>
          </ThemedView>
          <ThemedView style={styles.statItem}>
            <ThemedText type="defaultSemiBold">Following</ThemedText>
            <ThemedText>156</ThemedText>
          </ThemedView>
          <ThemedView style={styles.statItem}>
            <ThemedText type="defaultSemiBold">Followers</ThemedText>
            <ThemedText>289</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.bioSection}>
          <ThemedText type="subtitle">Bio</ThemedText>
          <ThemedText>This is a sample bio. Add your personal description here.</ThemedText>
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    gap: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 8,
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  bioSection: {
    gap: 8,
  },
}); 