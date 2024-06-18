import React, { useState } from "react";
import obat1 from "../../assets/images/Obat/obat1.png";
import obat2 from "../../assets/images/Obat/obat2.png";
import obat3 from "../../assets/images/Obat/obat3.png";
import obat4 from "../../assets/images/Obat/obat4.png";
import obat5 from "../../assets/images/Obat/obat5.png";
import obat6 from "../../assets/images/Obat/obat6.png";
import obat7 from "../../assets/images/Obat/obat7.png";
import obat8 from "../../assets/images/Obat/obat8.png";
import obat9 from "../../assets/images/Obat/obat9.png";
import obat10 from "../../assets/images/Obat/obat10.png";
import obat11 from "../../assets/images/Obat/obat11.png";
import obat12 from "../../assets/images/Obat/obat12.png";

const products = [
  {
    id: 1,
    name: "Bisolvon Extra 60 ml",
    price: "Rp60.000",
    imageUrl: obat1,
  },
  {
    id: 2,
    name: "OBH Combi Plus Batuk Flu 100 ml",
    price: "Rp118.100",
    imageUrl: obat2,
  },
  {
    id: 3,
    name: "Actifed Plus Cough Supressant 60 ml",
    price: "Rp70.000",
    imageUrl: obat3,
  },
  {
    id: 4,
    name: "Actifed Plus Expectorant 60 ml",
    price: "Rp70.000",
    imageUrl: obat4,
  },
  {
    id: 5,
    name: "Propepsa Suspensi 100 ml",
    price: "Rp89.000",
    imageUrl: obat5,
  },
  {
    id: 6,
    name: "Polysilane Suspensi 100 ml",
    price: "Rp31.000",
    imageUrl: obat6,
  },
  {
    id: 7,
    name: "Plantacid Forte Suspensi 100 ml",
    price: "Rp39.000",
    imageUrl: obat7,
  },
  {
    id: 8,
    name: "Ranivel 75mg/5 ml 60 ml",
    price: "Rp92.000",
    imageUrl: obat8,
  },
  {
    id: 9,
    name: "Magtral Forte 120 ml",
    price: "Rp57.000",
    imageUrl: obat9,
  },
  {
    id: 10,
    name: "Polycrol Forte 100 ml",
    price: "Rp36.000",
    imageUrl: obat10,
  },
  {
    id: 11,
    name: "Panadol Extra 10 Kaplet",
    price: "Rp14.000",
    imageUrl: obat11,
  },
  {
    id: 12,
    name: "Frego 5 mg 10 Tablet",
    price: "Rp120.000",
    imageUrl: obat12,
  }
];

const Medicine = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 px-4">Obat</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-2xl shadow-sm bg-[#F1F9E9]">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-32 object-contain mb-4 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-4">{product.price}</p>
            <button className="px-5 py-2 mr-8 btn">Beli</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#F1F9E9] p-4 rounded-lg shadow-lg max-w-md mx-auto relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              &times;
            </button>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full h-64 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-500 mb-4">{selectedProduct.price}</p>
            <button className="px-5 py-2 mr-8 btn" onClick={handleClose}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Medicine;
