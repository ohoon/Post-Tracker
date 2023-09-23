import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import trackInfoReducer from '../features/track_info/trackInfoSlice';

export const store = configureStore({
  reducer: {
    trackInfoDict: trackInfoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
