import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

import type { User } from 'generated/prisma';

export const GetUser = createParamDecorator<
  keyof User | undefined,
  User | User[keyof User] | undefined
>((data: keyof User | undefined, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  const user = request.user as User | undefined;
  if (!user) return undefined;
  if (data) return user[data];
  return user;
});
