// import { EDUCATION_DATA } from "@/src/features/education/data/education.data"
// import { useEducation } from "@/src/features/education/hooks/useEducation"

// export default function EducationPage() {
//   const {
//     filteredData,
//     query,
//     setQuery,
//     type,
//     setType,
//     audience,
//     setAudience,
//   } = useEducation({ data: EDUCATION_DATA })

//   return (
//     <div className="space-y-6">
//       {/* 🔍 SEARCH */}
//       <input
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Cari edukasi..."
//         className="border p-2 rounded w-full"
//       />

//       {/* 🎯 FILTER */}
//       <select value={type} onChange={(e) => setType(e.target.value as any)}>
//         <option value="all">Semua</option>
//         <option value="article">Artikel</option>
//         <option value="video">Video</option>
//       </select>

//       {/* 📦 LIST */}
//       <div className="grid grid-cols-2 gap-4">
//         {filteredData.map((item) => (
//           <div key={item.id}>{item.title}</div>
//         ))}
//       </div>
//     </div>
//   )
// }