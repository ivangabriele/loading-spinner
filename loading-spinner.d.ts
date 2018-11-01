export interface StartOptions {
  clearChar: boolean
  clearLine: boolean
  doNotBlock: boolean
  hideCursor: boolean
}

declare interface LoadingSpinner {
  setSequence(sequence: string[]): void
  start(forInMs: number, options: StartOptions): void
  stop(): void
}
