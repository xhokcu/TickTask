export interface IToastMessageProps {
  type: 'success' | 'error';
  title: string;
  description?: string;
  position?: 'top' | 'bottom';
  visibilityTime?: number;
}
