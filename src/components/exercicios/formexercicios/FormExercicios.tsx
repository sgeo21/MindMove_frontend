import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import type Categoria from "../../../models/Categoria";
import type Exercicio from "../../../models/Exercicio";

function FormExercicios() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '', icone: '', perfilRelacionado: '' })

    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarExercicioPorId(id: string) {
        try {
            await buscar(`/exercicios/${id}`, setExercicio, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'erro');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarExercicioPorId(id)
        }
    }, [id])

    useEffect(() => {
        setExercicio({
            ...exercicio,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setExercicio({
            ...exercicio,
            [e.target.name]: e.target.value,
            categoria: categoria,
        });
    }

    function retornar() {
        navigate('/exercicios');
    }

    async function gerarNovoExercicio(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/exercicios`, exercicio, setExercicio, {
                    headers: {
                        Authorization: token,
                    },
                });

                ToastAlerta('Exercício atualizado com sucesso', 'sucesso');

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao atualizar o Exercício', 'erro')
                }
            }

        } else {
            try {
                await cadastrar(`/exercicios`, exercicio, setExercicio, {
                    headers: {
                        Authorization: token,
                    },
                })

                ToastAlerta('Exercício cadastrado com sucesso', 'sucesso');

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao cadastrar o Exercício', 'erro');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.descricao === '';

    console.log(JSON.stringify(exercicio));
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-linear-to-br from-teal-100 via-violet-200 to-red-200">
            <div className="bg-white border border-teal-300 rounded-3xl
                w-full max-w-2xl py-12 px-10 shadow-lg shadow-teal-700/30">
                <h1 className="text-xl lg:text-3xl text-center mt-2 mb-6 font-semibold text-teal-900">
                    {id !== undefined ? 'Atualizar Exercício' : 'Cadastrar Exercício'}
                </h1>

                <form className="flex flex-col gap-4"
                    onSubmit={gerarNovoExercicio}>
                    <div className="flex flex-col gap-2 text-teal-900">
                        <label htmlFor="nome">Nome do Exercício</label>
                        <input
                            type="text"
                            placeholder="Nome"
                            name="nome"
                            required
                            className="border border-teal-700 rounded p-2"
                            value={exercicio.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-teal-900">
                        <label htmlFor="video"></label>
                        <input
                            type="text"
                            placeholder="Video"
                            name="video"
                            required
                            className="border border-teal-700 rounded p-2"
                            value={exercicio.video}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Descição do Exercício</label>
                        <input
                            type="text"
                            placeholder="Descrição"
                            name="descricao"
                            required
                            className="border border-teal-700 rounded p-2"
                            value={exercicio.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="duracao">Duração do Exercício</label>
                        <input
                            type="number"
                            placeholder="Duração"
                            name="duracao"
                            required
                            className="border border-teal-700 rounded p-2"
                            value={exercicio.duracao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    {/* Aqui  */}
                    <label >
                        <span>Estímulo Sensorial:   </span>
                        <select name='estimuloSensorial'
                            value={exercicio.estimuloSensorial}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => atualizarEstado(e)}
                            className="bg-white border border-teal-700 rounded p-2">

                            <option value="">Selecione...</option>
                            <option value="Baixo">Baixo</option>
                            <option value="Médio">Médio</option>
                            <option value="Alto">Alto</option>

                        </select>
                    </label>


                    <div className="flex flex-col gap-2">
                        <p>Categoria do Exercício</p>
                        <select name="categoria" id="categoria" className='border border-teal-700 rounded p-2'
                            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                        >
                            <option value="" selected disabled>Selecione uma categoria</option>

                            {categorias.map((categoria) => (
                                <>
                                    <option value={categoria.id} >{categoria.descricao}</option>
                                </>
                            ))}

                        </select>
                    </div>
                    <button className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                        type='submit'

                        disabled={carregandoCategoria}
                    >
                        {isLoading ?
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            /> :
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                        }

                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormExercicios;