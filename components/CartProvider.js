"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try { const s = localStorage.getItem("sad-cart"); if (s) setItems(JSON.parse(s)); } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) { try { localStorage.setItem("sad-cart", JSON.stringify(items)); } catch {} }
  }, [items, ready]);

  const add = (id, size) => setItems((p) => {
    const found = p.find((x) => x.id === id && x.size === size);
    return found ? p.map((x) => (x === found ? { ...x, qty: x.qty + 1 } : x)) : [...p, { id, size, qty: 1 }];
  });
  const change = (id, size, d) => setItems((p) =>
    p.map((x) => (x.id === id && x.size === size ? { ...x, qty: x.qty + d } : x)).filter((x) => x.qty > 0));
  const clear = () => setItems([]);
  const count = items.reduce((n, x) => n + x.qty, 0);

  return <CartContext.Provider value={{ items, add, change, clear, count, ready }}>{children}</CartContext.Provider>;
}
