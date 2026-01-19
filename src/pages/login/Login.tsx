import { useState, useContext, useEffect, type ChangeEvent, type FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import type UsuarioLogin from "../../models/UsuarioLogin"
import { ClipLoader } from "react-spinners"
import { AuthContext } from "../../contexts/AuthContext"

function Login() {
  const navigate = useNavigate()

	const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)

	const { usuario, handleLogin, isLoading } = useContext(AuthContext)

	useEffect( () => {
		if (usuario.token !== ""){
			navigate('/home')
		}
	}, [usuario])

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setUsuarioLogin({
			...usuarioLogin,
			[e.target.name]: e.target.value,
		})
	}

	function login(e: FormEvent<HTMLFormElement>){
		e.preventDefault();

		handleLogin(usuarioLogin);
	}

  return (
    <div className="bg-[#DCF0EE] w-full min-h-screen flex justify-center items-center px-4">
      <div className="flex items-center justify-center flex-col w-full">
		<Link to="/">
        <img src="https://ik.imagekit.io/gwm5ha4ws/Group%2016.svg" alt="" className="mt-10 w-32 sm:w-40 md:w-48 lg:w-56"/>
        </Link>
        <form className="bg-white 
            w-full 
            max-w-lg 
            rounded-2xl 
            flex flex-col 
            gap-4 
            p-8 
            mt-10 
            mb-10
            sm:p-12" 
        onSubmit={login}>
          <h2 className="text-3xl sm:text-4xl text-center">Bem-vindo de volta!</h2>
          <p className="text-center text-xl sm:text-2xl text-emerald-600">Entre para acessar seus exercícios</p>
					<div className="flex flex-col w-full">
						<label htmlFor="usuario">Usuário</label>
						<input
							type="text"
							id="usuario"
							name="usuario"
							placeholder="Usuário (e-mail123@exemplo.com)"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3"
              value={usuarioLogin.usuario}
							onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          <div className="flex flex-col w-full">
						<label htmlFor="senha">Senha</label>
						<input
							type="password"
							id="senha"
							name="senha"
							placeholder="Senha"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3"
              value={usuarioLogin.senha}
							onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          <button className="p-4 
              bg-emerald-600 
              rounded-2xl 
              text-white 
              font-bold 
              text-lg sm:text-xl
              w-full sm:w-3/4 
              mx-auto 
              hover:bg-emerald-800 
              my-5">
          {
							isLoading ?

								<ClipLoader
									color="#ffffff"
									size={24}
								/>

							:

								<span>Entrar</span>

						}
          </button>
          <p className="text-center text-lg sm:text-xl">Não tem uma conta? {' '}
            <Link to="/cadastrar">
              <span className="text-emerald-600 hover:text-emerald-800 hover:font-bold cursor-pointer transition">
                Cadastre-se
              </span>
            </Link>
			</p>
			<p className="text-center text-lg sm:text-xl">Não é isso que estava procurando? {' '}
            <Link to="/">
              <span className="text-emerald-600 hover:text-emerald-800 hover:font-bold cursor-pointer transition">
                Voltar
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login