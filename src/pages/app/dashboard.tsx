import { Card } from "../../components/cards/Card";
import { Heading } from "../../components/headings/Heading";
import { Table } from "../../components/tables/Table";
import { todos } from "../../data/fake-todos";
import { DashboardLayout } from "../../layouts/DashboardLayout";

const Index = () => {
  return (
    <DashboardLayout>
      <Heading title="Todo List" />
      <Card>
        <div className="block w-full overflow-x-auto">
          <Table rows={todos} columnNames={Object.keys(todos[0])} />
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Index;
