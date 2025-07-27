import Biografia from '../containers/Biografia';
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
            </AppContainer>
        </>
    );
}

export default App;
