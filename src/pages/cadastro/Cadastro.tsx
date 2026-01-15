import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../utils/ToastAlerta";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"



function Cadastro() {
  // Objeto responsável por redirecionar o usuário para uma outra rota
	const navigate = useNavigate();
	
	// Controlar a exibição do Loader (animação de carregamento)
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// Guardar os dados do usuário
	const [usuario, setUsuario] = useState<Usuario>({
		id: 0,
		nome: "",
		usuario: "",
		senha: "",
		foto: "",
    perfil: "",
    data_nasc: "",
    altura: 0,
    peso: 0
	})

	useEffect( () => {
		if(usuario.id !== 0){
			retornar();
		}
	}, [usuario])

	function retornar(){
		navigate("/");
	}

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
		setUsuario({
			...usuario,
			[e.target.name]: e.target.value
		})
	}


	async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
		e.preventDefault();

		setIsLoading(true);

		if(usuario.senha.length >= 8){

			try{

				await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
				ToastAlerta('Usuário cadastrado com sucesso!', 'success');

			}catch(error){
				ToastAlerta('Erro ao cadastrar o usuário!', 'erro');
			}

		}else{
			ToastAlerta("Dados do usuário inconsistentes! Verifique as informações do cadastro.", 'erro');
			setUsuario({
				...usuario,
				senha: ''
			});
		}

		setIsLoading(false);
	}



 const formatarData = (data: Date | null) => {
    if (!data) return ""
    return data.toISOString().split("T")[0]  // yyyy-MM-dd
  }


  return (
	  <div className="bg-[#DCF0EE] min-h-screen w-full flex flex-col justify-center py-8  items-center px-4">
		  <Link to="/">
			  <img src="https://ik.imagekit.io/dijdduf7u/Projeto%20Integrador/Imagem_do_WhatsApp_de_2025-10-23_as_20.05.56_f90a357b%20-%20Editado.png"
				  alt=""
				  className="w-18 hover:opacity-80 transition"
			  />
		  </Link>
        <form className="bg-white 
          w-full 
          max-w-2xl 
          rounded-2xl 
          flex flex-col 
          gap-1.5
          p-8
		  mt-4
          sm:p-12 
          mb-10 " 
        onSubmit={cadastrarNovoUsuario}>
          <h2 className="text-3xl sm:text-3xl text-center">Crie sua conta</h2>
          <p className="text-center text-xl sm:text-xl text-emerald-600">Comece sua jornada de bem-estar!</p>
					<div className="flex flex-col w-full">
						<label htmlFor="nome">Nome</label>
						<input
							type="text"
							id="nome"
							name="nome"
							placeholder="Nome"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="usuario">Usuario</label>
						<input
							type="text"
							id="usuario"
							name="usuario"
							placeholder="Usuario"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.usuario}
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
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          <div className="flex flex-col w-full">
						<label htmlFor="perfil">Perfil neurodivergente</label>
						<input
							type="text"
							id="perfil"
							name="perfil"
							placeholder="Perfil"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.perfil}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
        	<div className="flex gap-5 sm:flex-row flex-col w-full">
          <div className="flex flex-col w-full">
          <label htmlFor="data_nasc">Data de nascimento</label>
          <DatePicker
            id="data_nasc"
            selected={usuario.data_nasc ? new Date(usuario.data_nasc) : null}
            onChange={(date: Date | null) => {
              const formatada = formatarData(date)
              setUsuario({ ...usuario, data_nasc: formatada })
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione a data"
            className="
              w-full border border-[#BEBDBD] rounded-3xl p-3
              text-gray-700 shadow-sm
            "
          />
        	</div>
		      <div className="flex flex-col w-full">
						<label htmlFor="foto">Foto</label>
						<input
							type="text"
							id="foto"
							name="foto"
							placeholder="Link da foto"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
			  value={usuario.foto}
			  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          </div>
		  		<div className="flex gap-5 sm:flex-row flex-col w-full">
          <div className="flex flex-col w-full">
						<label htmlFor="altura">Altura</label>
						<input
							type="number"
							id="altura"
							name="altura"
							placeholder="altura"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.altura}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          <div className="flex flex-col w-full">
						<label htmlFor="peso">Peso</label>
						<input
							type="number"
							id="peso"
							name="peso"
							placeholder="Peso"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.peso}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          </div>
          <button className="p-4 bg-emerald-600 rounded-2xl text-white font-bold 
            text-lg sm:text-xl w-full sm:w-3/4 mx-auto 
            hover:bg-emerald-800 my-5" type="submit">
          {
								isLoading ?

									<ClipLoader
										color="#ffffff"
										size={24}
									/>

								:
                <span>Cadastrar</span>
                }
          </button>
          <p className="text-center text-lg sm:text-xl">Já tem uma conta? {' '}
            <Link to='/login'>   
              <span className="text-emerald-600 hover:text-emerald-800 hover:font-bold cursor-pointer">
                Entrar 
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
  )
}

export default Cadastro

