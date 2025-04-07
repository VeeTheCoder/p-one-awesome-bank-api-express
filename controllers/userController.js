let users = [
  { id: 1, title: 'User One' },
  { id: 2, title: 'User Two' },
  { id: 3, title: 'User Three' },
];

// @desc   Get all users
// @route  GET /api/users
export const getUsers = (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(users.slice(0, limit));
  }

  res.status(200).json(users);
};

// @desc    Get single user
// @route   GET /api/users/:id
export const getUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    const error = new Error(`A user with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(user);
};

// @desc    Create new user
// @route   POST /api/users
export const createUser = (req, res, next) => {
  const newUser = {
    id: users.length + 1,
    title: req.body.title,
  };

  if (!newUser.title) {
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }

  users.push(newUser);
  res.status(201).json(users);
};

// @desc    Update user
// @route   PUT /api/users/:id
export const updateUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    const error = new Error(`A user with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  user.title = req.body.title;
  res.status(200).json(users);
};

// @desc    Delete user
// @route   DELETE /api/users/:id
export const deleteUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    const error = new Error(`A user with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  users = users.filter((user) => user.id !== id);
  res.status(200).json(users);
};