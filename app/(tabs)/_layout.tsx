import { Home, Person, ListAdd } from '@/svg';
import { Tabs } from 'expo-router';
import { theme } from '@/theme/Theme';

export default function Layout() {
  const activeColor = theme.colorScheme.light.blue[300];
  const inactiveColor = theme.colorScheme.light.gray[400];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <Home color={focused ? activeColor : inactiveColor} />,
          header: () => null,
        }}
      />
      <Tabs.Screen
        name="add_task"
        options={{
          title: 'Add Task',
          tabBarIcon: ({ focused }) => <ListAdd color={focused ? activeColor : inactiveColor} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <Person color={focused ? activeColor : inactiveColor} />,
        }}
      />
    </Tabs>
  );
}
