/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");

const { getStoredCategory, categoryItems } = require("./data/categories");

const app2 = express();

app2.use(bodyParser.json());

app2.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app2.get("/categories", async (req, res) => {
  const categoryItems = await getStoredCategory();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ categories: categoryItems });
});

app2.get("/categories/:id", async (req, res) => {
  const categoryItems = await getStoredCategory();
  const category = categoryItems.find(
    (category) => category.id === req.params.id
  );
  res.json({ category });
});

app2.post("/categories", async (req, res) => {
  const existingCategories = await getStoredCategory();
  const categoryData = req.body;
  const newCategory = {
    ...categoryData,
    id: Math.random().toString(),
  };
  const updatedCategories = [newCategory, ...existingCategories];
  await categoryItems(updatedCategories);
  res.status(201).json({ message: "Stored new item.", category: newCategory });
});

app2.listen(3000);
