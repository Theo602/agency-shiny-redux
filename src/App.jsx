import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import Results from './pages/Results/Results';
import Freelances from './pages/Freelances/Freelances';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import { SurveyProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';

function App() {

    return (
            <Router>
                <SurveyProvider>
                  <GlobalStyle />
                  <Header />
                  <Routes>
                      <Route exact path='/' element={<Home />} />
                      <Route path='/freelances' element={<Freelances />} />
                      <Route path='/profile/:id' element={<Profile  />} />
                      <Route path='/survey/:questionNumber' element={<Survey />} />
                      <Route path='/results' element={<Results />} />
                      <Route path='*' element={<Error />} />
                  </Routes>
                  <Footer />
                </SurveyProvider>
            </Router>
    )
  }
  export default App;