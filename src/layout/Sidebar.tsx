import {
    CheckSquare,
    Layers,
    Briefcase,
    User,
    BookOpen,
    AlertCircle,
    Plus,
    Sun,
    LogOut,
} from "lucide-react";

const navLinks = [
    { id: 1, title: "All Tasks", count: 12, icon: Layers, color: "text-blue-500", active: true },
    { id: 2, title: "Work", count: 5, icon: Briefcase, color: "text-orange-400", },
    { id: 3, title: "Personal", count: 4, icon: User, color: "text-emerald-500" },
    { id: 4, title: "Learning", count: 9, icon: BookOpen, color: "text-indigo-500" },
    { id: 5, title: "Urgent", count: 2, icon: AlertCircle, color: "text-red-500" },
];

const tags = [
    { id: 1, title: "Design System", color: "#60A5FA" },
    { id: 2, title: "Q1 Planning", color: "#F97316" },
    { id: 3, title: "Side Projects", color: "#C084FC" },
];

const Sidebar = () => {
    return (
        <aside className="w-64 min-h-screen bg-white border-r border-slate-200 px-5 py-6 flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                    <CheckSquare size={24} strokeWidth={2.4} />
                </div>

                <div>
                    <h1 className="text-[18px] leading-5 font-bold text-slate-900">
                        TaskFlow Pro
                    </h1>
                    <p className="text-[11px] font-bold tracking-widest text-slate-400 mt-1">
                        WORKSPACE
                    </p>
                </div>
            </div>

            {/* Smart Lists */}
            <nav className="mt-9">
                <p className="text-[11px] font-bold tracking-widest text-slate-400 mb-4">
                    SMART LISTS
                </p>

                <ul className="space-y-1.5 ">
                    {navLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            <li key={item.id}>
                                <button
                                    className={`cursor-pointer w-full h-10 flex items-center justify-between px-3 text-sm transition
                      ${item.active
                                            ? "rounded-xl border-2 border-sky-400 bg-white text-slate-700 shadow-sm"
                                            : "rounded-xl text-slate-500 hover:bg-slate-50"
                                        }`}
                                >
                                    <span className="flex items-center gap-3">
                                        <Icon size={16} className={item.color} strokeWidth={2} />
                                        <span className="font-medium">{item.title}</span>
                                    </span>

                                    <span className="min-w-6 h-6 px-2 rounded-full bg-slate-100 text-slate-400 text-xs font-bold flex items-center justify-center">
                                        {item.count}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Custom Tags */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[11px] font-bold tracking-widest text-slate-400">
                        CUSTOM TAGS
                    </p>

                    <button className="flex items-center gap-1 text-xs font-semibold text-blue-600">
                        <Plus size={14} />
                        Add
                    </button>
                </div>

                <ul className="space-y-4">
                    {tags.map((tag) => (
                        <li
                            key={tag.id}
                            className="flex items-center gap-2 text-sm font-medium text-slate-500"
                        >
                            <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: tag.color }}
                            />
                            {tag.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-1" />

            {/* Theme Toggle */}
            <div className="rounded-2xl  bg-slate-50 px-3 py-3 flex items-center justify-between my-5 shadow-sm">
                <div className="flex items-center gap-2">
                    <Sun size={16} className="text-blue-500" />
                    <span className="text-sm font-bold text-slate-700">Light Theme</span>
                </div>

                <button className="w-10 h-6 rounded-full bg-blue-600 flex items-center justify-end px-1 shadow-inner">
                    <span className="w-4 h-4 rounded-full bg-white shadow" />
                </button>
            </div>

            {/* User */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full border-2 border-blue-500 flex items-center justify-center text-sm font-bold text-blue-600">
                        TF
                    </div>

                    <div>
                        <p className="text-sm font-bold text-slate-800">Alex Mercer</p>
                        <p className="text-xs text-slate-400">pro@taskflow.com</p>
                    </div>
                </div>

                <button className="text-slate-400 hover:text-slate-600">
                    <LogOut size={18} />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;