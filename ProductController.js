import Product from"./models/Product.js"


class ProductController {
  async getProduct(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.send(`Ошибка при получении товаров: ${error}`);
    }
  }
  async addProducts(req ,res){
    const { title, description, price } = req.body;
    try {
      const newProduct = await Product.create({
        title,
        description,
        price,
      });
      await newProduct.save();
      res.send("Товар добавлен успешно!");
    } catch (error) {
      res.send("Ошибка при добавлении товара!");
    }
  }
  async updateProduct(req ,res ){
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
          res.send("Такого товара не существует!");
        }
        res.send("Товар успешно удалён!");
      } catch (error) {
        console.error(`Ошибка при удалении товара: ${error}`);
        res.send("Ошибка при удалении товара!");
      }
  }
  async editProduct(req ,res){
    try {
        const { id } = req.params;
    
        const productUpdate = await Product.findByIdAndUpdate(id, {
          $set: req.body,
        });
      } catch (error) {}
  }
  async deleteProduct(req ,res){
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
          res.send("Такого товара не существует!");
        }
        res.send("Товар успешно удалён!");
      } catch (error) {
        console.error(`Ошибка при удалении товара: ${error}`);
        res.send("Ошибка при удалении товара!");
      }
  }
}
export default new ProductController()
