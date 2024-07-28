import './index.scss';
import './App.scss';
import { AppProps } from 'next/app';
import RootLayout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
