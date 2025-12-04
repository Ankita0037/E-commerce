import { IsString, IsOptional, IsEnum } from 'class-validator';
import { OrderStatus } from '../enums/order-status.enum';

/**
 * DTO for updating an order
 */
export class UpdateOrderDto {
  @IsOptional()
  @IsEnum(OrderStatus, { message: 'Invalid order status' })
  status?: OrderStatus;

  @IsOptional()
  @IsString()
  shippingAddress?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
