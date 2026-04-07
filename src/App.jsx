import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard.jsx";
import { fetchTransactions } from "./api/mockApi";
import { loadData, saveData } from "./utils/storage";

export default function App() {
  const [role, setRole] = useState('viewer');
  const [theme, setTheme] = useState('light');
  const [transactions, setTransactions] = useState([]);

  // useEffect(() => {
  //   const local = loadData();
  //   if (local) setTransactions(local);
  //   else fetchTransactions().then(setTransactions);
  // }, []);
  useEffect(() => {
    const local = loadData();

    if (local && local.length > 0) {
      setTransactions(local);
    } else {
      fetchTransactions().then((data) => {
        setTransactions(data);
      });
    }
  }, []);

  useEffect(() => {
    saveData(transactions);
  }, [transactions]);

  return (
    <div data-theme={theme} className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200 shadow-md px-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">💰 Finance Dashboard</h1>
        </div>
        <div className="flex gap-2">
          <select className="select select-bordered" value={role} onChange={e => setRole(e.target.value)}>
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
          <button className="btn btn-outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>🌙</button>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        <Dashboard role={role} transactions={transactions} setTransactions={setTransactions} />
      </div>
    </div>
  );
}