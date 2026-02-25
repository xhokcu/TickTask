import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IChipListProps } from './ChipList.types';
import { styles } from './ChipList.styles';
import { theme } from '@/theme/Theme';

const { colorScheme } = theme;

export default function ChipList({ label, listData, onSelect }: IChipListProps) {
  const [selectedChip, setSelectedChip] = useState<any>(null);

  const handleSelectChip = (item: any) => {
    if (selectedChip?.id === item.id) {
      setSelectedChip(null);
    } else {
      onSelect(item);
      setSelectedChip(item);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.chipContainer}>
        {listData?.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleSelectChip(item)}
            key={`${item.id}-${index}`}
            style={[
              styles.chip,
              {
                borderColor:
                  selectedChip?.id === item.id
                    ? colorScheme.light.badgeColors[item.color][400]
                    : colorScheme.light.badgeColors[item.color][200],
                backgroundColor: colorScheme.light.badgeColors[item.color][100],
              },
            ]}
          >
            <Text
              style={[styles.chipText, { color: colorScheme.light.badgeColors[item.color][500] }]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
