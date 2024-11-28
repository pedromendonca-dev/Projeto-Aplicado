export class CreateReviewDto {
  provider_id: string;
  consumer_id: string;
  rating: number;
  comment?: string;
  userId?: string;
}
