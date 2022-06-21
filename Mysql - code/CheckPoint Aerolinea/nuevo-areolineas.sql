-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Aerolineas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Aerolineas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Aerolineas` DEFAULT CHARACTER SET utf8 ;
USE `Aerolineas` ;

-- -----------------------------------------------------
-- Table `Aerolineas`.`Pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`Pais` (
  `id_Pais` SMALLINT NOT NULL,
  `Nombre_pais` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Pais`),
  UNIQUE INDEX `id_Pais_UNIQUE` (`id_Pais` ASC) VISIBLE,
  UNIQUE INDEX `Nombre_pais_UNIQUE` (`Nombre_pais` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aerolineas`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`Clientes` (
  `id_Clientes` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `num_pasaporte` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `id_Pais` SMALLINT NOT NULL,
  PRIMARY KEY (`id_Clientes`),
  UNIQUE INDEX `idClientes_UNIQUE` (`id_Clientes` ASC) VISIBLE,
  INDEX `fk_Clientes_Pais1_idx` (`id_Pais` ASC) VISIBLE,
  CONSTRAINT `fk_Clientes_Pais1`
    FOREIGN KEY (`id_Pais`)
    REFERENCES `Aerolineas`.`Pais` (`id_Pais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aerolineas`.`Sucursal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`Sucursal` (
  `id_Sucursal` INT NOT NULL,
  `Telefono` VARCHAR(45) NOT NULL,
  `Ciudad` VARCHAR(45) NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  `id_Pais` SMALLINT NOT NULL,
  PRIMARY KEY (`id_Sucursal`),
  UNIQUE INDEX `idSucursal_UNIQUE` (`id_Sucursal` ASC) VISIBLE,
  INDEX `fk_Sucursal_Pais1_idx` (`id_Pais` ASC) VISIBLE,
  CONSTRAINT `fk_Sucursal_Pais1`
    FOREIGN KEY (`id_Pais`)
    REFERENCES `Aerolineas`.`Pais` (`id_Pais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aerolineas`.`Metodo de Pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`Metodo de Pago` (
  `id_metodo` TINYINT(4) NOT NULL,
  `Metodo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_metodo`),
  UNIQUE INDEX `idMetodo de Pago_UNIQUE` (`id_metodo` ASC) VISIBLE,
  UNIQUE INDEX `Metodo_UNIQUE` (`Metodo` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aerolineas`.`Pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`Pago` (
  `id_pago` INT NOT NULL,
  `can_cuotas` TINYINT NULL,
  `precio_total` INT NULL,
  `id_metodo` TINYINT(4) NOT NULL,
  PRIMARY KEY (`id_pago`),
  INDEX `fk_Pago_Metodo de Pago1_idx` (`id_metodo` ASC) VISIBLE,
  CONSTRAINT `fk_Pago_Metodo de Pago1`
    FOREIGN KEY (`id_metodo`)
    REFERENCES `Aerolineas`.`Metodo de Pago` (`id_metodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aerolineas`.`Reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`Reserva` (
  `id_reserva` INT NOT NULL,
  `fecha_hora` DATETIME NOT NULL,
  `cod_reserva` VARCHAR(6) NOT NULL,
  `id_Clientes` INT NOT NULL,
  `Sucursal_id_Sucursal` INT NOT NULL,
  `id_pago` INT NOT NULL,
  PRIMARY KEY (`id_reserva`),
  UNIQUE INDEX `idReserva_UNIQUE` (`id_reserva` ASC) VISIBLE,
  INDEX `fk_Reserva_Clientes1_idx` (`id_Clientes` ASC) VISIBLE,
  INDEX `fk_Reserva_Sucursal1_idx` (`Sucursal_id_Sucursal` ASC) VISIBLE,
  INDEX `fk_Reserva_Pago1_idx` (`id_pago` ASC) VISIBLE,
  CONSTRAINT `fk_Reserva_Clientes1`
    FOREIGN KEY (`id_Clientes`)
    REFERENCES `Aerolineas`.`Clientes` (`id_Clientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reserva_Sucursal1`
    FOREIGN KEY (`Sucursal_id_Sucursal`)
    REFERENCES `Aerolineas`.`Sucursal` (`id_Sucursal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reserva_Pago1`
    FOREIGN KEY (`id_pago`)
    REFERENCES `Aerolineas`.`Pago` (`id_pago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aerolineas`.`hoteles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`hoteles` (
  `id_hoteles` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `cant_habitaciones` SMALLINT NOT NULL,
  `tipo_hospedaje` TINYINT(1) NOT NULL,
  `fecha_llegada` DATETIME NOT NULL,
  `fecha_partida` DATETIME NOT NULL,
  `id_Pais` SMALLINT NOT NULL,
  PRIMARY KEY (`id_hoteles`),
  UNIQUE INDEX `idhoteles_UNIQUE` (`id_hoteles` ASC) VISIBLE,
  INDEX `fk_hoteles_Pais1_idx` (`id_Pais` ASC) VISIBLE,
  CONSTRAINT `fk_hoteles_Pais1`
    FOREIGN KEY (`id_Pais`)
    REFERENCES `Aerolineas`.`Pais` (`id_Pais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aerolineas`.`vuelos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`vuelos` (
  `id_vuelos` INT NOT NULL,
  `num_vuelo` VARCHAR(6) NOT NULL,
  `categoria` TINYINT(1) NOT NULL,
  `fecha_partida` DATETIME NOT NULL,
  `fecha_llegada` DATETIME NOT NULL,
  `origen` VARCHAR(45) NOT NULL,
  `destino` VARCHAR(45) NOT NULL,
  `cant_turista` TINYINT(255) NOT NULL,
  `cant_bussines` SMALLINT(100) NOT NULL,
  `ida/vuelta/ambos` VARCHAR(6) NOT NULL,
  PRIMARY KEY (`id_vuelos`),
  UNIQUE INDEX `idvuelos_UNIQUE` (`id_vuelos` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aerolineas`.`nombres_integrantes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`nombres_integrantes` (
  `Joaquin_Mosto` INT NOT NULL,
  `Juan_Pablo_De_La_Fuente` VARCHAR(45) NULL,
  `Cesar_sanchez` VARCHAR(45) NULL,
  `Bruno_Membrado` VARCHAR(45) NULL,
  PRIMARY KEY (`Joaquin_Mosto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aerolineas`.`vuelos_Reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`vuelos_Reserva` (
  `id_vuelos_reserva` VARCHAR(45) NOT NULL,
  `id_vuelos` INT NOT NULL,
  `id_reserva` INT NOT NULL,
  PRIMARY KEY (`id_vuelos_reserva`),
  INDEX `fk_vuelos_has_Reserva_Reserva1_idx` (`id_reserva` ASC) VISIBLE,
  INDEX `fk_vuelos_has_Reserva_vuelos1_idx` (`id_vuelos` ASC) VISIBLE,
  CONSTRAINT `fk_vuelos_has_Reserva_vuelos1`
    FOREIGN KEY (`id_vuelos`)
    REFERENCES `Aerolineas`.`vuelos` (`id_vuelos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_vuelos_has_Reserva_Reserva1`
    FOREIGN KEY (`id_reserva`)
    REFERENCES `Aerolineas`.`Reserva` (`id_reserva`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aerolineas`.`reserva_hoteles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aerolineas`.`reserva_hoteles` (
  `id_reserva_hoteles` INT NOT NULL,
  `id_reserva` INT NOT NULL,
  `id_hoteles` INT NOT NULL,
  INDEX `fk_Reserva_has_hoteles_hoteles1_idx` (`id_hoteles` ASC) VISIBLE,
  INDEX `fk_Reserva_has_hoteles_Reserva1_idx` (`id_reserva` ASC) VISIBLE,
  PRIMARY KEY (`id_reserva_hoteles`),
  CONSTRAINT `fk_Reserva_has_hoteles_Reserva1`
    FOREIGN KEY (`id_reserva`)
    REFERENCES `Aerolineas`.`Reserva` (`id_reserva`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reserva_has_hoteles_hoteles1`
    FOREIGN KEY (`id_hoteles`)
    REFERENCES `Aerolineas`.`hoteles` (`id_hoteles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
