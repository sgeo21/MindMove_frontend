function Slide04() {

    return (
        <div className="bg-emerald-100 flex justify-center min-h-[70vh] scroll-smooth">
            <div className="grid grid-cols sm:grid-cols-2 w-full items-center">

                {/* Coluna esquerda com texto e botões */}
                <div className="p-4 ">
                    <div className="w-full max-w-5xl mx-auto py-20 pl-20 flex flex-col justify-center ">
                        <h2 className="text-5xl font-semibold text-black text-center">
                           <span className="text-emerald-600">Respire fundo!</span><br>
                           </br> 
                            Um pequeno movimento agora muda seu dia inteiro
                        </h2>
                    </div>
                </div>

                {/* Coluna direita com GIF*/}
                <div className="flex justify-center items-center">
                    <video
                        controls
                        autoPlay
                        loop
                        muted
                        className="w-14 md:w-1/2 h-52 md:h-72 lg:h-96 object-contain rounded-3xl"
                    >
                        <source
                            src="https://ik.imagekit.io/mindmove/MindMove/Respira%C3%A7%C3%A3o.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
        </div>
    )
}


export default Slide04