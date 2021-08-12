import 'fomantic-ui-css/semantic.min.css';
import type { AppProps } from 'next/app';
import { Container } from 'semantic-ui-react';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Container>
    <Component {...pageProps} />
  </Container>
);

export default MyApp;
