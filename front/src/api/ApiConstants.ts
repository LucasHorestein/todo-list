export const ApiConstants = {
  TODO: {
    ADD: () => {
      return "/todo/" ;
    },
    FIND_NOT_COMPLETED: () => {
      return "/todo/findAllNotCompleted/" ;
    },
    FIND_COMPLETED: () => {
      return "/todo/findAllCompleted/" ;
    },
    MARK_COMPLETE: (todoId: number) => {
      return "/todo/" + todoId;
    },
    UPDATE: (todoId: number) => {
      return "/todo/" + todoId;
    },
    DELETE: (todoId: number) => {
      return "/todo/" + todoId;
    },
  },
};
