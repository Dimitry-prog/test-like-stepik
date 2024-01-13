'use server';

import { handleError } from '@/lib/utils';
import { UserType } from '@/types/user-types';
import prisma from '../prisma';

export const createUser = async (userData: Omit<UserType, 'id'>) => {
  try {
    const user = await prisma.user.create({ data: userData });
    return user;
  } catch (e) {
    handleError(e);
  }
};
