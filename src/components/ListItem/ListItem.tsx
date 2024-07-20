import { useContext } from 'react';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';

interface ListItemProps {
  label: string;
  value: string;
  className: string;
}

function ListItem({ label, value, className }: ListItemProps) {
  const [colorTheme] = useContext(ColorThemeContext);
  const listItemClassName = `${className} ${colorTheme}`;

  return (
    <li className={listItemClassName}>
      <b>{label}</b>
      {value ? value : 'unknown'}
    </li>
  );
}

export default ListItem;
