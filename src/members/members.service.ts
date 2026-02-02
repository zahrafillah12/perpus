import { Injectable, NotFoundException } from'@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMemberDto } from './dto/create-members.dto';
import { UpdateMemberDto } from './dto/update-members.dto';
@Injectable()
export class MembersService {
    constructor(private prisma: PrismaService) { }
    async create(dto: CreateMemberDto) {
        return this.prisma.members.create({data: dto });
    }
    async findAll() {
        return this.prisma.members.findMany({
            orderBy: {
                id:
                    'asc'
            }
        });
    }
    async findOne(id: number) {
        const member = await this.prisma.members.findUnique({
            where: { id }
        });
        if (!member) throw new NotFoundException('Member notfound');
return member;
    }
    async update(id: number, dto: UpdateMemberDto) {
        await this.findOne(id);
        return this.prisma.members.update({
            where: { id },
            data: dto,
        });

    }
    async remove(id: number) {
        await this.findOne(id);
        await this.prisma.members.delete({ where: { id } });
        return { message: `Member with id ${id} deleted` };
    }
}