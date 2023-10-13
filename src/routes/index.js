const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/Estudiante', (req, res) => {
  res.render('pages/estudiante');
});

router.get('/Aspirante', (req, res) => {
  res.render('pages/aspirante');
});

router.get('/Docente', (req, res) => {
  res.render('pages/docente');
});

router.get('/Administrativo', (req, res) => {
  res.render('pages/administrativo');
});

router.get('/Empresario', (req, res) => {
  res.render('pages/empresario');
});

router.get('/Egresado', (req, res) => {
  res.render('pages/egresado');
});

module.exports = router;