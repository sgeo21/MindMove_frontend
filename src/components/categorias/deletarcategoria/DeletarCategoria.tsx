import { Check, X } from "@phosphor-icons/react"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { SyncLoader } from "react-spinners"
import { AuthContext } from "../../../contexts/AuthContext"
import type Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarCategoriaPorId() {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId();
        }
    }, [id])

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "info")
            navigate("/")
        }
    }, [token])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        setIsLoading(true);

        try {

            await deletar(`/categorias/${id}`, {
                headers: { Authorization: token }
            })

            ToastAlerta('Categoria deletada com sucesso!', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao deletar Categoria!', 'erro')
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="w-full min-h-[70vh] px-4 pt-6 mx-auto bg-red-100 flex justify-center">
            <div className="w-md flex flex-col  overflow-hidden justify-start">
                <h1 className="py-4 text-3xl font-semibold text-center text-slate-800 md:text-4xl">
                    Deletar Categoria
                </h1>

                <p className="mb-4 text-base font-medium text-center text-slate-700 md:text-lg">
                    Tem certeza que deseja deletar a categoria abaixo?
                </p>

                <div className="border border-red-300 flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg shadow-amber-400/50">
                    <header
                        className="py-2 px-6 text-slate-900 bg-white/85 text-center text-xl lg:text-2xl"
                    >
                        Categoria
                    </header>
                    <p
                        className="p-4 text-xl text-slate-900 font-light lg:text-3xl text-center bg-white/85 h-full"
                    >
                        {categoria.descricao}
                    </p>
                    <div className="flex">
                        <button
                            className="text-slate-100 flex justify-center bg-red-200 hover:bg-red-400 w-full py-2"
                            onClick={retornar}
                        >
                            <X
                                width={40}
                                color="#emerald-900"
                                weight="bold"
                            />
                        </button>

                        <button
                            className="text-slate-100 flex justify-center bg-emerald-200 hover:bg-emerald-400 w-full py-2"
                            onClick={deletarCategoria}
                        >
                            {
                                isLoading ?
                                    <SyncLoader
                                        color="#ffffff"
                                        size={24}
                                    />
                                    :
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

export default DeletarCategoria
