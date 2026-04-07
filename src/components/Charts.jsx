import { LineChart, Line, PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

export default function Charts({ transactions }) {
    const expenseData = Object.values(
        transactions.filter(t => t.type === 'expense').reduce((acc, c) => {
            acc[c.category] = acc[c.category] || { name: c.category, value: 0 };
            acc[c.category].value += c.amount;
            return acc;
        }, {})
    );

    return (
        <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-200 shadow-lg p-4 h-72">
                <h2 className="font-semibold mb-2">Balance Trend</h2>
                <ResponsiveContainer>
                    <LineChart data={transactions}>
                        <Tooltip />
                        <Line dataKey="amount" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="card bg-base-200 shadow-lg p-4 h-72">
                <h2 className="font-semibold mb-2">Spending Breakdown</h2>
                <ResponsiveContainer>
                    <PieChart>
                        <Tooltip />
                        <Pie data={expenseData} dataKey="value" nameKey="name" outerRadius={80} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}