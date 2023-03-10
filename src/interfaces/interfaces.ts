export interface Welcome {
    id: string;
    first_name: string;
    last_name: string;
    picture: any;
    status: status;
    task: Task;
    department: string;
}

export interface Task {
    title: string;
    description: string;
}

export interface interfacesAvatar {
    backgroundColor: string;
}

export const enum status {
    AVAILABLE = "#9CFF2E",
    BUSY = "red",
    PERMISSION = "black"
}

export interface style {
    height?: string,
    width?: string
}

export interface interfacesCircle {
    backgroundColor?: string;
    height?: string;
    width?: string;
}