import { PencilIcon, TrashIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className="hover:shadow-lg flex flex-col rounded-3xl overflow-hidden justify-between items bg-slate-50 p-4 md:p-6 max-w-[200px] min-w-[200px] md:max-w-[300px] md:min-w-[300px]">
            <div className="pb-6">
                <div className="flex items-end justify-end pr-1 gap-2 ">
                    <Link to={`/editarcategoria/${categoria.id}`}>
                        <PencilIcon
                            size={22}
                            className="text-violet-400 hover:text-green-600 transition-colors"
                            weight="regular"
                        />
                    </Link>

                    <Link to={`/deletarcategoria/${categoria.id}`}>
                        <TrashIcon
                            size={22}
                            className="text-violet-400 hover:text-red-400 transition-colors"
                            weight="regular"
                        />
                    </Link>
                </div>
                <header className=" flex justify-center items-center mb-3">
                    {categoria.icone && (
                        <img
                            src={categoria.icone}
                            alt="Pré-visualização do ícone"
                            className="w-20 h-20 object-contain mt-2 rounded-xl shadow "
                        />
                    )}
                </header>
                <p className="text-center flex justify-center text-lg lg:text-xl text-violet-600 hover:text-violet-900">{categoria.descricao}</p>
            </div>
        </div>
    )
}

export default CardCategorias
