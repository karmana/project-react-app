import Container from './components/Container/Container'
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';

const App = () => {
  return (
    <main>
      <NavBar />
        <Container>
          <Home />
          <Favorite />
          <About />
        </Container>
    </main>
  );
};

export default App;