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
    <Card>
      <CardHeader>
        <CardTitle>{courseGoal.title}</CardTitle>
        <CardDescription>{courseGoal.description}</CardDescription>
        <CardAction>
          <Button
            size={"sm"}
            variant="ghost"
            className="cursor-pointer"
            onClick={() => onDeleteCourseGoal(courseGoal.id)}
          >
            Delete
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
