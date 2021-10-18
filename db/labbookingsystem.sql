-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2021 at 01:25 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

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
  `User_ID` int(11) NOT NULL,
  `Num_Bookings` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`Booking_ID`, `Lab_Name`, `Lab_Slot`, `User_ID`, `Num_Bookings`, `date`) VALUES
(1, '10-120', 'D', 216646797, 1, '2021-10-18');

-- --------------------------------------------------------

--
-- Table structure for table `cancelled_bookings`
--

CREATE TABLE `cancelled_bookings` (
  `Booking_ID` int(11) NOT NULL,
  `Lab_Name` varchar(255) NOT NULL,
  `Lab_Slot` varchar(1) NOT NULL,
  `User_ID` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `Lab_Date` date NOT NULL,
  `time` varchar(255) NOT NULL,
  `descr` varchar(255) NOT NULL,
  `users` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lab`
--

INSERT INTO `lab` (`Lab_ID`, `Lab_Name`, `Lab_Capacity`, `Lab_Slot`, `Lab_availability`, `Lab_Date`, `time`, `descr`, `users`, `status`) VALUES
(1, '10-120', 50, 'D', 1, '2021-10-18', '17:00 - 20:00', 'software development lab', 'student', 'Cancelled'),
(2, '10-120', 50, 'B', 0, '2021-10-18', '11:00 - 14:00', 'software development lab', 'lecturer', 'Cancelled'),
(3, '10-138', 50, 'E', 0, '2021-10-18', '20:00 - 23:00', 'business analysis lab', 'student', 'Cancelled'),
(4, '10-G48', 50, 'E', 0, '2021-10-18', '20:00 - 23:00', 'Multi Media', 'lecturer', 'Confirmed'),
(5, '10-G48', 40, 'B', 0, '2021-10-18', '11:00 - 14:00', 'Multi Media', 'student', 'Confirmed'),
(6, '10-G06', 40, 'E', 0, '2021-10-18', '20:00 - 23:00', 'Software Development', 'student', 'Cancelled');

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
(21554, 'chief', 'lekalakala', '21554@tut4life.ac.za', 'a', 'a');

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
  `Notification_ID` int(10) NOT NULL,
  `Notification` varchar(250) NOT NULL,
  `Notification_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`Notification_ID`, `Notification`, `Notification_Date`) VALUES
(1, 'Notification\nashbfjksdhjkfhsdjklfsd', '2021-10-18'),
(2, 'Dear Users Please Note That Lab 10-G06 Slot E on this date 2021-10-18 is cancelled', '2021-10-18');

-- --------------------------------------------------------

--
-- Table structure for table `notification_record`
--

CREATE TABLE `notification_record` (
  `Notification_ID` int(10) NOT NULL,
  `Notification` varchar(250) NOT NULL,
  `Notification_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notification_record`
--

INSERT INTO `notification_record` (`Notification_ID`, `Notification`, `Notification_Date`) VALUES
(1, 'Notification\nashbfjksdhjkfhsdjklfsd', '2021-10-18');

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
(216646797, 'godfrey', 'mabena', '216646797@tut4life.ac.za', 's', 's'),
(218418902, 'godfrey', 'mabena', '218418902@tut4life.ac.za', '12345', '12345');

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
(214565692, 'Zwelakhe', 'Masilela', '214565692@tut4life.ac.za'),
(215040895, 'sinethemba  ', 'Khoza ', '215040895@tut4life.ac.za'),
(215349659, 'Amogelang', 'Phiri', '215349659@tut4life.ac.za'),
(215416321, 'Mpho', 'Chauke', '215416321@tut4life.ac.za'),
(216114345, 'nontobeko', 'Khoza', '216114345@tut4life.ac.za'),
(216210166, 'Siphesihle ', 'Mofokeng', '216210166@tut4life.ac.za'),
(216579615, 'lebogang ', 'Masanabo', '216579615@tut4life.ac.za'),
(216636627, 'kgoro', 'molepo', '216636627@tut4life.ac.za'),
(216646797, 'Godfrey', 'Mabena', '216646797@tut4life.ac.za'),
(216861841, 'Amanda ', 'khumalo', '216861841@tut4life.ac.za'),
(217409950, 'Ricky', 'Tala', '217409950@tut4life.ac.za'),
(217412455, 'siyabonga', 'Dhladhla', '217412455@tut4life.ac.za'),
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
-- Indexes for table `cancelled_bookings`
--
ALTER TABLE `cancelled_bookings`
  ADD PRIMARY KEY (`Booking_ID`);

--
-- Indexes for table `lab`
--
ALTER TABLE `lab`
  ADD PRIMARY KEY (`Lab_ID`);

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
-- Indexes for table `notification_record`
--
ALTER TABLE `notification_record`
  ADD PRIMARY KEY (`Notification_ID`);

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
  MODIFY `Booking_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cancelled_bookings`
--
ALTER TABLE `cancelled_bookings`
  MODIFY `Booking_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lab`
--
ALTER TABLE `lab`
  MODIFY `Lab_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `Notification_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `notification_record`
--
ALTER TABLE `notification_record`
  MODIFY `Notification_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `stud_no` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=218418903;

--
-- AUTO_INCREMENT for table `student_record`
--
ALTER TABLE `student_record`
  MODIFY `stud_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=218418903;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
