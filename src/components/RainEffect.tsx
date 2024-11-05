import React, {useEffect} from "react";

const RainEffect: React.FC = () => {
  useEffect(() => {
    const createRaindrops = () => {
      const rainContainer = document.querySelector(".rain-container");
      if (!rainContainer) return;

      // Log untuk memastikan rainContainer ada
      console.log("rainContainer found:", rainContainer);

      // Hapus elemen hujan lama (jika ada)
      rainContainer.innerHTML = "";

      for (let i = 0; i < 100; i++) {
        const raindrop = document.createElement("div");
        raindrop.classList.add("raindrop");
        raindrop.style.left = `${Math.random() * 100}vw`; // Posisi acak X
        raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Durasi acak
        raindrop.style.animationDelay = `${Math.random() * 2}s`; // Delay acak
        rainContainer.appendChild(raindrop);
      }

      console.log("Raindrops created!");
    };

    createRaindrops();

    // Cleanup saat komponen dibersihkan
    return () => {
      const rainContainer = document.querySelector(".rain-container");
      if (rainContainer) {
        rainContainer.innerHTML = ""; // Menghapus hujan saat komponen dibersihkan
      }
    };
  }, []);

  return (
    <div className="rain-container absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]">
      {/* Elemen hujan akan ditambahkan di sini secara dinamis */}
    </div>
  );
};

export default RainEffect;
