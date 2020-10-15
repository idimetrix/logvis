<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [logvis](#logvis)
  - [Installation](#installation)
  - [Demo](#demo)
  - [Documentation](#documentation)
- [Classes](#classes)
  - [Class: Logger](#class-logger)
    - [Hierarchy](#hierarchy)
    - [Implements](#implements)
    - [Index](#index)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Accessors](#accessors)
    - [Methods](#methods)
- [Enums](#enums)
  - [Enumeration: LEVEL](#enumeration-level)
    - [Index](#index-1)
    - [Enumeration members](#enumeration-members)
- [logvis](#logvis-1)
  - [Index](#index-2)
    - [Namespaces](#namespaces)
    - [Enumerations](#enumerations)
    - [Classes](#classes-1)
    - [Interfaces](#interfaces)
    - [Type aliases](#type-aliases)
    - [Variables](#variables)
  - [Type aliases](#type-aliases-1)
    - [Dictionary](#dictionary)
  - [Variables](#variables-1)
    - [logger](#logger)
    - [namespaces](#namespaces)
- [Interfaces](#interfaces-1)
  - [Interface: Window](#interface-window)
    - [Hierarchy](#hierarchy-1)
    - [Index](#index-3)
    - [Properties](#properties-1)
  - [Interface: IDictionary\<TValue>](#interface-idictionary%5Ctvalue)
    - [Type parameters](#type-parameters)
    - [Hierarchy](#hierarchy-2)
    - [Indexable](#indexable)
- [Modules](#modules)
  - [Namespace: \_\_global](#namespace-%5C_%5C_global)
    - [Index](#index-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

**[logvis](#readmemd)**

> [Globals](#globalsmd)

## logvis

#### TypeScript/JavaScript promise queue client library with concurrency control

## Installation

Install with [npm](https://www.npmjs.com):

```sh
$ npm install --save logvis
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add logvis
```

## [Demo](https://www.npmjs.com/package/logvis)

#### [Try online demo](https://www.npmjs.com/package/logvis)

## [Documentation](https://www.npmjs.com/package/logvis)

#### [Try online documentation](https://www.npmjs.com/package/logvis)

# Classes


<a name="classesloggermd"></a>

**[logvis](#readmemd)**

> [Globals](#globalsmd) / Logger

## Class: Logger

### Hierarchy

* **Logger**

### Implements

* Console

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [Console](#console)
* [LEVEL](#level)

#### Accessors

* [level](#level)
* [memory](#memory)
* [namespace](#namespace)

#### Methods

* [assert](#assert)
* [clear](#clear)
* [count](#count)
* [countReset](#countreset)
* [debug](#debug)
* [dir](#dir)
* [dirxml](#dirxml)
* [disableAll](#disableall)
* [enableAll](#enableall)
* [error](#error)
* [exception](#exception)
* [getLogger](#getlogger)
* [getLoggers](#getloggers)
* [group](#group)
* [groupCollapsed](#groupcollapsed)
* [groupEnd](#groupend)
* [info](#info)
* [log](#log)
* [noConflict](#noconflict)
* [ns](#ns)
* [profile](#profile)
* [profileEnd](#profileend)
* [table](#table)
* [time](#time)
* [timeEnd](#timeend)
* [timeLog](#timelog)
* [timeStamp](#timestamp)
* [trace](#trace)
* [warn](#warn)

### Constructors

#### constructor

\+ **new Logger**(`ns`: string): [Logger](#classesloggermd)

*Defined in [index.ts:34](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L34)*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`ns` | string | "" |

**Returns:** [Logger](#classesloggermd)

### Properties

#### Console

• `Readonly` **Console**: *typeof* [Logger](#classesloggermd) = Logger

*Defined in [index.ts:34](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L34)*

___

#### LEVEL

• `Readonly` **LEVEL**: *typeof* [LEVEL](#enumslevelmd) = LEVEL

*Defined in [index.ts:32](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L32)*

### Accessors

#### level

• get **level**(): [LEVEL](#level)

*Defined in [index.ts:59](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L59)*

**Returns:** [LEVEL](#level)

• set **level**(`level`: [LEVEL](#level)): void

*Defined in [index.ts:63](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L63)*

##### Parameters:

Name | Type |
------ | ------ |
`level` | [LEVEL](#level) |

**Returns:** void

___

#### memory

• get **memory**(): any

*Defined in [index.ts:48](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L48)*

**Returns:** any

___

#### namespace

• get **namespace**(): string

*Defined in [index.ts:52](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L52)*

**Returns:** string

### Methods

#### assert

▸ **assert**(`condition?`: undefined \| false \| true, ...`data`: any[]): void

*Defined in [index.ts:105](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L105)*

A simple assertion test that verifies whether `value` is truthy.
If it is not, an `AssertionError` is thrown.
If provided, the error `message` is formatted using `util.format()` and used as the error message.

##### Parameters:

Name | Type |
------ | ------ |
`condition?` | undefined \| false \| true |
`...data` | any[] |

**Returns:** void

___

#### clear

▸ **clear**(): void

*Defined in [index.ts:116](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L116)*

When `stdout` is a TTY, calling `logger.clear()` will attempt to clear the TTY.
When `stdout` is not a TTY, this method does nothing.

**Returns:** void

___

#### count

▸ **count**(`label?`: undefined \| string): void

*Defined in [index.ts:125](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L125)*

Maintains an internal counter specific to `label` and outputs to `stdout` the number of times `logger.count()` has been called with the given `label`.

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### countReset

▸ **countReset**(`label?`: undefined \| string): void

*Defined in [index.ts:134](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L134)*

Resets the internal counter specific to `label`.

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### debug

▸ **debug**(...`data`: any[]): void

*Defined in [index.ts:143](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L143)*

The `logger.debug()` function is an alias for {@link console.log()}.

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### dir

▸ **dir**(`item?`: any, `options?`: any): void

*Defined in [index.ts:154](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L154)*

Uses {@link util.inspect()} on `obj` and prints the resulting string to `stdout`.
This function bypasses any custom `inspect()` function defined on `obj`.

##### Parameters:

Name | Type |
------ | ------ |
`item?` | any |
`options?` | any |

**Returns:** void

___

#### dirxml

▸ **dirxml**(...`data`: any[]): void

*Defined in [index.ts:163](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L163)*

This method calls {@link console.log()} passing it the arguments received. Please note that this method does not produce any XML formatting

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### disableAll

▸ **disableAll**(): void

*Defined in [index.ts:89](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L89)*

**Returns:** void

___

#### enableAll

▸ **enableAll**(): void

*Defined in [index.ts:85](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L85)*

**Returns:** void

___

#### error

▸ **error**(...`data`: any[]): void

*Defined in [index.ts:173](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L173)*

Prints to `stderr` with newline.

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### exception

▸ **exception**(`message?`: undefined \| string, ...`optionalParams`: any[]): void

*Defined in [index.ts:180](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L180)*

##### Parameters:

Name | Type |
------ | ------ |
`message?` | undefined \| string |
`...optionalParams` | any[] |

**Returns:** void

___

#### getLogger

▸ **getLogger**(`ns`: string): [Logger](#classesloggermd)

*Defined in [index.ts:77](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L77)*

##### Parameters:

Name | Type |
------ | ------ |
`ns` | string |

**Returns:** [Logger](#classesloggermd)

___

#### getLoggers

▸ **getLoggers**(): [Dictionary](#dictionary)\<[Logger](#classesloggermd)>

*Defined in [index.ts:81](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L81)*

**Returns:** [Dictionary](#dictionary)\<[Logger](#classesloggermd)>

___

#### group

▸ **group**(...`data`: any[]): void

*Defined in [index.ts:190](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L190)*

Increases indentation of subsequent lines by two spaces.
If one or more `label`s are provided, those are printed first without the additional indentation.

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### groupCollapsed

▸ **groupCollapsed**(...`data`: any[]): void

*Defined in [index.ts:200](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L200)*

The `logger.groupCollapsed()` function is an alias for {@link console.group()}.

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### groupEnd

▸ **groupEnd**(): void

*Defined in [index.ts:210](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L210)*

Decreases indentation of subsequent lines by two spaces.

**Returns:** void

___

#### info

▸ **info**(...`data`: any[]): void

*Defined in [index.ts:219](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L219)*

The {@link console.info()} function is an alias for {@link console.log()}.

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### log

▸ **log**(...`data`: any[]): void

*Defined in [index.ts:229](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L229)*

Prints to `stdout` with newline.

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### noConflict

▸ **noConflict**(): [Logger](#classesloggermd)

*Defined in [index.ts:93](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L93)*

**Returns:** [Logger](#classesloggermd)

___

#### ns

▸ **ns**(`ns`: string): [Logger](#classesloggermd)

*Defined in [index.ts:69](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L69)*

##### Parameters:

Name | Type |
------ | ------ |
`ns` | string |

**Returns:** [Logger](#classesloggermd)

___

#### profile

▸ **profile**(`label?`: undefined \| string): void

*Defined in [index.ts:300](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L300)*

This method does not display anything unless used in the inspector.
 Starts a JavaScript CPU profile with an optional label.

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### profileEnd

▸ **profileEnd**(`label?`: undefined \| string): void

*Defined in [index.ts:311](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L311)*

This method does not display anything unless used in the inspector.
 Stops the current JavaScript CPU profiling session if one has been started and prints the report to the Profiles panel of the inspector.

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### table

▸ **table**(`tabularData?`: any, `properties?`: string[]): void

*Defined in [index.ts:240](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L240)*

This method does not display anything unless used in the inspector.
 Prints to `stdout` the array `array` formatted as a table.

##### Parameters:

Name | Type |
------ | ------ |
`tabularData?` | any |
`properties?` | string[] |

**Returns:** void

___

#### time

▸ **time**(`label?`: undefined \| string): void

*Defined in [index.ts:249](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L249)*

Starts a timer that can be used to compute the duration of an operation. Timers are identified by a unique `label`.

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### timeEnd

▸ **timeEnd**(`label?`: undefined \| string): void

*Defined in [index.ts:258](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L258)*

Stops a timer that was previously started by calling {@link console.time()} and prints the result to `stdout`.

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### timeLog

▸ **timeLog**(`label?`: undefined \| string, ...`data`: any[]): void

*Defined in [index.ts:267](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L267)*

For a timer that was previously started by calling {@link console.time()}, prints the elapsed time and other `data` arguments to `stdout`.

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |
`...data` | any[] |

**Returns:** void

___

#### timeStamp

▸ **timeStamp**(`label?`: undefined \| string): void

*Defined in [index.ts:323](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L323)*

This method does not display anything unless used in the inspector.
 Adds an event with the label `label` to the Timeline panel of the inspector.

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### trace

▸ **trace**(...`data`: any[]): void

*Defined in [index.ts:277](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L277)*

Prints to `stderr` the string 'Trace :', followed by the {@link util.format()} formatted message and stack trace to the current position in the code.

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### warn

▸ **warn**(...`data`: any[]): void

*Defined in [index.ts:287](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L287)*

The {@link console.warn()} function is an alias for {@link console.error()}.

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

# Enums


<a name="enumslevelmd"></a>

**[logvis](#readmemd)**

> [Globals](#globalsmd) / LEVEL

## Enumeration: LEVEL

### Index

#### Enumeration members

* [DEBUG](#debug)
* [ERROR](#error)
* [INFO](#info)
* [SILENT](#silent)
* [TRACE](#trace)
* [WARN](#warn)

### Enumeration members

#### DEBUG

•  **DEBUG**: 

*Defined in [index.ts:15](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L15)*

___

#### ERROR

•  **ERROR**: 

*Defined in [index.ts:18](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L18)*

___

#### INFO

•  **INFO**: 

*Defined in [index.ts:16](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L16)*

___

#### SILENT

•  **SILENT**: 

*Defined in [index.ts:13](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L13)*

___

#### TRACE

•  **TRACE**: 

*Defined in [index.ts:14](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L14)*

___

#### WARN

•  **WARN**: 

*Defined in [index.ts:17](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L17)*


<a name="globalsmd"></a>

**[logvis](#readmemd)**

> Globals

# logvis

## Index

### Namespaces

* [\_\_global](#modules__globalmd)

### Enumerations

* [LEVEL](#enumslevelmd)

### Classes

* [Logger](#classesloggermd)

### Interfaces

* [IDictionary](#interfacesidictionarymd)

### Type aliases

* [Dictionary](#dictionary)

### Variables

* [logger](#logger)
* [namespaces](#namespaces)

## Type aliases

### Dictionary

Ƭ  **Dictionary**\<TValue>: [IDictionary](#interfacesidictionarymd)\<TValue>

*Defined in [index.ts:10](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L10)*

#### Type parameters:

Name |
------ |
`TValue` |

## Variables

### logger

• `Const` **logger**: [Logger](#classesloggermd) = new Logger()

*Defined in [index.ts:336](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L336)*

___

### namespaces

• `Const` **namespaces**: [Dictionary](#dictionary)\<[Logger](#classesloggermd)>

*Defined in [index.ts:21](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L21)*

# Interfaces


<a name="interfaces__globalwindowmd"></a>

**[logvis](#readmemd)**

> [Globals](#globalsmd) / [\_\_global](#modules__globalmd) / Window

## Interface: Window

### Hierarchy

* **Window**

### Index

#### Properties

* [logger](#logger)

### Properties

#### logger

•  **logger**: [Logger](#classesloggermd)

*Defined in [index.ts:3](https://github.com/idimetrix/logvis/blob/a04ce46/src/index.ts#L3)*


<a name="interfacesidictionarymd"></a>

**[logvis](#readmemd)**

> [Globals](#globalsmd) / IDictionary

## Interface: IDictionary\<TValue>

### Type parameters

Name |
------ |
`TValue` |

### Hierarchy

* **IDictionary**

### Indexable

▪ [key: string]: TValue

# Modules


<a name="modules__globalmd"></a>

**[logvis](#readmemd)**

> [Globals](#globalsmd) / \_\_global

## Namespace: \_\_global

### Index

#### Interfaces

* [Window](#interfaces__globalwindowmd)
