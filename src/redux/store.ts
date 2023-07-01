import { configureStore } from "@reduxjs/toolkit";
// ...

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// use with redux toolkit
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .prepend(
//         // correctly typed middlewares can just be used
//         additionalMiddleware,
//         // you can also type middlewares manually
//         untypedMiddleware as Middleware<
//           (action: Action<"specialAction">) => number,
//           RootState
//         >
//       )
//       // prepend and concat calls can be chained
//       .concat(logger),
// });

export {};
