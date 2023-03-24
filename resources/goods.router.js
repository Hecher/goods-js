const { StatusCodes } = require("http-status-codes");
const router = require("express").Router();
const Categories = require("./categories.model");
const Goods = require("./goods.model");

router.route("/").get(async (req, res) => {
  const goods = await Goods.findAll();
  res.json(goods);
});

router.route("/").post(async (req, res) => {
  const { product_name, price, category_name } = req.body;
  const [categories, created] = await Categories.findOrCreate({
    where: { category_name: category_name },
    defaults: {
      category_name: category_name,
    },
  });
  const goods = await categories.createGood({
    product_name: product_name,
    price: price,
  });

  if (goods) {
    res.status(StatusCodes.CREATED).json(goods);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({
      code: "GOODS_NOT_CREATE",
      message: "Не удалось создать товар",
    });
  }
});

router.route("/:id").put(async (req, res) => {
    const product_id = req.params.id;
    const { category_name, product_name, price } = req.body;
    const [categories, created] = await Categories.findOrCreate({
        where: { category_name: category_name },
        defaults: {
          category_name: category_name,
        },
      });
    const good = await Goods.update(
      { categoryCategoryId: categories.id,
        product_name: product_name,
        price: price },
      { where: { product_id: product_id } }
    );
    
    if (good) {
      res.status(StatusCodes.OK).json(good);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        code: "PRODUCT_NOT_FOUND",
        message: "Не удалось обновить продукт",
      });
    }
  });

router.route("/:id").delete(async (req, res) => {
  const product_id = req.params.id;
  const good = await Goods.destroy({ where: { product_id } });
  if (!good) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ code: "CATEGORY_NOT_FOUND", message: "Категория не найдена" });
  }
  return res
    .status(StatusCodes.NO_CONTENT)
    .json({ code: "CATEGORY_DELETED", message: "Категория удалена" });
});



module.exports = router;
