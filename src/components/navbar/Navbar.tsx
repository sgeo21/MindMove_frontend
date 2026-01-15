import { List, SignOut, SignOutIcon, UserCircleIcon, X } from "@phosphor-icons/react"
import { useContext, useRef, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

type MenuState = "closed" | "open";

interface NavbarProps {
  menuState: MenuState;
  onMenuToggle: () => void;
  onMenuClose: () => void;
}

function Navbar({
  menuState,
  onMenuToggle,
}: Readonly<NavbarProps>) {

  const menuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

	const { usuario, handleLogout } = useContext(AuthContext);

	function logout(){
		handleLogout();
		ToastAlerta('O Usuário foi desconectado com sucesso!', "info");
		navigate('/');
	}

  let component: ReactNode

  if(usuario.token !== "") {
    component = (
      <>
      <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="w-full flex justify-between items-center py-2 px-4 md:px-12">

          <div className="flex items-center">
            <Link to="/home">
              <img src="https://ik.imagekit.io/dijdduf7u/Projeto%20Integrador/Imagem_do_WhatsApp_de_2025-10-23_as_20.05.56_f90a357b%20-%20Editado.png"
                alt=""
                className="w-18 hover:opacity-80 transition"
              />
            </Link>
          </div>

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            {menuState === "open" ? <X size={32} /> : <List size={32} />}
          </button>

          {/* Menu para Desktop */}
          <nav className="hidden md:flex items-center gap-6 font-semibold">
            <div className="flex gap-4">
              <Link to="/exercicios" className="text-emerald-600 hover:text-emerald-900 hover:font-semibold cursor-pointer transition">
                Exercícios
              </Link>
              <Link to="/categorias" className="text-emerald-600 hover:text-emerald-900 hover:font-semibold cursor-pointer transition">
                Categorias
              </Link>
              <Link to='/sobrenos' className="text-emerald-600 hover:text-emerald-900 hover:font-semibold cursor-pointer transition">
                Sobre nós
              </Link>
              <Link to='/perfil'>
                <UserCircleIcon size={26} weight="bold" className="text-emerald-600 hover:text-emerald-900 transition" />
              
              </Link>
              
              <Link to='/' onClick={logout}>
                <SignOutIcon size={26} weight="bold" className="text-emerald-600 hover:text-emerald-900 transition" />
              </Link>
              
            </div>
          </nav>
        </div >

        {/* MENU MOBILE */}
        {
          menuState === "open" && (
            <div
              ref={menuRef}
              className="md:hidden bg-white w-full shadow-inner flex flex-col items-start px-6 pb-4 gap-3 text-lg font-semibold "
            >

              <Link to="/exercicios" className="hover:text-emerald-600 hover:font-semibold cursor-pointer transition mt-6">
                Exercícios
              </Link>
              <Link to="/categorias" className="hover:text-emerald-600 hover:font-semibold cursor-pointer transition">
                Categorias
              </Link>
              <a href="#secao-sobrenos"className="hover:text-emerald-600 hover:font-semibold cursor-pointer transition">
                Sobre nós
              </a>

            <div className="flex items-center gap-4 mt-4">
              <Link to="/perfil">
                <UserCircleIcon size={35} weight="fill" />
              </Link>

                <Link to="/sair">
                  <SignOut size={25} weight="bold" />
                </Link>
              </div>
            </div>
          )
        }

      </header >

      {/* evita sobrepor conteúdo */}
      <div className="pt-24"></div>
      </>
    )}
  return (
    <>
      {component}
    </>
  )
}

export default Navbar