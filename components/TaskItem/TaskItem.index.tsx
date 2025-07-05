import { View, Text } from 'react-native';
import { styles } from './TaskItem.styles';
import { ITaskItemProps } from './TaskItem.types';
import Badge from '../Badge/Badge.index';

export function TaskItem({ item }: ITaskItemProps) {
  const { title, description, priority } = item;

  // const handleBadgeColor = (priority: string) => {
  //   const colorMap: Record<string, string> = {
  //     High: 'red',
  //     Medium: 'green',
  //     Low: 'pink',
  //   };
  //   return colorMap[priority] || 'gray';
  // };
  // const color = handleBadgeColor(priority);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <Badge title={priority} leftIcon="circle" color={'green'} size="medium" />
    </View>
  );
}
