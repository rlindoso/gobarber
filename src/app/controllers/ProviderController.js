import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();

/**
 * @swagger
 * tags:
 *   name: Providers
 *   description: Providers
 */

/**
 * @swagger
 * path:
 *  /providers:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      summary: List providers
 *      tags: [Providers]
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                noExemple: noExemple
 */
