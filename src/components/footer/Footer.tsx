import { EnvelopeOpenIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
    const { usuario } = useContext(AuthContext);

	let component: ReactNode

	if (usuario.token !== ""){
        component = (
                    <>
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
    )}

    return (
        <>
            {component}
        </>
    );
}

export default Footer;
