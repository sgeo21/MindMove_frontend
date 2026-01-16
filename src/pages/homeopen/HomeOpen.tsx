import { Link } from "react-router-dom"
import Carrossel from "../../components/carrossel/Carrossel"
import Login from "../login/Login"
import SobreNos from "../sobrenos/SobreNos"
import { EnvelopeOpenIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Home() {
 
    return (
        <>
            {/* Navbar da home externa */}
            <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="w-full flex justify-between items-center py-2 px-4 md:px-12">

          <div className="flex items-center">
                    <Link to="/">
                        <img src="https://ik.imagekit.io/dijdduf7u/Projeto%20Integrador/Imagem_do_WhatsApp_de_2025-10-23_as_20.05.56_f90a357b%20-%20Editado.png"
                            alt=""
                            className="w-18 hover:opacity-80 transition"
                        />
                    </Link>
                    </div>

                    {/* Menu para Desktop */}
                    <nav className="hidden md:flex items-center gap-6 font-semibold">
                        <div className="flex gap-4">
                            <Link to="/login" className="text-emerald-600 font-semibold">
                                Login
                            </Link>

                            <Link to="/cadastrar" className="text-emerald-600 font-semibold">
                                Cadastrar
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Primeira parte da Home - Hero Section */}
            <div className="flex justify-center min-h-[70vh] scroll-smooth">
                <Carrossel />
            </div>
            <header />

            
            {/* Linha decorativa */}
            <div className="bg-linear-to-r from-pink-200 via-violet-200 to-yellow-200 h-2 w-full"></div>

            {/* Terceira parte da Home - Motivos */}
            <div id="secao-sobre" className="bg-gray-200 py-24 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex text-center justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 pb-10">
                        Por que escolher o <span className="text-emerald-600">MindMove</span>?
                    </h2>
                </div>

                {/* Grid com cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-900 justify-items-center">

                    {/* Card 1 */}
                    <div className="bg-[#FF9096]/75 hover:bg-[#FF9096] min-h-80 w-70 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        <img src="https://ik.imagekit.io/p9rdkccyy/icone2.png" className="w-10 sm:w-14 md:w-16 mx-auto mb-2 object-contain" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Clareza</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Para facilitar sua jornada.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#B69CE5]/75 hover:bg-[#B69CE5] min-h-80 w-70 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6 ">
                        <img src=" https://ik.imagekit.io/p9rdkccyy/icone3.png" className="w-10 sm:w-14 md:w-16 mx-auto mb-2 object-contain" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Empatia</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Porque você importa.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#FBDE8D]/75 hover:bg-[#FBDE8D] min-h-80 w-70 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        <img src="https://ik.imagekit.io/p9rdkccyy/icone1.png" className="w-10 sm:w-14 md:w-16 mx-auto mb-2 object-contain" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Evolução</h3>
                        <p className="text-base sm:text-lg font-regular">
                           No seu ritmo, do seu jeito.
                        </p>
                    </div>
                </div>
            </div>
            {/* Linha decorativa */}
            <div className="bg-linear-to-r from-pink-200 via-violet-200 to-yellow-200 h-2 w-full "></div>
                <div id="secao-sobrenos">
                <SobreNos />
                </div>

            {/* Linha decorativa */}
            <div className="bg-linear-to-r from-pink-200 via-violet-200 to-yellow-200 h-2 w-full"></div>
            {/* Parte demonstração equipe */}
            <div id="secao-sobre" className="bg-gray-200 py-24 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex text-center justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 pb-10">
                        Conheça o time <span className="text-emerald-600"> do MindMove</span>!
                    </h2>
                </div>
                {/* Grid com cards */}
                <div className="grid grid-cols-7 gap-6 justify-items-center">

                    {/* Card 1 */}
                    <div className="bg-[#FF9096]/75 hover:bg-[#FF9096] min-h-80 w-44 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        <img src="https://ik.imagekit.io/kv6tr431r/MindMove/Geovana.jpeg" className="w-full h-full object-cover rounded-3xl" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Geovana</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Desenvolvedora.
                        </p>
                        <div className="flex gap-5 mt-6 justify-center">

                            <a href="https://github.com/sgeo21" target="_blank">
                                <GithubLogoIcon size={40} className="text-red-400" weight="fill" />
                            </a>

                            <a href="https://www.linkedin.com/in/geovana-cazali/" target="_blank">
                                <LinkedinLogoIcon size={40} className="text-red-400" weight="fill" />
                            </a>

                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#B69CE5]/75 hover:bg-[#B69CE5] min-h-80 w-44 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6 ">
                        <img src=" https://ik.imagekit.io/kv6tr431r/MindMove/Priscila.jpeg" className="w-full h-full object-cover rounded-3xl" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Priscila</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Desenvolvedora.
                        </p>
                        <div className="flex gap-5 mt-6 justify-center">

                            <a href="https://github.com/PriscilaMrozinski" target="_blank">
                                <GithubLogoIcon size={40} className="text-purple-500" weight="fill" />
                            </a>

                            <a href="https://www.linkedin.com/in/priscila-lins/" target="_blank">
                                <LinkedinLogoIcon size={40} className="text-purple-500" weight="fill" />
                            </a>

                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#FBDE8D]/75 hover:bg-[#FBDE8D] min-h-80 w-44 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        <img src="https://ik.imagekit.io/kv6tr431r/MindMove/Thuany.jpeg" className="w-full h-full object-cover rounded-3xl" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Thuany</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Desenvolvedora.
                        </p>
                        <div className="flex gap-5 mt-6 justify-center">

                            <a href="https://www.linkedin.com/in/thuanyalinesilva/" target="_blank">
                                <GithubLogoIcon size={40} className="text-yellow-500" weight="fill" />
                            </a>

                            <a href="https://www.linkedin.com/in/thuanyalinesilva/" target="_blank">
                                <LinkedinLogoIcon size={40} className="text-yellow-500" weight="fill" />
                            </a>

                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#FF9096]/75 hover:bg-[#FF9096] min-h-80 w-44 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        <img src="https://ik.imagekit.io/kv6tr431r/MindMove/Andressa.jpeg" className="w-full h-full object-cover rounded-3xl" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Andressa</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Desenvolvedora.
                        </p>
                        <div className="flex gap-5 mt-6 justify-center">

                            <a href="https://github.com/andressafunes" target="_blank">
                                <GithubLogoIcon size={40} className="text-red-400" weight="fill" />
                            </a>

                            <a href="#" target="_blank">
                                <LinkedinLogoIcon size={40} className="text-red-400" weight="fill" />
                            </a>

                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-[#B69CE5]/75 hover:bg-[#B69CE5] min-h-80 w-44 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        <img src="https://ik.imagekit.io/kv6tr431r/MindMove/Bianca.jpeg" className="w-full h-full object-cover rounded-3xl" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Bianca</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Desenvolvedora.
                        </p>
                        <div className="flex gap-5 mt-6 justify-center">

                            <a href="https://github.com/bianca-msilva" target="_blank">
                                <GithubLogoIcon size={40} className="text-purple-500" weight="fill" />
                            </a>

                            <a href="#" target="_blank">
                                <LinkedinLogoIcon size={40} className="text-purple-500" weight="fill" />
                            </a>

                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-[#FBDE8D]/75 hover:bg-[#FBDE8D] min-h-80 w-44 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        <img src="https://ik.imagekit.io/kv6tr431r/MindMove/Sofia.jpeg" className="w-full h-full object-cover rounded-3xl" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Sofia</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Desenvolvedora.
                        </p>
                        <div className="flex gap-5 mt-6 justify-center">

                            <a href="https://github.com/sofia-araujo" target="_blank">
                                <GithubLogoIcon size={40} className="text-yellow-500" weight="fill" />
                            </a>

                            <a href="https://www.linkedin.com/in/sofia-araujo-gomes/" target="_blank">
                                <LinkedinLogoIcon size={40} className="text-yellow-500" weight="fill" />
                            </a>

                        </div>
                    </div>


                    {/* Card 7 */}
                    <div className="bg-[#FF9096]/75 hover:bg-[#FF9096] min-h-80 w-44 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        <img src="https://ik.imagekit.io/kv6tr431r/MindMove/Rayssa.jpeg" className="w-full h-full object-cover rounded-3xl" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Rayssa</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Desenvolvedora.
                        </p>
                        <div className="flex gap-5 mt-6 justify-center">

                            <a href="https://github.com/Rayssa-Ferraz" target="_blank">
                                <GithubLogoIcon size={40} className="text-red-400" weight="fill" />
                            </a>

                            <a href="#" target="_blank">
                                <LinkedinLogoIcon size={40} className="text-red-400" weight="fill" />
                            </a>

                        </div>
                    </div>

                </div>
                </div>
                
            {/* Footer */}

            <footer className="w-full bg-white pt-8 pb-6 border-t-4 border-[#F7C7CC]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                {/* ESQUERDA */}
                <div className="flex flex-col max-w-md items-center text-center">
                    <p className="font-semibold text-base leading-tight text-emerald-600">
                        Atividades físicas leves e acessíveis <br />
                        para pessoas neurodivergentes.🌿 
                    </p>
                    <p className="font-semibold text-lg leading-tight mt-1 text-red-300">
                        Movimento que acalma, foco que <br />
                        transforma.
                    </p>

                    {/* Ícones */}
                    <div className="flex gap-5 mt-6 justify-center md:justify-start">

                        <a href="mailto:email@mindmove.com">
                            <EnvelopeOpenIcon size={40} className="text-violet-300" weight="fill" />
                        </a>

                        <a href="https://github.com/TechBloom-GrupoE" target="_blank">
                            <GithubLogoIcon size={40} className="text-violet-300" weight="fill" />
                        </a>

                        <a href="#">
                            <LinkedinLogoIcon size={40} className="text-violet-300" weight="fill" />
                        </a>

                    </div>

                    <p className="text-[11px] mt-6 text-emerald-600">
                        © 2025 MindMove. Todos os direitos reservados.
                    </p>
                </div>

                {/* DIREITA – LOGO */}
                <div className="flex flex-col items-center mt-10 md:mt-0">
                    <img
                        src="https://ik.imagekit.io/dijdduf7u/Projeto%20Integrador/Imagem_do_WhatsApp_de_2025-10-23_as_20.05.56_f90a357b-removebg-preview%203.svg"
                        alt="Logo MindMove"
                        className="w-16 h-16"
                    />
                    <p className="text-emerald-600 text-sm font-semibold mt-2">MindMove</p>
                </div>

            </div>
        </footer>

        </>
    )
}

export default Home
