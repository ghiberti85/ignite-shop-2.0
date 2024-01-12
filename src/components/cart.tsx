import Image from "next/image";



export function Cart() {
    return(
        <Dialog.Root>
            <CartTrigger>
                <Handbag />
            </CartTrigger>

            <Dialog.Portal>
                <CartContent>
                    <CartClose>
                        <X />
                    </CartClose>

                    <ContentContainer>
                        <CartTitle>Sacola de Compras</CartTitle>

                        <section>
                            <CartProduct>
                                <ImageContainer>
                                    <Image />
                                </ImageContainer>

                                <div>
                                    <span>Hi Test</span>
                                    <strong>R$100</strong>
                                    <button>Remover</button>
                                </div>
                            </CartProduct>
                        </section>
                    </ContentContainer>

                    <TotalsContainer>
                        <section>
                            <div>
                                <span>Quantidade</span>
                                <span>3</span>
                            </div>

                            <div>
                                <strong>Valor Total</strong>
                                <strong>R$200</strong>
                            </div>
                        </section>

                        <Button>Finalizar a compra</Button>
                    </TotalsContainer>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}