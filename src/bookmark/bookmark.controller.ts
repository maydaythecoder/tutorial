import { Controller, Delete, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}
  @Post('book')
  save() {
    return this.bookmarkService.Save();
  }
  @Delete('delete')
  delete() {
    return this.bookmarkService.Delete();
  }
}
