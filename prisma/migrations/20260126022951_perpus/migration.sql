-- CreateTable
CREATE TABLE `Peminjaman` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaPeminjam` VARCHAR(191) NOT NULL,
    `judulBuku` VARCHAR(191) NOT NULL,
    `tanggalPinjam` DATETIME(3) NOT NULL,
    `tanggalKembali` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
