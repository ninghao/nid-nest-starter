export default () => {
  return {
    db: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    typeOrm: {
      synchronize: JSON.parse(
        process.env.TYPEORM_SYNCHRONIZE.toLocaleLowerCase(),
      ) as boolean,
      autoLoadEntities: JSON.parse(
        process.env.TYPEORM_AUTO_LOAD_ENTITIES.toLocaleLowerCase(),
      ) as boolean,
    },
  };
};
