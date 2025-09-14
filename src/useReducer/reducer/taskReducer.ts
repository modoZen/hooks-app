import * as z from "zod/v4";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type Taskaction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DETELE_TODO"; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

export const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const initialState: TaskState = {
  todos: [],
  completed: 0,
  length: 0,
  pending: 0,
};

export const getInitialState = <T>(
  initialState: T,
  key: string,
  Schema: z.ZodSchema<T>
): T => {
  const localStorageState = localStorage.getItem(key);

  if (!localStorageState) return initialState;

  // validation
  const result = Schema.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
    return initialState;
  }

  return result.data;
};

export const taskReducer = (
  state: TaskState,
  action: Taskaction
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        text: action.payload,
        completed: false,
        id: Date.now(),
      };

      const updatedTodos = [...state.todos, newTodo];

      return {
        ...state,
        todos: updatedTodos,
        length: updatedTodos.length,
        pending: state.pending + 1,
      };
    }
    case "DETELE_TODO": {
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      const completed = updatedTodos.filter((todo) => todo.completed).length;
      const pending = updatedTodos.filter((todo) => !todo.completed).length;

      return {
        ...state,
        todos: updatedTodos,
        length: updatedTodos.length,
        completed,
        pending,
      };
    }
    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id !== action.payload) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      });

      const completed = updatedTodos.filter((todo) => todo.completed).length;
      const pending = updatedTodos.filter((todo) => !todo.completed).length;

      return {
        ...state,
        todos: updatedTodos,
        completed,
        pending,
      };
    }

    default:
      return state;
  }
};
