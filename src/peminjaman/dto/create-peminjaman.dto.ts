import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePeminjamanDto {
  @IsString()
  @IsNotEmpty()
  namaPeminjam: string;

  @IsString()
  @IsNotEmpty()
  judulBuku: string;

  @IsString()
  @IsNotEmpty()
  tanggalPinjam: string;

  @IsString()
  @IsNotEmpty()
  tanggalKembali: string;
}
