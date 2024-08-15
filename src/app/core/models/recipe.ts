export interface Recipe {
    name: string;
  image: string;
  video?: string;
  showVideo?: boolean;
  category: string;
  isFavorite?:string;
  ingredients?:string;
  procedure?:string;
  videocompleto?:string;
}
