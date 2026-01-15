import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"
import {
  CalendarIcon,
  BarbellIcon,
  EnvelopeIcon,
  UserCircleIcon,
  RulerIcon,
  BrainIcon
} from "@phosphor-icons/react"
import { buscar, calcularIMC } from "../../services/Service"

function Perfil() {
  const navigate = useNavigate()

  const { usuario } = useContext(AuthContext)
  const [dadosCompletos, setDadosCompletos] = useState<any>({})
  const [imcResultado, setImcResultado] = useState<any>(null)

  useEffect(() => {
    if (usuario.id !== 0) {
      buscar(`/usuarios/${usuario.id}`, setDadosCompletos, {
        headers: {
          Authorization: usuario.token
        }
      })
    }
  }, [usuario.id])

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Você precisa estar logado", "info")
      navigate("/")
    }
  }, [usuario.token])

  function formatarDataBrasileira(dataISO: string) {
    return new Date(dataISO).toLocaleDateString("pt-BR", { timeZone: "UTC" });
  }

  // 🔥 Função com SECURITY — envia token no header
  async function verificarIMC() {
    try {
      const resposta = await calcularIMC(
        `/usuarios/calcular-imc/${usuario.id}`,
				setImcResultado,
        {
          headers: {
            Authorization: usuario.token
          }
        }
      );
			console.log(resposta);
      setImcResultado(resposta); // { imc: 22, interpretacao: "Peso normal" }
      ToastAlerta("IMC calculado com sucesso!", "sucesso");

    } catch (error) {
      console.error("Erro ao calcular IMC:", error);
      ToastAlerta("Erro ao calcular IMC!", "erro");
    }
  }

	function corIMC(interpretacao: string) {
  switch (interpretacao) {
    case "Abaixo do peso":
      return "bg-blue-100 border-blue-300 text-blue-700";

    case "Peso normal":
      return "bg-green-100 border-green-300 text-green-700";

    case "Sobrepeso":
      return "bg-yellow-100 border-yellow-300 text-yellow-700";

    case "Obesidade":
      return "bg-orange-100 border-orange-300 text-orange-700";
  }
}

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-amber-100 px-4">
      <div className="container mx-auto my-4 rounded-2xl overflow-hidden bg-white shadow-lg
        flex flex-col items-center p-6 sm:p-10 md:p-16 justify-between 
        w-full max-w-sm md:max-w-md lg:max-w-lg">

        {/* Foto do usuário */}
        <img
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full mx-auto border-2 border-[#DCF0EE]"
          src={usuario.foto}
          alt={`Foto de perfil de ${usuario.nome}`}
        />

        {/* Dados do usuário */}
        <div className="flex flex-col items-left gap-3">

          <p className="text-left mt-6 text-lg font-medium flex items-center gap-2">
            <UserCircleIcon size={26} /> {dadosCompletos.nome}
          </p>

          <p className="text-lg font-medium flex items-center gap-2">
            <EnvelopeIcon size={26} /> {dadosCompletos.usuario}
          </p>

          <p className="text-lg font-medium flex items-center gap-2">
            <BrainIcon size={26} /> {dadosCompletos.perfil}
          </p>

          <p className="text-lg font-medium flex items-center gap-2">
            <CalendarIcon size={26} /> {formatarDataBrasileira(dadosCompletos.data_nasc)}
          </p>

          <p className="text-lg font-medium flex items-center gap-2">
            <RulerIcon size={26} /> {dadosCompletos.altura} m
          </p>

          <p className="text-lg font-medium flex items-center gap-2">
            <BarbellIcon size={26} /> {dadosCompletos.peso} kg
          </p>

        </div>

       {imcResultado && (
			<div className={`text-center mt-4 p-3 rounded-xl w-full border ${corIMC(imcResultado.interpretacao)}`}>
				<p className="text-lg font-semibold">
					IMC: {imcResultado.imc}
				</p>
				<p className="italic">
					{imcResultado.interpretacao}
				</p>
			</div>
			)}

        {/* Botões */}
        <div className="w-full space-y-4 mt-6">

          {/* Botão Verificar IMC */}
          <button
            onClick={verificarIMC}
            className="w-full bg-red-200 text-black text-lg px-8 py-3 rounded-xl shadow-lg 
            hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Verificar IMC
          </button>

          {/* Botão Editar Perfil */}
          <Link to={`/atualizarusuario`} className="w-full block">
            <button className="w-full bg-violet-400 hover:bg-violet-500 text-black text-lg  
              px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 
              transition-all duration-200 flex items-center justify-center gap-2">
              Editar Perfil
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Perfil