const { Book, User } = require('../models');

const getById = async (id) => {
  const user = await User.findOne({
    where: { userId: id },
    include: [{
      model: Book,
      as: 'books',
      through: { attributes: [] },
     }],
  });

  if (!user) return null;

  return user;
};

module.exports = {
  getById,
};