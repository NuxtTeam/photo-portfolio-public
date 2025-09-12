declare global {
  export interface PortfolioImage {
    url: string;
    width: number;
    height: number;
    aspectRatio: string;
  }

  export interface WorkCard {
    slug: string;
    path: string;
    images: PortfolioImage[];
  }
}
