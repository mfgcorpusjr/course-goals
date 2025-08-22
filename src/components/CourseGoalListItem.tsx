import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { type CourseGoal } from "@/types";

type CourseGoalListItemProps = {
  courseGoal: CourseGoal;
  onDeleteCourseGoal: (id: number) => void;
};

export default function CourseGoalListItem({
  courseGoal,
  onDeleteCourseGoal,
}: CourseGoalListItemProps) {
  return (
    <Card className="bg-stone-800 border-none">
      <CardHeader>
        <CardTitle className="text-indigo-500">{courseGoal.title}</CardTitle>
        <CardDescription className="text-stone-300">
          {courseGoal.description}
        </CardDescription>
        <CardAction>
          <Button
            size="sm"
            variant="outline"
            className="cursor-pointer bg-stone-100"
            onClick={() => onDeleteCourseGoal(courseGoal.id)}
          >
            Delete
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
