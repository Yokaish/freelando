import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { Header } from "./components/Header/Header";
import { MyThemeProvider } from "./components/MyThemeProvider/MyThemeProvider";


function App() {
  return (
    <MyThemeProvider>
      <Styles/>
      <Header>
        <p>Teste</p>
      </Header>
      <Card>
        <h1>Freelando</h1>
      </Card>
    </MyThemeProvider>
  );
}

export default App;
