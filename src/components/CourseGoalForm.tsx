import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import TextInput from "@/components/TextInput";

import { type CourseGoal } from "@/types";

type CourseGoalFormProps = {
  onAddCourseGoal: (courseGoal: CourseGoal) => void;
};

export default function CourseGoalForm({
  onAddCourseGoal,
}: CourseGoalFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddCourseGoal({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextInput
        label="Your Goal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextInput
        label="Short Summary"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button
        disabled={title.trim().length === 0 || description.trim().length === 0}
        className="w-full cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-stone-100 transition-colors duration-300"
      >
        Add Goal
      </Button>
    </form>
  );
}
