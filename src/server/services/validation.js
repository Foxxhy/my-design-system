import validateCss from 'css-validator';
import assert from 'assert';
import {
    VALIDATOR_INVALID,
    VALIDATOR_WARNING,
    VALIDATOR_ERROR,
    VALIDATOR_SUCCESS
} from '../configs/index.js';
import { logger } from './index.js';

const VALIDATION_EXCEPTIONS = {
    import: 'unsupported-import',
    variable: 'css-variable',
};

const filterExceptions = (list) => {
    return list.filter(item => item.type !== VALIDATION_EXCEPTIONS.variable && item.type !== VALIDATION_EXCEPTIONS.import);
};

export const validationCSS = (name, css) => {
    validateCss({text: css}, (error, data) => {
        try {
            assert.strictEqual(data.validity, true);
        } catch (error) {
            logger.log('error', `${name} ${VALIDATOR_INVALID}`);
            return '';
        }

        try {
            assert.deepEqual(data.warnings, []);
        } catch (error) {
            const warnings = filterExceptions(data.warnings);
            if (warnings.length !== 0) {
                logger.log('error', `${name} ${VALIDATOR_WARNING}`);
                return '';
            }
        }

        try {
            assert.deepEqual(data.errors, []);
        } catch (error) {
            logger.log('error', `${name} ${VALIDATOR_ERROR}`);
            return '';
        }

        logger.log('info', `${name} ${VALIDATOR_SUCCESS}`);
      });
};