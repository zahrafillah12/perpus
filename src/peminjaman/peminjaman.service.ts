import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { UpdatePeminjamanDto } from './dto/update-peminjaman.dto';

@Injectable()
export class PeminjamanService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePeminjamanDto) {
    return this.prisma.peminjaman.create({ data: dto });
  }

  findAll() {
    return this.prisma.peminjaman.findMany({
      select: {
        userId: true,
        bookId: true,
      },
    });
  }

  async findOne(id: number) {
    const data = await this.prisma.peminjaman.findUnique({
      where: { id },
    });
    if (!data) throw new NotFoundException('Peminjaman tidak ditemukan');
    return data;
  }

  async update(id: number, dto: UpdatePeminjamanDto) {
  return this.prisma.peminjaman.update({
    where: { id },
    data: {
      status: dto.status,
      tanggalKembali: dto.tanggalKembali
        ? new Date(dto.tanggalKembali)
        : new Date(),
    },
  });
}


  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.peminjaman.delete({ where: { id } });
    return { message: 'Peminjaman dihapus' };
  }
}
