import styles from '../UncontrolledForm/UncontrolledForm.module.scss';
import { forwardRef } from 'react';

interface SelectProps {
  options: string[];
  id: string;
  name: string;
  defaultValue: string;
  label: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ options, id, name, defaultValue, label }, ref) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={id}>{label}</label>
      <select ref={ref} className={styles.input} name={name} id={id} defaultValue={defaultValue}>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
