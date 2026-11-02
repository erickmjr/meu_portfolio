import Footer from '../components/Footer';
import BarraTopo from '../containers/BarraTopo';
import Biografia from '../containers/Biografia';
import Contato from '../containers/Contato';
import Experiencia from '../containers/Experiencia';
import Hero from '../containers/Hero';
import Projetos from '../containers/Projetos';
import EstiloGlobal from '../styles/styles';

function App() {
    return (
        <>
            <EstiloGlobal />
            <BarraTopo />
            <main>
                <Hero />
                <Biografia />
                <Experiencia />
                <Projetos />
                <Contato />
            </main>
            <Footer />
        </>
    );
}

export default App;
