import { IsOptional, IsString } from 'class-validator';
export class UpdatepeminjamanDto {
    @IsString()
    @IsOptional()
    amaPeminjam?: string;
    
    @IsString()
    @IsOptional()
    judulBuku?: string;

    @IsString()
    @IsOptional()
    tanggalPinjam?: string;

    @IsString()
    @IsOptional()
   tanggalKembali?: string;
}