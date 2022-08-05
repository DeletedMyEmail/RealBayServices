-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 05. Aug 2022 um 09:15
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
  `MerchantID` int(10) NOT NULL,
  `ItemName` text NOT NULL,
  `TimeLimit` date DEFAULT NULL,
  `Stock` int(6) NOT NULL,
  `PricePerItem` double NOT NULL,
  `LongDescription` text NOT NULL,
  `ShortDescription` text NOT NULL,
  `Category` text NOT NULL,
  `AvgRating` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `item`
--

INSERT INTO `item` (`ItemID`, `MerchantID`, `ItemName`, `TimeLimit`, `Stock`, `PricePerItem`, `LongDescription`, `ShortDescription`, `Category`, `AvgRating`) VALUES
(1, 1, 'Ball', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'product', 10),
(2, 1, 'Ball2', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'product', 10),
(3, 1, 'Ball3', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'product', 10),
(4, 1, 'Döner holen', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(5, 2, 'kickern', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'bet', 10),
(6, 2, 'kickern', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'bet', 10),
(7, 2, 'kickern', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'bet', 10),
(8, 1, 'kochen', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(9, 1, 'Tee holen', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(10, 4, 'Pizza holen', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(11, 3, 'Linus boxen', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(12, 3, '3D Druck', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(13, 3, 'Logo Design', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(14, 3, 'Web Design', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(15, 3, 'IT Support', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(16, 3, 'Service 1', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(17, 3, 'Service 2', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(18, 3, 'Service 3', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(19, 3, 'Service 4', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'service', 10),
(20, 2, 'Kickern gegen Praktis', '2022-07-30', 1, 0, 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'sfwfsfsfssfwfsfsfssfwfsfsfssfwfsfsfs', 'bet', 10);

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
-- Tabellenstruktur für Tabelle `rating`
--

CREATE TABLE `rating` (
  `UserID` int(11) NOT NULL,
  `ItemID` int(11) NOT NULL,
  `Rating` int(1) NOT NULL,
  `Comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `seasion`
--

CREATE TABLE `seasion` (
  `UserID` int(11) NOT NULL,
  `SeasionID` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `seasion`
--

INSERT INTO `seasion` (`UserID`, `SeasionID`) VALUES
(1, 4242);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `UserID` int(10) NOT NULL,
  `UserName` text NOT NULL,
  `PwHash` text NOT NULL,
  `Email` text NOT NULL,
  `Location` text NOT NULL,
  `Tel` text NOT NULL,
  `Twitter` text NOT NULL,
  `LinkedIn` text NOT NULL,
  `Bio` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`UserID`, `UserName`, `PwHash`, `Email`, `Location`, `Tel`, `Twitter`, `LinkedIn`, `Bio`) VALUES
(1, 'LinusDerHuan', '.lkjhzsdertfzguhij', 'examplemail@mail.com', 'RealCoreGroup Essen, ETEC', '+49 0123455678', '@Linus_huan_der', 'Linus Huan', 'Moin, ich bin der Linus und nen Huan Moin, ich bin der Linus und nen Huan Moin, ich bin der Linus und nen Huan Moin, ich bin der Linus und nen Huan!'),
(2, 'FranzWillhelm', 'fgjk34drt7zhui9lp', 'hallo@bye.tschüss', 'IndeinerMom', '', '', '', ''),
(3, 'Friedrich Mueller', 'dashjj-gesd!', 'friedrich@mueller.de', 'ETEC ', '+49 12344323', 'firdrick__1999', 'Mueller.Friedrich', ' Tach ich bin der Friedrich Tach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der FriedrichTach ich bin der Friedrich'),
(4, 'Paul Schmidts', 'da-fdadwwß', 'pailischmauli@examplemail.com', 'ETEC', '+49 130423872', 'Paul._.Schmidts', 'Paul Schmidts', 'Paul Schmidts Paul Schmidts vPaul SchmidtsPaul SchmidtsPaul SchmidtsPaul SchmidtsPaul SchmidtsPaul SchmidtsPaul SchmidtsPaul Schmidts');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`ItemID`),
  ADD KEY `MechantID` (`MerchantID`);

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
-- Indizes für die Tabelle `rating`
--
ALTER TABLE `rating`
  ADD KEY `ItemID` (`ItemID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indizes für die Tabelle `seasion`
--
ALTER TABLE `seasion`
  ADD PRIMARY KEY (`SeasionID`,`UserID`);

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
  MODIFY `ItemID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT für Tabelle `order`
--
ALTER TABLE `order`
  MODIFY `OrderID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`MerchantID`) REFERENCES `user` (`UserID`);

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

--
-- Constraints der Tabelle `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`ItemID`) REFERENCES `item` (`ItemID`),
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
