import { styled } from '../../styles/stitches.config'

export const DepoimentosContainer = styled('div', {
  maxWidth: 1120,
  color: '#000',
  fontWeight: 'bold',
  textAlign: 'center',

  padding: '5rem 0',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    padding: '2rem 1rem',
  },
})

export const ImageSecion = styled('div', {
  borderRadius: 25,
  padding: '.2rem .2rem 0 .2rem',

  img: {
    borderRadius: 25,
    transition: 'all 300ms ease',
    height: 'auto',

    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
})
