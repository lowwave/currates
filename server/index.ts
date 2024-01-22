/* eslint-disable no-console */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import cors from '@fastify/cors';
import fastifyHttpProxy from '@fastify/http-proxy';
import fastifyStatic from '@fastify/static';
import Fastify from 'fastify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const origin = 'https://currates.onrender.com';

const server = Fastify();

server.register(cors, {
  methods: ['GET'],
  origin,
});

server.register(fastifyHttpProxy, {
  prefix: '/api',
  replyOptions: {
    rewriteHeaders: (headers) => ({
      ...headers,
      'Access-Control-Allow-Origin': origin,
    }),
  },
  upstream:
    'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
});

server.register(fastifyStatic, {
  root: path.join(__dirname, '../client'),
});

server.setNotFoundHandler((req, res) => {
  res.redirect('/');
});

server.listen({ host: '0.0.0.0', port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
