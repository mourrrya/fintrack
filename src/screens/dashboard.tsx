import TransactionBtn from "../components/transactionBtn";
import TransactionList from "../components/transactionList";
import TxnReport from "../components/txnReport";
import TxnTotal from "../components/txnTotal";

export function Dashboard() {
  return (
    <div className="space-y-2 h-full overflow-auto">
      <div className="shadow p-4 sticky top-0 bg-white z-10">
        <div className="w-full flex gap-4 flex-wrap justify-between items-center md:absolute left-0 top-0 p-4">
          <TxnTotal />
          <TxnReport />
        </div>
        <div className="flex justify-center ">
          <TransactionBtn />
        </div>
      </div>
      <div className="px-8">
        <TransactionList />
      </div>
    </div>
  );
}
