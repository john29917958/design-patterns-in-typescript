class Singleton {
  private static instance: Singleton | null = null;

  private constructor(private id: number) {
    this.id = id;
  }

  public static getInstance(): Singleton {
    if (this.instance === null) {
      const id = Math.floor(Math.random() * 100);
      this.instance = new Singleton(id);
    }
    return this.instance;
  }

  public showId(): void {
    console.log(this.id);
  }
}

export { Singleton };
