import CourseGoalListItem from "@/components/CourseGoalListItem";

import { type CourseGoal } from "@/types";

type CourseGoalListProps = {
  courseGoals: CourseGoal[];
  onDeleteCourseGoal: (id: number) => void;
};

export default function CourseGoalList({
  courseGoals,
  onDeleteCourseGoal,
}: CourseGoalListProps) {
  if (courseGoals.length === 0) {
    return (
      <p className="text-sm text-gray-500 text-center">No course goals yet</p>
    );
  }

  return (
    <div className="flex flex-col md:grid grid-cols-2 gap-4">
      {courseGoals.map((courseGoal) => (
        <CourseGoalListItem
          key={courseGoal.id}
          courseGoal={courseGoal}
          onDeleteCourseGoal={onDeleteCourseGoal}
        />
      ))}
    </div>
  );
}
