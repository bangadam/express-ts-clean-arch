const DB_TYPE:
| "mysql"
| "postgres"
| "cockroachdb"
| "mariadb"
| "sqlite" = "mysql";

export const DB_CONFIG = {
    type: DB_TYPE,
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "db_blog",
}