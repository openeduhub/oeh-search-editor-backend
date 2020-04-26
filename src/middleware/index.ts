import {
    handleCors,
    handleCompression,
} from './common';

import { handleGraphQl } from './graphql';
import { handleJwt } from './authenticate';

export default [
    handleCors,
    handleCompression,
    handleJwt,
    handleGraphQl,
];
