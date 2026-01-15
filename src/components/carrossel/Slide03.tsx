function Slide03() {

    return (
        <div className="bg-amber-100 flex justify-center min-h-[70vh] scroll-smooth">
            <div className="grid grid-cols sm:grid-cols-2 w-full items-center">

                {/* Coluna esquerda com texto e botões */}
                <div className="p-4 ">
                    <div className="w-full max-w-5xl mx-auto py-20 pl-20 flex flex-col justify-center ">
                        <h2 className="text-5xl font-semibold text-black text-center">
                            <span className="text-emerald-600">Organize</span> atividades físicas, categorias e rotinas <span className="text-emerald-600">personalizadas</span>.
                        </h2>                       
                    </div>
                </div>

                {/* Coluna direita com GIF*/}
                <div className="hidden md:flex justify-center ">
                    <img
                        src="https://ik.imagekit.io/techbloom/MindMove/Organizar.png?updatedAt=1764793540191"
                        alt="Imagem Neuro"
                        className="w-2/3 md:w-2/3 mx-auto h-52 md:h-80 lg:h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    )
}


export default Slide03