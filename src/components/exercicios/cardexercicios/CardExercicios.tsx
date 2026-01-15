import { PencilIcon, TrashIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import type Exercicio from "../../../models/Exercicio"


interface CardExercicioProps {
	exercicio: Exercicio
}
function CardExercicios({ exercicio }: Readonly<CardExercicioProps>) {
	return (

		<div className="hover:shadow-lg flex flex-col rounded-3xl overflow-hidden justify-between items bg-slate-50 p-4 md:p-6 max-w-[350px] min-w-[350px] md:max-w-[300px] md:min-w-[300px]">
			<div className="flex items-end justify-end pr-1 gap-2">
				<Link to={`/editarexercicio/${exercicio.id}`}>
					<PencilIcon
						size={24}
						className="text-violet-400 hover:text-green-600 transition-colors"
					/>
				</Link>

				<Link to={`/deletarexercicio/${exercicio.id}`}>
					<TrashIcon
						size={24}
						className="text-violet-400 hover:text-red-400 transition-colors"
					/>
				</Link>
			</div>

			<div className="py-4">
				<video
					src={exercicio.video}
					autoPlay
					muted
					loop
					playsInline
					className="w-full rounded-xl max-h-60 object-cover"
				/>
			</div>

			<div>
				<div className="flex w-full  py-2 px-4 items-center gap-4">
					{/* <img
                        src={exercicio.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={exercicio.usuario?.nome} /> */}
					<h3 className='text-lg font-bold text-center uppercase text-violet-600 hover:text-violet-900'>
						{exercicio.nome}
					</h3>
				</div>
				<div className='p-4 '>
					<h4 className='text-lg font-semibold uppercase text-violet-600 hover:text-violet-900'>{exercicio.duracao} minutos</h4>
					<div className="mt-2 mb-4 space-y-2 justify-center align-center text-justify ">
						<p className="text-slate-800 font-semibold ">{exercicio.descricao}</p>
						<p className="text-amber-200 font-extrabold text-xl">{exercicio.estimuloSensorial}</p>
						<p className="text-slate-800 font-semibold ">Categoria: {exercicio.categoria?.descricao}</p>
					</div>
				</div>

				{/* <div className="flex flex-wrap">
				<button
					className="flex items-center justify-center w-full py-2  text-violet-600 hover:text-violet-900 font-semibold"
				>
					Exercício Completo 
				</button>
			</div> */}
			</div>
		</div>
	)
}

export default CardExercicios