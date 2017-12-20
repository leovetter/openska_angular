export interface Movie {
  id: number;
  title: string;
  category: string;
  categoryId: number;
  summary: string;
  releasedDate: string;
  image: {
    src: string;
  };
  video: {
    youtube: string;
  };
  // sessions?: Session[];
  sessionsIds?: number[];
}
