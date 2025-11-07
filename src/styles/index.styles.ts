import { styled, keyframes } from './stitches.config'

export const MainContainer = styled('main', {
  maxWidth: 1200,
  minHeight: '100vh',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',

  '@media (max-width: 768px)': {},
})

export const Div1 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',

  h1: {
    width: '90%',
    paddingTop: '2.5rem',
  },
})

export const Div2 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  p: {
    width: '90%',
    fontSize: '1.1rem',
  },

  img: {
    width: '100%',
    height: 'auto',
  },
})

export const Div3 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '90%',
  gap: '.8rem',

  p: {
    fontSize: '1rem',
  },
})

export const Div4 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '1.2rem',

  p: {
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    fontWeight: '500',
    borderRadius: '.5rem',
    padding: '.4rem 1rem .4rem 1rem',
    boxShadow: '3px 3px 5px 0px rgba(49, 49, 49, 0.3)',
    gap: '.3rem',
    borderLeft: '.25rem solid #21AC08',
  },
})

export const Div5 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  background: '#13594d',
  paddingTop: '2rem',
  paddingBottom: '2rem',

  img: {
    width: '70%',
    height: 'auto',
    borderRadius: '10rem',
    boxShadow: '0px 0px 20px 15px rgba(49, 49, 49, 0.3)',
  },

  p: {
    color: 'White',
    textAlign: 'left',
    fontSize: '1.1rem',
    lineHeight: '2rem',
    width: '90%',
  },
})

export const Div6 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  p: {
    width: '90%',
    fontSize: '1.4rem',
    fontWeight: '500',
  },
})

export const Div8 = styled('div', {
  display: 'grid',
  width: '95%',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  justifyItems: 'Center',
  gap: '1.5rem',
})

export const Div9 = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '.5rem',
  paddingBottom: '.7rem',
  borderRadius: '1rem',
  boxShadow: '5px 5px 10px 0px rgba(0, 0, 0, .30)',

  img: {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  },

  P: {
    fontWeight: '500',
  },
})

export const Div10 = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory', // ativa o snap horizontal
  scrollBehavior: 'smooth', // rolagem suave
  gap: '1rem',
  maxWidth: '100vw',
  height: '30rem',
  padding: '0 1rem 0 1rem',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',
})

export const Div11 = styled('div', {
  flex: '0 0 auto',
  scrollSnapAlign: 'center',
  backgroundColor: '#f7f4e9',
  display: 'flex',
  width: '80%',
  flexDirection: 'column',
  alignItems: 'left',
  gap: '.5rem',
  paddingBottom: '1rem',
  borderRadius: '1rem',
  boxShadow: '5px 5px 10px 0px rgba(0, 0, 0, .30)',

  img: {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  },

  p: {
    textAlign: 'left',
    padding: '0 1rem 0 1rem',
    width: '95%',
  },
})

const bounce = keyframes({
  '0%': { transform: 'scale(.95)' },
  '50%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(.95)' },
})

export const Div12 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '90%',
  gap: '1.5rem',
  boxShadow: '5px 5px 10px 0px rgba(0, 0, 0, .30)',
  borderRadius: '1rem',
  paddingBottom: '2rem',

  p: {
    fontSize: '1.2rem',
  },

  a: {
    background: '#28b528',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#fff',
    borderRadius: 15,
    border: 0,
    padding: '1.2rem 2.5rem',
    textDecorationLine: 'none',

    alignItems: 'center',
    justifyContent: 'center',

    display: 'inline-block',
    animation: `${bounce} 1.3s ease-in-out infinite`,

    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
      padding: '1rem 1.5rem',
      width: '80%',
    },
  },
})

export const Div13 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  p: {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    textAlign: 'left',
  },
})

export const Div14 = styled('div', {})

export const Div15 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '1.2rem',
  paddingTop: '1.5rem',

  img: {
    width: '90%',
    height: 'auto',
  },

  h1: {
    width: '85%',
    color: '#21AC08',
    fontSize: '1.8rem',
  },

  p: {
    width: '90%',
    fontSize: '1.1rem',
    paddingBottom: '.8rem',
    fontWeight: '450',
  },
})
