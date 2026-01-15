import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import type Exercicio from "../../../models/Exercicio"
import { Check, X } from "@phosphor-icons/react"

function DeletarExercicios() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/exercicios/${id}`, setExercicio, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarExercicio() {
        setIsLoading(true)

        try {
            await deletar(`/exercicios/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta('Exercicio apagado com sucesso', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                ToastAlerta('Erro ao deletar o exercício!', 'erro')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/exercicios")
    }
    
    return (
        <div className='w-full min-h-[70vh] px-4 pt-6 mx-auto bg-red-100 justify-center flex'>
            <div className="w-md flex flex-col  overflow-hidden justify-start">
            <h1 className='py-4 text-3xl font-semibold text-center text-slate-800 md:text-4xl'>Deletar Exercício</h1>

            <p className='mb-4 text-base font-medium text-center text-slate-700 md:text-lg'>
                Você tem certeza de que deseja apagar o exercício a seguir?
            </p>

            <div className='border border-red-300 flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg shadow-amber-400/50'>
                <header 
                    className='py-2 px-6 text-slate-900 bg-white/85 text-center text-xl lg:text-2xl'>
                    Exercício
                </header>
                <div className="">
                    <p className='p-4 text-xl text-slate-900 font-light lg:text-3xl text-center bg-white/85 h-full'>{exercicio.nome}</p>
                </div>
                <div className="flex">
                        <button
                            className='text-slate-100 flex justify-center bg-red-200 hover:bg-red-400 w-full py-2'
                            onClick={retornar}>
                            <X
                                width={40}
                                color="#emerald-900"
                                weight="bold"
                            />
                        </button>
                        <button
                            className=' text-slate-100 flex justify-center bg-emerald-200 hover:bg-emerald-400 w-full py-2'
                            onClick={deletarExercicio}>

                            {isLoading ?
                                <ClipLoader
                                    color="#ffffff"
                                    size={24}
                                /> :
                                <span><Check
                                    width={40}
                                    color="#emerald-900"
                                    weight="bold"
                                /></span>
                            }

                        </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DeletarExercicios