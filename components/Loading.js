import { View, ActivityIndicator } from 'react-native';
export default function Loading() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center  ' }}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}
