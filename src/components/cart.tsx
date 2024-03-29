import axios from "axios";
import Image from "next/image";
import { Handbag, X } from 'phosphor-react'
import { useContext, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog'
import { CartContext } from "@/context/cartContext";
import { priceFormatter } from "../../utils/priceFormatter";
import { CartClose, CartContent, CartProduct, CartTitle, CartTrigger, ContentContainer, ImageContainer, TotalsContainer } from "@/styles/components/cart";
import { Button } from "@/styles/components/button";


export function Cart() {
    const { items, removeItem } = useContext(CartContext)

    const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const totalValue = items.reduce((acc, item) => {
        return (acc += item.unitAmount / 100)
    }, 0)

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true)

            const lineItems = items.map((item) => {
                return {
                    price: item.priceId,
                    quantity: 1,
                }
            })

            const response = await axios.post('/api/checkout', {
                lineItems,
            })

            const { checkoutUrl } = response.data
            window.location.href = checkoutUrl
        } catch (err) {
            setIsCreatingCheckoutSession(false)
            alert('Falha ao criar a sessão!')
        }
    }


    return(
        <Dialog.Root>
            <CartTrigger>
                {items.length > 0 && <span>{items.length}</span>}
                <Handbag size={24} weight="bold" />
            </CartTrigger>

            <Dialog.Portal>
                <CartContent>
                    <CartClose>
                        <X size={24} weight="bold"/>
                    </CartClose>

                    <ContentContainer>
                        <CartTitle>Sacola de Compras</CartTitle>

                        <section>
                            {items.map((item) => (
                                <CartProduct key={item.priceId}>
                                    <ImageContainer>
                                        <Image 
                                            src={item.imageUrl}
                                            alt=""
                                            width={102}
                                            height={102}
                                        />
                                    </ImageContainer>
    
                                    <div>
                                        <span>{item.name}</span>
                                        <strong>
                                            {priceFormatter.format(item.unitAmount / 100)}
                                        </strong>
                                        <button onClick={() => removeItem(item.priceId)}>Remover</button>
                                    </div>
                                </CartProduct>
                            ))}
                        </section>
                    </ContentContainer>

                    <TotalsContainer>
                        <section>
                            <div>
                                <span>Quantidade</span>
                                <span>{items.length} item(s)</span>
                            </div>

                            <div>
                                <strong>Valor Total</strong>
                                <strong>{priceFormatter.format(totalValue)}</strong>
                            </div>
                        </section>

                        <Button
                            disabled={isCreatingCheckoutSession}
                            onClick={handleBuyProduct}
                        >
                            Finalizar compra
                        </Button>
                    </TotalsContainer>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}