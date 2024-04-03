import fs from 'fs';
import { logger } from './index.js';
import { ERROR_PATH } from '../configs/index.js';

export const getFile = (path) => {
    let content = fs.readFileSync(path, 'utf8', (error, data) => {
        if (error) {
            logger.log('error', ERROR_PATH);
            return;
        }

        content = data;
    });
    
    return content;
};
