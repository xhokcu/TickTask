import { CheckCircle, CloseCircle } from '@/svg';
import CustomToast from './components/CustomToast/CustomToast.index';
import { ICustomToastProps } from '@/components/CustomToast/CustomToast.types';
import { theme } from '@/theme/Theme';

const color = theme.colorScheme.light;

const toastConfig = {
  success: (props: ICustomToastProps) => (
    <CustomToast {...props} icon={<CheckCircle color={color.success} />} />
  ),
  error: (props: ICustomToastProps) => (
    <CustomToast {...props} icon={<CloseCircle color={color.error} />} />
  ),
};

export default toastConfig;
