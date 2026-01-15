import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { AuthContext } from "../../../contexts/AuthContext"
import { atualizar, buscar, cadastrar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { ClipLoader } from "react-spinners"

function FormCategoria() {

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            // Atualização

            try {
                await atualizar("/categorias", categoria, setCategoria, {
                    headers: { Authorization: token },
                })
                ToastAlerta("A Categoria foi atualizada com sucesso!", "sucesso")
            } catch (error: any) {
                if (error.toString().includes("401")) {
                    handleLogout()
                } else {
                    ToastAlerta("Erro ao atualizar a Categoria!", "erro")
                }
            }
        } else {
            // Cadastro

            try {
                await cadastrar("/categorias", categoria, setCategoria, {
                    headers: { Authorization: token },
                })
                ToastAlerta("A Categoria foi cadastrada com sucesso!", "sucesso")
            } catch (error: any) {
                if (error.toString().includes("401")) {
                    handleLogout()
                } else {
                    ToastAlerta("Erro ao cadastrar a Categoria!", "erro")
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-linear-to-br from-teal-100 via-violet-200 to-red-200">
            <div className="bg-white border border-teal-300 rounded-3xl
                w-full max-w-2xl py-12 px-10 shadow-lg shadow-teal-700/30">
                <h1 className="text-xl lg:text-3xl text-center mt-2 mb-6 font-semibold text-teal-900">
                    {id === undefined ? "Cadastrar" : "Atualizar"}
                </h1>
                <form className="flex flex-col gap-4"
                    onSubmit={gerarNovaCategoria}
                >
                    <div className="flex flex-col gap-2 text-teal-900">
                        <label htmlFor="descricao">Descrição</label>
                        <input
                            type="text"
                            placeholder="Descreva sua Categoria"
                            name="descricao"
                            className="border border-teal-700 rounded p-2"
                            value={categoria.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-teal-900">
                        <label htmlFor="icone">Ícone</label>
                        <input
                            type="text"
                            placeholder="Ícone da Categoria"
                            name="icone"
                            className="border border-teal-700 rounded p-2"
                            value={categoria.icone}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-teal-900">
                        <label htmlFor="icone">Perfil Neurodivergente</label>
                        <input
                            type="text"
                            placeholder="Perfil Neurodivergente"
                            name="perfilRelacionado"
                            className="border border-teal-700 rounded p-2 mb-6"
                            value={categoria.perfilRelacionado}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <button
                        className=" rounded text-slate-50 hover:font-bold bg-violet-400 hover:bg-violet-800 py-2 flex justify-center cursor-pointer"
                        type="submit"
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormCategoria
