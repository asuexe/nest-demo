import { Controller, Post, Delete, UseGuards } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../guards/roles.guard';
import { UserRole } from '../user/user.entity';

@Controller('site')
@UseGuards(RolesGuard)
export class SiteController {
  @Post('create')
  @Roles(UserRole.UPDATER, UserRole.SUPERUSER)
  createSite() {
    return 'Site created!';
  }

  @Delete('delete')
  @Roles(UserRole.SUPERUSER)
  deleteSite() {
    return 'Site deleted!';
  }
}
