export enum SortingTypesGenre {
  Adventure = 'adventure',
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

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: SortingTypesLevel;
  type: SortingTypesGenre;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type Quests = Omit<Quest, 'description' | 'coverImg' | 'coverImgWebp'>[]

export type Day = {
  time: string;
  isAvailable: boolean;
}

export enum Date {
  Today = 'TODAY',
  Tomorrow = 'TOMORROW'
}
