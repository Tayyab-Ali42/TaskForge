import type { ItemType } from "../types";

const DragIcon = () => (
    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="9" cy="5" r="1.5" />
        <circle cx="15" cy="5" r="1.5" />
        <circle cx="9" cy="12" r="1.5" />
        <circle cx="15" cy="12" r="1.5" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="15" cy="19" r="1.5" />
    </svg>
);

const EditIcon = () => (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M15.232 5.232l3.536 3.536M9 13l6.768-6.768a2 2 0 012.828 2.828L11.828 15.828 8 17l1.172-3.828z" />
    </svg>
);

const DeleteIcon = () => (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4h6v3M4 7h16" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const WarningIcon = () => (
    <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
            d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
);


type taskProps = {
    tasks: ItemType[]
}

export default function TaskCard({ tasks }: taskProps) {


    return (
        <div className=" bg-gray-100 flex flex-col gap-3     p-8">



            {tasks.map((task) => {
                return (
                    <div
                        key={task.id}
                        className="w-full max-w-xl bg-white rounded-2xl shadow-sm px-4 py-4 flex items-start gap-3 group ">
                        {/* Drag Handle */}
                        <div className="mt-1 shrink-0 cursor-grab">
                            <DragIcon />
                        </div>

                        {/* Checkbox */}
                        <div className="mt-0.5 shrink-0">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 hover:border-blue-400 transition-colors cursor-pointer" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            {/* Title */}
                            <p className="text-sm font-semibold text-gray-900 leading-snug">
                                {task.title}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-gray-400 mt-0.5 leading-snug">
                                {task.description}
                            </p>

                            {/* Tags Row */}
                            <div className="flex items-center gap-2 mt-3">
                                {/* WORK tag */}
                                <span className="text-[11px] font-semibold tracking-wide text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-md uppercase">
                                    {task.tag}
                                </span>

                                {/* High priority tag */}
                                <span className="flex items-center gap-1 text-[11px] font-semibold text-orange-500 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
                                    <WarningIcon />
                                    High
                                </span>

                                {/* Due date */}
                                <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                                    <CalendarIcon />
                                    Oct 24, 2024
                                </span>
                            </div>
                        </div>

                        {/* Action Icons */}
                        <div className="flex items-center gap-2 mt-1 shrink-0">
                            <button className="hover:text-blue-500 transition-colors">
                                <EditIcon />
                            </button>
                            <button className="hover:text-red-500 transition-colors">
                                <DeleteIcon />
                            </button>
                        </div>

                    </div>

                )
            })}

        </div>
    );
}