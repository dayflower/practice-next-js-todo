import { atom } from 'jotai';
import { nanoid } from 'nanoid';

export type TodoItem = {
  id: string;
  message: string;
};

export const todoItemsAtom = atom([] as Array<TodoItem>);

export const addTodoItemAtom = atom(
  () => '',
  (get, set, { message }: { message: string }) => {
    set(todoItemsAtom, [
      {
        id: nanoid(),
        message: message,
      },
      ...get(todoItemsAtom),
    ]);
  }
);

export const removeTodoItemAtom = atom(
  () => '',
  (get, set, { id }: { id: string }) => {
    set(
      todoItemsAtom,
      get(todoItemsAtom).filter((item) => item.id !== id)
    );
  }
);
