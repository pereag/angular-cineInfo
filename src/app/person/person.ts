export class Person {
  adult: boolean = false;
  credit_id: string = '';
  gender: number = 0;
  id: number = 0;
  known_for_department: string = '';
  name: string = '';
  original_name: string = '';
  popularity: number = 0;
  profile_path: string | null = null;

  get poster() {
    return `/api${this.profile_path}`;
  }
}
