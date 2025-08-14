import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  Save() {
    return 'saved book';
  }
  Delete() {
    return 'Deleted book';
  }
}
