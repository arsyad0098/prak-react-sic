import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        
        <div className="min-h-screen bg-slate-50 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
            {frameworkData.map((item) => (
                    <div key={item.id} className="flex flex-col bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2 group">
                        <h2 className="text-2xl font-extrabold text-slate-800 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{item.name}</h2>
                        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{item.description}</p>
                        <p className="self-start px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 rounded-full">{item.details.developer} {item.details.releaseYear}</p>
                        <a href={item.details.officialWebsite} target="_blank" className="mt-auto w-full text-center py-3 px-6 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 hover:shadow-lg transition-all duration-300">Visit Website</a>
                    </div>
            ))}
        </div>
    )
}