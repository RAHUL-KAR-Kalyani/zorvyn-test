import { useState } from "react";
import { exportCSV, exportJSON } from "../utils/export";

export default function Transactions({ transactions, setTransactions, role }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const filtered = transactions
        .filter(t => t.category.toLowerCase().includes(search.toLowerCase()))
        .filter(t => filter === 'all' ? true : t.type === filter);

    return (
        <div className="card bg-base-200 shadow-lg p-4">
            <div className="flex flex-wrap gap-2 mb-4">
                <input className="input input-bordered" placeholder="Search category..." onChange={e => setSearch(e.target.value)} />
                <select className="select select-bordered" onChange={e => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <button className="btn btn-outline" onClick={() => exportCSV(transactions)}>CSV</button>
                <button className="btn btn-outline" onClick={() => exportJSON(transactions)}>JSON</button>
            </div>

            {role === 'admin' && (
                <div className="flex gap-4">
                    <button className="btn btn-primary mb-4" onClick={() => setTransactions([...transactions, { id: Date.now(), date: new Date().toISOString().split("T")[0], amount: 10000, type: 'income', category: 'Misc' }])}>+ Add Income Transaction</button>
                    <button className="btn btn-primary mb-4" onClick={() => setTransactions([...transactions, { id: Date.now(), date: new Date().toISOString().split("T")[0], amount: 100, type: 'expense', category: 'Misc' }])}>+ Add Expenses Transaction</button>
                </div>
                
            )}

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(t => (
                            <tr key={t.id}>
                                <td>{t.date}</td>
                                <td className={t.type === 'income' ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>
                                    ₹{t.amount}
                                </td>
                                <td>{t.category}</td>
                                <td className="">
                                    <span className={`badge ${t.type === 'income' ? 'badge-success capitalize' : 'capitalize badge-error'}`}>
                                        {t.type}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}