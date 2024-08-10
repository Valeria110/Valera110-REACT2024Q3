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
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <select ref={ref} className={styles.select} name={name} id={id} defaultValue={defaultValue}>
        {options.map((option, i) => (
          <option className={styles.option} key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
