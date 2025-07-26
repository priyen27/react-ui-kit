import { columns } from "./components/columns";
import { DataTable } from "../data-table";

const generateSampleData = () => {
  const data = [];
  for (let i = 1; i <= 56; i++) {
    data.push({
      id: i,
      className: `Science Class #${i}`,
      capacity: 25,
      enrolled: 10,
      startDate: "05/05/2024",
    });
  }
  return data;
};

const sampleData = generateSampleData();

const TaskPage = () => {
  return (
    <div>
      <DataTable data={sampleData} columns={columns} enableFiltering />
    </div>
  );
};

export default TaskPage;
