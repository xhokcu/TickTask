import { useLocalSearchParams } from 'expo-router';
import EditName from '@/screens/EditName/EditName.index';
import EditEmail from '@/screens/EditEmail/EditEmail.index';
import EditPassword from '@/screens/EditPassword/EditPassword.index';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function EditInformation() {
  const { type } = useLocalSearchParams();
  const userData = useSelector((state: RootState) => state.user.user);

  const renderContent = () => {
    let component;
    switch (type) {
      case 'name':
        component = <EditName user={userData} />;
        break;
      case 'email':
        component = <EditEmail user={userData} />;
        break;
      case 'password':
        component = <EditPassword user={userData} />;
        break;
    }
    return component;
  };

  return <>{renderContent()}</>;
}
