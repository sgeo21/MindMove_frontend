import { Link } from "react-router-dom";

function HomePrivate() {
    return (
        <div className="min-h-screen bg-[#DCF0EE] flex items-center justify-center py-24 px-6">

            <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 sm:p-16 text-center border border-white">

                {/* Título */}
                <h1 className="text-4xl sm:text-5xl font-semibold text-emerald-600 mb-8">
                    Movimento no Seu Ritmo 🌿
                </h1>

                {/* Texto principal */}
                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-semibold max-w-3xl mx-auto whitespace-pre-line">
                    Aqui, o movimento respeita você e o seu tempo.
                    Cada exercício foi cuidadosamente pensado para ser simples, acessível e
                    totalmente adaptável às suas necessidades, permitindo que você se
                    exercite com leveza e confiança.
                    <br /><br />
                    O MindMove incentiva a prática diária de atividades físicas como uma
                    forma de cuidado integral, equilíbrio emocional e bem-estar mental duradouro.<br />
                    Cada pequeno movimento é um progresso importante, cada passo, cada respiração, 
                    cada alongamento contribui para sua saúde e felicidade.
                </p>

                <Link to="/exercicios" className="mt-6 inline-block">
                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition">
                        Inicie sua Jornada Fitness
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default HomePrivate;