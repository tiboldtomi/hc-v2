export interface IPlayerFieldProps {
    index: number;
    removable?: boolean;
    onRemove?: (index: number) => void;
}