import '../styles/global.scss';
import '../styles/App.scss';
import { AppProps } from 'next/app';
import RootLayout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
