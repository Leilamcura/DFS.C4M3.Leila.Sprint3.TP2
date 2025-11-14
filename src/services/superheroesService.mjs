// Implementa la lógica de negocio, utilizando los métodos del repositorio para recuperar, 
// filtrar y buscar datos de superheroes

import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
  return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
  return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
  return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
  return await superHeroRepository.obtenerMayoresDe30ConCriterios();
}

// Crear Superheroe
export async function crearSuperheroeService(datos) {
    try {
        return await superHeroRepository.crearSuperheroe(datos);
    } catch (error) {
        console.error("Error en crearSuperheroeService:", error);
        throw error;
    }
}

// Editar/actualizar Superheroe
export async function editarSuperheroeService(nombreSuperheroe, datos) {
    try {
        return await superHeroRepository.editarSuperheroe(nombreSuperheroe, datos);
    } catch (error) {
        console.error("Error en editarSuperheroeService:", error);
        throw error;
    }
}

// Eliminar por ID

export async function eliminarSuperheroePorIdService(id) {
    try {
        return await superHeroRepository.eliminarSuperheroePorId(id);
    } catch (error) {
        console.error("Error en eliminarSuperheroePorIdService:", error);
        throw error;
    }
}

// Eliminar por nombre 

export async function eliminarSuperheroePorNombreService(nombreSuperheroe) {
    try {
        return await superHeroRepository.eliminarSuperheroePorNombre(nombreSuperheroe);
    } catch (error) {
        console.error("Error en eliminarSuperheroePorNombreService:", error);
        throw error;
    }
}