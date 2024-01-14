import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/lessons',
    '/lessons/:lessonId',
    '/api/lessons/:lessonId',
    '/api/webhook/clerk',
    '/api/webhooks(.*)',
    '/api/webhook(.*)',
    '/api/webhook',
  ],
  ignoredRoutes: ['/api/webhook/clerk'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
