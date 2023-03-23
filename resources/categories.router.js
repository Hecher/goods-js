const { StatusCodes } = require("http-status-codes");
const router = require("express").Router();
const Categories = require("./categories.model");
const Goods = require("./goods.model");

router.route("/").get(async (req, res) => {
  const categories = await Categories.findAll();
  res.json(categories);
});

router.route("/").post(async (req, res) => {
  const { category_name } = req.body;
  const categories = await Categories.create({ category_name: category_name });

  if (categories) {
    res.status(StatusCodes.CREATED).json(categories);
  } else {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({
        code: "USER_NOT_CREATE",
        message: "Не удалось создать категорию",
      });
  }
});

router.route("/:id").delete(async (req, res) => {
  const { category_id } = req.params;
  const categories = await Categories.destroy({ where: { category_id } });
  if (!categories) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ code: "CATEGORY_NOT_FOUND", message: "Категория не найдена" });
  }
  return res
    .status(StatusCodes.NO_CONTENT)
    .json({ code: "CATEGORY_DELETED", message: "Категория удалена" });
});

router.route('/:id').put(async (req, res) => {
  console.log(req.params.id);
  const { category_id } = await req.params;
  const { category_name } = await req.body;
  const categories = await Categories.update(
    { category_name },
    { where: { category_id } }
  );
  console.log(categories);
  if (categories) {
    res.status(StatusCodes.OK).json(categories);
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({
        code: "CATEGORY_NOT_FOUND",
        message: "Не удалось обновить категорию",
      });
  }
});

module.exports = router;
