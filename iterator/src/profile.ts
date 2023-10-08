class Profile {
  constructor(private id: string, private email: string) {
    this.id = id;
    this.email = email;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }
}

export { Profile };
