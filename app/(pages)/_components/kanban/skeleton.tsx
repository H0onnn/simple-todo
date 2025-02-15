import { Card, CardContent, CardHeader } from "@/app/shared/components/ui";

const SkeletonColumn = () => {
  return (
    <Card className="flex-1 bg-gray-50 flex flex-col h-full min-w-[330px]">
      <CardHeader className="shrink-0 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
            <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
            <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse" />
          </div>
          <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="w-48 h-4 bg-gray-200 rounded animate-pulse" />
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full h-20 bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const KanbanSkeleton = () => {
  return (
    <div className="flex justify-between space-x-2 h-full min-w-fit">
      {[1, 2, 3].map((i) => (
        <SkeletonColumn key={i} />
      ))}
    </div>
  );
};
