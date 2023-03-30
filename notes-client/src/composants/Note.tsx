import { NoteInterface } from "../API/Note";

import {
    Card,
    CardContent,
    CardHeader,
} from '@mui/material';

import { useState } from "react";

interface MuiNoteProps {
    title: string;
    children: React.ReactElement | React.ReactElement[];
}

function MuiNote({ title, children }: MuiNoteProps) {
    const [noteStatus, setNoteStatus] = useState(false);
    const [inputField, setInputField] = useState(false);

    return (
        <Card>
            <CardHeader title={title} />
            <CardContent>{children}</CardContent>
        </Card>
    )
}