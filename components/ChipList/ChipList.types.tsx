import { IBadgeColors } from '../Badge/Badge.types';

interface IChipData {
  id: number;
  title: string;
  color: IBadgeColors;
}

export interface IChipListProps {
  label: string;
  listData: IChipData[];
  onSelect: (item: any) => void;
}
