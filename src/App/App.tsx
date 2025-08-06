import Footer from '../components/Footer';
import Biografia from '../containers/Biografia';
import Contato from '../containers/Contato';
import Hero from '../containers/Hero';
import Projetos from '../containers/Projetos';
import EstiloGlobal from '../styles/styles';
import { AppContainer } from './styles';

function App() {
    return (
        <>
            <EstiloGlobal />
            <AppContainer>
                <Hero />
                <Biografia />
                <Projetos />
                <Contato />
                <Footer />
            </AppContainer>
        </>
    );
}

export default App;
