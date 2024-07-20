import { ReactNode } from 'react';

interface IErrorBoundaryState {
  hasError: boolean;
}

interface IProps {
  children?: ReactNode;
}

export type GenderType = 'male' | 'female' | 'unknown' | 'n/a';

type ResType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: GenderType;
  url: string;
};

export { IErrorBoundaryState, IProps, ResType };
