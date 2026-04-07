export const fetchTransactions = () =>
    new Promise((res) =>
        setTimeout(() =>
            res([
                { id: 1, date: "2026-04-01", amount: 5000, type: "income", category: "Salary" },
                { id: 2, date: "2026-04-02", amount: 200, type: "expense", category: "Food" },
                { id: 3, date: "2026-04-03", amount: 300, type: "expense", category: "Shopping" },
            ]),
            500
        )
    );