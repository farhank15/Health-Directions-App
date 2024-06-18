import React from 'react';

const consultations = [
  { id: 1, date: '2024-01-15', doctor: 'Dr. A', summary: 'Follow-up for hypertension.' },
  { id: 2, date: '2024-02-20', doctor: 'Dr. B', summary: 'Routine check-up.' },
  { id: 3, date: '2024-03-30', doctor: 'Dr. C', summary: 'Allergy consultation.' },
];

const History = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Riwayat Konsultasi</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-2">Waktu</th>
              <th className="w-1/4 py-2">Dokter</th>
              <th className="w-1/2 py-2">Ringkasan</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map(consultation => (
              <tr key={consultation.id} className="text-center border-b">
                <td className="py-2">{consultation.date}</td>
                <td className="py-2">{consultation.doctor}</td>
                <td className="py-2">{consultation.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
