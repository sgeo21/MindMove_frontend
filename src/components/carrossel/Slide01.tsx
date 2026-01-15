function Slide01() {

    const scrollToSection = () => {
        const section = document.getElementById("secao-sobrenos");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="flex justify-center min-h-[70vh] scroll-smooth bg-[#d2ebea]">
            <div className="grid grid-cols sm:grid-cols-2 w-full items-center">

                {/* Coluna esquerda com texto e botões */}
                <div className="p-4 bg-[#d2ebea]">
                    <div className="w-full max-w-5xl mx-auto py-20 pl-20 flex flex-col justify-center ">
                        <h2 className="text-5xl font-semibold text-black text-center">
                            Movimento que <span className="text-emerald-600">acalma</span>,
                            <br />
                            foco que <span className="text-emerald-600">transforma</span>.
                        </h2>
                        {/* Botões de ação */}
                        <div className="mt-10 flex gap-4 justify-center">
                            
                            {/* Botão que leva para a página Sobre Nós */}
                            {/* <button
                                onClick={scrollToSection}
                                className="px-4 py-2 rounded-3xl lg:rounded-full bg-white/25 hover:bg-white/85 border border-white transition"
                            >
                                Sobre Nós
                            </button> */}

                            {/* Modal de cadastro de exercícios */}
                            {/*<div className="flex justify-around gap-4">
                                    <ModalExercicio />
                                </div>*/}
                        </div>
                    </div>
                </div>

                {/* Coluna direita com GIF*/}
                <div className="hidden md:flex justify-center bg-[#d2ebea]">
                    <img
                        src="https://ik.imagekit.io/techbloom/MindMove/Bem.gif"
                        alt="Imagem Página Home"
                        className="w-2/3 md:w-2/3 mx-auto h-52 md:h-80 lg:h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    )

}
export default Slide01