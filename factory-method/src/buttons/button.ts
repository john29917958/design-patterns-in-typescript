interface Button {
    onClick: Function | null;

    render(): void;

    click(): void;
}

export { Button };
