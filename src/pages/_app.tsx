import { AppProps } from "next/app"
import { globalStyle } from "../styles/global"

import { Container } from "../styles/pages/app"
import { Header } from "@/components/Header"
import { CartContextProvider } from "@/context/cartContext"

globalStyle()

export default function App({ Component, pageProps }: AppProps) {


    return (
       <Container>
            <CartContextProvider>
                <Header />

                <Component {...pageProps} />
            </CartContextProvider>
       </Container>
    )
}