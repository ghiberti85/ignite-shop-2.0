import { AppProps } from "next/app"
import { globalStyle } from "../styles/global"

import { Container } from "../styles/pages/app"
import { Header } from "@/components/Header"

globalStyle()

export default function App({ Component, pageProps }: AppProps) {


    return (
       <Container>
            <Header />

            <Component {...pageProps} />
       </Container>
    )
}