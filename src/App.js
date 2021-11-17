import { Button } from "@tommoore96/bit-spike.ui.button";
import { ThemeProvider } from "@tommoore96/bit-spike.ui.theme-provider";
import { ErrorMessage } from "@tommoore96/bit-spike.ui.error-message";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme="koodooTheme">
          <div>
            <Button>Bit Button</Button>
            <ErrorMessage>Ooops</ErrorMessage>
          </div>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
