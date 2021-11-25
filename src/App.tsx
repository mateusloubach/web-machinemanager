import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/auth";
import { MobileMenuProvider } from "./hooks/mobileMenuToggle";
import Routes from "./routes";
import { store } from './store'
import GlobalStyles from "./styles/GlobalStyles";

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <Provider store={store}>
          <BrowserRouter>
            <MobileMenuProvider>
              <Routes />
            </MobileMenuProvider>
          </BrowserRouter>
          <GlobalStyles />
        </Provider>
      </AuthProvider> 
    </div>
  );
}

export default App;
