import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lámparas", image: "lampadas.svg" },
    { title: "Pilas y Baterias", image: "baterias.svg" },
    { title: "Papeles", image: "papeis-papelon.svg" },
    { title: "Residuos Electrónicos", image: "electronicos.svg" },
    { title: "Residuos Orgánicos", image: "organicos.svg" },
    { title: "Aceite de Cocina", image: "oleo.svg" },
  ]);
}
