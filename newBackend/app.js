/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");

const { getStoredItems, storeItems } = require("./data/items");
const { getStoredCategory, categoryItems } = require("./data/categories");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/items", async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ items: storedItems });
});

app.get("/items/:id", async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post("/items", async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: "Stored new item.", item: newItem });
});

app.get("/categories", async (req, res) => {
  const categoryItems = await getStoredCategory();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ categories: categoryItems });
});

app.get("/categories/:id", async (req, res) => {
  const categoryItems = await getStoredCategory();
  const category = categoryItems.find(
    (category) => category.id === req.params.id
  );
  res.json({ category });
});

app.post("/categories", async (req, res) => {
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

app.listen(8080);
