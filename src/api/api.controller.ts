import { Controller, Post, Body } from '@nestjs/common';
import { ApiService } from './api.service';
import { UserInfoDto } from './dto/user-info.dto';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Post('submit')
  async index(@Body() userInfoDto: UserInfoDto) {
    const serviceResolve = await this.apiService.setUserInfo(userInfoDto);
    if (serviceResolve) {
      return { message: 'User has been submitted successfully!' };
    }
  }
}
