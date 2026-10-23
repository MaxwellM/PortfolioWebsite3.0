//import 'tailwindcss/tailwind.css';
// @ts-expect-error SCSS imports are handled by Next.js.
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {JSX, memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
