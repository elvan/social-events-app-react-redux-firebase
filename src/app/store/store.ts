import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authSlice } from '../../features/auth/authSlice';
import { feedSlice } from '../../features/events/dashboard/feedSlice';
import { eventSlice } from '../../features/events/eventSlice';
import { followSlice } from '../../features/profiles/follow/followSlice';
import { photoSlice } from '../../features/profiles/photosSlice';
import { profileSlice } from '../../features/profiles/profileSlice';
import { testSlice } from '../../features/scratch/testSlice';
import { modalSlice } from '../common/modals/modalSlice';

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    events: eventSlice.reducer,
    modals: modalSlice.reducer,
    auth: authSlice.reducer,
    profiles: profileSlice.reducer,
    photos: photoSlice.reducer,
    follows: followSlice.reducer,
    feed: feedSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
