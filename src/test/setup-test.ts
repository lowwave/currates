// eslint-disable-next-line import/no-namespace
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';

import { server } from './msw';

expect.extend(matchers);

afterEach(() => {
  cleanup();
  server.resetHandlers();
});
beforeAll(() => server.listen());
afterAll(() => server.close());
