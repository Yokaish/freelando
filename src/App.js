import { Col, Container, Row } from "react-grid-system";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Styles } from "./components/GlobalStyles/Styles";
import { Header } from "./components/Header/Header";
import { MyThemeProvider } from "./components/MyThemeProvider/MyThemeProvider";
import { TextField } from "./components/TextField/TextField";
import { Typography } from "./components/Typography/Typography";
import { Button } from "./components/Button/Button";


function App() {
  return (
    <MyThemeProvider>
      <Styles />
      <Header />
      <Container>
        <Row justify="center">
          <Col lg={6}>
            <Card>
              <Typography variable='h1' component='h1'>
                Crie seu cadastro
              </Typography>

              <Typography variable='body1' component='body'>
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Typography>

              <TextField label='Nome Completo'></TextField>
              <Button variable="secondary">
                Teste
              </Button>
              <Button>
                Teste
              </Button>
            </Card>
          </Col>
        </Row>

      </Container>

    </MyThemeProvider>
  );
}

export default App;
