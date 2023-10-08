interface Strategy {
  execute(data: string): void;

  execute2(): void;

  execute3(data: number): void;
}

export { Strategy };
