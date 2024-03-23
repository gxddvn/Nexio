import sequelize from '../db.js';
import { DataTypes} from 'sequelize';

const ProfilesTable = sequelize.define( 'profiles_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, allowNull: false, unique: true},
    p_num: {type: DataTypes.STRING, allowNull: false, unique: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    user_role: {type: DataTypes.STRING, defaultValue: "USER"}, 
    num_publications: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false}, 
    num_subscribers: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false}, 
    num_subscriptions: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false}, 
    img_avatar: {type: DataTypes.STRING, defaultValue: "https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"}, 
});

const PublicationsTable = sequelize.define( 'publications_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // id_profile: int,
    img: {type: DataTypes.STRING, allowNull: false},
    caption: {type: DataTypes.STRING, defaultValue: ""},
    num_likes: {type: DataTypes.INTEGER, defaultValue: 0},
    num_comments: {type: DataTypes.INTEGER, defaultValue: 0},
    num_reposts: {type: DataTypes.INTEGER, defaultValue: 0},
});

const LikesPublicationsTable = sequelize.define( 'likes_publications_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // id_publication: int,
    // id_profile: int,
});

const CommentsTable = sequelize.define( 'comments_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // id_publication: int,
    // id_profile: int,
    comment: {type: DataTypes.STRING, allowNull: false},
    num_likes: {type: DataTypes.INTEGER, defaultValue: 0},
});

const RepostsTable = sequelize.define( 'reposts_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // id_publication: int,
    // id_profile: int,
});

const SavePublicationsTable = sequelize.define( 'save_publications_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // id_publication: int,
    // id_profile: int,
});

const TypeNotificationsTable = sequelize.define( 'notification_types_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, allowNull: false},
});

const NotificationsTable = sequelize.define( 'notifications_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // id_type_notif: int,
    // id_profile: int,
    // id_publication: int,
    // id_profile_subs: int,
    notification: {type: DataTypes.STRING, allowNull: false},
});

const SubscribersTable = sequelize.define( 'subscribers_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // id_profile: int,
    // id_profile_subscriber: int
});

const SubscriptionsTable = sequelize.define( 'subscriptions_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // id_profile: int,
    // id_profile_subscription: int
});

const StoriesTable = sequelize.define( 'stories_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
    // id_profile: int,
});

const ArchiveStoriesTable = sequelize.define( 'archive_stories_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
    // id_profile: int,
});

const ChatRoomsTable = sequelize.define( 'chat_rooms_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rooms_name: {type: DataTypes.STRING, allowNull: false},
});

const RoomParticipantsTable = sequelize.define( 'room_participants_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // id_profile: int,
    // rooms_id: int,
});

const MessageTypesTable = sequelize.define( 'message_types_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_messages: {type: DataTypes.STRING, allowNull: false},
});

const MessagesTable = sequelize.define( 'messages_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // id_profile: int,
    // rooms_id: int,
    // message_type: int
    message: {type: DataTypes.STRING, allowNull: false},
    media_url: {type: DataTypes.STRING, },
});

ProfilesTable.hasMany(PublicationsTable);
PublicationsTable.belongsTo(ProfilesTable);

///////////////////#

ProfilesTable.hasMany(CommentsTable);
CommentsTable.belongsTo(ProfilesTable);

PublicationsTable.hasMany(CommentsTable);
CommentsTable.belongsTo(PublicationsTable);

/////////////////////////#

ProfilesTable.hasMany(LikesPublicationsTable);
LikesPublicationsTable.belongsTo(ProfilesTable);

PublicationsTable.hasMany(LikesPublicationsTable);
LikesPublicationsTable.belongsTo(PublicationsTable);

/////////////////////////#

ProfilesTable.hasMany(RepostsTable);
RepostsTable.belongsTo(ProfilesTable);

PublicationsTable.hasMany(RepostsTable);
RepostsTable.belongsTo(PublicationsTable);

//////////////////////////#

ProfilesTable.hasMany(SavePublicationsTable);
SavePublicationsTable.belongsTo(ProfilesTable);

PublicationsTable.hasMany(SavePublicationsTable);
SavePublicationsTable.belongsTo(PublicationsTable);

/////////////////////////#

TypeNotificationsTable.hasMany(NotificationsTable);
NotificationsTable.belongsTo(TypeNotificationsTable);

ProfilesTable.hasMany(NotificationsTable);
NotificationsTable.belongsTo(ProfilesTable);

ProfilesTable.hasMany(NotificationsTable);
NotificationsTable.belongsTo(ProfilesTable, {foreignKey: 'subProfilesTableId'});

PublicationsTable.hasMany(NotificationsTable);
NotificationsTable.belongsTo(PublicationsTable);

////////////////////////#

ProfilesTable.hasMany(SubscribersTable);
SubscribersTable.belongsTo(ProfilesTable);

ProfilesTable.hasMany(SubscribersTable);
SubscribersTable.belongsTo(ProfilesTable, {foreignKey: 'subProfilesTableId'});

///////////////////////////#

ProfilesTable.hasMany(SubscriptionsTable);
SubscriptionsTable.belongsTo(ProfilesTable);

ProfilesTable.hasMany(SubscriptionsTable);
SubscriptionsTable.belongsTo(ProfilesTable, {foreignKey: 'subProfilesTableId'});

/////////////////////////#

ProfilesTable.hasMany(StoriesTable);
StoriesTable.belongsTo(ProfilesTable);

/////////////////////#

ProfilesTable.hasMany(ArchiveStoriesTable);
ArchiveStoriesTable.belongsTo(ProfilesTable);

///////////////////////#

ProfilesTable.hasMany(RoomParticipantsTable);
RoomParticipantsTable.belongsTo(ProfilesTable);

ChatRoomsTable.hasMany(RoomParticipantsTable);
RoomParticipantsTable.belongsTo(ChatRoomsTable);

/////////////////////////#

ProfilesTable.hasMany(MessagesTable);
MessagesTable.belongsTo(ProfilesTable);

ChatRoomsTable.hasMany(MessagesTable);
MessagesTable.belongsTo(ChatRoomsTable);

MessageTypesTable.hasMany(MessagesTable);
MessagesTable.belongsTo(MessageTypesTable);

//////////////////////#

export default {
    ProfilesTable,
    PublicationsTable,
    LikesPublicationsTable,
    CommentsTable,
    RepostsTable,
    SavePublicationsTable,
    TypeNotificationsTable,
    NotificationsTable,
    SubscribersTable,
    SubscriptionsTable,
    StoriesTable,
    ArchiveStoriesTable,
    ChatRoomsTable,
    RoomParticipantsTable,
    MessageTypesTable,
    MessagesTable,
}
