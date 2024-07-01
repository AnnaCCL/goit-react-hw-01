import clsx from "clsx";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={s.container}>
      <table className={s.transaction_history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td className={clsx(s.firstCapitalize)}>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
