import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'black',
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="feed" />
    </Tabs>
  );
}
