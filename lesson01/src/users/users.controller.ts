import {
  Controller,
  Body,
  Get,
  Param,
  Delete,
  Post,
  Patch,
  Query,
} from '@nestjs/common';

@Controller('users') // /users
export class UsersController {
  @Get() // GET /users
  findAll(@Query('role') role?: string) {
    return [];
  }
  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  remove(@Param('id') id: string) {
    return { id };
  }
}
