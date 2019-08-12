CREATE DATABASE  IF NOT EXISTS `csc648_team6` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `csc648_team6`;
-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: csc648_team6
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `postings`
--

DROP TABLE IF EXISTS `postings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `postings` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `street` varchar(50) NOT NULL DEFAULT ' ',
  `city` varchar(45) NOT NULL DEFAULT ' ',
  `state` varchar(45) NOT NULL DEFAULT ' ',
  `zipcode` varchar(45) NOT NULL DEFAULT ' ',
  `description` varchar(300) NOT NULL DEFAULT ' ',
  `picture` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'Pending',
  `date_witnessed` varchar(30) NOT NULL,
  `date_posted` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `topic` varchar(20) NOT NULL,
  `long` decimal(25,15) NOT NULL DEFAULT '0.000000000000000',
  `lat` decimal(25,15) NOT NULL DEFAULT '0.000000000000000',
  PRIMARY KEY (`post_id`),
  KEY `street` (`street`),
  KEY `city` (`city`),
  KEY `state` (`state`),
  KEY `zipcode` (`zipcode`),
  KEY `status` (`status`),
  KEY `topic` (`topic`),
  KEY `username_idx` (`username`),
  CONSTRAINT `status` FOREIGN KEY (`status`) REFERENCES `statuses` (`status`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `topic` FOREIGN KEY (`topic`) REFERENCES `topics` (`topic`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `username` FOREIGN KEY (`username`) REFERENCES `users_registration` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-10 21:13:13
