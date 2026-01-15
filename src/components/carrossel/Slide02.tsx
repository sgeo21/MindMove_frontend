function Slide02() {

    return (
        <div className=" flex justify-center min-h-[70vh] scroll-smooth bg-rose-100">
            <div className="grid grid-cols sm:grid-cols-2 w-full items-center">

                {/* Coluna esquerda com texto e botões */}
                <div className="p-4">
                    <div className="w-full max-w-5xl mx-auto py-20 pl-20 flex flex-col justify-center ">
                        <h2 className="text-5xl font-semibold text-black text-center">
                            Criado para <span className="text-emerald-600">apoiar</span> pessoas <span className="text-emerald-600">neuro divergentes</span> com exercícios leves e acessíveis
                        </h2>                       
                    </div>
                </div>

                {/* Coluna direita com GIF*/}
                <div className="hidden md:flex justify-center">
                    <img
                        src="https://ik.imagekit.io/techbloom/MindMove/Neuro.png?updatedAt=1764792858616"
                        alt="Imagem Neuro"
                        className="w-2/3 md:w-2/3 mx-auto h-52 md:h-80 lg:h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    )
}


export default Slide02