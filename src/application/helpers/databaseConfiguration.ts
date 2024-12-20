const DB_TYPE: "mysql" | "postgres" | "cockroachdb" | "mariadb" | "sqlite" =
  "postgres";

export const DB_CONFIG = {
  type: DB_TYPE,
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "db_blog",
};
