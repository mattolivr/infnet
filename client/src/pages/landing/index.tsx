import { Button, styled, ThemeProvider } from "@mui/material";
import landing from "./theme";
import { Link } from "react-router";
import Icon from "../../components/icon";

const Section = styled("section", {
  name: "LandingPage",
  slot: "root",
})();

const Title = styled("h1", {
  name: "LandingPage",
  slot: "title",
})();

const Description = styled("p", {
  name: "LandingPage",
  slot: "description",
})();

const Buttons = styled("div", {
  name: "LandingPage",
  slot: "buttons",
})();

export default function LandingPage() {
  return (
    <ThemeProvider theme={landing}>
      <Section>
        <Title>Caderno</Title>
        <Description>
          Bem vindo(a) ao Caderno, um repositório de exercícios realizados por
          Mattolivr para o curso de engenharia de software no Instituto Infnet.
        </Description>
        <Buttons>
          <Button size="small">
            <Link to="/explore">
              <Icon name="explore" filled />
              Explorar o portfolio
            </Link>
          </Button>
          <Button size="small" color="secondary">
            <Link to="https://github.com/mattolivr/infnet">
              <Icon name="folder_open" filled />
              Ver repositório Github
            </Link>
          </Button>
        </Buttons>
      </Section>
    </ThemeProvider>
  );
}
