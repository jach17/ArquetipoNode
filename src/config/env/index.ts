import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';

dotenv.config();

interface IConfig {
    port: string | number;
    database: {
        DB_DIALECT: Dialect,
        DB_NAME?: string;
        DB_USER?: string;
        DB_PASSWORD?: string;
        DB_PORT?: string;
        DB_HOST?: string;
        DB_STORAGE?: string;
    };
    kafka: {
        CLIENT_ID: string;
        GROUP_ID: string;
        BROKER: string;
    };
    elasticSearch: {
        HOST: string;
        USER: string;
        PASSWORD: string;
    };
    logger:{
        LOGGER_LEVEL: string;
        INDEX_LOGGER: string;
    };
    secret: string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'local';

const local: IConfig = {
    port: process.env.PORT || 9100,
    database: {
        DB_DIALECT: 'mysql',
        DB_NAME: process.env.DB_NAME || 'project',
        DB_USER: process.env.DB_USER || 'mysql',
        DB_PASSWORD: process.env.DB_PASSWORD || 'project123',
        DB_PORT: process.env.DB_PORT || '5432',
        DB_HOST: process.env.DB_HOST || 'localhost'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },
    elasticSearch: {
        HOST: process.env.ELASTIC_SEARCH_HOST || 'https://axity.es.us-east4.gcp.elastic-cloud.com:9243',
        USER: process.env.ELASTIC_SEARCH_USER || 'elastic',
        PASSWORD: process.env.ELASTIC_SEARCH_PASSWORD || 'XXXXXXXXXXXX',
    },
    secret: process.env.SECRET || '@QEGTUI',
    logger:{
        LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info',
        INDEX_LOGGER: process.env.INDEX_LOGGER || 'User-service',
    }
};

const development: IConfig = {
    port: process.env.PORT || 9100,
    database: {
        DB_DIALECT: 'mysql',
        DB_NAME: process.env.DB_NAME || 'project',
        DB_USER: process.env.DB_USER || 'mysql',
        DB_PASSWORD: process.env.DB_PASSWORD || 'project123',
        DB_PORT: process.env.DB_PORT || '5432',
        DB_HOST: process.env.DB_HOST || 'localhost'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },
    elasticSearch: {
        HOST: process.env.ELASTIC_SEARCH_HOST || 'https://axity.es.us-east4.gcp.elastic-cloud.com:9243',
        USER: process.env.ELASTIC_SEARCH_USER || 'elastic',
        PASSWORD: process.env.ELASTIC_SEARCH_PASSWORD || 'XXXXXXXXXXXX'
    },
    secret: process.env.SECRET || '@QEGTUI',
    logger:{
        LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info',
        INDEX_LOGGER: process.env.INDEX_LOGGER || 'User-service',
    }
};

const production: IConfig = {
    port: process.env.PORT || 9100,
    database: {
        DB_DIALECT: 'mysql',
        DB_NAME: process.env.DB_NAME || 'project',
        DB_USER: process.env.DB_USER || 'mysql',
        DB_PASSWORD: process.env.DB_PASSWORD || 'project123',
        DB_PORT: process.env.DB_PORT || '5432',
        DB_HOST: process.env.DB_HOST || 'localhost'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },
    elasticSearch: {
        HOST: process.env.ELASTIC_SEARCH_HOST || 'https://axity.es.us-east4.gcp.elastic-cloud.com:9243',
        USER: process.env.ELASTIC_SEARCH_USER || 'elastic',
        PASSWORD: process.env.ELASTIC_SEARCH_PASSWORD || 'XXXXXXXXXXXX'
    },
    secret: process.env.SECRET || '@QEGTUI',
    logger:{
        LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info',
        INDEX_LOGGER: process.env.INDEX_LOGGER || 'User-service',
    }
};

const test: IConfig = {
    port: process.env.PORT || 9100,
    database: {
        DB_DIALECT: 'sqlite',
        DB_STORAGE: process.env.DB_STORAGE || ':memory:'
    },
    kafka: {
        CLIENT_ID: process.env.CLIENT_ID || 'test-app',
        GROUP_ID: process.env.GROUP_ID || 'test-app',
        BROKER: process.env.BROKER || 'localhost:9092'
    },
    elasticSearch: {
        HOST: process.env.ELASTIC_SEARCH_HOST || 'https://axity.es.us-east4.gcp.elastic-cloud.com:9243',
        USER: process.env.ELASTIC_SEARCH_USER || 'elastic',
        PASSWORD: process.env.ELASTIC_SEARCH_PASSWORD || 'XXXXXXXXXXXX',
    },
    secret: process.env.SECRET || '@QEGTUI',
    logger:{
        LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info',
        INDEX_LOGGER: process.env.INDEX_LOGGER || 'User-service',
    }
};

const config: {
    [name: string]: IConfig
} = {
    local,
    test,
    development,
    production
};

export default config[NODE_ENV];
