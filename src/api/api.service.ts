import { Injectable } from '@nestjs/common';
import { UserInfoDto } from './dto/user-info.dto';

@Injectable()
export class ApiService {
  async setUserInfo(userInfoDto: UserInfoDto): Promise<boolean> {
    return new Promise((res, rej) => setTimeout(() => res(true)));
  }
}
