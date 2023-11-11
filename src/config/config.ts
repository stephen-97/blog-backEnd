import * as process from "process";

export const config = () => ({
    database: {
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        pwd: process.env.DB_PWD
    }
});
