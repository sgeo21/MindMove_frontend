import { Link, useNavigate } from 'react-router-dom';
import CardCategorias from '../cardcategorias/CardCategorias'
import { useState, useEffect, useContext } from 'react';
import type Categoria from '../../../models/Categoria';
import { SyncLoader } from 'react-spinners';
import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function ListarCategorias() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info');
            navigate('/');
            return;
        }

        buscarCategorias();
    }, [token]);

    async function buscarCategorias() {
        try {
            setIsLoading(true);
            await buscar("/categorias", setCategorias, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <>
            {isLoading && (
                <div className="flex justify-center items-center w-full min-h-[70vh] bg-slate-100">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}

            <div className="flex justify-center w-full py-4 bg-violet-100">
                <div className=" container flex flex-col py-4">
                    <div className="text-red-400 flex flex-col justify-center items-center">
                        <h1 className="text-2xl lg:text-4xl font-bold pb-2">Navegue pelas Categorias</h1>
                        <p className="font-semibold text-lg pb-6">Explore as diferentes modalidades e evolua no seu ritmo!</p>
                    </div>

                    {(!isLoading && categorias.length === 0) && (
                        <span className="text-3xl text-center my-8 text-slate-800">
                            Nenhuma Categoria foi encontrada!
                        </span>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
                        {
                            categorias.map((categoria) => (
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            ))
                        }
                    </div>

                    <Link to="/cadastrarcategoria" className="hover:text-emerald-600 hover:font-semibold cursor-pointer transition flex justify-center">
                        <button
                            className="rounded-full text-slate-50 bg-violet-400 hover:bg-violet-500 flex justify-center p-2 cursor-pointer my-8"
                            type="submit"
                        >
                            Cadastrar Categoria
                        </button>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default ListarCategorias
