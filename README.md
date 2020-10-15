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
  - [Interface: IDictionary\<TValue>](#interface-idictionary%5Ctvalue)
    - [Type parameters](#type-parameters)
    - [Hierarchy](#hierarchy-1)
    - [Indexable](#indexable)

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

*Defined in [index.ts:26](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L26)*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`ns` | string | "" |

**Returns:** [Logger](#classesloggermd)

### Properties

#### LEVEL

• `Readonly` **LEVEL**: *typeof* [LEVEL](#enumslevelmd) = LEVEL

*Defined in [index.ts:26](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L26)*

### Accessors

#### level

• get **level**(): [LEVEL](#level)

*Defined in [index.ts:44](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L44)*

**Returns:** [LEVEL](#level)

• set **level**(`level`: [LEVEL](#level)): void

*Defined in [index.ts:48](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L48)*

##### Parameters:

Name | Type |
------ | ------ |
`level` | [LEVEL](#level) |

**Returns:** void

___

#### memory

• get **memory**(): any

*Defined in [index.ts:34](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L34)*

**Returns:** any

___

#### namespace

• get **namespace**(): string

*Defined in [index.ts:38](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L38)*

**Returns:** string

### Methods

#### assert

▸ **assert**(`condition?`: undefined \| false \| true, ...`data`: any[]): void

*Defined in [index.ts:82](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L82)*

##### Parameters:

Name | Type |
------ | ------ |
`condition?` | undefined \| false \| true |
`...data` | any[] |

**Returns:** void

___

#### clear

▸ **clear**(): void

*Defined in [index.ts:88](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L88)*

**Returns:** void

___

#### count

▸ **count**(`label?`: undefined \| string): void

*Defined in [index.ts:94](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L94)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### countReset

▸ **countReset**(`label?`: undefined \| string): void

*Defined in [index.ts:100](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L100)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### debug

▸ **debug**(...`data`: any[]): void

*Defined in [index.ts:106](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L106)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### dir

▸ **dir**(`item?`: any, `options?`: any): void

*Defined in [index.ts:112](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L112)*

##### Parameters:

Name | Type |
------ | ------ |
`item?` | any |
`options?` | any |

**Returns:** void

___

#### dirxml

▸ **dirxml**(...`data`: any[]): void

*Defined in [index.ts:118](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L118)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### disableAll

▸ **disableAll**(): void

*Defined in [index.ts:74](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L74)*

**Returns:** void

___

#### enableAll

▸ **enableAll**(): void

*Defined in [index.ts:70](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L70)*

**Returns:** void

___

#### error

▸ **error**(...`data`: any[]): void

*Defined in [index.ts:124](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L124)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### exception

▸ **exception**(`message?`: undefined \| string, ...`optionalParams`: any[]): void

*Defined in [index.ts:130](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L130)*

##### Parameters:

Name | Type |
------ | ------ |
`message?` | undefined \| string |
`...optionalParams` | any[] |

**Returns:** void

___

#### getLogger

▸ **getLogger**(`ns`: string): [Logger](#classesloggermd)

*Defined in [index.ts:62](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L62)*

##### Parameters:

Name | Type |
------ | ------ |
`ns` | string |

**Returns:** [Logger](#classesloggermd)

___

#### getLoggers

▸ **getLoggers**(): [Dictionary](#dictionary)\<[Logger](#classesloggermd)>

*Defined in [index.ts:66](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L66)*

**Returns:** [Dictionary](#dictionary)\<[Logger](#classesloggermd)>

___

#### group

▸ **group**(...`data`: any[]): void

*Defined in [index.ts:136](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L136)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### groupCollapsed

▸ **groupCollapsed**(...`data`: any[]): void

*Defined in [index.ts:142](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L142)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### groupEnd

▸ **groupEnd**(): void

*Defined in [index.ts:148](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L148)*

**Returns:** void

___

#### info

▸ **info**(...`data`: any[]): void

*Defined in [index.ts:154](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L154)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### log

▸ **log**(...`data`: any[]): void

*Defined in [index.ts:160](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L160)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### noConflict

▸ **noConflict**(): [Logger](#classesloggermd)

*Defined in [index.ts:78](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L78)*

**Returns:** [Logger](#classesloggermd)

___

#### ns

▸ **ns**(`ns`: string): [Logger](#classesloggermd)

*Defined in [index.ts:54](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L54)*

##### Parameters:

Name | Type |
------ | ------ |
`ns` | string |

**Returns:** [Logger](#classesloggermd)

___

#### table

▸ **table**(`tabularData?`: any, `properties?`: string[]): void

*Defined in [index.ts:166](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L166)*

##### Parameters:

Name | Type |
------ | ------ |
`tabularData?` | any |
`properties?` | string[] |

**Returns:** void

___

#### time

▸ **time**(`label?`: undefined \| string): void

*Defined in [index.ts:172](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L172)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### timeEnd

▸ **timeEnd**(`label?`: undefined \| string): void

*Defined in [index.ts:178](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L178)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### timeLog

▸ **timeLog**(`label?`: undefined \| string, ...`data`: any[]): void

*Defined in [index.ts:184](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L184)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |
`...data` | any[] |

**Returns:** void

___

#### timeStamp

▸ **timeStamp**(`label?`: undefined \| string): void

*Defined in [index.ts:190](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L190)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### trace

▸ **trace**(...`data`: any[]): void

*Defined in [index.ts:196](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L196)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### warn

▸ **warn**(...`data`: any[]): void

*Defined in [index.ts:202](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L202)*

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

*Defined in [index.ts:9](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L9)*

___

#### ERROR

•  **ERROR**: 

*Defined in [index.ts:12](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L12)*

___

#### INFO

•  **INFO**: 

*Defined in [index.ts:10](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L10)*

___

#### SILENT

•  **SILENT**: 

*Defined in [index.ts:7](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L7)*

___

#### TRACE

•  **TRACE**: 

*Defined in [index.ts:8](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L8)*

___

#### WARN

•  **WARN**: 

*Defined in [index.ts:11](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L11)*


<a name="globalsmd"></a>

**[logvis](#readmemd)**

> Globals

# logvis

## Index

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

*Defined in [index.ts:4](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L4)*

#### Type parameters:

Name |
------ |
`TValue` |

## Variables

### logger

• `Const` **logger**: [Logger](#classesloggermd) = new Logger()

*Defined in [index.ts:215](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L215)*

___

### namespaces

• `Const` **namespaces**: [Dictionary](#dictionary)\<[Logger](#classesloggermd)>

*Defined in [index.ts:15](https://github.com/idimetrix/tail-queue/blob/3d84d18/src/index.ts#L15)*

# Interfaces


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
