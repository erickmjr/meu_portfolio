import Hero from '../containers/Hero';
import EstiloGlobal from '../styles/styles';
import { AppContainer } from './styles';

function App() {
    return (
        <>
            <EstiloGlobal />
            <AppContainer>
                <Hero />
            </AppContainer>
        </>
    );
}

export default App;
