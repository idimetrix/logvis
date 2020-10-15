declare global {
  interface Window {
    logger: Logger;
  }
}

export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export type Dictionary<TValue> = IDictionary<TValue>;

export enum LEVEL {
  SILENT,
  TRACE,
  DEBUG,
  INFO,
  WARN,
  ERROR,
}

const namespaces: Dictionary<Logger> = {};

export class Logger implements Console {
  // --- static

  private readonly namespaces: string[] = [];

  private _level: LEVEL = LEVEL.SILENT;

  // --- properties

  public readonly LEVEL: typeof LEVEL = LEVEL;

  constructor(ns: string = '') {
    this.namespaces.push(...ns.split('.'));

    this.enableAll();

    if (typeof window !== 'undefined' && !window.logger) {
      window.logger = this;
    }
  }

  // --- getters / setters

  public get memory(): any {
    return console.memory;
  }

  public get namespace(): string {
    return this.namespaces
      .filter(Boolean)
      .map((ns: string): string => `[${ns.toLocaleUpperCase()}]`)
      .join(' ');
  }

  public get level(): LEVEL {
    return this._level;
  }

  public set level(level: LEVEL) {
    this._level = level;
  }

  // --- methods

  public ns(ns: string): Logger {
    const namespace: string = this.namespaces.concat(ns).join('.');

    namespaces[namespace] = namespaces[namespace] || new Logger(namespace);

    return namespaces[namespace];
  }

  public getLogger(ns: string): Logger {
    return this.ns(ns);
  }

  public getLoggers(): Dictionary<Logger> {
    return namespaces;
  }

  public enableAll(): void {
    this.level = LEVEL.ERROR;
  }

  public disableAll(): void {
    this.level = LEVEL.SILENT;
  }

  public noConflict(): Logger {
    return typeof window !== 'undefined' ? window.logger : this;
  }

  public assert(condition?: boolean, ...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.assert.call(console, condition, ...data);
  }

  public clear(): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.clear();
  }

  public count(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.count(label);
  }

  public countReset(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.countReset(label);
  }

  public debug(...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.debug.call(console, ...data);
  }

  public dir(item?: any, options?: any): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.dir.call(console, item, options);
  }

  public dirxml(...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.dirxml.call(console, ...data);
  }

  public error(...data: any[]): void {
    if (!this.validate(LEVEL.ERROR)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.error.call(console, ...data);
  }

  public exception(message?: string, ...optionalParams: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.exception.call(console, message, ...optionalParams);
  }

  public group(...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.group.call(console, ...data);
  }

  public groupCollapsed(...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.groupCollapsed.call(console, ...data);
  }

  public groupEnd(): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.groupEnd();
  }

  public info(...data: any[]): void {
    if (!this.validate(LEVEL.INFO)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.info.call(console, ...data);
  }

  public log(...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.log.call(console, ...data);
  }

  public table(tabularData?: any, properties?: string[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.table.call(console, tabularData, properties);
  }

  public time(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.time.call(console, label);
  }

  public timeEnd(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.timeEnd.call(console, label);
  }

  public timeLog(label?: string, ...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.timeLog.call(console, label, ...data);
  }

  public timeStamp(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.timeStamp.call(console, label);
  }

  public trace(...data: any[]): void {
    if (!this.validate(LEVEL.TRACE)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.trace.call(console, ...data);
  }

  public warn(...data: any[]): void {
    if (!this.validate(LEVEL.WARN)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.warn.call(console, ...data);
  }

  // ---

  private validate(level: LEVEL): boolean {
    return this.level >= level;
  }
}

export const logger: Logger = new Logger();

export default logger;
