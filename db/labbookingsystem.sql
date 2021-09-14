-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 13, 2021 at 11:28 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `labbookingsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Admin_ID` int(11) NOT NULL,
  `Admin_Name` varchar(255) NOT NULL,
  `Admin_Surname` varchar(255) NOT NULL,
  `Admin_Email` varchar(255) NOT NULL,
  `Admin_Pass` varchar(255) NOT NULL,
  `Booking_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Admin_ID`, `Admin_Name`, `Admin_Surname`, `Admin_Email`, `Admin_Pass`, `Booking_ID`) VALUES
(216646797, 'Godfrey', 'Mabena', 'Godfrey555mabena@gmail.com', '1234', 0);

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `Booking_ID` int(11) NOT NULL,
  `Lab_Name` varchar(255) NOT NULL,
  `Lab_Slot` varchar(1) NOT NULL,
  `Stud_ID` int(11) NOT NULL,
  `Num_Bookings` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`Booking_ID`, `Lab_Name`, `Lab_Slot`, `Stud_ID`, `Num_Bookings`, `date`) VALUES
(28, '10-120', 'B', 216646797, 6, '2021-09-09'),
(30, '10-120', 'F', 216646797, 4, '2021-09-02'),
(32, '10-120', 'G', 216646797, 2, '2021-09-08'),
(33, '10-120', 'F', 216646797, 1, '2021-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `lab`
--

CREATE TABLE `lab` (
  `Lab_ID` int(11) NOT NULL,
  `Lab_Name` varchar(255) NOT NULL,
  `Lab_Capacity` int(11) NOT NULL,
  `Lab_Slot` varchar(1) NOT NULL,
  `Lab_availability` int(11) NOT NULL,
  `Lab_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lab`
--

INSERT INTO `lab` (`Lab_ID`, `Lab_Name`, `Lab_Capacity`, `Lab_Slot`, `Lab_availability`, `Lab_Date`) VALUES
(2, '10-120', 40, 'A', 38, '2021-08-31'),
(4, '10-140', 40, 'C', 0, '2021-08-31'),
(5, '10-140', 40, 'B', 0, '2021-08-31'),
(6, '10-140', 51, 'A', 52, '2021-09-01'),
(7, '10-120', 40, 'C', 0, '2021-09-01'),
(8, '10-120', 40, 'B', 52, '2021-09-01'),
(9, '10-140', 40, 'D', 41, '2021-09-01'),
(10, '10-120', 40, 'A', 41, '2021-09-01'),
(11, '10-138', 40, 'B', 41, '2021-09-01'),
(12, '10-138', 40, 'E', 0, '2021-09-01'),
(13, '10-138', 40, 'F', 0, '2021-09-01'),
(14, '10-140', 40, 'E', 0, '2021-09-01'),
(15, '10-138', 40, 'B', 0, '2021-09-06'),
(16, '10-138', 40, 'C', 1, '2021-09-06'),
(17, '10-138', 40, 'D', 0, '2021-09-06'),
(18, '10-138', 40, 'A', 0, '2021-09-07'),
(19, '10-138', 40, 'B', 0, '2021-09-07'),
(20, '10-120', 40, 'B', 11, '2021-09-07'),
(21, '10-120', 40, 'B', 11, '2021-09-06'),
(24, '10-120', 40, 'B', 11, '2021-09-08'),
(25, '10-120', 40, 'G', 16, '2021-09-08'),
(26, '10-120', 40, 'E', 41, '2021-09-08'),
(27, '10-120', 40, 'F', 12, '2021-09-08'),
(28, '10-120', 40, 'D', 41, '2021-09-08'),
(29, '10-120', 40, 'C', 41, '2021-09-08'),
(30, '10-120', 40, 'A', 41, '2021-09-08');

-- --------------------------------------------------------

--
-- Table structure for table `lab_record`
--

CREATE TABLE `lab_record` (
  `lab_no` int(11) NOT NULL,
  `lab_name` varchar(255) NOT NULL,
  `capacity` int(11) NOT NULL,
  `slot_no` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `lecture`
--

CREATE TABLE `lecture` (
  `lec_id` int(11) NOT NULL,
  `lec_name` varchar(255) NOT NULL,
  `lec_surname` varchar(255) NOT NULL,
  `lec_email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirm` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lecture`
--

INSERT INTO `lecture` (`lec_id`, `lec_name`, `lec_surname`, `lec_email`, `password`, `confirm`) VALUES
(21554, 'chief', 'mabena', '21554@tut4life.ac.za', 'a', 'a');

-- --------------------------------------------------------

--
-- Table structure for table `lecture_record`
--

CREATE TABLE `lecture_record` (
  `lec_id` int(11) NOT NULL,
  `lec_name` varchar(255) NOT NULL,
  `lec_surname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lecture_record`
--

INSERT INTO `lecture_record` (`lec_id`, `lec_name`, `lec_surname`) VALUES
(21554, 'ntuli', 'ranaka'),
(21664, 'chief', 'lekalakala');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `Notification_ID` int(20) NOT NULL,
  `Notification` text NOT NULL,
  `Notification_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`Notification_ID`, `Notification`, `Notification_Date`) VALUES
(1, ' please note that on 23 September ftom 22H00 to 24 September 14H00 we will be running system upgrades, so no labs can be booked during this time. We apologize for the inconvenience.', '2021-09-13'),
(2, ' admin TESTicles', '2021-09-13');

-- --------------------------------------------------------

--
-- Table structure for table `slot`
--

CREATE TABLE `slot` (
  `slot_no` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `stud_no` int(9) NOT NULL,
  `stu_name` varchar(255) NOT NULL,
  `stud_surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirm` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`stud_no`, `stu_name`, `stud_surname`, `email`, `password`, `confirm`) VALUES
(216646797, 'godfrey', 'mabena', '216646797@tut4life.ac.za', '12', '12'),
(217409950, 'Ricky', 'Tala', '217409950@tut4life.ac.za', '1234', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `student_record`
--

CREATE TABLE `student_record` (
  `stud_no` int(11) NOT NULL,
  `stud_name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_record`
--

INSERT INTO `student_record` (`stud_no`, `stud_name`, `surname`, `email`) VALUES
(212208124, 'Mpho', 'Nyambeni', '212208124@tut4life.ac.za'),
(214021170, 'Keletso ', 'Rangoako', '214021170@tut4life.ac.za'),
(214468824, 'Vutlharhi', 'Magayisa', '214468824@tut4life.ac.za'),
(215040895, 'sinethemba  ', 'Khoza ', '215040895@tut4life.ac.za'),
(215416321, 'Mpho', 'Chauke', '215416321@tut4life.ac.za'),
(216114345, 'nontobeko', 'Khoza', '216114345@tut4life.ac.za'),
(216210166, 'Siphesihle ', 'Mofokeng', '216210166@tut4life.ac.za'),
(216579615, 'lebogang ', 'Masanabo', '216579615@tut4life.ac.za'),
(216646797, 'Godfrey', 'Mabena', '216646797@tut4life.ac.za'),
(216861841, 'Amanda ', 'khumalo', '216861841@tut4life.ac.za'),
(217409950, 'Ricky', 'Tala', '217409950@tut4life.ac.za'),
(217582415, 'Dineo', 'Nakana', '217582415@tut4life.ac.za'),
(218418902, 'Mndeni', 'Shongwe', '218418902@tut4life.ac.za');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Admin_ID`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`Booking_ID`);

--
-- Indexes for table `lab`
--
ALTER TABLE `lab`
  ADD PRIMARY KEY (`Lab_ID`);

--
-- Indexes for table `lab_record`
--
ALTER TABLE `lab_record`
  ADD PRIMARY KEY (`lab_no`);

--
-- Indexes for table `lecture`
--
ALTER TABLE `lecture`
  ADD PRIMARY KEY (`lec_id`);

--
-- Indexes for table `lecture_record`
--
ALTER TABLE `lecture_record`
  ADD PRIMARY KEY (`lec_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`Notification_ID`);

--
-- Indexes for table `slot`
--
ALTER TABLE `slot`
  ADD PRIMARY KEY (`slot_no`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`stud_no`);

--
-- Indexes for table `student_record`
--
ALTER TABLE `student_record`
  ADD PRIMARY KEY (`stud_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `Admin_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=216646799;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `Booking_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `lab`
--
ALTER TABLE `lab`
  MODIFY `Lab_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `lab_record`
--
ALTER TABLE `lab_record`
  MODIFY `lab_no` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `Notification_ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `slot`
--
ALTER TABLE `slot`
  MODIFY `slot_no` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `stud_no` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=217409951;

--
-- AUTO_INCREMENT for table `student_record`
--
ALTER TABLE `student_record`
  MODIFY `stud_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=218418903;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
