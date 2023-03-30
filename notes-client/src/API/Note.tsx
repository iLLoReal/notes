
export interface NoteInterface {
    add(): boolean;
    load(id: number): NoteInterface;
    write(text: string): boolean;
    delete(): boolean;
    display(element: React.ReactElement): void;
}
