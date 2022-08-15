import controllerAsyncWrapper from '../../app/http/middlewares/async-wrapper';
import { celebrate } from 'celebrate';
import { createEventSchema } from '../../app/requests/event';
import { EventControllerInstance } from '../../app/http/controllers/event.controller';
import express from 'express';

const router = express.Router();

router.post('/new', celebrate(createEventSchema), controllerAsyncWrapper(EventControllerInstance.createEvent));

const authRouter = {
    baseUrl: '/events',
    router
};
export default authRouter;