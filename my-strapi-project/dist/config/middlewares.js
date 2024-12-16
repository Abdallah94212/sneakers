"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'http:', 'https:'],
                    'img-src': ["'self'", 'data:', 'blob:', 'http:', 'https:'],
                    'media-src': ["'self'", 'data:', 'blob:', 'http:', 'https:'],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    {
        name: 'strapi::cors',
        config: {
            origin: ['http://localhost:3000'], // Remplace par l'URL de ton frontend si elle est différente
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
            headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
