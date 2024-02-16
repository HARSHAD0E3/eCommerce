/* eslint-disable no-undef */
const fs = require("node:fs/promises");

async function getStoredCategory() {
  const rawFileContent = await fs.readFile("categories.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const categoryItems = data.categories ?? [];
  return categoryItems;
}

function categoryItems(categories) {
  return fs.writeFile(
    "categories.json",
    JSON.stringify({ categories: categories || [] })
  );
}

exports.getStoredCategory = getStoredCategory;
exports.categoryItems = categoryItems;
