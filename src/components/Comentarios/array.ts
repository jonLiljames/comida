import Perfil8 from '../../../public/perfil8.webp'
import Perfil17 from '../../../public/perfil17.webp'
import Perfil18 from '../../../public/perfil18.webp'
import Perfil20 from '../../../public/perfil20.webp'
import Perfil21 from '../../../public/perfil21.webp'
import Perfil22 from '../../../public/perfil22.webp'
import Perfil23 from '../../../public/perfil23.webp'
import Perfil30 from '../../../public/perfil30.webp'

interface LocationProps {
  city: string
  region: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const comentarios = (location: LocationProps) => [
  {
    src: Perfil8,
    name: 'Isabella Cardoso',
    desc: 'dasdsadsadasdsadass​',
    time: '3 horas',
    ammount: 42,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil17,
    name: 'Luana Bezerra',
    desc: 'Foi um processo difícil, mas com paciência e amor próprio, conseguimos reconstruir nossa relação. Aprendi a respeitar mais os limites do outro e a expressar melhor meus sentimentos.',
    time: '5 horas',
    ammount: 51,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil20,
    name: 'Marina Carvalho Nuens',
    desc: 'A sensação de reconquistar meu amor foi incrível. Estou muito grata pela oportunidade de reconstruir nossa relação e sinto-me mais forte e confiante do que nunca ❤️​',
    time: '5 horas',
    ammount: 35,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil18,
    name: 'Nicole Esteves',
    desc: 'Funciona mesmo?​',
    time: '7 horas',
    ammount: 28,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil21,
        name: 'Giovanna Alves',
        desc: 'Funciona!! Recuperar meu relacionamento trouxe uma sensação de felicidade e realização que não tem preço​',
        time: '5 horas',
        ammount: 11,
      },
      {
        src: Perfil22,
        name: 'Rafaela Souza',
        desc: '😮 gente vou fazer isso pra ontem kakaka​',
        time: '3 horas',
        ammount: 2,
      },
    ],
  },
  {
    src: Perfil23,
    name: 'Luiza Fonseca',
    desc: ' Está me ajudando muito 🙏​ Depois de um tempo separados, voltamos nosso relacionameto',
    time: '12 horas',
    ammount: 14,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil30,
    name: 'Alice Pereira',
    desc: ' Amei seu vídeo​, hoje minha familia está completa novamente',
    time: '17 horas',
    ammount: 26,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil22,
        name: 'Rafaela Souza',
        desc: 'Parabens​',
        time: '3 horas',
        ammount: 11,
      },
    ],
  },
]
