import '@/styles/globals.css'
import '@/styles/tailwind.css'
import { StateContext, StateProvider } from "@/context/StateProvider"
import initialState from '@/context/initialState'
import reducer from '@/context/reducer'

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  )
}
