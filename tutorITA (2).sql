-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 10-12-2022 a las 02:50:58
-- Versión del servidor: 5.7.34
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tutorITA`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `noControl` int(11) NOT NULL,
  `nombreAlumno` varchar(50) NOT NULL,
  `apellidoAlumno` varchar(50) NOT NULL,
  `idCarrera` varchar(5) NOT NULL,
  `passwordAlumno` varchar(50) NOT NULL,
  `emailAlumno` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`noControl`, `nombreAlumno`, `apellidoAlumno`, `idCarrera`, `passwordAlumno`, `emailAlumno`) VALUES
(18170306, 'Freddy', 'Luna', 'ITICS', 'Pass.2210', 'Fredy@mail.com'),
(19150302, 'Fany', 'Montoya', 'ITICS', 'Pass.1234', 'Fany@mail.com'),
(19150307, 'Joaquin', 'Zatarain', 'ITICS', 'Pass1234.', 'JOAQ@MAIL.COM'),
(19150909, 'Pepe', 'Flores', 'ITICS', 'Pass.1234', 'Pepe@mail.com'),
(19151915, 'Sebastian', 'Vargas', 'ITICS', 'Pass.1234', 'Sebastian@mail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asesorias`
--

CREATE TABLE `asesorias` (
  `idAsesoria` int(11) NOT NULL,
  `idMateriaAsesoria` varchar(5) NOT NULL,
  `statusAsesoria` int(11) NOT NULL,
  `cupoAsesoria` int(11) NOT NULL,
  `idDocenteAsesoria` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `asesorias`
--

INSERT INTO `asesorias` (`idAsesoria`, `idMateriaAsesoria`, `statusAsesoria`, `cupoAsesoria`, `idDocenteAsesoria`, `fecha`, `hora`) VALUES
(1, 'BIGD9', 1, 6, 90912990, '2022-11-19', '11:00'),
(41, 'BIGD9', 1, 7, 90929999, '2022-11-30', '09:00'),
(42, 'BIGD9', 1, 9, 90929999, '2022-11-29', '18:00'),
(43, 'BIGD9', 1, 6, 90929999, '2022-12-30', '07:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asesoriasAlumnos`
--

CREATE TABLE `asesoriasAlumnos` (
  `idAsesoria` int(11) NOT NULL,
  `idAlumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `asesoriasAlumnos`
--

INSERT INTO `asesoriasAlumnos` (`idAsesoria`, `idAlumno`) VALUES
(1, 18170306),
(41, 19150307),
(42, 19150307),
(1, 19150307);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

CREATE TABLE `carreras` (
  `idCarrera` varchar(5) NOT NULL,
  `nombreCarrera` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `carreras`
--

INSERT INTO `carreras` (`idCarrera`, `nombreCarrera`) VALUES
('IGE', 'Gestion Empresarial'),
('ITICS', 'Ingeniería en tecnologias de la información y comunicaciones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docentes`
--

CREATE TABLE `docentes` (
  `idDocente` int(11) NOT NULL,
  `nombreDocente` varchar(50) NOT NULL,
  `apellidoDocente` varchar(50) NOT NULL,
  `idCarreraDocente` varchar(5) NOT NULL,
  `PasswordDocente` varchar(50) NOT NULL,
  `emailDocente` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `docentes`
--

INSERT INTO `docentes` (`idDocente`, `nombreDocente`, `apellidoDocente`, `idCarreraDocente`, `PasswordDocente`, `emailDocente`) VALUES
(90912990, 'Fernando', 'Saul', 'ITICS', 'Fer.1234', 'fer.dzul@mail.com'),
(90929999, 'Memo', 'Ochoa', 'ITICS', 'Pass1234.', 'Ochoa@mail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `idMateria` varchar(5) NOT NULL,
  `nombreMateria` varchar(50) NOT NULL,
  `idCarreraMateria` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`idMateria`, `nombreMateria`, `idCarreraMateria`) VALUES
('BIGD9', 'Big Data', 'ITICS'),
('MATH5', 'Mathematicas', 'ITICS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `typeUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `typeUser`) VALUES
(19150307, 1),
(18170306, 1),
(90912990, 2),
(99999999, 3),
(19150302, 1),
(18170307, 1),
(19150909, 1),
(19151915, 1),
(90929999, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`noControl`),
  ADD KEY `Fk_Carrera_Alumno` (`idCarrera`);

--
-- Indices de la tabla `asesorias`
--
ALTER TABLE `asesorias`
  ADD PRIMARY KEY (`idAsesoria`),
  ADD KEY `Fk_Asesorias_Materia` (`idMateriaAsesoria`),
  ADD KEY `Fk_Asesorias_Docente` (`idDocenteAsesoria`);

--
-- Indices de la tabla `asesoriasAlumnos`
--
ALTER TABLE `asesoriasAlumnos`
  ADD KEY `Fk_AsesoriasAlumnos_Alumnos` (`idAlumno`),
  ADD KEY `Fk_AsesoriasAlumnos_Asesorias` (`idAsesoria`);

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`idCarrera`);

--
-- Indices de la tabla `docentes`
--
ALTER TABLE `docentes`
  ADD PRIMARY KEY (`idDocente`),
  ADD KEY `Fk_Carrera_Docentes` (`idCarreraDocente`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`idMateria`),
  ADD KEY `Fk_Carrera_Materias` (`idCarreraMateria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asesorias`
--
ALTER TABLE `asesorias`
  MODIFY `idAsesoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `Fk_Carrera_Alumno` FOREIGN KEY (`idCarrera`) REFERENCES `carreras` (`idCarrera`);

--
-- Filtros para la tabla `asesorias`
--
ALTER TABLE `asesorias`
  ADD CONSTRAINT `Fk_Asesorias_Docente` FOREIGN KEY (`idDocenteAsesoria`) REFERENCES `docentes` (`idDocente`),
  ADD CONSTRAINT `Fk_Asesorias_Materia` FOREIGN KEY (`idMateriaAsesoria`) REFERENCES `materias` (`idMateria`);

--
-- Filtros para la tabla `asesoriasAlumnos`
--
ALTER TABLE `asesoriasAlumnos`
  ADD CONSTRAINT `Fk_AsesoriasAlumnos_Alumnos` FOREIGN KEY (`idAlumno`) REFERENCES `alumnos` (`noControl`),
  ADD CONSTRAINT `Fk_AsesoriasAlumnos_Asesorias` FOREIGN KEY (`idAsesoria`) REFERENCES `asesorias` (`idAsesoria`);

--
-- Filtros para la tabla `docentes`
--
ALTER TABLE `docentes`
  ADD CONSTRAINT `Fk_Carrera_Docentes` FOREIGN KEY (`idCarreraDocente`) REFERENCES `carreras` (`idCarrera`);

--
-- Filtros para la tabla `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `Fk_Carrera_Materias` FOREIGN KEY (`idCarreraMateria`) REFERENCES `carreras` (`idCarrera`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
