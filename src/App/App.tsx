import Biografia from '../containers/Biografia';
import Hero from '../containers/Hero';
import EstiloGlobal from '../styles/styles';
import { AppContainer } from './styles';

function App() {
    return (
        <>
            <EstiloGlobal />
            <AppContainer>
                <Hero />
                <Biografia />
            </AppContainer>
        </>
    );
}

export default App;
