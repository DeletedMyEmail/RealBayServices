-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 01. Aug 2022 um 09:00
-- Server-Version: 10.4.24-MariaDB
-- PHP-Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `realbay`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `item`
--

CREATE TABLE `item` (
  `ItemID` int(12) NOT NULL,
  `MechantID` int(10) NOT NULL,
  `ItemName` text NOT NULL,
  `TimeLimit` date DEFAULT NULL,
  `Stock` int(6) NOT NULL,
  `PricePerItem` double NOT NULL,
  `AvgRating` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `item`
--

INSERT INTO `item` (`ItemID`, `MechantID`, `ItemName`, `TimeLimit`, `Stock`, `PricePerItem`, `AvgRating`) VALUES
(1, 1, 'Ball', '2022-07-30', 1, 0, 10);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `order`
--

CREATE TABLE `order` (
  `OrderID` int(12) NOT NULL,
  `UserID` int(10) NOT NULL,
  `GesPreis` double NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `order`
--

INSERT INTO `order` (`OrderID`, `UserID`, `GesPreis`, `Date`) VALUES
(1, 2, 2, '2022-07-29');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `order2item`
--

CREATE TABLE `order2item` (
  `ItemID` int(12) NOT NULL,
  `OrderID` int(12) NOT NULL,
  `Amount` int(6) NOT NULL,
  `PricePerItem` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `order2item`
--

INSERT INTO `order2item` (`ItemID`, `OrderID`, `Amount`, `PricePerItem`) VALUES
(1, 1, 1, 2);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `UserID` int(10) NOT NULL,
  `UserName` text NOT NULL,
  `PwHash` text NOT NULL,
  `Email` text NOT NULL,
  `Location` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`UserID`, `UserName`, `PwHash`, `Email`, `Location`) VALUES
(1, 'LinusDerHuan', '.lkjhzsdertfzguhij', 'examplemail@mail.com', 'RealCoreGroup Essen, ETEC'),
(2, 'FranzWillhelm', 'fgjk34drt7zhui9lp', 'hallo@bye.tschüss', 'IndeinerMom');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`ItemID`),
  ADD KEY `MechantID` (`MechantID`);

--
-- Indizes für die Tabelle `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indizes für die Tabelle `order2item`
--
ALTER TABLE `order2item`
  ADD PRIMARY KEY (`ItemID`,`OrderID`),
  ADD KEY `OrderID` (`OrderID`),
  ADD KEY `Amount` (`Amount`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `item`
--
ALTER TABLE `item`
  MODIFY `ItemID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `order`
--
ALTER TABLE `order`
  MODIFY `OrderID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`MechantID`) REFERENCES `user` (`UserID`);

--
-- Constraints der Tabelle `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints der Tabelle `order2item`
--
ALTER TABLE `order2item`
  ADD CONSTRAINT `order2item_ibfk_1` FOREIGN KEY (`ItemID`) REFERENCES `item` (`ItemID`),
  ADD CONSTRAINT `order2item_ibfk_2` FOREIGN KEY (`OrderID`) REFERENCES `order` (`OrderID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
