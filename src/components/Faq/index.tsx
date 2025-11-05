import { ForwardedRef, forwardRef } from 'react'
import {
  AccordionItem,
  AccordionRoot,
  StyledChevron,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledTrigger,
} from './styles'
import { AccordionContentProps } from '@radix-ui/react-accordion'

export default function Faq() {
  return (
    <AccordionRoot
      defaultChecked
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <StyledHeader>
          <StyledTrigger>
            COMO VOU TER ACESSO AO MATERIAL?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Após a aprovação da compra você receberá um e-mail automático para
            ter acesso imediato à plataforma.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <StyledHeader>
          <StyledTrigger>
            POR QUANTO TEMPO TEREI ACESSO AO MATERIAL
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Os livros de receitas podem ser baixados e impressos, eles são para
            sempre seus.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <StyledHeader>
          <StyledTrigger>
            NÃO COMO GLUTÉN, LACTOSE, ETÇ. O MATERIAL É PARA MIM?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Sim, temos indicações de substitutos nas receitas para torná-las
            perfeitas para você.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <StyledHeader>
          <StyledTrigger>
            AS RECEITAS AJUDAM NA PERDA DE PESO
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Sim! As receitas são projetadas para serem baixas em calorias ricas
            em proteínas e nutrientes, facilitando dietas de emagrecimento sem
            abrir mão do sabor.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <StyledHeader>
          <StyledTrigger>
            SOU VEGETARIANO OU VEGANO. SERVE PARA MIM?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>Sim. Temos opções de receitas vegetarianas e veganas.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <StyledHeader>
          <StyledTrigger>
            PRECISO SABER COZINHAR?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Não! As receitas foram pensadas para todos os níveis de habilidade
            na cozinha — inclusive iniciantes.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <StyledHeader>
          <StyledTrigger>
            POSSO USAR O MATERIAL NO CELULAR/TABLET
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Sim! Nosso material é compatível com todos os dispositivos. Você
            pode visualizá-los no seu celular, tablet ou computador, podendo
            levá-los com você enquanto cozinha ou consultá-los em qualquer
            lugar.
          </p>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  (
    { children, ...props }: AccordionContentProps,
    forwardedRef: ForwardedRef<HTMLDivElement>,
  ) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  ),
)

AccordionContent.displayName = 'AccordionContent'
