/* eslint-disable import/no-unresolved */
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import { theme } from '@/theme/Theme';
import Button from '@/components/Button/Button.index';
import { Delete, Logout } from '@/svg';
import { router } from 'expo-router';
import { doc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { removeItem } from '@/helpers/asyncStorage/asyncStorage';
import { auth, db } from '@/firebase';
import { deleteUser, signOut } from 'firebase/auth';
import { RootState, useAppDispatch } from '@/store';
import { logoutUser } from '@/store/user/user.thunks';
import { useSelector } from 'react-redux';
import { reauthenticate } from '@/helpers/firestore/reauthenticate';
import DeleteAccountModal from '@/components/DeleteAccountModal/DeleteAccountModal.index';
import { useState } from 'react';
import { ToastAlert } from '@/components/ToastAlert/ToastAlert.index';

function ProfileAvatar({ firstName, lastName }: { firstName: string; lastName: string }) {
  const initials = firstName?.charAt(0).toUpperCase() + lastName?.charAt(0).toUpperCase();

  return (
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{initials}</Text>
    </View>
  );
}
async function deleteUserData(uid: string) {
  await deleteDoc(doc(db, 'users', uid));

  const q = query(collection(db, 'tasks'), where('userId', '==', uid));
  const snapshot = await getDocs(q);

  await Promise.all(snapshot.docs.map((d) => deleteDoc(d.ref)));
}

export default function Profile() {
  const userData = useSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleLogout = async () => {
    await removeItem('user');
    await signOut(auth);
    dispatch(logoutUser());
    router.replace('/(auth)/login');
  };

  const handleEdit = () => {
    router.push({
      pathname: '/profile/edit_account',
      params: { user: JSON.stringify(userData), title: 'Edit Name' },
    });
  };

  const deleteAccount = async (password?: string) => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      await deleteUserData(user.uid);
      await deleteUser(user);
      await handleLogout();
    } catch (error: any) {
      if (error.code === 'auth/requires-recent-login') {
        if (!password) {
          Alert.alert(
            'Re-authentication required',
            'Please confirm your password to delete your account.',
          );
          return;
        }

        await reauthenticate(password);
        await deleteUserData(user.uid);
        await deleteUser(user);
        await handleLogout();
      } else {
        ToastAlert({
          type: 'error',
          title: 'Try again later',
          description: 'Something went wrong while deleting your account.',
        });
      }
    }
  };

  const confirmDelete = () => {
    setIsDeleteModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handleEdit}>
          <View style={styles.avatarContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>{userData?.displayName}</Text>
              <Text style={styles.emailText}>{userData?.email}</Text>
            </View>
            <ProfileAvatar
              firstName={userData.firstName as string}
              lastName={userData.lastName as string}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.regularBoldText}>Delete Account</Text>
            <Text style={styles.regularText}>
              Permanently remove your account and all associated data.
            </Text>
          </View>

          <Button
            title="Delete Account"
            type="error"
            size="medium"
            onPress={confirmDelete}
            leftIcon={<Delete color={colorScheme.light.error} />}
          />
        </View>
      </View>

      <Button
        title="Logout"
        size="medium"
        type="text"
        leftIcon={<Logout color={colorScheme.light.blue[300]} />}
        onPress={handleLogout}
      />
      <DeleteAccountModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onSelect={() => deleteAccount()}
      />
    </View>
  );
}

const {
  fonts,
  borderWidth,
  flexDirection,
  fontSizes,
  spacing,
  colorScheme,
  borderRadius,
  alignItems,
  justifyContent,
  shadow,
  lineHeight,
} = theme;

const styles = StyleSheet.create({
  avatar: {
    height: spacing[60],
    width: spacing[60],
    backgroundColor: colorScheme.light.blue[50],
    borderRadius: borderRadius[30],
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
  },
  avatarText: {
    color: colorScheme.light.blue[300],
    fontFamily: fonts.regular,
    fontSize: fontSizes.heading.small,
  },
  container: {
    flex: 1,
    padding: spacing[24],
    justifyContent: justifyContent.spaceBetween,
    backgroundColor: colorScheme.light.background,
  },
  contentContainer: {
    gap: spacing[24],
  },
  nameText: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body.xlarge,
    color: colorScheme.light.gray[900],
    lineHeight: lineHeight[21],
  },
  emailText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.xlarge,
    color: colorScheme.light.gray[600],
    lineHeight: lineHeight[21],
  },
  textContainer: {
    gap: spacing[4],
  },
  avatarContainer: {
    flexDirection: flexDirection.row,
    gap: spacing[12],
    alignItems: alignItems.center,
    borderWidth: borderWidth[1],
    borderColor: colorScheme.light.gray[200],
    borderRadius: borderRadius[12],
    padding: spacing[16],
    justifyContent: justifyContent.spaceBetween,
    ...shadow.small,
    backgroundColor: colorScheme.light.white,
  },
  regularBoldText: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body.large,
    color: colorScheme.light.gray[900],
    lineHeight: lineHeight[21],
  },
  regularText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body.large,
    color: colorScheme.light.gray[600],
    lineHeight: lineHeight[21],
  },
  itemContainer: {
    gap: spacing[12],
    alignItems: alignItems.flexStart,
    borderWidth: borderWidth[1],
    borderColor: colorScheme.light.gray[200],
    borderRadius: borderRadius[12],
    padding: spacing[16],
    ...shadow.small,
    backgroundColor: colorScheme.light.white,
  },
});
