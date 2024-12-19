import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { preloadAssets, CORE_ASSETS } from '../constants/assets';

export class AssetLoader {
  static async initializeAssets() {
    try {
      // Préchargement des assets React Native
      await preloadAssets();
      
      // Préchargement des images de l'application
      const images = [
        require('../assets/icon.png'),
        require('../assets/splash.png'),
        require('../assets/adaptive-icon.png'),
      ];

      const cacheImages = images.map(image => {
        if (typeof image === 'string') {
          return Image.prefetch(image);
        } else {
          return Asset.fromModule(image).downloadAsync();
        }
      });

      await Promise.all(cacheImages);
      
      return true;
    } catch (error) {
      console.error('Error loading assets:', error);
      return false;
    }
  }

  static getAsset(key: keyof typeof CORE_ASSETS) {
    return CORE_ASSETS[key];
  }
}