import Router from "express";
const router = new Router();
import profilesRoutes from './profilesRoutes.js';
import publicationsRoutes from './publicationsRoutes.js';
import commentRoutes from './commentsRoutes.js';
import repostsRoutes from './repostsRoutes.js';
import savePublicationsRoutes from './savePublicationsRoutes.js';
import typeNotificationsRoutes from './typeNotificationsRoutes.js';
import notificationsRoutes from './notificationsRoutes.js';
import subscribersRoutes from './subscribersRoutes.js';
import subscriptionsRoutes from './subscriptionsRoutes.js';
import storiesRoutes from './storiesRoutes.js';
import archiveStoriesRoutes from './archiveStoriesRoutes.js';
import chatRoomsRoutes from './chatRoomsRoutes.js';
import roomParticipantsRoutes from './roomParticipantsRoutes.js';
import messageTypesRoutes from './messageTypesRoutes.js';
import messagesRoutes from './messagesRoutes.js';
import likesPublicationsRoutes from './likesPublicationsRoutes.js';

router.use('/profiles', profilesRoutes)
router.use('/publication', publicationsRoutes)
router.use('/comments', commentRoutes)
router.use('/likespublications', likesPublicationsRoutes)
router.use('/reposts', repostsRoutes)
router.use('/savepublications', savePublicationsRoutes)
router.use('/typenotif', typeNotificationsRoutes)
router.use('/notifications', notificationsRoutes)
router.use('/subscribers', subscribersRoutes)
router.use('/subscriptions', subscriptionsRoutes)
router.use('/stories', storiesRoutes)
router.use('/archivestories', archiveStoriesRoutes)
router.use('/chatrooms', chatRoomsRoutes)
router.use('/roomparticipants', roomParticipantsRoutes)
router.use('/messagetypes', messageTypesRoutes)
router.use('/messages', messagesRoutes)

export default router;