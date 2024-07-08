/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useAppDispatch } from "@/redux/hooks";
import { addTodo } from "@/redux/features/todoSlice";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const randomId = Math.random().toString(36).substring(2);
  const dispatch = useAppDispatch();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const taskDetails = {
      id: randomId,
      title: task,
      description: description,
    };
    // console.log(taskDetails);
    dispatch(addTodo(taskDetails));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-lg font-semibold">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Tasks</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                placeholder="Tell us a little bit about yourself"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button
                className="bg-primary-gradient text-lg font-semibold"
                type="submit"
              >
                Add Now
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
