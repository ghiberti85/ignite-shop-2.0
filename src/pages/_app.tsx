import { AppProps } from "next/app"
import { globalStyle } from "../styles/global"

import { Container, Header } from "../styles/pages/app"

import logoImg from '../assets/ignite-shop-logo.svg'
import Image from 'next/image'

globalStyle()

export default function App({ Component, pageProps }: AppProps) {


    return (
       <Container>
            <Header>
                <Image 
                    src={logoImg.src}
                    alt=""
                    width={130}
                    height={52}
                />
            </Header>

            <Component {...pageProps} />
       </Container>
    )
}