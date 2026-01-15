// src/pages/sobrenos/SobreNos.tsx

function SobreNos() {
  return (
    <div className="min-h-screen bg-[#DCF0EE] flex items-center justify-center py-24 px-6">
      
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 sm:p-16 text-center border border-white">
        
        {/* Logo 
        <img
          src="https://ik.imagekit.io/techbloom/MindMove/logo.png"
          alt="Logo MindMove"
          className="w-24 mb-8 drop-shadow-md"
        />*/}

        {/* Título */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-emerald-600 mb-8">
          Sobre Nós 🌿
        </h1>

        {/* Texto principal */}
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed font-semibold max-w-3xl mx-auto whitespace-pre-line">
          {`O MindMove nasceu com o propósito de transformar vidas através do movimento da mente. Nossa missão é criar experiências que unem inovação, bem-estar e desenvolvimento humano.

         Inspirados pela necessidade de conectar pessoas e promover saúde mental, 
         desenvolvemos soluções digitais que ajudam indivíduos e organizações a alcançarem seu potencial máximo.`}
        </p>

      </div>
    </div>
  );
}

export default SobreNos;
