-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 01, 2020 at 10:47 PM
-- Server version: 8.0.22-0ubuntu0.20.04.2
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id` bigint UNSIGNED NOT NULL,
  `author_name` varchar(50) NOT NULL,
  `author_details` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `author_name`, `author_details`, `created_at`, `updated_at`) VALUES
(1, 'Dr.R.Rao', 'Dr. R. Nageswara Rao, author of the best seller \'Core Java – An Integrated Approach\' and \'Core C\' comes out with his remarkable new book \'Core Python ', '2020-11-01 12:59:54', '2020-11-01 12:59:54'),
(2, 'Narayanan', 'Narayanan is well expe man in physics and chemistry', '2020-11-01 19:37:00', '2020-11-01 19:37:00'),
(3, 'Mohan Rao', 'Mohan is well expe man in physics and chemistry', '2020-11-01 22:13:26', '2020-11-01 22:13:26');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint UNSIGNED NOT NULL,
  `book_name` varchar(100) NOT NULL,
  `book_category` bigint NOT NULL,
  `book_details` text,
  `book_author` varchar(50) NOT NULL,
  `book_publisher` bigint NOT NULL,
  `book_isbn` varchar(20) DEFAULT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `book_status` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `book_name`, `book_category`, `book_details`, `book_author`, `book_publisher`, `book_isbn`, `thumbnail`, `book_status`, `created_at`, `updated_at`) VALUES
(1, 'python', 1, 'Dr. R. Nageswara Rao, author of the best seller \'Core Java – An Integrated Approach\' and \'Core C\' comes out with his remarkable new book \'Core Python', '1', 1, 'PYTH-90075', 'image.jpg', 1, '2020-11-01 12:36:28', '2020-11-01 19:35:21'),
(3, 'java', 1, 'Dr. R. Nageswara Rao, author of the best seller \'Core Java – An Integrated Approach\' and \'Core C\' comes out with his remarkable new book \'Core Python', '1', 1, 'PYTH-90075', 'image.jpg', 0, '2020-11-01 12:39:12', '2020-11-01 19:35:27'),
(4, 'physics', 2, 'Dr. R. Nageswara Rao, author of the best seller \'Core Java – An Integrated Approach\' and \'Core C\' comes out with his remarkable new book \'Core Python', '2', 1, 'PYTH-90075', 'image.jpg', 0, '2020-11-01 12:41:03', '2020-11-01 19:37:13'),
(5, 'chemistry', 3, 'Dr. R. Nageswara Rao, author of the best seller \'Core Java – An Integrated Approach\' and \'Core C\' comes out with his remarkable new book \'Core Python', '2', 1, 'PYTH-90075', 'image.jpg', 0, '2020-11-01 12:41:42', '2020-11-01 19:37:16');

-- --------------------------------------------------------

--
-- Table structure for table `books_category`
--

CREATE TABLE `books_category` (
  `id` bigint UNSIGNED NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books_category`
--

INSERT INTO `books_category` (`id`, `category_name`, `created_at`, `updated_at`) VALUES
(1, 'classic', '2020-11-01 12:58:24', '2020-11-01 12:58:24'),
(2, 'comics', '2020-11-01 13:00:25', '2020-11-01 13:00:25'),
(3, 'fantasy', '2020-11-01 13:00:51', '2020-11-01 13:00:51');

-- --------------------------------------------------------

--
-- Table structure for table `publisher`
--

CREATE TABLE `publisher` (
  `id` bigint UNSIGNED NOT NULL,
  `publisher_name` varchar(200) NOT NULL,
  `publisher_details` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `publisher`
--

INSERT INTO `publisher` (`id`, `publisher_name`, `publisher_details`, `created_at`, `updated_at`) VALUES
(1, 'siva', 'hii', '2020-11-01 15:09:41', '2020-11-01 15:09:41');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `mobilenumber` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` tinyint(1) NOT NULL COMMENT '0 = admin,1 = Normal_user',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `username`, `email`, `mobilenumber`, `password`, `role`, `created_at`, `updated_at`) VALUES
(1, 'seetha', 'ram', 'seetharam', 'seetharam@yopmail.com', '9003601487', '$2b$10$DFdGRxOkbDDxGMcsB3DJ1e28C4kHxdm2VVPy.4g/IhRYNMEQSoXYy', 0, '2020-11-01 17:22:12', '2020-11-01 17:23:15'),
(2, 'siva', 'p', 'siva', 'siva@yopmail.com', '9597511487', '$2b$10$.DipaoZsTvRx9uwTOMxAluEdM6AueXzwjnrhc34upBoJvi/18rVx.', 1, '2020-11-01 17:23:05', '2020-11-01 21:46:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books_category`
--
ALTER TABLE `books_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `publisher`
--
ALTER TABLE `publisher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `books_category`
--
ALTER TABLE `books_category`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `publisher`
--
ALTER TABLE `publisher`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
