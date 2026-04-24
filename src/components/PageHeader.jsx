import React from "react";

export default function PageHeader({ title, breadcrumb, children }) {
  // Fungsi helper untuk merender breadcrumb (bisa string atau array)
  const renderBreadcrumb = () => {
    if (!breadcrumb) return null;

    // Jika breadcrumb adalah Array
    if (Array.isArray(breadcrumb)) {
      return breadcrumb.map((item, index) => {
        const isLast = index === breadcrumb.length - 1;
        return (
          <React.Fragment key={index}>
            {isLast ? (
              // Style untuk path terakhir (aktif)
              <span className="text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-lg border border-teal-100">
                {item}
              </span>
            ) : (
              // Style untuk path sebelumnya (bisa diklik/hover)
              <>
                <span className="text-gray-400 hover:text-teal-600 cursor-pointer transition-colors">
                  {item}
                </span>
                <span className="text-gray-300">/</span>
              </>
            )}
          </React.Fragment>
        );
      });
    }

    // Jika breadcrumb hanya String
    return (
      <span className="text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-lg border border-teal-100">
        {breadcrumb}
      </span>
    );
  };

  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10 font-sans">
      
      {/* Kiri: Title & Breadcrumb */}
      <div>
        <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
          {title}
        </h2>
        <div className="flex items-center gap-2 text-sm font-medium mt-1.5">
          {renderBreadcrumb()}
        </div>
      </div>

      {/* Kanan: Actions (Children) */}
      {children && (
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {children}
        </div>
      )}
    </header>
  );
}