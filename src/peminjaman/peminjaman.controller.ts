import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { UpdatepeminjamanDto } from './dto/update-peminjaman.dto';

@Controller('peminjaman')
export class PeminjamanController {
    constructor(
        private readonly peminjamanService: PeminjamanService,
    ) { }

    @Post()
    create(@Body() dto: CreatePeminjamanDto) {
        return this.peminjamanService.create(dto);
    }

    @Get()
    findAll() {
        return this.peminjamanService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.peminjamanService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdatepeminjamanDto,
    ) {
        return this.peminjamanService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.peminjamanService.remove(id);
    }
}
