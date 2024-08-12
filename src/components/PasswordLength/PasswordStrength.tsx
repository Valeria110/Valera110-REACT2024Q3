import { PasswordStrengthLevel } from '../../types/types';
import { oneLowercaseLetter, oneNumber, oneSpecialChar, oneUppercaseLetter } from '../../utils/regex';
import styles from './PasswordStrength.module.scss';
import classnames from 'classnames';

export default function PasswordStrength({ passwordValue }: { passwordValue: string }) {
  const [passwordStrengthValue, strengthBarClassName] = setPasswordStrength(passwordValue);
  const strengthPercentage = setStrengthPercentage(passwordStrengthValue);

  return (
    <div className={styles.PasswordStrengthBox}>
      <div className={styles.strengthBarWrapper}>
        <div className={classnames(styles.strengthBar, styles[strengthBarClassName])}></div>
        <p className={styles.strengthPercentage}>{strengthPercentage}</p>
      </div>

      <p className={styles.strengthBarComment}>{passwordStrengthValue}</p>
    </div>
  );
}

function setPasswordStrength(passwordValue: string): [string, string] {
  const hasOneSpecialChar = oneSpecialChar.test(passwordValue);
  const hasOneNumber = oneNumber.test(passwordValue);
  const hasOneUppercaseLetter = oneUppercaseLetter.test(passwordValue);
  const hasOneLowercaseLetter = oneLowercaseLetter.test(passwordValue);

  if (hasOneLowercaseLetter && hasOneUppercaseLetter && hasOneNumber && hasOneSpecialChar) {
    return [PasswordStrengthLevel.Strong, 'strong'];
  } else if (
    (hasOneLowercaseLetter && hasOneUppercaseLetter && hasOneSpecialChar && !hasOneNumber) ||
    (hasOneLowercaseLetter && hasOneUppercaseLetter && hasOneNumber && !hasOneSpecialChar) ||
    (hasOneSpecialChar && hasOneUppercaseLetter && hasOneNumber && !hasOneLowercaseLetter) ||
    (hasOneSpecialChar && hasOneLowercaseLetter && hasOneNumber && !hasOneUppercaseLetter)
  ) {
    return [PasswordStrengthLevel.Good, 'good'];
  } else if (
    (hasOneLowercaseLetter && hasOneUppercaseLetter && !hasOneSpecialChar && !hasOneNumber) ||
    (hasOneLowercaseLetter && hasOneNumber && !hasOneUppercaseLetter && !hasOneSpecialChar) ||
    (hasOneNumber && hasOneUppercaseLetter && !hasOneSpecialChar && !hasOneLowercaseLetter) ||
    (hasOneSpecialChar && hasOneLowercaseLetter && !hasOneNumber && !hasOneUppercaseLetter) ||
    (hasOneSpecialChar && hasOneUppercaseLetter && !hasOneNumber && !hasOneLowercaseLetter) ||
    (hasOneSpecialChar && hasOneNumber && !hasOneUppercaseLetter && !hasOneLowercaseLetter)
  ) {
    return [PasswordStrengthLevel.Weak, 'weak'];
  } else if (
    (hasOneLowercaseLetter && !hasOneUppercaseLetter && !hasOneSpecialChar && !hasOneNumber) ||
    (hasOneUppercaseLetter && !hasOneLowercaseLetter && !hasOneSpecialChar && !hasOneNumber) ||
    (hasOneSpecialChar && !hasOneUppercaseLetter && !hasOneLowercaseLetter && !hasOneNumber) ||
    (hasOneNumber && !hasOneUppercaseLetter && !hasOneSpecialChar && !hasOneLowercaseLetter)
  ) {
    return [PasswordStrengthLevel.VeryWeak, 'veryWeak'];
  }

  return [PasswordStrengthLevel.NoPassword, ''];
}

function setStrengthPercentage(passwordStrengthValue: string) {
  switch (passwordStrengthValue) {
    case PasswordStrengthLevel.NoPassword:
      return '0%';

    case PasswordStrengthLevel.VeryWeak:
      return '25%';

    case PasswordStrengthLevel.Weak:
      return '50%';

    case PasswordStrengthLevel.Good:
      return '75%';

    case PasswordStrengthLevel.Strong:
      return '100%';
  }
}
