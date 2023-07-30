import AppLayout from '@/util/ui/layout/AppLayout'
import 'bulma/css/bulma.min.css'
import type { AppProps } from 'next/app'

export const withoutLayoutPages = ["HomePage"];

export default function App({ Component, pageProps }: AppProps) {

  const isWithoutLayout = withoutLayoutPages.includes(Component.name);
  if (isWithoutLayout) {
    return <Component {...pageProps} />
  }
  

  return <>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </>
}
