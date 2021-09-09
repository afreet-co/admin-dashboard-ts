import { Card } from "../../components/cards/Card";
import { Heading } from "../../components/headings/Heading";
import { PaginatedTable } from "../../components/tables/PaginatedTable";
import { todos } from "../../data/fake-todos";
import { DashboardLayout } from "../../layouts/DashboardLayout";

const PaginatedTablePage = () => {
  return (
    <DashboardLayout>
      <Heading title="Todo List (Paginated)" />
      <Card>
        <div className="block w-full overflow-x-auto">
          <PaginatedTable rows={todos} columnNames={Object.keys(todos[0])} />
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default PaginatedTablePage;
