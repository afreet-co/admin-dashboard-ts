import { Card } from "../../components/cards/Card";
import { Table } from "../../components/tables/Table";
import { todos } from "../../data/fake-todos";
import { DashboardLayout } from "../../layouts/DashboardLayout";

const Index = () => {
  return (
    <DashboardLayout>
      <Card title="Todo List">
        <div className="block w-full overflow-x-auto md:px-8 px-4">
          <Table rows={todos} columnNames={Object.keys(todos[0])} />
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Index;
