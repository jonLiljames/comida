/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Roboto } from 'next/font/google'

import {
  Div1,
  Div2,
  Div3,
  Div4,
  Div5,
  Div6,
  Div8,
  Div9,
  Div10,
  Div11,
  Div12,
  Div13,
  MainContainer,
  Div14,
  Div15,
} from '@/styles/index.styles'
import especialista from '../../public/especialistas.webp'
import cenoura from '../../public/bolocenourafrigideira.webp'
import aperitivo from '../../public/pizzafrigideira.webp'
import barrinha from '../../public/bombomproteina.webp'
import bolinhos from '../../public/muffinaveia.webp'
import brownie from '../../public/panqueca.webp'
import salgado from '../../public/Wrap.webp'
import pastel from '../../public/pastelzinhorap10.webp'
import muffin from '../../public/pãoliquidificador.webp'
import garantia from '../../public/garantia30.webp'
import mokupfit from '../../public/mokupfit.webp'
import shakes from '../../public/shakes.webp'
import air from '../../public/airfryer.ebp.png'

import { Checks, CheckCircle, Gift } from 'phosphor-react'
import Image from 'next/image'
import ScrollButton from '@/components/ScrollButton'
import Depoimentos from '@/components/Depoimentos'
import Depoimentoscopia from '@/components/DepoimentosCopia'
import Faq from '@/components/Faq'

const Vietnam = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Fitlicias</title>
        <meta name="description" content="Terapeuta Transforma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></script>
      </Head>

      <>
        <MainContainer className={Vietnam.className}>
          <Div1>
            <h1>
              <span style={{ color: '#21AC08' }}>200 receitas Saudáveis</span>{' '}
              {''}
              Para o Café da Manhã e Lanche da Tarde
            </h1>
            <Div2>
              <p>
                Receitas de baixas calorias e nutritivas, criadas pela nutri
                Fernanda!
              </p>
              <Depoimentoscopia />
              <Div3>
                <ScrollButton
                  sectionId="precoSection"
                  title="Quero minhas receitas fit agora!"
                />
                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '1rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <p>🔒 Compra Segura</p> <p>✅ Garantia 30 dias</p>
                </span>
              </Div3>
            </Div2>
          </Div1>
          <Div4>
            <p>
              <span
                style={{
                  flexShrink: '0',
                  display: 'flex',
                  alignItems: 'ceneter',
                }}
              >
                <CheckCircle size={32} color="#21ac08" weight="fill" />
              </span>
              Perfeitos para levar para o trabalho
            </p>
            <p>
              <span
                style={{
                  flexShrink: '0',
                  display: 'flex',
                  alignItems: 'ceneter',
                }}
              >
                <CheckCircle size={32} color="#21ac08" weight="fill" />
              </span>
              Café da manhã e lanche da tarde gostosos e nutritivos todos os
              dias
            </p>
            <p>
              <span
                style={{
                  flexShrink: '0',
                  display: 'flex',
                  alignItems: 'ceneter',
                }}
              >
                <CheckCircle size={32} color="#21ac08" weight="fill" />
              </span>
              Feitas com ingredientes simples, que você já tem em casa
            </p>
            <p>
              <span
                style={{
                  flexShrink: '0',
                  display: 'flex',
                  alignItems: 'ceneter',
                }}
              >
                <CheckCircle size={32} color="#21ac08" weight="fill" />
              </span>
              Opções doces e salgadas que matam a vontade sem sair da linha
            </p>
            <p>
              <span
                style={{
                  flexShrink: '0',
                  display: 'flex',
                  alignItems: 'ceneter',
                }}
              >
                <CheckCircle size={32} color="#21ac08" weight="fill" />
              </span>
              Ideal para rotina corrida
            </p>
            <p>
              <span
                style={{
                  flexShrink: '0',
                  display: 'flex',
                  alignItems: 'ceneter',
                }}
              >
                <CheckCircle size={32} color="#21ac08" weight="fill" />
              </span>
              Lista de compras e modo de preparo passo a passo
            </p>
          </Div4>
          {/* <Div5>
            <Image alt="img" src={especialista} quality={100} />
            <p>
              Quantas vezes você já tentou seguir uma alimentação mais leve e
              acabou{' '}
              <span style={{ fontWeight: 'bold' }}>
                desistindo porque tudo parecia sem graça?
              </span>{' '}
            </p>
            <p>
              A verdade é que ninguém aguenta viver de frango e batata-doce. Foi
              pensando nisso que eu nutri Fernanda junto com a chef Ana criamos
              o Fitlicias.{' '}
            </p>{' '}
            <p>
              Um livro de receitas com versões fit das suas tentações favoritas,{' '}
              <span style={{ fontWeight: 'bold' }}>
                bolos, panquecas, salgados, cookies, mini pizza e muito mais,
              </span>{' '}
              todos com ingredientes simples, sabor real e o equilíbrio que o
              seu corpo precisa.
            </p>
          </Div5> */}
          <Div6>
            <p>
              <span style={{ color: '#4CAF50' }}>Mais de 10 mil pessoas</span>{' '}
              já testaram e aprovaram nossas receitas .
            </p>
            <Depoimentos></Depoimentos>
            <span
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '90%',
              }}
            >
              <ScrollButton
                sectionId="precoSection"
                title="Quero minhas receitas fit agora!"
              />
            </span>
          </Div6>
          <h1
            style={{
              width: '85%',
              fontSize: '1.4rem',
              fontWeight: '650',
              textDecorationLine: 'underline',
            }}
          >
            Algumas receitas deliciosas que você vai aprender:
          </h1>
          <Div8>
            <Div9>
              <Image alt="img" src={cenoura} quality={100} />
              <p style={{ paddingTop: '.5rem', width: '70%' }}>
                Bolo de cenoura na frigideira
              </p>
              <p style={{ fontWeight: 'bold', color: '#ea580c' }}>
                🔥130 Calorias
              </p>
            </Div9>
            <Div9>
              <Image alt="img" src={pastel} quality={100} />
              <p style={{ paddingTop: '.5rem', width: '70%' }}>
                Mini pastel rap10 de frango
              </p>
              <p style={{ fontWeight: 'bold', color: '#ea580c' }}>
                🔥127 Calorias
              </p>
            </Div9>
            <Div9>
              <Image alt="img" src={brownie} quality={100} />
              <p style={{ paddingTop: '.5rem', width: '70%' }}>
                Panqueca de banana
              </p>
              <p style={{ fontWeight: 'bold', color: '#ea580c' }}>
                🔥115 Calorias
              </p>
            </Div9>
            <Div9>
              <Image alt="img" src={salgado} quality={100} />
              <p style={{ paddingTop: '.5rem', width: '65%' }}>
                Wrap saudável big mac
              </p>
              <p style={{ fontWeight: 'bold', color: '#ea580c' }}>
                🔥128 Calorias
              </p>
            </Div9>
            <Div9>
              <Image alt="img" src={bolinhos} quality={100} />
              <p style={{ paddingTop: '.5rem', width: '70%' }}>
                Muffin de banana e aveia
              </p>
              <p style={{ fontWeight: 'bold', color: '#ea580c' }}>
                🔥127 Calorias
              </p>
            </Div9>
            <Div9>
              <Image alt="img" src={muffin} quality={100} />
              <p style={{ paddingTop: '.5rem', width: '70%' }}>
                Pão de liquidificador
              </p>
              <p style={{ fontWeight: 'bold', color: '#ea580c' }}>
                🔥124 Calorias
              </p>
            </Div9>
            <Div9>
              <Image alt="img" src={barrinha} quality={100} />
              <p style={{ paddingTop: '.5rem', width: '70%' }}>
                Bombom proteico
              </p>
              <p style={{ fontWeight: 'bold', color: '#ea580c' }}>
                🔥80 Calorias
              </p>
            </Div9>
            <Div9>
              <Image alt="img" src={aperitivo} quality={100} />
              <p style={{ paddingTop: '.5rem', width: '70%' }}>
                Pizza de frigideira
              </p>
              <p style={{ fontWeight: 'bold', color: '#ea580c' }}>
                🔥100 Calorias
              </p>
            </Div9>
          </Div8>

          <Div12 id="precoSection">
            <h1
              style={{
                width: '100%',
                padding: '1.2rem',
                background: '#4CAF50',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                color: 'white',
              }}
            >
              SUPER OFERTA
            </h1>
            <p style={{ width: '80%', fontWeight: 'bold' }}>
              +200 RECEITAS PARA O CAFÉ DA MANHÃ E TARDE!
            </p>
            <Div13>
              <p>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '.15rem solid green',
                    borderRadius: '2rem',
                    padding: '.2rem',
                  }}
                >
                  <Checks size={32} color="#21ac08" weight="bold" />
                </span>
                Guia de Receitas Fitlicias
              </p>
              <p>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#ea580c',
                    borderRadius: '2rem',
                    padding: '.2rem',
                  }}
                >
                  <Gift size={32} color="white" weight="duotone" />
                </span>
                Receitas para Air Fryer (Bônus)
              </p>
              <p>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#ea580c',
                    borderRadius: '2rem',
                    padding: '.2rem',
                  }}
                >
                  <Gift size={32} color="white" weight="duotone" />
                </span>
                20 Shakes Detox Saborosos (Bônus)
              </p>
            </Div13>
            <Div14>
              <p style={{ color: '#909294' }}>
                De{' '}
                <span style={{ textDecorationLine: 'line-through' }}>
                  R$97,00
                </span>{' '}
                por
              </p>
              <h1>R$29,90 à vista</h1>
              <p>ou 6x de R$ 5,66</p>
            </Div14>
            <a href="https://pay.kirvano.com/c5faa737-6121-491a-8f9a-25b3e1c63eb6">
              Quero as receitas agora!
            </a>
          </Div12>
          <Div10>
            <Div11>
              <Image alt="img" src={mokupfit} quality={100} />
              <p
                style={{
                  paddingTop: '.5rem',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
                Guia de Receitas Fitlicias
              </p>
              <p>
                Todas as receitas com ingredientes simples, passo a passo e
                tempo de preparo.
              </p>
            </Div11>
            <Div11>
              <Image alt="img" src={air} quality={100} />
              <p
                style={{
                  paddingTop: '.5rem',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
                Receitas para Air Fryer
              </p>
              <p>
                Doces e salgadas que ficam prontas em poucos minutos, sem óleo e
                sem bagunça.
              </p>
            </Div11>
            <Div11>
              <Image alt="img" src={shakes} quality={100} />
              <p
                style={{
                  paddingTop: '.5rem',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
                20 Shakes Detox Saborosos
              </p>
              <p
                style={{
                  paddingBottom: '1.5rem',
                  width: '90%',
                }}
              >
                Sabor, praticidade e nutrição em um só copo.
              </p>
            </Div11>
          </Div10>
          <Div15>
            <Image alt="img" src={garantia} quality={100} />
            <h1>Você tem 30 dias para testar o Fitlicias</h1>
            <p>
              Se não amar as receitas ou achar que não vale o investimento,
              basta enviar um e-mail para{' '}
              <span style={{ textDecorationLine: 'underline' }}>
                contatofitlicias@gmail.com
              </span>{' '}
              e devolvemos 100% do seu dinheiro, sem perguntas.
            </p>
            <Faq />
          </Div15>
        </MainContainer>
      </>
    </>
  )
}
