import test, { ExecutionContext } from 'ava';

import { logger } from './';

test('Logger', (t: ExecutionContext): void => {
  logger.enableAll();
  t.is(logger.level, logger.LEVEL.ERROR);

  logger.disableAll();
  t.is(logger.level, logger.LEVEL.SILENT);
});
