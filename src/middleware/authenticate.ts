import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import { Router } from 'express';

// https://auth0.com/docs/quickstart/backend/nodejs#validate-access-tokens
const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        // cache: true,
        // rateLimit: true,
        // jwksRequestsPerMinute: 5,
        jwksUri: `https://idm.wirlernenonline.de/auth/realms/master/protocol/openid-connect/certs`,
    }),

    // Validate the audience and the issuer.
    // audience: 'YOUR_API_IDENTIFIER',
    // issuer: `https://demo.identityserver.io`,
    algorithms: ['RS256'],
});

export function handleJwt(router: Router) {
    router.use(checkJwt);
}