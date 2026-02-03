import {
  Box,
  Button,
  Chip,
  CssBaseline,
  styled,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Card from "../../components/card";
import { about } from "./theme";
import Icon from "../../components/icon";
import { global } from "../../global.theme";
import { Link } from "react-router";

const Article = styled("article", {
  name: "AboutPage",
  slot: "root",
})();

const AboutProject = styled(Box, {
  name: "AboutPage",
  slot: "aboutProject",
})();

const Technologies = styled(Box, {
  name: "AboutPage",
  slot: "technologies",
})();

const AboutMe = styled(Box, {
  name: "AboutPage",
  slot: "aboutMe",
})();

const Buttons = styled(Box, {
  name: "AboutPage",
  slot: "buttons",
})();

const chips: { icon: string; name: string }[] = [
  { icon: "html", name: "HTML 5" },
  { icon: "css", name: "CSS 3" },
  { icon: "javascript", name: "JavaScript" },
  { icon: "typescript", name: "TypeScript" },
  { icon: "react", name: "React" },
  { icon: "mui", name: "Material UI" },
];

export default function AboutPage() {
  const mobile = useMediaQuery(global.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={about}>
      <CssBaseline />
      <Article>
        <AboutProject>
          <Typography variant="h2">Olá, seja bem-vindo(a)!</Typography>
          <Card>
            <Typography variant="body1">
              Espero que tenha gostado do projeto! O Caderno foi uma ideia que
              surgiu a partir do meu interesse em expor as atividades que tenho
              realizado para o curso de Engenharia de Software no Instituto
              Infnet e, de quebra, facilitar o desenvolvimento e a entrega
              delas.
            </Typography>
          </Card>
          <Card>
            <Typography variant="body1">
              O projeto foi desenvolvido em React, utilizando a biblioteca
              Material UI para a construção dos componentes e definição dos
              estilos. Ele também conta com scripts próprios que permitem
              extrair o conteúdo HTML do site da faculdade para preencher as
              informações sobre os exercícios automaticamente. Abaixo estão
              todas as tecnologias envolvidas.
            </Typography>
          </Card>
          <Technologies>
            {chips.map((chip, index) => (
              <Chip
                key={`tech-chip-${index}`}
                icon={
                  <Icon
                    name={chip.icon}
                    style={{ width: "16px", height: "16px" }}
                  />
                }
                label={chip.name}
              />
            ))}
          </Technologies>
        </AboutProject>
        <AboutMe>
          {mobile && <Typography variant="h2">Sobre mim</Typography>}
          <img
            src="/src/assets/images/profile.png"
            alt="Foto de Matheus Oliveira"
          />
          <Card title={!mobile ? "Sobre mim" : undefined}>
            <Typography variant="body1">
              Meu nome é Matheus, mas estou por aí como{" "}
              <strong>mattolivr</strong>. Sou desenvolvedor full stack desde
              2022 e graduando em Engenharia de Software no Instituto Infnet.
              Estou sempre em busca de aprender algo novo e aperfeiçoar minhas
              habilidades e conhecimentos, sempre me divertindo no processo.
              Além disso, dificilmente você me verá sem fones de ouvido.
            </Typography>
            <Buttons>
              <Button size="small">
                <Link
                  to="https://www.linkedin.com/in/mattolivr/"
                  target="_blank"
                  rel="noopener"
                >
                  <Icon name="linkedin" />
                  LinkedIn
                </Link>
              </Button>
              <Button color="secondary" size="small">
                <Link
                  to="https://github.com/mattolivr"
                  target="_blank"
                  rel="noopener"
                >
                  <Icon name="github" /> GitHub
                </Link>
              </Button>
            </Buttons>
          </Card>
        </AboutMe>
      </Article>
    </ThemeProvider>
  );
}
