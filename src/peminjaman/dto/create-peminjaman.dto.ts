import { IsEnum, IsInt, Min } from 'class-validator';

export class CreatePeminjamanDto {
  @IsInt()
  @Min(1)
  userId: number;

  @IsInt()
  @Min(1)
  bookId: number;

  @IsEnum(['DIPINJAM', 'DIKEMBALIKAN'])
  status: 'DIPINJAM' | 'DIKEMBALIKAN';
}
