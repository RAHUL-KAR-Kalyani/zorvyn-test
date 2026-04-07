import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";
import Transactions from "../components/Transactions";
import Insights from "../components/Insights";

export default function Dashboard({ role, transactions, setTransactions }) {
    return (
        <div className="space-y-8">
            <SummaryCards transactions={transactions} />
            <Charts transactions={transactions} />
            <Transactions role={role} transactions={transactions} setTransactions={setTransactions} />
            <Insights transactions={transactions} />
        </div>
    );
}