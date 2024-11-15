export interface Review {
  id: string;
  provider_id: string;
  consumer_id: string;
  rating: number;
  comment?: string;
  created_at: Date;
}
