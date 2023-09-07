import { useRouter } from 'next/router';

export function redirectTo(route, router) {
  router.push(route);
}