import React from "react";

export default function CategoryFilter({ category, setCategory }) {
  const categories = ["All","electronics","jewelery","men's clothing","women's clothing"];
  return (
    <select value={category} onChange={e => setCategory(e.target.value)}>
      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
    </select>
  );
}
