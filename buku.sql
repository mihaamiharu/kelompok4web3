-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2019 at 10:09 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `buku`
--

-- --------------------------------------------------------

--
-- Table structure for table `bukus`
--

CREATE TABLE `bukus` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `penulis` varchar(255) DEFAULT NULL,
  `penerbit` varchar(255) DEFAULT NULL,
  `tahun_terbit` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bukus`
--

INSERT INTO `bukus` (`id`, `judul`, `penulis`, `penerbit`, `tahun_terbit`, `stock`, `harga`, `createdAt`, `updatedAt`) VALUES
(1, 'Barbaria', 'Spiderman', 'Budi', 2014, 55, 10000, '2019-07-19 05:20:57', '2019-07-19 05:23:40'),
(2, 'Litheranium', 'Lily', 'Alzhmeiru', 2018, 64, 50000, '2019-07-19 05:21:05', '2019-07-19 05:21:05'),
(3, 'Therium', 'Alhereuz', 'Elex Komputindo', 2016, 22, 180000, '2019-07-19 05:21:42', '2019-07-19 05:21:42'),
(4, 'Ea', NULL, NULL, NULL, NULL, NULL, '2019-07-19 07:49:35', '2019-07-19 07:50:06');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `jumlahbeli` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `bukuId` int(11) DEFAULT NULL,
  `sessionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `jumlahbeli`, `createdAt`, `updatedAt`, `bukuId`, `sessionId`) VALUES
(1, NULL, '2019-07-19 05:26:11', '2019-07-19 05:26:11', NULL, NULL),
(2, NULL, '2019-07-19 05:26:11', '2019-07-19 05:26:11', NULL, NULL),
(3, 10, '2019-07-19 05:27:22', '2019-07-19 05:27:22', NULL, NULL),
(4, 5, '2019-07-19 05:27:22', '2019-07-19 05:27:22', NULL, NULL),
(5, 11, '2019-07-19 05:27:22', '2019-07-19 05:27:22', NULL, NULL),
(6, 10, '2019-07-19 05:33:45', '2019-07-19 05:33:45', NULL, NULL),
(7, 5, '2019-07-19 05:33:45', '2019-07-19 05:33:45', NULL, NULL),
(8, 11, '2019-07-19 05:33:45', '2019-07-19 05:33:45', NULL, NULL),
(9, 10, '2019-07-19 07:47:05', '2019-07-19 07:47:05', NULL, NULL),
(10, 5, '2019-07-19 07:47:05', '2019-07-19 07:47:05', NULL, NULL),
(11, 11, '2019-07-19 07:47:05', '2019-07-19 07:47:05', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, '2019-07-19 05:26:11', '2019-07-19 05:26:11', 2),
(2, '2019-07-19 05:27:22', '2019-07-19 05:27:22', 2),
(3, '2019-07-19 05:33:45', '2019-07-19 05:33:45', 2),
(4, '2019-07-19 07:47:05', '2019-07-19 07:47:05', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `roles`, `createdAt`, `updatedAt`) VALUES
(1, 'mihaamiharu', 'ekki@yahoo.com', '$2a$10$4WI2uCYY0wV0E4KJTa8EoeSarSJCGbhMTDcayF6s8zMFgdedXLtYy', 'admin', '2019-07-19 05:19:42', '2019-07-19 05:19:42'),
(2, 'fabian', 'fabian@yahoo.com', '$2a$10$EDjnqekCEJGXIUIcUFlR0.NMxsNmgYXPiTxm7QYesxaHhoFrAd8e.', 'admin', '2019-07-19 05:19:58', '2019-07-19 05:19:58'),
(3, 'reza', 'reza@yahoo.com', '$2a$10$Mua1XWDyWhZYU0HrwjpnW.WAbSJZBy3kQqTEsYge4rNB0ruSHNQaG', 'user', '2019-07-19 05:20:12', '2019-07-19 05:20:12'),
(4, 'abc', 'email', '$2a$10$c40dygfa.qrQ3iz0umCvz.qrKtC4hBHs6v3Xb5tvDWssHCoyVNGK2', 'user', '2019-07-19 07:48:20', '2019-07-19 07:48:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bukus`
--
ALTER TABLE `bukus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bukuId` (`bukuId`),
  ADD KEY `sessionId` (`sessionId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bukus`
--
ALTER TABLE `bukus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`bukuId`) REFERENCES `bukus` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`sessionId`) REFERENCES `sessions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
