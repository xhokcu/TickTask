import { View, Text } from 'react-native';
import { styles } from './StepProgress.styles';
import { useEffect, useMemo } from 'react';
import { CheckCircle, CloseCircle } from '@/svg';
import { theme } from '@/theme/Theme';

const { colorScheme } = theme;

interface IStepProgressProps {
  steps: string[];
  password: string;
  setIsPasswordValid: (val: boolean) => void;
}

export default function StepProgress({ steps, password, setIsPasswordValid }: IStepProgressProps) {
  const validationStatus = useMemo(() => {
    return [password?.length > 7, /[A-Z]/.test(password), /\d/.test(password)];
  }, [password]);

  const validationCount = useMemo(() => {
    return validationStatus.filter((status) => status).length;
  }, [validationStatus]);

  useEffect(() => {
    validationCount === 3 && setIsPasswordValid(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validationCount]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.stepsContainer}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.step,
              {
                backgroundColor:
                  index < validationCount
                    ? validationCount === 1
                      ? colorScheme.light.error
                      : validationCount === 2
                        ? colorScheme.light.warning
                        : colorScheme.light.success
                    : colorScheme.light.gray[100],
              },
            ]}
          ></View>
        ))}
      </View>
      <Text style={styles.regularText}>
        {validationCount === 1
          ? 'Weak password. Must contain at least;'
          : validationCount === 2
            ? 'Moderate password. Must contain at least;'
            : validationCount === 3
              ? 'Strong password. Your password is secure.'
              : 'Must contain at least;'}
      </Text>
      <View style={styles.textContainer}>
        {steps.map((item, index) => (
          <View key={index} style={styles.textIconContainer}>
            {validationStatus[index] ? (
              <CheckCircle color={colorScheme.light.success} />
            ) : (
              <CloseCircle color={colorScheme.light.gray[400]} />
            )}
            <Text style={styles.regularText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
