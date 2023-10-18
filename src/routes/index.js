const express = require('express');
const router = express.Router();

let visited = false;

function viewed(){
  if(!visited){
    visited = true;
  }
}

router.get('/', (req, res) => {
  console.log(visited)
  res.render('pages/home', { vst: visited }, viewed());
});

router.get('/Estudiante', (req, res) => {
  res.render('pages/estudiante', { vst: visited }, viewed());
  viewed();
});

router.get('/Aspirante', (req, res) => {
  res.render('pages/aspirante', { vst: visited }, viewed());
  viewed();
});

router.get('/Docente', (req, res) => {
  res.render('pages/docente', { vst: visited }, viewed());
  viewed();
});

router.get('/Administrativo', (req, res) => {
  res.render('pages/administrativo', { vst: visited }, viewed());
  viewed();
});

router.get('/Empresario', (req, res) => {
  res.render('pages/empresario', { vst: visited }, viewed());
  viewed();
});

router.get('/Egresado', (req, res) => {
  res.render('pages/egresado', { vst: visited }, viewed());
  viewed();
});

module.exports = router;