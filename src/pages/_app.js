import '@/styles/globals.css'
import '@/styles/tailwind.css'
import { StateContext, StateProvider } from "@/context/StateProvider"
import configState from '@/context/configState'
import reducer from '@/context/reducer'

export default function App({ Component, pageProps }) {
  
  return (
    <StateProvider configState={configState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  )
}
