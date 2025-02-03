import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export function useTypedNavigation<T extends keyof RootStackParamList>() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList, T>>();
}
