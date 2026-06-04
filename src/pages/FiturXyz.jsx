import PageHeader from "../components/PageHeader";

export default function FiturXyz() {
  return (
    <div className="p-8 font-sans">
      {/* Page Header */}
      <PageHeader 
        title="Fitur Xyz"
        breadcrumb={["Dashboard", "Order List"]}
      />

      {/* Main Content */}
      <div className="mt-8">
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <p className="text-lg text-gray-700">Ini Halaman Fitur Xyz</p>
        </div>
      </div>
    </div>
  );
}
