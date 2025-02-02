import { PostLoginParams } from '@wabinar/api-types/auth';
import { User } from 'src/types/user';
import { Workspace } from 'src/types/workspace';

import { http } from './http';
import { CREATED, OK } from './http-status';

// TODO: BE API 변경할 때 제거
type GetUserInfo = {
  user: User;
  workspaces: Workspace[];
};

export const getAuth = async (): Promise<GetUserInfo> => {
  const res = await http.get(`/auth`);

  if (res.status !== OK) throw new Error();

  return res.data;
};

export const postAuthLogin = async ({
  code,
}: PostLoginParams): Promise<GetUserInfo> => {
  const res = await http.post(`/auth/login`, { code });

  if (res.status !== CREATED) throw new Error();

  return res.data;
};

export const deleteAuthlogout = async () => {
  const res = await http.delete(`/auth/logout`);

  if (res.status !== OK) throw new Error();

  return;
};
