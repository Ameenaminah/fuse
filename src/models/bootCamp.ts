export interface BootCampResponse {
  id: string;
  image: string;
  title: string;
  content: string;
  period: number;
  price: number;
  isTrending?: boolean;
}
