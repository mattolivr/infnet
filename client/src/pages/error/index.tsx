import { Button, styled, ThemeProvider } from "@mui/material";
import { error } from "./theme";
import { Link, useNavigate } from "react-router";
import Icon from "../../components/icon";

const Title = styled("h1", {
  name: "ErrorPage",
  slot: "title",
})();

const Subtitle = styled("h2", {
  name: "ErrorPage",
  slot: "subtitle",
})();

const Description = styled("p", {
  name: "ErrorPage",
  slot: "description",
})();

const Buttons = styled("div", {
  name: "ErrorPage",
  slot: "buttons",
})();

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={error}>
      <Title>404</Title>
      <Subtitle>Página não encontrada</Subtitle>
      <Description>
        O recurso que tentou acessar não existe ou foi movido.
      </Description>
      <Buttons>
        <Button size="small">
          <Link to="/">
            <Icon name="cottage" filled />
            Voltar ao Início
          </Link>
        </Button>
        <Button size="small" color="secondary" onClick={() => navigate(-1)}>
          <Icon name="arrow_back" filled />
          Voltar à página anterior
        </Button>
      </Buttons>
    </ThemeProvider>
  );
}
