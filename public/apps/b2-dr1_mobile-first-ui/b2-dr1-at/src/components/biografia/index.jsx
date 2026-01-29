import { Card, CardContent, CardMedia, Box } from "@mui/material";
import Section from "../section";
import style from './style.module.css';

export default function Biografia() {
  return (
    <Section
      id="biografia"
      title="Biografia"
      highlight={
        <>
          <img src="./src/assets/destaque.png" alt="Marco Madureira na obra Exemplo" />
          <q>
            Não sou de promessas vazias, sou de obras concretas. Minha
            história foi construída tijolo por tijolo.
          </q>
        </>
      }
    >
      <Card>
        <Box className={style.biografiaCard}>
          <Box className={style.imagemContainer}>
            <CardMedia
              component="img"
              image="./src/assets/perfil.png"
              alt="Marco Madureira"
              className={style.imagemPerfil}
            />
          </Box>
          <CardContent className={style.conteudoBiografia}>
            <h3>Infância e Juventude</h3>
            <p>
              Marco Madureira nasceu em uma pequena cidade do interior, filho de
              agricultores. Desde cedo, aprendeu o valor do trabalho duro e da
              dedicação. Mudou-se para a capital aos 18 anos em busca de melhores
              oportunidades e, com esforço e perseverança, conseguiu se formar em
              engenharia civil.
            </p>
            <h3>Carreira</h3>
            <p>
              Ao longo de sua carreira, Marco participou de diversos projetos
              importantes que contribuíram para o desenvolvimento urbano e social da
              região. Conhecido por sua integridade e compromisso com a comunidade, ele sempre
              buscou soluções inovadoras para os desafios enfrentados pela cidade.
            </p>
            <h3>Interesses Pessoais</h3>
            <p>
              Além de sua atuação profissional, Marco é um entusiasta do esporte e da
              cultura local. Ele acredita que o esporte é uma ferramenta poderosa para
              promover a inclusão social e incentivar hábitos saudáveis entre os
              jovens.
            </p>
            <h3>Legado</h3>
            <p>
              Hoje, Marco Madureira é reconhecido como um líder visionário, dedicado a
              construir um futuro melhor para todos os cidadãos. Sua trajetória é um
              exemplo de superação e determinação, inspirando aqueles que o conhecem a
              nunca desistirem de seus sonhos.
            </p>
          </CardContent>
        </Box>
      </Card>
    </Section>
  )
}