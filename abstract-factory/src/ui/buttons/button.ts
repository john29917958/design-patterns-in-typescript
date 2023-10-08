abstract class Button {
  public get themeColor(): string {
    return this._themeColor;
  }

  protected constructor(protected _themeColor: string) {
    this._themeColor = _themeColor;
  }
}

export { Button };
