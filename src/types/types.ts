import { ReactNode } from 'react';

interface IErrorBoundaryState {
  hasError: boolean;
}

interface IProps {
  children?: ReactNode;
}

type GenderType = 'male' | 'female' | 'unknown' | 'n/a';

type ResType = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: GenderType;
  url: string;
};

export { IErrorBoundaryState, IProps, ResType };
