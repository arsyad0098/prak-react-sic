import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value*/
  });

  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm) ||
      framework.details.releaseYear.toString().includes(_searchTerm);
    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      {/* Bagian Input dan Select yang ditambahkan */}
      <div className="max-w-4xl mx-auto mb-10 space-y-4 md:space-y-0 md:flex md:gap-4">
        <input
          type="text"
          name="searchTerm"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search framework..."
          onChangeCapture={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <select
          name="selectedTag"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Grid List Framework */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2 group"
          >
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
              {item.name}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
              {item.description}
            </p>
            <p className="self-start px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 rounded-full">
              {item.details.developer} {item.details.releaseYear}
            </p>
            <a
              href={item.details.officialWebsite}
              target="_blank"
              className="mt-auto w-full text-center py-3 px-6 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
