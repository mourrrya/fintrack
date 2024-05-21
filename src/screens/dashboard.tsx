import TransactionBtn from "../components/transactionBtn";
import TransactionList from "../components/transactionList";

export function Dashboard() {
  return (
    <div className="space-y-2 h-full overflow-auto">
      <div className="flex p-4 shadow justify-center sticky top-0 bg-white z-10">
        <TransactionBtn />
      </div>
      <div className="px-8">
        <TransactionList />
      </div>
    </div>
  );
}
