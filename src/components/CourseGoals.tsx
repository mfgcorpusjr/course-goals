import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import CourseGoalForm from "@/components/CourseGoalForm";
import CourseGoalList from "@/components/CourseGoalList";

import { type CourseGoal } from "@/types";

import logo from "@/assets/logo.jpg";

export default function CourseGoals() {
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (courseGoal: CourseGoal) => {
    setCourseGoals((courseGoals) => [...courseGoals, courseGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    setCourseGoals((courseGoals) =>
      courseGoals.filter((courseGoal) => courseGoal.id !== id)
    );
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="space-y-8">
        <Header
          image={{ src: logo, alt: "Course Goals" }}
          title="Your Course Goals"
        />

        <CourseGoalForm onAddCourseGoal={handleAddGoal} />

        <CourseGoalList
          courseGoals={courseGoals}
          onDeleteCourseGoal={handleDeleteGoal}
        />
      </CardContent>
    </Card>
  );
}
