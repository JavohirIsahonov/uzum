const { Router } = require("express");
const router = Router();
const { register, login } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized
 */

router.post("/register", register);
router.post("/login", login);
const {
    getAllCarts,
    getCartById,
    createNewCart,
    deletebyid,
    updatebyid,
  } = require('../controllers/cart.controller');
  const upload = require('../utils/upload')
  
  /**
   * @swagger
   * /api/v1/cart/all:
   
   *   get:
   *     summary: Retrieve all carts
   *     responses:
   *       200:
   *         description: A list of carts
   */
  
  /**
   * @swagger
   * /api/v1/cart/{id}:
   *   get:
   *     summary: Retrieve a cart by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID of the cart
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: A single cart
   */
  
  /**
   * @swagger
   * /api/v1/cart/create:
   *   post:
   *     summary: Create a new cart
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               items:
   *                 type: array
   *                 items:
   *                   type: string
   *     responses:
   *       201:
   *         description: Cart created successfully
   */
  
  /**
   * @swagger
   * /api/v1/cart/{id}:
   *   delete:
   *     summary: Delete a cart by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID of the cart
   *         schema:
   *           type: string
   *     responses:
   *       204:
   *         description: Cart deleted successfully
   */
  
  /**
   * @swagger
   * /api/v1/cart/{id}:
   *   put:
   *     summary: Update a cart by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID of the cart
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               items:
   *                 type: array
   *                 items:
   *                   type: string
   *     responses:
   *       200:
   *         description: Cart updated successfully
   */
  
  router.get('/all', getAllCarts);
  router.get('/:id', getCartById);
  router.post('/create',upload.single('image'), createNewCart);
  router.delete('/:id', deletebyid);
  router.put('/:id', updatebyid);

module.exports = router;
