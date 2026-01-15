// Importa o modal de cadastro de exercícios
//import ModalExercicio from "../../components/modalexercicio/ModalExercicio"
// Importa Link para navegação entre páginas
import Carrossel from "../../components/carrossel/Carrossel";
import Footer from "../../components/footer/Footer";
import HomePrivate from "../homeprivate/HomePrivate";
import SobreNos from "../sobrenos/SobreNos"

function Home() {
 
    return (
        <>
            {/* Primeira parte da Home - Hero Section */}
            <div className="flex justify-center min-h-[70vh] scroll-smooth">
                <Carrossel />
            </div>

            {/* Linha decorativa */}
            <div className="bg-linear-to-r from-pink-200 via-violet-200 to-yellow-200 h-2 w-full"></div>


            {/* Linha decorativa */}
            <div className="bg-linear-to-r from-pink-200 via-violet-200 to-yellow-200 h-2 w-full "></div>
                <div id="secao-sobrenos">
                <HomePrivate />
                </div>
                
        </>
    )
}

export default Home
