import Image from 'next/image'
import { DepoimentosContainer, ImageSecion } from './styles'
import Depoimento1 from '../../../public/comidas1.webp'
import Depoimento2 from '../../../public/comidas2.webp'
import Depoimento3 from '../../../public/comidas3.webp'
import Depoimento4 from '../../../public/comidas4.webp'
import Slider, { Settings } from 'react-slick'

export default function Depoimentos() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 900,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  } as Settings

  return (
    <>
      <DepoimentosContainer>
        <ImageSecion>
          <Slider {...settings}>
            <Image
              src={Depoimento1}
              alt="Depoimento"
              quality={100}
              priority={true}
            />

            <Image
              src={Depoimento2}
              alt="Depoimento"
              quality={100}
              priority={true}
            />

            <Image
              src={Depoimento3}
              alt="Depoimento"
              quality={100}
              priority={true}
            />

            <Image
              src={Depoimento4}
              alt="Depoimento"
              quality={100}
              priority={true}
            />
          </Slider>
        </ImageSecion>
      </DepoimentosContainer>
    </>
  )
}
