import { ActivityIndicator, Text, View } from 'react-native';

export default function StartPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}
