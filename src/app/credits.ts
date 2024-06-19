import { Type } from 'class-transformer';

export class Credits {
  id: number = 0;
  @Type(() => Cast) cast: Cast[] = [];
  @Type(() => Crew) cast: Crex[] = [];
}
