import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto} from './dto/create-members.dto';
import { UpdateMemberDto } from './dto/update-members.dto';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('members')
export class MembersController {
    constructor(private readonly MembersService:
        MembersService) { }
    @Roles(UserRole.ADMIN)

    @Post()
    create(@Body() dto: CreateMemberDto) {
        return this.MembersService.create(dto);
    }
    @Get()
    findAll() {
        return this.MembersService.findAll();
    }
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.MembersService.findOne(id);
    }
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body()
    dto: UpdateMemberDto) {
        return this.MembersService.update(id, dto);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.MembersService.remove(id);
    }
}