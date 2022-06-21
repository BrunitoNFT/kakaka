-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Spotify
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Spotify
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Spotify` DEFAULT CHARACTER SET utf8 ;
USE `Spotify` ;

-- -----------------------------------------------------
-- Table `Spotify`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `Mail` VARCHAR(255) NOT NULL,
  `Constraseña` VARCHAR(45) NOT NULL,
  `Fecha_nacimiento` VARCHAR(45) NOT NULL,
  `Sexo` VARCHAR(45) NOT NULL,
  `Codigo_postal` VARCHAR(45) NOT NULL,
  `Pais_recidencia` VARCHAR(45) NOT NULL,
  `Estado_seguridad` VARCHAR(45) NOT NULL,
  `Fecha_mod_ult` DATE NOT NULL,
  `Premium` TINYINT(1) NOT NULL,
  PRIMARY KEY (`idUsuarios`),
  UNIQUE INDEX `idUsuarios_UNIQUE` (`idUsuarios` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Detalles_canciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Detalles_canciones` (
  `idDetalles` INT NOT NULL,
  `FechaSubida` DATE NOT NULL,
  `Reproducciones_diarias` INT NOT NULL,
  `Reproducciones_totales` INT NOT NULL,
  `Reproduicciones_mensuales` INT NOT NULL,
  `Ganancias_acumuladas` INT NOT NULL,
  PRIMARY KEY (`idDetalles`),
  UNIQUE INDEX `idDetalles_UNIQUE` (`idDetalles` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Canciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Canciones` (
  `idCanciones` INT NOT NULL,
  `Artista/as` VARCHAR(100) NOT NULL,
  `Album` VARCHAR(45) NULL,
  `id_detalles_canciones` INT NOT NULL,
  PRIMARY KEY (`idCanciones`),
  UNIQUE INDEX `idCanciones_UNIQUE` (`idCanciones` ASC) VISIBLE,
  INDEX `fk_Canciones_Detalles_idx` (`id_detalles_canciones` ASC) VISIBLE,
  CONSTRAINT `fk_Canciones_Detalles`
    FOREIGN KEY (`id_detalles_canciones`)
    REFERENCES `Spotify`.`Detalles_canciones` (`idDetalles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`playlist` (
  `idPlayList` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Estado_pub/priv` TINYINT(1) NOT NULL,
  `Duracion_total` TIME NOT NULL,
  `cantidad_canciones` INT NOT NULL,
  `Fecha_creacion` DATE NOT NULL,
  `Estado_act/in` TINYINT(1) NOT NULL,
  `Seguidores` INT NOT NULL,
  PRIMARY KEY (`idPlayList`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Detalles_artista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Detalles_artista` (
  `idDetalles_artista` INT NOT NULL,
  `Fecha_creacion` DATE NOT NULL,
  `Oyentes_diarios` INT NULL,
  `Oyentes_mensuales` INT NULL,
  `Oyentes_netos` INT NULL,
  `Descripción` VARCHAR(100) NULL,
  PRIMARY KEY (`idDetalles_artista`),
  UNIQUE INDEX `idDetalles_artista_UNIQUE` (`idDetalles_artista` ASC) VISIBLE,
  UNIQUE INDEX `Fecha_creacion_UNIQUE` (`Fecha_creacion` ASC) VISIBLE,
  UNIQUE INDEX `Oyentes_diarios_UNIQUE` (`Oyentes_diarios` ASC) VISIBLE,
  UNIQUE INDEX `Oyentes_netos_UNIQUE` (`Oyentes_netos` ASC) VISIBLE,
  UNIQUE INDEX `Oyentes_mensuales_UNIQUE` (`Oyentes_mensuales` ASC) VISIBLE,
  UNIQUE INDEX `Descripción_UNIQUE` (`Descripción` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Artista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Artista` (
  `idArtista` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido` VARCHAR(45) NOT NULL,
  `Nombre Artistico` VARCHAR(45) NOT NULL,
  `Oyentes Mensuales` INT NOT NULL,
  `id_detalles_Artista` INT NOT NULL,
  PRIMARY KEY (`idArtista`),
  UNIQUE INDEX `idArtista_UNIQUE` (`idArtista` ASC) VISIBLE,
  INDEX `fk_Artista_Detalles_artista1_idx` (`id_detalles_Artista` ASC) VISIBLE,
  CONSTRAINT `fk_Artista_Detalles_artista1`
    FOREIGN KEY (`id_detalles_Artista`)
    REFERENCES `Spotify`.`Detalles_artista` (`idDetalles_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`table2`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`table2` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Canciones_Artista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Canciones_Artista` (
  `id_canciones_artista` INT NOT NULL,
  `id_canciones` INT NOT NULL,
  `id_artista` INT NOT NULL,
  INDEX `fk_Canciones_has_Artista_Artista1_idx` (`id_artista` ASC) VISIBLE,
  INDEX `fk_Canciones_has_Artista_Canciones1_idx` (`id_canciones` ASC) VISIBLE,
  PRIMARY KEY (`id_canciones_artista`),
  UNIQUE INDEX `id_canciones_artista_UNIQUE` (`id_canciones_artista` ASC) VISIBLE,
  CONSTRAINT `fk_Canciones_has_Artista_Canciones1`
    FOREIGN KEY (`id_canciones`)
    REFERENCES `Spotify`.`Canciones` (`idCanciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Canciones_has_Artista_Artista1`
    FOREIGN KEY (`id_artista`)
    REFERENCES `Spotify`.`Artista` (`idArtista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Datos_playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Datos_playlist` (
  `id_usuarios_playlist` INT NOT NULL,
  `id_usuarios` INT NOT NULL,
  `id_playlist` INT NOT NULL,
  INDEX `fk_Usuarios_has_PlayList_PlayList1_idx` (`id_playlist` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_PlayList_Usuarios1_idx` (`id_usuarios` ASC) VISIBLE,
  PRIMARY KEY (`id_usuarios_playlist`),
  UNIQUE INDEX `id_usuarios_playlist_UNIQUE` (`id_usuarios_playlist` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_PlayList_Usuarios1`
    FOREIGN KEY (`id_usuarios`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_PlayList_PlayList1`
    FOREIGN KEY (`id_playlist`)
    REFERENCES `Spotify`.`playlist` (`idPlayList`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Playlist` (
  `id_cancionesArtistas_playlist` VARCHAR(45) NULL,
  `Datos_playlist_idPlayList` INT NOT NULL,
  INDEX `fk_Playlist_Datos_playlist1_idx` (`Datos_playlist_idPlayList` ASC) VISIBLE,
  CONSTRAINT `fk_Playlist_Datos_playlist1`
    FOREIGN KEY (`Datos_playlist_idPlayList`)
    REFERENCES `Spotify`.`playlist` (`idPlayList`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Usuarios_has_Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Usuarios_has_Usuarios` (
  `Usuarios_idUsuarios` INT NOT NULL,
  `Usuarios_idUsuarios1` INT NOT NULL,
  PRIMARY KEY (`Usuarios_idUsuarios`, `Usuarios_idUsuarios1`),
  INDEX `fk_Usuarios_has_Usuarios_Usuarios2_idx` (`Usuarios_idUsuarios1` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_Usuarios_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_Usuarios_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Usuarios_Usuarios2`
    FOREIGN KEY (`Usuarios_idUsuarios1`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Usuarios_has_Usuarios1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Usuarios_has_Usuarios1` (
  `Usuarios_idUsuarios` INT NOT NULL,
  `Usuarios_idUsuarios1` INT NOT NULL,
  PRIMARY KEY (`Usuarios_idUsuarios`, `Usuarios_idUsuarios1`),
  INDEX `fk_Usuarios_has_Usuarios1_Usuarios2_idx` (`Usuarios_idUsuarios1` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_Usuarios1_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_Usuarios1_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Usuarios1_Usuarios2`
    FOREIGN KEY (`Usuarios_idUsuarios1`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Usuarios_has_Usuarios2`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Usuarios_has_Usuarios2` (
  `Usuarios_idUsuarios` INT NOT NULL,
  `Usuarios_idUsuarios1` INT NOT NULL,
  PRIMARY KEY (`Usuarios_idUsuarios`, `Usuarios_idUsuarios1`),
  INDEX `fk_Usuarios_has_Usuarios2_Usuarios2_idx` (`Usuarios_idUsuarios1` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_Usuarios2_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_Usuarios2_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Usuarios2_Usuarios2`
    FOREIGN KEY (`Usuarios_idUsuarios1`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Usuarios_has_Usuarios3`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Usuarios_has_Usuarios3` (
  `Usuarios_idUsuarios` INT NOT NULL,
  `Usuarios_idUsuarios1` INT NOT NULL,
  PRIMARY KEY (`Usuarios_idUsuarios`, `Usuarios_idUsuarios1`),
  INDEX `fk_Usuarios_has_Usuarios3_Usuarios2_idx` (`Usuarios_idUsuarios1` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_Usuarios3_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_Usuarios3_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Usuarios3_Usuarios2`
    FOREIGN KEY (`Usuarios_idUsuarios1`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`table1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`table1` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Canciones_Artista_has_Canciones_Artista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Canciones_Artista_has_Canciones_Artista` (
  `Canciones_Artista_id_canciones_artista` INT NOT NULL,
  `Canciones_Artista_id_canciones_artista1` INT NOT NULL,
  PRIMARY KEY (`Canciones_Artista_id_canciones_artista`, `Canciones_Artista_id_canciones_artista1`),
  INDEX `fk_Canciones_Artista_has_Canciones_Artista_Canciones_Artist_idx` (`Canciones_Artista_id_canciones_artista1` ASC) VISIBLE,
  INDEX `fk_Canciones_Artista_has_Canciones_Artista_Canciones_Artist_idx1` (`Canciones_Artista_id_canciones_artista` ASC) VISIBLE,
  CONSTRAINT `fk_Canciones_Artista_has_Canciones_Artista_Canciones_Artista1`
    FOREIGN KEY (`Canciones_Artista_id_canciones_artista`)
    REFERENCES `Spotify`.`Canciones_Artista` (`id_canciones_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Canciones_Artista_has_Canciones_Artista_Canciones_Artista2`
    FOREIGN KEY (`Canciones_Artista_id_canciones_artista1`)
    REFERENCES `Spotify`.`Canciones_Artista` (`id_canciones_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Canciones_playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Canciones_playlist` (
  `id_canciones_playlist` INT NOT NULL,
  `Canciones_Artista_id_canciones_artista` INT NOT NULL,
  `playlist_idPlayList` INT NOT NULL,
  PRIMARY KEY (`id_canciones_playlist`),
  INDEX `fk_Canciones_Artista_has_playlist_playlist1_idx` (`playlist_idPlayList` ASC) VISIBLE,
  INDEX `fk_Canciones_Artista_has_playlist_Canciones_Artista1_idx` (`Canciones_Artista_id_canciones_artista` ASC) VISIBLE,
  CONSTRAINT `fk_Canciones_Artista_has_playlist_Canciones_Artista1`
    FOREIGN KEY (`Canciones_Artista_id_canciones_artista`)
    REFERENCES `Spotify`.`Canciones_Artista` (`id_canciones_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Canciones_Artista_has_playlist_playlist1`
    FOREIGN KEY (`playlist_idPlayList`)
    REFERENCES `Spotify`.`playlist` (`idPlayList`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`usuarios_playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`usuarios_playlist` (
  `id_usuarios_playlist` INT NOT NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  `playlist_idPlayList` INT NOT NULL,
  INDEX `fk_Usuarios_has_playlist_playlist1_idx` (`playlist_idPlayList` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_playlist_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  PRIMARY KEY (`id_usuarios_playlist`),
  UNIQUE INDEX `id_usuarios_playlist_UNIQUE` (`id_usuarios_playlist` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_playlist_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_playlist_playlist1`
    FOREIGN KEY (`playlist_idPlayList`)
    REFERENCES `Spotify`.`playlist` (`idPlayList`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Generos` (
  `idGeneros` INT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idGeneros`),
  UNIQUE INDEX `tipo_UNIQUE` (`tipo` ASC) VISIBLE,
  UNIQUE INDEX `idGeneros_UNIQUE` (`idGeneros` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Canciones_generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Canciones_generos` (
  `id_canciones_generos` INT NOT NULL,
  `Canciones_idCanciones` INT NOT NULL,
  `Generos_idGeneros` INT NOT NULL,
  INDEX `fk_Canciones_has_Generos_Generos1_idx` (`Generos_idGeneros` ASC) VISIBLE,
  INDEX `fk_Canciones_has_Generos_Canciones1_idx` (`Canciones_idCanciones` ASC) VISIBLE,
  PRIMARY KEY (`id_canciones_generos`),
  UNIQUE INDEX `id_canciones_generos_UNIQUE` (`id_canciones_generos` ASC) VISIBLE,
  CONSTRAINT `fk_Canciones_has_Generos_Canciones1`
    FOREIGN KEY (`Canciones_idCanciones`)
    REFERENCES `Spotify`.`Canciones` (`idCanciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Canciones_has_Generos_Generos1`
    FOREIGN KEY (`Generos_idGeneros`)
    REFERENCES `Spotify`.`Generos` (`idGeneros`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`pais` (
  `id_pais` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_pais`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE,
  UNIQUE INDEX `id_pais_UNIQUE` (`id_pais` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`discografica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`discografica` (
  `id_discografica` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `id_pais` INT NOT NULL,
  PRIMARY KEY (`id_discografica`),
  INDEX `fk_discografica_pais1_idx` (`id_pais` ASC) VISIBLE,
  CONSTRAINT `fk_discografica_pais1`
    FOREIGN KEY (`id_pais`)
    REFERENCES `Spotify`.`pais` (`id_pais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Album`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Album` (
  `idAlbum` INT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `año_publicación` DATE NOT NULL,
  `discografica` VARCHAR(45) NOT NULL,
  `imagen_portada` VARCHAR(255) NOT NULL,
  `id_artista` INT NOT NULL,
  `discografica_id_discografica` INT NOT NULL,
  PRIMARY KEY (`idAlbum`),
  UNIQUE INDEX `idAlbum_UNIQUE` (`idAlbum` ASC) VISIBLE,
  INDEX `fk_Album_Artista1_idx` (`id_artista` ASC) VISIBLE,
  INDEX `fk_Album_discografica1_idx` (`discografica_id_discografica` ASC) VISIBLE,
  CONSTRAINT `fk_Album_Artista1`
    FOREIGN KEY (`id_artista`)
    REFERENCES `Spotify`.`Artista` (`idArtista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Album_discografica1`
    FOREIGN KEY (`discografica_id_discografica`)
    REFERENCES `Spotify`.`discografica` (`id_discografica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Album_Canciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Album_Canciones` (
  `id_album_canciones` INT NOT NULL,
  `Album_idAlbum` INT NOT NULL,
  `Canciones_idCanciones` INT NOT NULL,
  PRIMARY KEY (`id_album_canciones`),
  INDEX `fk_Album_has_Canciones_Canciones1_idx` (`Canciones_idCanciones` ASC) VISIBLE,
  INDEX `fk_Album_has_Canciones_Album1_idx` (`Album_idAlbum` ASC) VISIBLE,
  CONSTRAINT `fk_Album_has_Canciones_Album1`
    FOREIGN KEY (`Album_idAlbum`)
    REFERENCES `Spotify`.`Album` (`idAlbum`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Album_has_Canciones_Canciones1`
    FOREIGN KEY (`Canciones_idCanciones`)
    REFERENCES `Spotify`.`Canciones` (`idCanciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
