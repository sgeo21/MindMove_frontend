import { Link } from "react-router-dom";

function Slide01() {   

    return (
        <div className="bg-violet-200 flex justify-center min-h-[70vh] scroll-smooth">
            <div className="grid grid-cols sm:grid-cols-2 w-full items-center">

                {/* Coluna esquerda com texto e botões */}
                <div className="p-4 ]">
                    <div className="w-full max-w-5xl mx-auto py-20 pl-20 flex flex-col justify-center ">
                        <h2 className="text-5xl font-semibold text-black text-center">
                            Comece explorando nossas <span className="text-emerald-600">categorias!</span> 
                        </h2>
                        {/* Botões de ação */}
                        <div className="mt-10 flex gap-4 justify-center">
                            {/* Botão que leva para a página Categorias*/}
                            <Link
                                to=''
                                className="px-4 py-2 rounded-3xl lg:rounded-full bg-white/25 hover:bg-white/85 border border-white transition"
                            >
                                Categorias
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Coluna direita com GIF*/}
                <div className="hidden md:flex justify-center">
                    <img
                        src="https://ik.imagekit.io/techbloom/MindMove/Apoio.png?updatedAt=1764793329340"
                        alt="Imagem Página Home"
                        className="w-2/3 md:w-2/3 mx-auto h-52 md:h-80 lg:h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    )

}
export default Slide01