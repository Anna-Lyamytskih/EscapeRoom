export enum SortingTypesGenre {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
  All = 'all',
}

export enum SortingTypesLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
  All = 'all',
}

export type Quests = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: SortingTypesLevel;
  type: SortingTypesGenre;
  peopleMinMax: [number];
}

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: SortingTypesLevel;
  type: SortingTypesGenre;
  peopleMinMax: [number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type Day = {
  time: string;
  isAvailable: boolean;
}

export enum Date {
  Today = 'TODAY',
  Tomorrow = 'TOMORROW'
}

export type Location = {
  address: string;
  coords: [number];
}

export type QuestId = {
  id: string;
}

