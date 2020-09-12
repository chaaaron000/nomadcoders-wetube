import express from "express";
import routes from "../routers";
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
