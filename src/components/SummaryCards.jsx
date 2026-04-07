export default function SummaryCards({ transactions }) {
    const income = transactions.filter(t => t.type === 'income').reduce((a, b) => a + b.amount, 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((a, b) => a + b.amount, 0);
    const balance = income - expense;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="card bg-gradient-to-r from-green-400 to-green-600 text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Balance</h2>
                    <p className="text-2xl font-bold">₹{balance}</p>
                </div>
            </div>

            <div className="card bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Income</h2>
                    <p className="text-2xl font-bold">₹{income}</p>
                </div>
            </div>

            <div className="card bg-gradient-to-r from-red-400 to-red-600 text-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Expense</h2>
                    <p className="text-2xl font-bold">₹{expense}</p>
                </div>
            </div>
        </div>
    );
}