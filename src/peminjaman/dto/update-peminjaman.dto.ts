import { IsEnum, IsOptional, IsDateString } from 'class-validator';

export class UpdatePeminjamanDto {
  @IsEnum(['DIPINJAM', 'DIKEMBALIKAN'])
  status: 'DIPINJAM' | 'DIKEMBALIKAN';

  @IsOptional()
  @IsDateString()
  tanggalKembali?: string;
}
