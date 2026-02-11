/*
  Warnings:

  - You are about to drop the column `judulBuku` on the `peminjaman` table. All the data in the column will be lost.
  - You are about to drop the column `namaPeminjam` on the `peminjaman` table. All the data in the column will be lost.
  - Added the required column `bookId` to the `Peminjaman` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Peminjaman` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Peminjaman` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `peminjaman` DROP COLUMN `judulBuku`,
    DROP COLUMN `namaPeminjam`,
    ADD COLUMN `bookId` INTEGER NOT NULL,
    ADD COLUMN `status` ENUM('DIPINJAM', 'DIKEMBALIKAN') NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `tanggalPinjam` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `tanggalKembali` DATETIME(3) NULL;
