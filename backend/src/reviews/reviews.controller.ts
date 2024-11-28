import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './reviews.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  createReview(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get('provider/:providerId')
  getReviewsByProvider(@Param('providerId') providerId: string) {
    return this.reviewsService.getReviewsByProviderId(providerId);
  }

  @Delete(':id')
  deleteReview(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
