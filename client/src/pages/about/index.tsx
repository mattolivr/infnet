import {
  Box,
  Button,
  CssBaseline,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Card from "../../components/card";
import { about } from "./theme";
import Icon from "../../components/icon";

const About = styled("article", {
  name: "AboutPage",
  slot: "root",
})();

const Buttons = styled(Box, {
  name: "AboutPage",
  slot: "buttons",
})();

export default function AboutPage() {
  return (
    <ThemeProvider theme={about}>
      <CssBaseline />
      <About>
        <Typography variant="h2">Seja bem-vindo(a)</Typography>
        <Card>
          <Typography variant="body1">
            Espero que tenha gostado do projeto! O Caderno foi uma ideia que
            surgiu a partir do meu interesse em expor as atividades que tenho
            realizado para o curso de Engenharia de Software no Instituto Infnet
            e, de quebra, facilitar o desenvolvimento e a entrega delas.
          </Typography>
        </Card>
        <Card>
          <Typography variant="body1">
            O projeto foi desenvolvido em React, utilizando a biblioteca
            Material UI para a construção dos componentes e definição dos
            estilos. Ele também conta com scripts próprios que permitem extrair
            o conteúdo HTML do site da faculdade para preencher as informações
            sobre os exercícios automaticamente. Abaixo estão todas as
            tecnologias envolvidas.
          </Typography>
        </Card>
        <Typography variant="h2">Sobre mim</Typography>
        <img
          src="/src/assets/images/profile.jpg"
          alt="Foto de Matheus Oliveira"
        />
        <Card>
          <Typography variant="body1">
            Meu nome é Matheus, mas estou por aí como @mattolivr. Sou
            desenvolvedor Full Stack desde 2022 e graduando em Engenharia de
            Software no Instituto Infnet. Estou sempre em busca de aprender algo
            novo e aperfeiçoar minhas habilidades e conhecimentos, sempre me
            divertindo no processo. Além disso, dificilmente você me verá sem
            fones de ouvido.
          </Typography>
          <Buttons>
            <Button>
              <Icon name="linkedin" />
              LinkedIn
            </Button>
            <Button color="secondary">
              <Icon name="github" /> GitHub
            </Button>
          </Buttons>
        </Card>
      </About>
    </ThemeProvider>
  );
}
