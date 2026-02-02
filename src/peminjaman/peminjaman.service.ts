import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PeminjamanService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.peminjaman.create({
      data: {
        namaPeminjam: dto.namaPeminjam,
        judulBuku: dto.judulBuku,
        tanggalPinjam: new Date(dto.tanggalPinjam),
        tanggalKembali: new Date(dto.tanggalKembali),
      },
    });
  }

  findAll() {
    return this.prisma.peminjaman.findMany();
  }
}
