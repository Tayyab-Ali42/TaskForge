const SearchIcon = () => (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
    </svg>
);

const SortIcon = () => (
    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9M3 12h5m8 0l4-4m0 0l4 4m-4-4v12" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
);

const PlusIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
    </svg>
);

const BellIcon = () => (
    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

export default function Header() {
    return (
        <>
            <div className="w-full max-w-screen bg-white  shadow-sm px-5 py-3.5 flex items-center gap-3">

                {/* Search Input */}
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <SearchIcon />

                    <input type="text" className="
                     px-3 py-2 text-gray-400 text-sm font-normal truncate" placeholder="Search tasks, tags, or descriptions..." />
                </div>

                {/* Divider */}
                <div className="text-gray-300 text-base font-light select-none">/</div>

                {/* Keyboard Shortcut Hint */}
                <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap shrink-0">
                    <span>Keyboard shortcut:</span>
                    <kbd className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-200 rounded text-xs font-semibold text-gray-700 font-mono">
                        N
                    </kbd>
                    <span>to add task</span>
                </div>

                {/* Sort Button */}
                <button className="flex items-center gap-2 px-3.5 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shrink-0">
                    <SortIcon />
                    <span>
                        Sort: <span className="font-semibold">Due Date</span>
                    </span>
                    <ChevronDownIcon />
                </button>

                {/* Add New Task Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-colors shrink-0">
                    <PlusIcon />
                    <span>Add New Task</span>
                </button>

                {/* Bell Icon with Notification Dot */}
                <div className="relative shrink-0">
                    <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                        <BellIcon />
                    </button>
                    <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
                </div>

            </div>
        </>
    );
}
