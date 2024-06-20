export class PersonDetails {
  adult: boolean = false;
  also_known_as: string[] = [];
  biography: string = '';
  birthday: string = '';
  deathday: string | null = null;
  gender: number = 0;
  homepage: string | null = null;
  id: number = 0;
  imdb_id: string = '';
  known_for_department: string = '';
  name: string = '';
  place_of_birth: string = '';
  popularity: number = 0;
  profile_path: string | null = null;

  get poster() {
    return `/api${this.profile_path}`;
  }
}
