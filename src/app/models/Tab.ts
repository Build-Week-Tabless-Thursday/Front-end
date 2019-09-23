export interface Tab {
  id: string;
  order: number;
  link: string;
  category?: string;
  note?: string;
  preview?: string;
  due?: Date;
}
