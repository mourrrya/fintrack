import TransactionBtn from "../components/transactionBtn";
import TransactionList from "../components/transactionList";
import TxnReport from "../components/txnReport";
import TxnTotal from "../components/txnTotal";

export function Dashboard() {
  return (
    <div className="space-y-2 h-full overflow-auto">
      <div className="shadow p-4 sticky top-0 bg-white z-10">
        <div className="absolute right-3">
          <TxnReport />
        </div>
        <div className="flex justify-center ">
          <TransactionBtn />
        </div>
        <div className="absolute top-3">
          <TxnTotal />
        </div>
      </div>
      <div className="px-8">
        <TransactionList />
      </div>
    </div>
  );
}
