import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    h1: {
        fontSize: '2xl',
        color: '$gray100',
    },

    p: {
        fontSize: '2xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    },
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 145,
    height: 145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
    borderRadius: 9999,
    padding: '0.25rem',
    margin: '0rem -1.75rem',

    display: 'flex',
    flex:'none',
    order: 1,
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    }
})