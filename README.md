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

*Defined in [index.ts:32](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L32)*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`ns` | string | "" |

**Returns:** [Logger](#classesloggermd)

### Properties

#### LEVEL

• `Readonly` **LEVEL**: *typeof* [LEVEL](#enumslevelmd) = LEVEL

*Defined in [index.ts:32](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L32)*

### Accessors

#### level

• get **level**(): [LEVEL](#level)

*Defined in [index.ts:57](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L57)*

**Returns:** [LEVEL](#level)

• set **level**(`level`: [LEVEL](#level)): void

*Defined in [index.ts:61](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L61)*

##### Parameters:

Name | Type |
------ | ------ |
`level` | [LEVEL](#level) |

**Returns:** void

___

#### memory

• get **memory**(): any

*Defined in [index.ts:46](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L46)*

**Returns:** any

___

#### namespace

• get **namespace**(): string

*Defined in [index.ts:50](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L50)*

**Returns:** string

### Methods

#### assert

▸ **assert**(`condition?`: undefined \| false \| true, ...`data`: any[]): void

*Defined in [index.ts:95](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L95)*

##### Parameters:

Name | Type |
------ | ------ |
`condition?` | undefined \| false \| true |
`...data` | any[] |

**Returns:** void

___

#### clear

▸ **clear**(): void

*Defined in [index.ts:102](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L102)*

**Returns:** void

___

#### count

▸ **count**(`label?`: undefined \| string): void

*Defined in [index.ts:108](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L108)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### countReset

▸ **countReset**(`label?`: undefined \| string): void

*Defined in [index.ts:114](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L114)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### debug

▸ **debug**(...`data`: any[]): void

*Defined in [index.ts:120](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L120)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### dir

▸ **dir**(`item?`: any, `options?`: any): void

*Defined in [index.ts:127](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L127)*

##### Parameters:

Name | Type |
------ | ------ |
`item?` | any |
`options?` | any |

**Returns:** void

___

#### dirxml

▸ **dirxml**(...`data`: any[]): void

*Defined in [index.ts:133](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L133)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### disableAll

▸ **disableAll**(): void

*Defined in [index.ts:87](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L87)*

**Returns:** void

___

#### enableAll

▸ **enableAll**(): void

*Defined in [index.ts:83](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L83)*

**Returns:** void

___

#### error

▸ **error**(...`data`: any[]): void

*Defined in [index.ts:140](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L140)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### exception

▸ **exception**(`message?`: undefined \| string, ...`optionalParams`: any[]): void

*Defined in [index.ts:147](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L147)*

##### Parameters:

Name | Type |
------ | ------ |
`message?` | undefined \| string |
`...optionalParams` | any[] |

**Returns:** void

___

#### getLogger

▸ **getLogger**(`ns`: string): [Logger](#classesloggermd)

*Defined in [index.ts:75](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L75)*

##### Parameters:

Name | Type |
------ | ------ |
`ns` | string |

**Returns:** [Logger](#classesloggermd)

___

#### getLoggers

▸ **getLoggers**(): [Dictionary](#dictionary)\<[Logger](#classesloggermd)>

*Defined in [index.ts:79](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L79)*

**Returns:** [Dictionary](#dictionary)\<[Logger](#classesloggermd)>

___

#### group

▸ **group**(...`data`: any[]): void

*Defined in [index.ts:153](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L153)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### groupCollapsed

▸ **groupCollapsed**(...`data`: any[]): void

*Defined in [index.ts:160](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L160)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### groupEnd

▸ **groupEnd**(): void

*Defined in [index.ts:167](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L167)*

**Returns:** void

___

#### info

▸ **info**(...`data`: any[]): void

*Defined in [index.ts:173](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L173)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### log

▸ **log**(...`data`: any[]): void

*Defined in [index.ts:180](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L180)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### noConflict

▸ **noConflict**(): [Logger](#classesloggermd)

*Defined in [index.ts:91](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L91)*

**Returns:** [Logger](#classesloggermd)

___

#### ns

▸ **ns**(`ns`: string): [Logger](#classesloggermd)

*Defined in [index.ts:67](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L67)*

##### Parameters:

Name | Type |
------ | ------ |
`ns` | string |

**Returns:** [Logger](#classesloggermd)

___

#### table

▸ **table**(`tabularData?`: any, `properties?`: string[]): void

*Defined in [index.ts:187](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L187)*

##### Parameters:

Name | Type |
------ | ------ |
`tabularData?` | any |
`properties?` | string[] |

**Returns:** void

___

#### time

▸ **time**(`label?`: undefined \| string): void

*Defined in [index.ts:193](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L193)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### timeEnd

▸ **timeEnd**(`label?`: undefined \| string): void

*Defined in [index.ts:199](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L199)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### timeLog

▸ **timeLog**(`label?`: undefined \| string, ...`data`: any[]): void

*Defined in [index.ts:205](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L205)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |
`...data` | any[] |

**Returns:** void

___

#### timeStamp

▸ **timeStamp**(`label?`: undefined \| string): void

*Defined in [index.ts:212](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L212)*

##### Parameters:

Name | Type |
------ | ------ |
`label?` | undefined \| string |

**Returns:** void

___

#### trace

▸ **trace**(...`data`: any[]): void

*Defined in [index.ts:218](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L218)*

##### Parameters:

Name | Type |
------ | ------ |
`...data` | any[] |

**Returns:** void

___

#### warn

▸ **warn**(...`data`: any[]): void

*Defined in [index.ts:225](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L225)*

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

*Defined in [index.ts:15](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L15)*

___

#### ERROR

•  **ERROR**: 

*Defined in [index.ts:18](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L18)*

___

#### INFO

•  **INFO**: 

*Defined in [index.ts:16](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L16)*

___

#### SILENT

•  **SILENT**: 

*Defined in [index.ts:13](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L13)*

___

#### TRACE

•  **TRACE**: 

*Defined in [index.ts:14](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L14)*

___

#### WARN

•  **WARN**: 

*Defined in [index.ts:17](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L17)*


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

*Defined in [index.ts:10](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L10)*

#### Type parameters:

Name |
------ |
`TValue` |

## Variables

### logger

• `Const` **logger**: [Logger](#classesloggermd) = new Logger()

*Defined in [index.ts:239](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L239)*

___

### namespaces

• `Const` **namespaces**: [Dictionary](#dictionary)\<[Logger](#classesloggermd)>

*Defined in [index.ts:21](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L21)*

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

*Defined in [index.ts:3](https://github.com/idimetrix/logvis/blob/5eac93a/src/index.ts#L3)*


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
