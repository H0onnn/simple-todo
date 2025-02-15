import { Header, PageLayout } from "@/app/shared/components/layout";
import { KanbanBoards, Title } from "./_components";

export default function MainPage() {
  return (
    <PageLayout header={<Header />}>
      <Title />
      <KanbanBoards />
    </PageLayout>
  );
}
