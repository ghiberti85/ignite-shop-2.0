import { HeaderContainer } from "@/styles/components/header"
import Link from "next/link"
import Image from "next/image"
import logoImage from '../assets/ignite-shop-logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <Link href="/">
                <Image src={logoImage} alt=""/>
            </Link>
        </HeaderContainer>
    )
}