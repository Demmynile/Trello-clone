import { Todo, TypedColumn } from "@/typings";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

function Column({ id, todos, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provider) => (
        <div
          {...provider.draggableProps}
          {...provider.dragHandleProps}
          ref={provider.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`pb-2 p-2 rounded-2xl shadow-sm 
						${snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"}`}
              >
                <h2 className="flex justify-between font-bold text-xl p-2">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 rounded-full font px-2 py-2 text-sm font-normal ">
                    {todos.length}
                  </span>
                </h2>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
