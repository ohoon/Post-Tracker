import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchTrackInfo } from './trackingAPI';

export interface Result<T> {
  success: boolean;
  data: T;
  message: string;
}

export interface TrackInfoDict {
  [regiNo: string]: TrackInfoState;
}

export interface TrackInfoState {
  senderName: string;
  senderDate: Date;
  receiveName: string;
  receiveDate: Date;
  trackState: string;
  expressType: string;
  detailedTrackList: DetailedTrackInfo[];
  status: 'idle' | 'loading' | 'failed';
  message: string;
}

export interface DetailedTrackInfo {
  sortNo: number;
  date: Date;
  time: Date;
  status: string;
  location: string;
  remark: string;
}

const initialState: TrackInfoDict = {};

export const getTrackInfo = createAsyncThunk(
    'track_info/fetchTrackInfo',
    async (rgist: string) => {
      return await fetchTrackInfo(rgist);
    }
);

export const trackInfoSlice = createSlice({
  name: 'trackInfo',
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrackInfo.pending, (state, { meta }) => {
        const rgist = meta.arg;
        state[rgist] = { ...state[rgist], status: 'loading' };
      })
      .addCase(getTrackInfo.fulfilled, (state, { meta, payload }) => {
        const rgist = meta.arg;
        const { success, data, message } = payload as Result<TrackInfoState>;
        state[rgist] = success ? { ...data, status: 'idle' } : { ...state[rgist], status: 'failed', message: message };
      })
      .addCase(getTrackInfo.rejected, (state, { meta, error }) => {
        const rgist = meta.arg;
        state[rgist] = { ...state[rgist], status: 'failed', message: error.message ? error.message : "오류 발생" };
      });
  },
});

export const { clear } = trackInfoSlice.actions;

export const selectTrackInfoDict = (state: RootState) => state.trackInfoDict;

export default trackInfoSlice.reducer;
