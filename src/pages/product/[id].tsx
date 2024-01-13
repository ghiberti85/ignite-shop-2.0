import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Head from "next/head";
import Stripe from "stripe"
import { stripe } from "../../lib/stripe";
import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import { priceFormatter } from "../../../utils/priceFormatter";
import { Button } from "@/styles/components/button";

interface ProductProps {
    name: string
    description: string
    imageUrl: string
    priceId: string
    unitAmount: number
}

export default function Product({ name, description, imageUrl, priceId, unitAmount }: ProductProps) {
    const { addItem } = useContext(CartContext)

    function handleAddToCart() {
        addItem({
            name,
            imageUrl,
            priceId,
            unitAmount,
        })
    }


    return (
        <>
            <Head>
                <title>{`${name} | Ignite Shop`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={imageUrl} width={520} height={480} alt="" />
                </ImageContainer>
                <ProductDetails>
                    <h1>{name}</h1>
                    <span>{priceFormatter.format(Number(unitAmount) / 100)}</span>

                    <p>{description}</p>

                    <Button onClick={handleAddToCart}>
                        Comprar agora
                    </Button>
                </ProductDetails>
            </ProductContainer>
            </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await stripe.products.list({ active: true })
    const products = response.data
    const paths = products.map((product) => {
        return {
            params: {
                id: product.id,
            },
        }
    })

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params?.id as string;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
                name: product.name,
                description: product.description,
                imageUrl: product.images[0],
                priceId: price.id,
                unitAmount: price.unit_amount,
        },
        revalidate: 60 * 60 * 1, // 2 hours in seconds
    }
}
