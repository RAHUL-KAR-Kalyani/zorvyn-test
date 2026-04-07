export default function Insights({ transactions }) {
    const totals = {};
    transactions.forEach(t => {
        if (t.type === 'expense') totals[t.category] = (totals[t.category] || 0) + t.amount;
    });

    const top = Object.entries(totals).sort((a, b) => b[1] - a[1])[0];

    return (
        <div className="card bg-base-200 shadow-lg p-4">
            <h2 className="font-semibold mb-2">Insights</h2>
            {top ? (
                <p className="text-lg">You spent most on <span className="font-bold">{top[0]}</span> (₹{top[1]})</p>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}