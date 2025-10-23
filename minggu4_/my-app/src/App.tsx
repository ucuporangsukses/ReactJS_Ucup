import React from "react";
import { ProductCard } from "./components/ProductCard";
import { ProductList, Product } from "./components/ProductList";
import { ContactForm } from "./components/ContactForm";
import { useFetchData } from "./components/useFetchData";
import { isUserArray, User } from "./components/typeGuard";

export default function App() {
  const demoProducts: Product[] = [
    { id: 1, name: "Sepatu Sneaker", price: 450000, tags: ["shoes", "sport"] },
    { id: 2, name: "Jaket Bomber", price: 320000, tags: ["fashion", "outerwear"] },
    { id: 3, name: "Kaos Polos", price: 80000, tags: ["basic"] },
  ];

  const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Fetch gagal");
    return res.json();
  };

  const { data, loading, error, refetch } = useFetchData<User[]>(fetchUsers, []);
  const users: User[] = isUserArray(data) ? data : [];

  return (
    <div className="min-h-screen p-8 bg-[--bg] text-white">
      <header className="max-w-5xl mx-auto mb-6">
        <h1 className="text-4xl font-extrabold">Tugas TS + React — Bre Edition</h1>
        <p className="text-gray-400 mt-2">Soft card layout — responsive & simpel. Gaskeun!</p>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">User Demo</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => refetch()}
                className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 rounded text-sm"
              >
                Refresh Users
              </button>
              <span className="text-sm text-gray-400">
                {loading ? "Loading..." : error ? `Error` : `${users.length} users`}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {users.length > 0 ? (
              users.slice(0, 6).map(u => <ProductCard key={u.id} user={u} />)
            ) : (
              <div className="text-sm text-gray-400">No users to display.</div>
            )}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Product & Contact</h2>

            <ProductList
              products={demoProducts}
              onAdd={p =>
                alert(`Added ${p.name} — Rp${p.price.toLocaleString("id-ID")}`)
              }
            />
          </div>

          <ContactForm
            onSubmit={vals => {
              alert(`Terima kasih ${vals.name}! Pesan: "${vals.message}" terkirim.`);
            }}
          />
        </section>
      </main>

      <footer className="max-w-5xl mx-auto mt-8 text-center text-sm text-gray-500">
        TypeScript ✅ Props ✅ State ✅ Type Guards ✅ Generic Hook ✅ Tailwind ✅
      </footer>
    </div>
  );
}
