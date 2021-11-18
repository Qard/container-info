export declare interface Entry {
    id: string
    groups: string
    path: string
    controllers?: string[]
    containerId?: string
    podId?: string
    taskId?: string
}

export declare interface Result {
    containerId?: string
    podId?: string
    taskId?: string
    entries: Entry[]
}

export declare function sync(pid: string = 'self'): undefined | Result

export declare function parse(contents: string): undefined | Result

declare async function containerInfo(pid: string = 'self'): Promise<undefined | Result>

export default containerInfo
