import * as Dialog from "@radix-ui/react-dialog";
import { keyframes, styled } from ".."


export const CartTrigger = styled(Dialog.Trigger, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '3rem',
    height: '3rem',
    border: 0,
    borderRadius: 6,
    background: '$gray800',
    color: '$gray400',
    cursor: 'pointer',

    span: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -8,
        right: -8,
        width: 30,
        height: 30,
        background: '$green500',
        border: '3px solid $gray900',
        borderRadius: 9999,
        color: '$white',
        fontSize: '$xs',
        fontWeight: 'bold',
    },
})

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(16px, 0)' },
    '100%': { opacity: 1, transform: 'translate(0, 0)'},
})

export const CartContent = styled(Dialog.Content, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    width: '100%',
    maxWidth: 480,
    padding: '4.5rem 3rem 3rem',
    background: '$gray800',
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
    color: '$gray100',
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const CartClose = styled(Dialog.Close, {
    position: 'absolute',
    top: 24,
    right: 24,
    border: 0,
    background: 'transparent',
    color: '$gray400',
    cursor: 'pointer',
})

export const CartTitle = styled(Dialog.Title, {
    fontSize: '$xl',
})

export const ContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '2rem',

    section: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '1.5rem',
    },
})

export const CartProduct = styled('div', {
    display: 'flex',
    gap: '1.25rem',

    div: {
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column',
        gap: '1rem',

        button: {
            border: 0,
            background: 'transparent',
            color: '$green500',
            fontSize: '$sm',
            fontWeight: 'bold',
            cursor: 'pointer',

            '&:hover': {
                color: '$green300',
            },
        },
    },
})

export const ImageContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 102,
    height: 94,
    borderRadius: 8,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    img: {
        objectFit: 'cover',
    },
})

export const TotalsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',

    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',

        div: {
            display: 'flex',
            justifyContent: 'space-between',

            strong: {
                fontSize: '$md',

                '&:not(:first-of-type)': {
                    fontSize: '$xl',
                },
            },
        },
    },
})