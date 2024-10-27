import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { MyThemeProvider } from "./components/MyThemeProvider/MyThemeProvider";


function App() {
  return (
    <MyThemeProvider>
      <Styles/>
      <Card>
        <h1>Freelando</h1>
      </Card>
    </MyThemeProvider>
  );
}

export default App;
