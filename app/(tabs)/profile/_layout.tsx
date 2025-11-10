import { router, Stack } from 'expo-router';
import IconButton from '@/components/IconButton/IconButton.index';
import { ArrowLeft } from '@/svg';

export default function Layout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Profile',
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="edit_account"
        options={{
          headerTitle: 'Edit Account',
          headerLeft: () => <IconButton icon={<ArrowLeft />} onPress={() => router.back()} />,
        }}
      />
      <Stack.Screen
        name="edit_information"
        options={({ route }: any) => ({
          title: route.params?.title ?? 'Edit Account',
          headerLeft: () => <IconButton icon={<ArrowLeft />} onPress={() => router.back()} />,
        })}
      />
    </Stack>
  );
}
