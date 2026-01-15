import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardExercicios from "../cardexercicios/CardExercicios";
import type Exercicio from "../../../models/Exercicio";

function ListarExercicios() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [Exercicios, setExercicios] = useState<Exercicio[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'error')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarExercicios()    
    }, [Exercicios.length])

    async function buscarExercicios() {
        try {

            setIsLoading(true)

            await buscar('/exercicios', setExercicios, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>

            {isLoading && (
                <div className="flex justify-center w-full my-8 ">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}

            <div className="flex justify-center w-full py-4 bg-violet-100">
                <div className="container flex flex-col">
                    <div className="text-red-400 flex flex-col justify-center items-center">
                        <h1 className="text-2xl lg:text-4xl font-bold pb-2">Navegue pelos Exercícios</h1>
                        <p className="font-semibold text-lg pb-6">Explore as possibilidades e encontre o seu exercício ideal!</p>
                    </div>

                    {(!isLoading && Exercicios.length === 0) && (
                            <span className="text-3xl text-center my-8 text-red-400">
                                Nenhum Exercício foi encontrado!
                            </span>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 place-items-center">
                            {
                                Exercicios.map((exercicio) => (
                                    <CardExercicios key={exercicio.id} exercicio={exercicio}/>
                                ))
                            }
                    </div>
                    <Link to="/cadastroexercicios" className="hover:text-emerald-600 hover:font-semibold cursor-pointer transition flex justify-center">
                        <button
                            className="rounded-full text-slate-50 bg-violet-400 hover:bg-violet-500 flex justify-center p-2 cursor-pointer my-8"
                            type="submit"
                        >
                            Cadastrar Exercício
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ListarExercicios;