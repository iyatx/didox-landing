export enum AppTypes {
  SET_SIZE = '@app/SET_SIZE',
}

export type ISize = 'small' | 'default';

export interface IState {
  size: ISize;
}

interface ISetSize {
  type: AppTypes.SET_SIZE;
  payload: ISize;
}

export type AppActionTypes = ISetSize;
