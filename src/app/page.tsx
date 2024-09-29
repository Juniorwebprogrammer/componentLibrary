import React from 'react';
import { AppProps } from 'next/app';
import TestPage from '../test/testPage'; // Ajusta la ruta según sea necesario
import RootLayout from '../app/layout'; // Ajusta la ruta según sea necesario

function MyApp({ Component, pageProps }: AppProps) {
    if (process.env.NEXT_PUBLIC_TEST_PAGE) {
        return <TestPage />;
    }
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}

export default MyApp;