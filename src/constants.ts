import { SortingTypesGenre, SortingTypesLevel } from './types/quests';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Quests = 'QUESTS',
  User = 'USER',
  Booking = 'BOOKING'
}

export const listGenre = [
  {
    title: 'Все квесты',
    value: SortingTypesGenre.All,
  },
  {
    title: 'Приключения',
    value: SortingTypesGenre.Adventure,
  },
  {
    title: 'Ужасы',
    value: SortingTypesGenre.Horror,
  },
  {
    title: 'Мистика',
    value: SortingTypesGenre.Mystic,
  },
  {
    title: 'Детектив',
    value: SortingTypesGenre.Detective,
  },
  {
    title: 'Sci-Fi',
    value: SortingTypesGenre.SciFi,
  },
];

export const listLevel = [
  {
    title: 'Любой',
    value: SortingTypesLevel.All,
  },
  {
    title: 'Легкий',
    value: SortingTypesLevel.Easy,
  },
  {
    title: 'Средний',
    value: SortingTypesLevel.Medium,
  },
  {
    title: 'Сложный',
    value: SortingTypesLevel.Hard,
  },
];

export enum SortingTypesNavigation {
  Quests = '/',
  Contacts = '/contacts',
  MyQuests = '/reservation',
}


export const listAuthNavigation = [
  {
    title: 'Квесты',
    value: SortingTypesNavigation.Quests,
  },
  {
    title: 'Контакты',
    value: SortingTypesNavigation.Contacts,
  },
  {
    title: 'Мои бронирования',
    value: SortingTypesNavigation.MyQuests,
  },
];


export const listNoAuthNavigation = [
  {
    title: 'Квесты',
    value: SortingTypesNavigation.Quests,
  },
  {
    title: 'Контакты',
    value: SortingTypesNavigation.Contacts,
  },
];

export enum FetchStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Failed = 'Failed',
}
