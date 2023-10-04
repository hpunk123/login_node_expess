-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2023 at 06:53 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `candysoftdb`
--
CREATE DATABASE IF NOT EXISTS `candysoftdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `candysoftdb`;

-- --------------------------------------------------------

--
-- Table structure for table `cs_cat_usuarios`
--

CREATE TABLE `cs_cat_usuarios` (
  `usrId` int(11) NOT NULL,
  `usrUsername` varchar(50) NOT NULL,
  `usrPassword` varchar(100) NOT NULL,
  `usrNombre` varchar(250) NOT NULL,
  `usrCreado` datetime NOT NULL DEFAULT current_timestamp(),
  `usrModificado` timestamp NOT NULL DEFAULT current_timestamp(),
  `usrActivo` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cs_cat_usuarios`
--

INSERT INTO `cs_cat_usuarios` (`usrId`, `usrUsername`, `usrPassword`, `usrNombre`, `usrCreado`, `usrModificado`, `usrActivo`) VALUES
(4, 'admin.sys', '$2b$10$xd6bXFSif7MWDnzXryIfBuUPFL9VLuMYwH8XbMiTWQ8fFXBj1W1DO', 'Administrador', '2023-10-04 11:53:10', '2023-10-04 16:53:10', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cs_cat_usuarios`
--
ALTER TABLE `cs_cat_usuarios`
  ADD PRIMARY KEY (`usrId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cs_cat_usuarios`
--
ALTER TABLE `cs_cat_usuarios`
  MODIFY `usrId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
