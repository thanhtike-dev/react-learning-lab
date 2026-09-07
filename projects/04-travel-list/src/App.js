import { useState } from 'react';

export default function App() {
  const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: true },
  ];

  return (
    <div>
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  const [quantity, setQuantity] = useState(1);
  const [description, setDesc] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItems = [{ id: Date.now(), description, quantity, packed: false }];

    console.log(newItems);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ initialItems }) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <li key={item.id}>
            <input type="checkbox" />
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
              {item.description}
            </span>
            <button>❌</button>
          </li>
        ))}
      </ul>

      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have XX items on your list, and you already packed XX XX%</em>
    </footer>
  );
}
