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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
        <Container>
          <Row justify="center" style={{margin: '80px 0px'}}>
            <Col lg={6} md={6} sm={12}>
              <Card>
                <Typography variable='h1' component='h1'>
                  Crie seu cadastro
                </Typography>

                <Typography variable='body1' component='body'>
                  Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
                </Typography>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <Row>
                    <Col>
                      <TextField label='Nome Completo'></TextField>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4} md={4} sm={4}>
                      <TextField label='Estado'></TextField>
                    </Col>
                    <Col lg={8} md={8} sm={8}>
                      <TextField label='Cidade'></TextField>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextField label='E-mail'></TextField>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6} md={6} sm={6}>
                      <TextField label='Senha'></TextField>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                      <TextField label='Repita a senha'></TextField>
                    </Col>
                  </Row>

                  <Row justify="between">
                    <Col lg={6} md={6} sm={6} style={{ textAlign: 'left' }}>
                      <Button variable="secondary">
                        Anterior
                      </Button>
                    </Col>
                    <Col lg={6} md={6} sm={6} style={{ textAlign: 'right' }}>
                      <Button>
                        Próxima
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </MyThemeProvider>

  );
}

export default App;
