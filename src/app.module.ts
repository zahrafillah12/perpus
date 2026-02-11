import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { PeminjamanModule } from './peminjaman/peminjaman.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule, // ⬅️ TAMBAHKAN INI
    BooksModule,
    MembersModule,
    UsersModule,
    PeminjamanModule
  ],
})
export class AppModule {}
