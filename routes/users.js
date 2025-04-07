import express from 'express';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
const router = express.Router();

// Get all Users
router.get('/', getUsers);

// Get single User
router.get('/:id', getUser);

// Create new User
router.post('/', createUser);

// Update User
router.put('/:id', updateUser);

// Delete User
router.delete('/:id', deleteUser);

export default router;