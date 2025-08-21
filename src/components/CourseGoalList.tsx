import CourseGoalListItem from "@/components/CourseGoalListItem";
import Infobox from "@/components/Infobox";

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
      <Infobox
        mode="hint"
        message="You have no course goals yet. Start adding some!"
      />
    );
  }

  return (
    <>
      {courseGoals.length > 4 && (
        <Infobox
          mode="warning"
          message="You're collecting a lot of goals. Don't put too much on your plate."
          severity="high"
        />
      )}

      <div className="flex flex-col md:grid grid-cols-2 gap-4">
        {courseGoals.map((courseGoal) => (
          <CourseGoalListItem
            key={courseGoal.id}
            courseGoal={courseGoal}
            onDeleteCourseGoal={onDeleteCourseGoal}
          />
        ))}
      </div>
    </>
  );
}
