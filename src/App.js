import { Col, Container, Row } from "react-grid-system";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Styles } from "./components/GlobalStyles/Styles";
import { Header } from "./components/Header/Header";
import { MyThemeProvider } from "./components/MyThemeProvider/MyThemeProvider";
import { TextField } from "./components/TextField/TextField";
import { Typography } from "./components/Typography/Typography";
import { Button } from "./components/Button/Button";
import { DropDown } from "./components/DropDown/DropDown";


const brazilianStates = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

function App() {
  return (
    <MyThemeProvider>
      <Styles />
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
        <Container>
          <Row justify="center" style={{margin: '80px 0px'}}>
            <Col lg={6} md={12} sm={12}>
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
                      <DropDown title={'Estado'} options={brazilianStates}/>
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
      <Footer/>
    </MyThemeProvider>

  );
}

export default App;
