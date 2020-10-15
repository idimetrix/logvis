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

  public readonly Console: any = Logger;

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

  // --- from Console

  /**
   * A simple assertion test that verifies whether `value` is truthy.
   * If it is not, an `AssertionError` is thrown.
   * If provided, the error `message` is formatted using `util.format()` and used as the error message.
   */

  public assert(condition?: boolean, ...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.assert.call(console, condition, ...data);
  }

  /**
   * When `stdout` is a TTY, calling `logger.clear()` will attempt to clear the TTY.
   * When `stdout` is not a TTY, this method does nothing.
   */
  public clear(): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.clear();
  }

  /**
   * Maintains an internal counter specific to `label` and outputs to `stdout` the number of times `logger.count()` has been called with the given `label`.
   */
  public count(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.count(label);
  }

  /**
   * Resets the internal counter specific to `label`.
   */
  public countReset(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.countReset(label);
  }

  /**
   * The `logger.debug()` function is an alias for {@link console.log()}.
   */
  public debug(...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.debug.call(console, ...data);
  }

  /**
   * Uses {@link util.inspect()} on `obj` and prints the resulting string to `stdout`.
   * This function bypasses any custom `inspect()` function defined on `obj`.
   */
  public dir(item?: any, options?: any): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.dir.call(console, item, options);
  }

  /**
   * This method calls {@link console.log()} passing it the arguments received. Please note that this method does not produce any XML formatting
   */
  public dirxml(...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.dirxml.call(console, ...data);
  }

  /**
   * Prints to `stderr` with newline.
   */
  public error(...data: any[]): void {
    if (!this.validate(LEVEL.ERROR)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.error.call(console, ...data);
  }

  public exception(message?: string, ...optionalParams: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.exception.call(console, message, ...optionalParams);
  }

  /**
   * Increases indentation of subsequent lines by two spaces.
   * If one or more `label`s are provided, those are printed first without the additional indentation.
   */
  public group(...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.group.call(console, ...data);
  }

  /**
   * The `logger.groupCollapsed()` function is an alias for {@link console.group()}.
   */
  public groupCollapsed(...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.groupCollapsed.call(console, ...data);
  }

  /**
   * Decreases indentation of subsequent lines by two spaces.
   */
  public groupEnd(): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.groupEnd();
  }

  /**
   * The {@link console.info()} function is an alias for {@link console.log()}.
   */
  public info(...data: any[]): void {
    if (!this.validate(LEVEL.INFO)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.info.call(console, ...data);
  }

  /**
   * Prints to `stdout` with newline.
   */
  public log(...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.log.call(console, ...data);
  }

  /**
   * This method does not display anything unless used in the inspector.
   *  Prints to `stdout` the array `array` formatted as a table.
   */
  public table(tabularData?: any, properties?: string[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.table.call(console, tabularData, properties);
  }

  /**
   * Starts a timer that can be used to compute the duration of an operation. Timers are identified by a unique `label`.
   */
  public time(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.time.call(console, label);
  }

  /**
   * Stops a timer that was previously started by calling {@link console.time()} and prints the result to `stdout`.
   */
  public timeEnd(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.timeEnd.call(console, label);
  }

  /**
   * For a timer that was previously started by calling {@link console.time()}, prints the elapsed time and other `data` arguments to `stdout`.
   */
  public timeLog(label?: string, ...data: any[]): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.timeLog.call(console, label, ...data);
  }

  /**
   * Prints to `stderr` the string 'Trace :', followed by the {@link util.format()} formatted message and stack trace to the current position in the code.
   */
  public trace(...data: any[]): void {
    if (!this.validate(LEVEL.TRACE)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.trace.call(console, ...data);
  }

  /**
   * The {@link console.warn()} function is an alias for {@link console.error()}.
   */
  public warn(...data: any[]): void {
    if (!this.validate(LEVEL.WARN)) return;
    if (this.namespace) (data = data || []).unshift(this.namespace);

    console.warn.call(console, ...data);
  }

  // --- Inspector mode only ---

  /**
   * This method does not display anything unless used in the inspector.
   *  Starts a JavaScript CPU profile with an optional label.
   */
  public profile(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;
    if (typeof (console as any).profile !== 'undefined') {
      (console as any).profile.call(console, label);
    }
  }

  /**
   * This method does not display anything unless used in the inspector.
   *  Stops the current JavaScript CPU profiling session if one has been started and prints the report to the Profiles panel of the inspector.
   */
  public profileEnd(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    if (typeof (console as any).profile !== 'undefined') {
      (console as any).profileEnd.call(console, label);
    }
  }

  /**
   * This method does not display anything unless used in the inspector.
   *  Adds an event with the label `label` to the Timeline panel of the inspector.
   */
  public timeStamp(label?: string): void {
    if (!this.validate(LEVEL.DEBUG)) return;

    console.timeStamp.call(console, label);
  }

  // ---

  private validate(level: LEVEL): boolean {
    return this.level >= level;
  }
}

export const logger: Logger = new Logger();

export default logger;
