
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Users
 * 
 */
export type Users = {
  user_id: string
  user_name: string
  user_email: string
  user_salt: string
  user_password: string
  user_created_at: Date
  user_updated_at: Date
}

/**
 * Model Teachers
 * 
 */
export type Teachers = {
  teacher_id: string
  teacher_name: string
  teacher_email: string
  teacher_disciplines_ids: Prisma.JsonValue
  teacher_situation: string
  teacher_created_at: Date
  teacher_updated_at: Date
}

/**
 * Model Disciplines
 * 
 */
export type Disciplines = {
  discipline_id: string
  discipline_name: string
  discipline_situation: string
}

/**
 * Model Classes
 * 
 */
export type Classes = {
  class_id: string
  class_name: string
  class_email: string
  class_situation: string
}

/**
 * Model Timesheets
 * 
 */
export type Timesheets = {
  timesheet_id: string
  timesheet_teacher_id: string
  timesheet_class_id: string
  timesheet_date: Date
  timesheet_situation: string
}

/**
 * Model Curriculums
 * 
 */
export type Curriculums = {
  curriculum_id: string
  curriculum_name: string
  curriculum_class_id: string
  curriculum_situation: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.teachers`: Exposes CRUD operations for the **Teachers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teachers.findMany()
    * ```
    */
  get teachers(): Prisma.TeachersDelegate<GlobalReject>;

  /**
   * `prisma.disciplines`: Exposes CRUD operations for the **Disciplines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplines
    * const disciplines = await prisma.disciplines.findMany()
    * ```
    */
  get disciplines(): Prisma.DisciplinesDelegate<GlobalReject>;

  /**
   * `prisma.classes`: Exposes CRUD operations for the **Classes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classes.findMany()
    * ```
    */
  get classes(): Prisma.ClassesDelegate<GlobalReject>;

  /**
   * `prisma.timesheets`: Exposes CRUD operations for the **Timesheets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timesheets
    * const timesheets = await prisma.timesheets.findMany()
    * ```
    */
  get timesheets(): Prisma.TimesheetsDelegate<GlobalReject>;

  /**
   * `prisma.curriculums`: Exposes CRUD operations for the **Curriculums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curriculums
    * const curriculums = await prisma.curriculums.findMany()
    * ```
    */
  get curriculums(): Prisma.CurriculumsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.7.0
   * Query Engine version: 8746e055198f517658c08a0c426c7eec87f5a85f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Users: 'Users',
    Teachers: 'Teachers',
    Disciplines: 'Disciplines',
    Classes: 'Classes',
    Timesheets: 'Timesheets',
    Curriculums: 'Curriculums'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    user_name: string | null
    user_email: string | null
    user_salt: string | null
    user_password: string | null
    user_created_at: Date | null
    user_updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    user_name: string | null
    user_email: string | null
    user_salt: string | null
    user_password: string | null
    user_created_at: Date | null
    user_updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    user_name: number
    user_email: number
    user_salt: number
    user_password: number
    user_created_at: number
    user_updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    user_name?: true
    user_email?: true
    user_salt?: true
    user_password?: true
    user_created_at?: true
    user_updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    user_name?: true
    user_email?: true
    user_salt?: true
    user_password?: true
    user_created_at?: true
    user_updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    user_name?: true
    user_email?: true
    user_salt?: true
    user_password?: true
    user_created_at?: true
    user_updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    user_id: string
    user_name: string
    user_email: string
    user_salt: string
    user_password: string
    user_created_at: Date
    user_updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Promise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect = {
    user_id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_salt?: boolean
    user_password?: boolean
    user_created_at?: boolean
    user_updated_at?: boolean
  }

  export type UsersGetPayload<
    S extends boolean | null | undefined | UsersArgs,
    U = keyof S
      > = S extends true
        ? Users
    : S extends undefined
    ? never
    : S extends UsersArgs | UsersFindManyArgs
    ?'include' extends U
    ? Users 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Users ?Users [P]
  : 
     never
  } 
    : Users
  : Users


  type UsersCountArgs = Merge<
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface UsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Users>>, PrismaPromise<Array<UsersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * The data needed to create a Users.
     * 
    **/
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * The data needed to update a Users.
     * 
    **/
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * The filter to search for the Users to update in case it exists.
     * 
    **/
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     * 
    **/
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Filter which Users to delete.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
  }



  /**
   * Model Teachers
   */


  export type AggregateTeachers = {
    _count: TeachersCountAggregateOutputType | null
    _min: TeachersMinAggregateOutputType | null
    _max: TeachersMaxAggregateOutputType | null
  }

  export type TeachersMinAggregateOutputType = {
    teacher_id: string | null
    teacher_name: string | null
    teacher_email: string | null
    teacher_situation: string | null
    teacher_created_at: Date | null
    teacher_updated_at: Date | null
  }

  export type TeachersMaxAggregateOutputType = {
    teacher_id: string | null
    teacher_name: string | null
    teacher_email: string | null
    teacher_situation: string | null
    teacher_created_at: Date | null
    teacher_updated_at: Date | null
  }

  export type TeachersCountAggregateOutputType = {
    teacher_id: number
    teacher_name: number
    teacher_email: number
    teacher_disciplines_ids: number
    teacher_situation: number
    teacher_created_at: number
    teacher_updated_at: number
    _all: number
  }


  export type TeachersMinAggregateInputType = {
    teacher_id?: true
    teacher_name?: true
    teacher_email?: true
    teacher_situation?: true
    teacher_created_at?: true
    teacher_updated_at?: true
  }

  export type TeachersMaxAggregateInputType = {
    teacher_id?: true
    teacher_name?: true
    teacher_email?: true
    teacher_situation?: true
    teacher_created_at?: true
    teacher_updated_at?: true
  }

  export type TeachersCountAggregateInputType = {
    teacher_id?: true
    teacher_name?: true
    teacher_email?: true
    teacher_disciplines_ids?: true
    teacher_situation?: true
    teacher_created_at?: true
    teacher_updated_at?: true
    _all?: true
  }

  export type TeachersAggregateArgs = {
    /**
     * Filter which Teachers to aggregate.
     * 
    **/
    where?: TeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     * 
    **/
    orderBy?: Enumerable<TeachersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeachersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachersMaxAggregateInputType
  }

  export type GetTeachersAggregateType<T extends TeachersAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachers[P]>
      : GetScalarType<T[P], AggregateTeachers[P]>
  }




  export type TeachersGroupByArgs = {
    where?: TeachersWhereInput
    orderBy?: Enumerable<TeachersOrderByWithAggregationInput>
    by: Array<TeachersScalarFieldEnum>
    having?: TeachersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachersCountAggregateInputType | true
    _min?: TeachersMinAggregateInputType
    _max?: TeachersMaxAggregateInputType
  }


  export type TeachersGroupByOutputType = {
    teacher_id: string
    teacher_name: string
    teacher_email: string
    teacher_disciplines_ids: JsonValue
    teacher_situation: string
    teacher_created_at: Date
    teacher_updated_at: Date
    _count: TeachersCountAggregateOutputType | null
    _min: TeachersMinAggregateOutputType | null
    _max: TeachersMaxAggregateOutputType | null
  }

  type GetTeachersGroupByPayload<T extends TeachersGroupByArgs> = Promise<
    Array<
      PickArray<TeachersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachersGroupByOutputType[P]>
            : GetScalarType<T[P], TeachersGroupByOutputType[P]>
        }
      >
    >


  export type TeachersSelect = {
    teacher_id?: boolean
    teacher_name?: boolean
    teacher_email?: boolean
    teacher_disciplines_ids?: boolean
    teacher_situation?: boolean
    teacher_created_at?: boolean
    teacher_updated_at?: boolean
  }

  export type TeachersGetPayload<
    S extends boolean | null | undefined | TeachersArgs,
    U = keyof S
      > = S extends true
        ? Teachers
    : S extends undefined
    ? never
    : S extends TeachersArgs | TeachersFindManyArgs
    ?'include' extends U
    ? Teachers 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Teachers ?Teachers [P]
  : 
     never
  } 
    : Teachers
  : Teachers


  type TeachersCountArgs = Merge<
    Omit<TeachersFindManyArgs, 'select' | 'include'> & {
      select?: TeachersCountAggregateInputType | true
    }
  >

  export interface TeachersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Teachers that matches the filter.
     * @param {TeachersFindUniqueArgs} args - Arguments to find a Teachers
     * @example
     * // Get one Teachers
     * const teachers = await prisma.teachers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeachersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TeachersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Teachers'> extends True ? CheckSelect<T, Prisma__TeachersClient<Teachers>, Prisma__TeachersClient<TeachersGetPayload<T>>> : CheckSelect<T, Prisma__TeachersClient<Teachers | null >, Prisma__TeachersClient<TeachersGetPayload<T> | null >>

    /**
     * Find the first Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersFindFirstArgs} args - Arguments to find a Teachers
     * @example
     * // Get one Teachers
     * const teachers = await prisma.teachers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeachersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TeachersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Teachers'> extends True ? CheckSelect<T, Prisma__TeachersClient<Teachers>, Prisma__TeachersClient<TeachersGetPayload<T>>> : CheckSelect<T, Prisma__TeachersClient<Teachers | null >, Prisma__TeachersClient<TeachersGetPayload<T> | null >>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teachers.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teachers.findMany({ take: 10 })
     * 
     * // Only select the `teacher_id`
     * const teachersWithTeacher_idOnly = await prisma.teachers.findMany({ select: { teacher_id: true } })
     * 
    **/
    findMany<T extends TeachersFindManyArgs>(
      args?: SelectSubset<T, TeachersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Teachers>>, PrismaPromise<Array<TeachersGetPayload<T>>>>

    /**
     * Create a Teachers.
     * @param {TeachersCreateArgs} args - Arguments to create a Teachers.
     * @example
     * // Create one Teachers
     * const Teachers = await prisma.teachers.create({
     *   data: {
     *     // ... data to create a Teachers
     *   }
     * })
     * 
    **/
    create<T extends TeachersCreateArgs>(
      args: SelectSubset<T, TeachersCreateArgs>
    ): CheckSelect<T, Prisma__TeachersClient<Teachers>, Prisma__TeachersClient<TeachersGetPayload<T>>>

    /**
     * Create many Teachers.
     *     @param {TeachersCreateManyArgs} args - Arguments to create many Teachers.
     *     @example
     *     // Create many Teachers
     *     const teachers = await prisma.teachers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeachersCreateManyArgs>(
      args?: SelectSubset<T, TeachersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Teachers.
     * @param {TeachersDeleteArgs} args - Arguments to delete one Teachers.
     * @example
     * // Delete one Teachers
     * const Teachers = await prisma.teachers.delete({
     *   where: {
     *     // ... filter to delete one Teachers
     *   }
     * })
     * 
    **/
    delete<T extends TeachersDeleteArgs>(
      args: SelectSubset<T, TeachersDeleteArgs>
    ): CheckSelect<T, Prisma__TeachersClient<Teachers>, Prisma__TeachersClient<TeachersGetPayload<T>>>

    /**
     * Update one Teachers.
     * @param {TeachersUpdateArgs} args - Arguments to update one Teachers.
     * @example
     * // Update one Teachers
     * const teachers = await prisma.teachers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeachersUpdateArgs>(
      args: SelectSubset<T, TeachersUpdateArgs>
    ): CheckSelect<T, Prisma__TeachersClient<Teachers>, Prisma__TeachersClient<TeachersGetPayload<T>>>

    /**
     * Delete zero or more Teachers.
     * @param {TeachersDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teachers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeachersDeleteManyArgs>(
      args?: SelectSubset<T, TeachersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teachers = await prisma.teachers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeachersUpdateManyArgs>(
      args: SelectSubset<T, TeachersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Teachers.
     * @param {TeachersUpsertArgs} args - Arguments to update or create a Teachers.
     * @example
     * // Update or create a Teachers
     * const teachers = await prisma.teachers.upsert({
     *   create: {
     *     // ... data to create a Teachers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teachers we want to update
     *   }
     * })
    **/
    upsert<T extends TeachersUpsertArgs>(
      args: SelectSubset<T, TeachersUpsertArgs>
    ): CheckSelect<T, Prisma__TeachersClient<Teachers>, Prisma__TeachersClient<TeachersGetPayload<T>>>

    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teachers.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeachersCountArgs>(
      args?: Subset<T, TeachersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeachersAggregateArgs>(args: Subset<T, TeachersAggregateArgs>): PrismaPromise<GetTeachersAggregateType<T>>

    /**
     * Group by Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeachersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachersGroupByArgs['orderBy'] }
        : { orderBy?: TeachersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeachersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teachers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TeachersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Teachers findUnique
   */
  export type TeachersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Teachers
     * 
    **/
    select?: TeachersSelect | null
    /**
     * Throw an Error if a Teachers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Teachers to fetch.
     * 
    **/
    where: TeachersWhereUniqueInput
  }


  /**
   * Teachers findFirst
   */
  export type TeachersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Teachers
     * 
    **/
    select?: TeachersSelect | null
    /**
     * Throw an Error if a Teachers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Teachers to fetch.
     * 
    **/
    where?: TeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     * 
    **/
    orderBy?: Enumerable<TeachersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     * 
    **/
    cursor?: TeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     * 
    **/
    distinct?: Enumerable<TeachersScalarFieldEnum>
  }


  /**
   * Teachers findMany
   */
  export type TeachersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Teachers
     * 
    **/
    select?: TeachersSelect | null
    /**
     * Filter, which Teachers to fetch.
     * 
    **/
    where?: TeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     * 
    **/
    orderBy?: Enumerable<TeachersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     * 
    **/
    cursor?: TeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TeachersScalarFieldEnum>
  }


  /**
   * Teachers create
   */
  export type TeachersCreateArgs = {
    /**
     * Select specific fields to fetch from the Teachers
     * 
    **/
    select?: TeachersSelect | null
    /**
     * The data needed to create a Teachers.
     * 
    **/
    data: XOR<TeachersCreateInput, TeachersUncheckedCreateInput>
  }


  /**
   * Teachers createMany
   */
  export type TeachersCreateManyArgs = {
    data: Enumerable<TeachersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Teachers update
   */
  export type TeachersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Teachers
     * 
    **/
    select?: TeachersSelect | null
    /**
     * The data needed to update a Teachers.
     * 
    **/
    data: XOR<TeachersUpdateInput, TeachersUncheckedUpdateInput>
    /**
     * Choose, which Teachers to update.
     * 
    **/
    where: TeachersWhereUniqueInput
  }


  /**
   * Teachers updateMany
   */
  export type TeachersUpdateManyArgs = {
    data: XOR<TeachersUpdateManyMutationInput, TeachersUncheckedUpdateManyInput>
    where?: TeachersWhereInput
  }


  /**
   * Teachers upsert
   */
  export type TeachersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Teachers
     * 
    **/
    select?: TeachersSelect | null
    /**
     * The filter to search for the Teachers to update in case it exists.
     * 
    **/
    where: TeachersWhereUniqueInput
    /**
     * In case the Teachers found by the `where` argument doesn't exist, create a new Teachers with this data.
     * 
    **/
    create: XOR<TeachersCreateInput, TeachersUncheckedCreateInput>
    /**
     * In case the Teachers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TeachersUpdateInput, TeachersUncheckedUpdateInput>
  }


  /**
   * Teachers delete
   */
  export type TeachersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Teachers
     * 
    **/
    select?: TeachersSelect | null
    /**
     * Filter which Teachers to delete.
     * 
    **/
    where: TeachersWhereUniqueInput
  }


  /**
   * Teachers deleteMany
   */
  export type TeachersDeleteManyArgs = {
    where?: TeachersWhereInput
  }


  /**
   * Teachers without action
   */
  export type TeachersArgs = {
    /**
     * Select specific fields to fetch from the Teachers
     * 
    **/
    select?: TeachersSelect | null
  }



  /**
   * Model Disciplines
   */


  export type AggregateDisciplines = {
    _count: DisciplinesCountAggregateOutputType | null
    _min: DisciplinesMinAggregateOutputType | null
    _max: DisciplinesMaxAggregateOutputType | null
  }

  export type DisciplinesMinAggregateOutputType = {
    discipline_id: string | null
    discipline_name: string | null
    discipline_situation: string | null
  }

  export type DisciplinesMaxAggregateOutputType = {
    discipline_id: string | null
    discipline_name: string | null
    discipline_situation: string | null
  }

  export type DisciplinesCountAggregateOutputType = {
    discipline_id: number
    discipline_name: number
    discipline_situation: number
    _all: number
  }


  export type DisciplinesMinAggregateInputType = {
    discipline_id?: true
    discipline_name?: true
    discipline_situation?: true
  }

  export type DisciplinesMaxAggregateInputType = {
    discipline_id?: true
    discipline_name?: true
    discipline_situation?: true
  }

  export type DisciplinesCountAggregateInputType = {
    discipline_id?: true
    discipline_name?: true
    discipline_situation?: true
    _all?: true
  }

  export type DisciplinesAggregateArgs = {
    /**
     * Filter which Disciplines to aggregate.
     * 
    **/
    where?: DisciplinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     * 
    **/
    orderBy?: Enumerable<DisciplinesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DisciplinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplines
    **/
    _count?: true | DisciplinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinesMaxAggregateInputType
  }

  export type GetDisciplinesAggregateType<T extends DisciplinesAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplines[P]>
      : GetScalarType<T[P], AggregateDisciplines[P]>
  }




  export type DisciplinesGroupByArgs = {
    where?: DisciplinesWhereInput
    orderBy?: Enumerable<DisciplinesOrderByWithAggregationInput>
    by: Array<DisciplinesScalarFieldEnum>
    having?: DisciplinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinesCountAggregateInputType | true
    _min?: DisciplinesMinAggregateInputType
    _max?: DisciplinesMaxAggregateInputType
  }


  export type DisciplinesGroupByOutputType = {
    discipline_id: string
    discipline_name: string
    discipline_situation: string
    _count: DisciplinesCountAggregateOutputType | null
    _min: DisciplinesMinAggregateOutputType | null
    _max: DisciplinesMaxAggregateOutputType | null
  }

  type GetDisciplinesGroupByPayload<T extends DisciplinesGroupByArgs> = Promise<
    Array<
      PickArray<DisciplinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinesGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinesGroupByOutputType[P]>
        }
      >
    >


  export type DisciplinesSelect = {
    discipline_id?: boolean
    discipline_name?: boolean
    discipline_situation?: boolean
  }

  export type DisciplinesGetPayload<
    S extends boolean | null | undefined | DisciplinesArgs,
    U = keyof S
      > = S extends true
        ? Disciplines
    : S extends undefined
    ? never
    : S extends DisciplinesArgs | DisciplinesFindManyArgs
    ?'include' extends U
    ? Disciplines 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Disciplines ?Disciplines [P]
  : 
     never
  } 
    : Disciplines
  : Disciplines


  type DisciplinesCountArgs = Merge<
    Omit<DisciplinesFindManyArgs, 'select' | 'include'> & {
      select?: DisciplinesCountAggregateInputType | true
    }
  >

  export interface DisciplinesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Disciplines that matches the filter.
     * @param {DisciplinesFindUniqueArgs} args - Arguments to find a Disciplines
     * @example
     * // Get one Disciplines
     * const disciplines = await prisma.disciplines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DisciplinesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DisciplinesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Disciplines'> extends True ? CheckSelect<T, Prisma__DisciplinesClient<Disciplines>, Prisma__DisciplinesClient<DisciplinesGetPayload<T>>> : CheckSelect<T, Prisma__DisciplinesClient<Disciplines | null >, Prisma__DisciplinesClient<DisciplinesGetPayload<T> | null >>

    /**
     * Find the first Disciplines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinesFindFirstArgs} args - Arguments to find a Disciplines
     * @example
     * // Get one Disciplines
     * const disciplines = await prisma.disciplines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DisciplinesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DisciplinesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Disciplines'> extends True ? CheckSelect<T, Prisma__DisciplinesClient<Disciplines>, Prisma__DisciplinesClient<DisciplinesGetPayload<T>>> : CheckSelect<T, Prisma__DisciplinesClient<Disciplines | null >, Prisma__DisciplinesClient<DisciplinesGetPayload<T> | null >>

    /**
     * Find zero or more Disciplines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplines
     * const disciplines = await prisma.disciplines.findMany()
     * 
     * // Get first 10 Disciplines
     * const disciplines = await prisma.disciplines.findMany({ take: 10 })
     * 
     * // Only select the `discipline_id`
     * const disciplinesWithDiscipline_idOnly = await prisma.disciplines.findMany({ select: { discipline_id: true } })
     * 
    **/
    findMany<T extends DisciplinesFindManyArgs>(
      args?: SelectSubset<T, DisciplinesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Disciplines>>, PrismaPromise<Array<DisciplinesGetPayload<T>>>>

    /**
     * Create a Disciplines.
     * @param {DisciplinesCreateArgs} args - Arguments to create a Disciplines.
     * @example
     * // Create one Disciplines
     * const Disciplines = await prisma.disciplines.create({
     *   data: {
     *     // ... data to create a Disciplines
     *   }
     * })
     * 
    **/
    create<T extends DisciplinesCreateArgs>(
      args: SelectSubset<T, DisciplinesCreateArgs>
    ): CheckSelect<T, Prisma__DisciplinesClient<Disciplines>, Prisma__DisciplinesClient<DisciplinesGetPayload<T>>>

    /**
     * Create many Disciplines.
     *     @param {DisciplinesCreateManyArgs} args - Arguments to create many Disciplines.
     *     @example
     *     // Create many Disciplines
     *     const disciplines = await prisma.disciplines.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DisciplinesCreateManyArgs>(
      args?: SelectSubset<T, DisciplinesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Disciplines.
     * @param {DisciplinesDeleteArgs} args - Arguments to delete one Disciplines.
     * @example
     * // Delete one Disciplines
     * const Disciplines = await prisma.disciplines.delete({
     *   where: {
     *     // ... filter to delete one Disciplines
     *   }
     * })
     * 
    **/
    delete<T extends DisciplinesDeleteArgs>(
      args: SelectSubset<T, DisciplinesDeleteArgs>
    ): CheckSelect<T, Prisma__DisciplinesClient<Disciplines>, Prisma__DisciplinesClient<DisciplinesGetPayload<T>>>

    /**
     * Update one Disciplines.
     * @param {DisciplinesUpdateArgs} args - Arguments to update one Disciplines.
     * @example
     * // Update one Disciplines
     * const disciplines = await prisma.disciplines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DisciplinesUpdateArgs>(
      args: SelectSubset<T, DisciplinesUpdateArgs>
    ): CheckSelect<T, Prisma__DisciplinesClient<Disciplines>, Prisma__DisciplinesClient<DisciplinesGetPayload<T>>>

    /**
     * Delete zero or more Disciplines.
     * @param {DisciplinesDeleteManyArgs} args - Arguments to filter Disciplines to delete.
     * @example
     * // Delete a few Disciplines
     * const { count } = await prisma.disciplines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DisciplinesDeleteManyArgs>(
      args?: SelectSubset<T, DisciplinesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplines
     * const disciplines = await prisma.disciplines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DisciplinesUpdateManyArgs>(
      args: SelectSubset<T, DisciplinesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Disciplines.
     * @param {DisciplinesUpsertArgs} args - Arguments to update or create a Disciplines.
     * @example
     * // Update or create a Disciplines
     * const disciplines = await prisma.disciplines.upsert({
     *   create: {
     *     // ... data to create a Disciplines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplines we want to update
     *   }
     * })
    **/
    upsert<T extends DisciplinesUpsertArgs>(
      args: SelectSubset<T, DisciplinesUpsertArgs>
    ): CheckSelect<T, Prisma__DisciplinesClient<Disciplines>, Prisma__DisciplinesClient<DisciplinesGetPayload<T>>>

    /**
     * Count the number of Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinesCountArgs} args - Arguments to filter Disciplines to count.
     * @example
     * // Count the number of Disciplines
     * const count = await prisma.disciplines.count({
     *   where: {
     *     // ... the filter for the Disciplines we want to count
     *   }
     * })
    **/
    count<T extends DisciplinesCountArgs>(
      args?: Subset<T, DisciplinesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisciplinesAggregateArgs>(args: Subset<T, DisciplinesAggregateArgs>): PrismaPromise<GetDisciplinesAggregateType<T>>

    /**
     * Group by Disciplines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisciplinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinesGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisciplinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disciplines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DisciplinesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Disciplines findUnique
   */
  export type DisciplinesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Disciplines
     * 
    **/
    select?: DisciplinesSelect | null
    /**
     * Throw an Error if a Disciplines can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Disciplines to fetch.
     * 
    **/
    where: DisciplinesWhereUniqueInput
  }


  /**
   * Disciplines findFirst
   */
  export type DisciplinesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Disciplines
     * 
    **/
    select?: DisciplinesSelect | null
    /**
     * Throw an Error if a Disciplines can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Disciplines to fetch.
     * 
    **/
    where?: DisciplinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     * 
    **/
    orderBy?: Enumerable<DisciplinesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplines.
     * 
    **/
    cursor?: DisciplinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplines.
     * 
    **/
    distinct?: Enumerable<DisciplinesScalarFieldEnum>
  }


  /**
   * Disciplines findMany
   */
  export type DisciplinesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Disciplines
     * 
    **/
    select?: DisciplinesSelect | null
    /**
     * Filter, which Disciplines to fetch.
     * 
    **/
    where?: DisciplinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplines to fetch.
     * 
    **/
    orderBy?: Enumerable<DisciplinesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplines.
     * 
    **/
    cursor?: DisciplinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplines.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DisciplinesScalarFieldEnum>
  }


  /**
   * Disciplines create
   */
  export type DisciplinesCreateArgs = {
    /**
     * Select specific fields to fetch from the Disciplines
     * 
    **/
    select?: DisciplinesSelect | null
    /**
     * The data needed to create a Disciplines.
     * 
    **/
    data: XOR<DisciplinesCreateInput, DisciplinesUncheckedCreateInput>
  }


  /**
   * Disciplines createMany
   */
  export type DisciplinesCreateManyArgs = {
    data: Enumerable<DisciplinesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Disciplines update
   */
  export type DisciplinesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Disciplines
     * 
    **/
    select?: DisciplinesSelect | null
    /**
     * The data needed to update a Disciplines.
     * 
    **/
    data: XOR<DisciplinesUpdateInput, DisciplinesUncheckedUpdateInput>
    /**
     * Choose, which Disciplines to update.
     * 
    **/
    where: DisciplinesWhereUniqueInput
  }


  /**
   * Disciplines updateMany
   */
  export type DisciplinesUpdateManyArgs = {
    data: XOR<DisciplinesUpdateManyMutationInput, DisciplinesUncheckedUpdateManyInput>
    where?: DisciplinesWhereInput
  }


  /**
   * Disciplines upsert
   */
  export type DisciplinesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Disciplines
     * 
    **/
    select?: DisciplinesSelect | null
    /**
     * The filter to search for the Disciplines to update in case it exists.
     * 
    **/
    where: DisciplinesWhereUniqueInput
    /**
     * In case the Disciplines found by the `where` argument doesn't exist, create a new Disciplines with this data.
     * 
    **/
    create: XOR<DisciplinesCreateInput, DisciplinesUncheckedCreateInput>
    /**
     * In case the Disciplines was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DisciplinesUpdateInput, DisciplinesUncheckedUpdateInput>
  }


  /**
   * Disciplines delete
   */
  export type DisciplinesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Disciplines
     * 
    **/
    select?: DisciplinesSelect | null
    /**
     * Filter which Disciplines to delete.
     * 
    **/
    where: DisciplinesWhereUniqueInput
  }


  /**
   * Disciplines deleteMany
   */
  export type DisciplinesDeleteManyArgs = {
    where?: DisciplinesWhereInput
  }


  /**
   * Disciplines without action
   */
  export type DisciplinesArgs = {
    /**
     * Select specific fields to fetch from the Disciplines
     * 
    **/
    select?: DisciplinesSelect | null
  }



  /**
   * Model Classes
   */


  export type AggregateClasses = {
    _count: ClassesCountAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  export type ClassesMinAggregateOutputType = {
    class_id: string | null
    class_name: string | null
    class_email: string | null
    class_situation: string | null
  }

  export type ClassesMaxAggregateOutputType = {
    class_id: string | null
    class_name: string | null
    class_email: string | null
    class_situation: string | null
  }

  export type ClassesCountAggregateOutputType = {
    class_id: number
    class_name: number
    class_email: number
    class_situation: number
    _all: number
  }


  export type ClassesMinAggregateInputType = {
    class_id?: true
    class_name?: true
    class_email?: true
    class_situation?: true
  }

  export type ClassesMaxAggregateInputType = {
    class_id?: true
    class_name?: true
    class_email?: true
    class_situation?: true
  }

  export type ClassesCountAggregateInputType = {
    class_id?: true
    class_name?: true
    class_email?: true
    class_situation?: true
    _all?: true
  }

  export type ClassesAggregateArgs = {
    /**
     * Filter which Classes to aggregate.
     * 
    **/
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClassesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassesMaxAggregateInputType
  }

  export type GetClassesAggregateType<T extends ClassesAggregateArgs> = {
        [P in keyof T & keyof AggregateClasses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasses[P]>
      : GetScalarType<T[P], AggregateClasses[P]>
  }




  export type ClassesGroupByArgs = {
    where?: ClassesWhereInput
    orderBy?: Enumerable<ClassesOrderByWithAggregationInput>
    by: Array<ClassesScalarFieldEnum>
    having?: ClassesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassesCountAggregateInputType | true
    _min?: ClassesMinAggregateInputType
    _max?: ClassesMaxAggregateInputType
  }


  export type ClassesGroupByOutputType = {
    class_id: string
    class_name: string
    class_email: string
    class_situation: string
    _count: ClassesCountAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  type GetClassesGroupByPayload<T extends ClassesGroupByArgs> = Promise<
    Array<
      PickArray<ClassesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassesGroupByOutputType[P]>
            : GetScalarType<T[P], ClassesGroupByOutputType[P]>
        }
      >
    >


  export type ClassesSelect = {
    class_id?: boolean
    class_name?: boolean
    class_email?: boolean
    class_situation?: boolean
  }

  export type ClassesGetPayload<
    S extends boolean | null | undefined | ClassesArgs,
    U = keyof S
      > = S extends true
        ? Classes
    : S extends undefined
    ? never
    : S extends ClassesArgs | ClassesFindManyArgs
    ?'include' extends U
    ? Classes 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Classes ?Classes [P]
  : 
     never
  } 
    : Classes
  : Classes


  type ClassesCountArgs = Merge<
    Omit<ClassesFindManyArgs, 'select' | 'include'> & {
      select?: ClassesCountAggregateInputType | true
    }
  >

  export interface ClassesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Classes that matches the filter.
     * @param {ClassesFindUniqueArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClassesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClassesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Classes'> extends True ? CheckSelect<T, Prisma__ClassesClient<Classes>, Prisma__ClassesClient<ClassesGetPayload<T>>> : CheckSelect<T, Prisma__ClassesClient<Classes | null >, Prisma__ClassesClient<ClassesGetPayload<T> | null >>

    /**
     * Find the first Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesFindFirstArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClassesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClassesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Classes'> extends True ? CheckSelect<T, Prisma__ClassesClient<Classes>, Prisma__ClassesClient<ClassesGetPayload<T>>> : CheckSelect<T, Prisma__ClassesClient<Classes | null >, Prisma__ClassesClient<ClassesGetPayload<T> | null >>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classes.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classes.findMany({ take: 10 })
     * 
     * // Only select the `class_id`
     * const classesWithClass_idOnly = await prisma.classes.findMany({ select: { class_id: true } })
     * 
    **/
    findMany<T extends ClassesFindManyArgs>(
      args?: SelectSubset<T, ClassesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Classes>>, PrismaPromise<Array<ClassesGetPayload<T>>>>

    /**
     * Create a Classes.
     * @param {ClassesCreateArgs} args - Arguments to create a Classes.
     * @example
     * // Create one Classes
     * const Classes = await prisma.classes.create({
     *   data: {
     *     // ... data to create a Classes
     *   }
     * })
     * 
    **/
    create<T extends ClassesCreateArgs>(
      args: SelectSubset<T, ClassesCreateArgs>
    ): CheckSelect<T, Prisma__ClassesClient<Classes>, Prisma__ClassesClient<ClassesGetPayload<T>>>

    /**
     * Create many Classes.
     *     @param {ClassesCreateManyArgs} args - Arguments to create many Classes.
     *     @example
     *     // Create many Classes
     *     const classes = await prisma.classes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClassesCreateManyArgs>(
      args?: SelectSubset<T, ClassesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Classes.
     * @param {ClassesDeleteArgs} args - Arguments to delete one Classes.
     * @example
     * // Delete one Classes
     * const Classes = await prisma.classes.delete({
     *   where: {
     *     // ... filter to delete one Classes
     *   }
     * })
     * 
    **/
    delete<T extends ClassesDeleteArgs>(
      args: SelectSubset<T, ClassesDeleteArgs>
    ): CheckSelect<T, Prisma__ClassesClient<Classes>, Prisma__ClassesClient<ClassesGetPayload<T>>>

    /**
     * Update one Classes.
     * @param {ClassesUpdateArgs} args - Arguments to update one Classes.
     * @example
     * // Update one Classes
     * const classes = await prisma.classes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClassesUpdateArgs>(
      args: SelectSubset<T, ClassesUpdateArgs>
    ): CheckSelect<T, Prisma__ClassesClient<Classes>, Prisma__ClassesClient<ClassesGetPayload<T>>>

    /**
     * Delete zero or more Classes.
     * @param {ClassesDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClassesDeleteManyArgs>(
      args?: SelectSubset<T, ClassesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClassesUpdateManyArgs>(
      args: SelectSubset<T, ClassesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Classes.
     * @param {ClassesUpsertArgs} args - Arguments to update or create a Classes.
     * @example
     * // Update or create a Classes
     * const classes = await prisma.classes.upsert({
     *   create: {
     *     // ... data to create a Classes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classes we want to update
     *   }
     * })
    **/
    upsert<T extends ClassesUpsertArgs>(
      args: SelectSubset<T, ClassesUpsertArgs>
    ): CheckSelect<T, Prisma__ClassesClient<Classes>, Prisma__ClassesClient<ClassesGetPayload<T>>>

    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classes.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassesCountArgs>(
      args?: Subset<T, ClassesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassesAggregateArgs>(args: Subset<T, ClassesAggregateArgs>): PrismaPromise<GetClassesAggregateType<T>>

    /**
     * Group by Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassesGroupByArgs['orderBy'] }
        : { orderBy?: ClassesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClassesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Classes findUnique
   */
  export type ClassesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Classes
     * 
    **/
    select?: ClassesSelect | null
    /**
     * Throw an Error if a Classes can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Classes to fetch.
     * 
    **/
    where: ClassesWhereUniqueInput
  }


  /**
   * Classes findFirst
   */
  export type ClassesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Classes
     * 
    **/
    select?: ClassesSelect | null
    /**
     * Throw an Error if a Classes can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Classes to fetch.
     * 
    **/
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClassesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     * 
    **/
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     * 
    **/
    distinct?: Enumerable<ClassesScalarFieldEnum>
  }


  /**
   * Classes findMany
   */
  export type ClassesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Classes
     * 
    **/
    select?: ClassesSelect | null
    /**
     * Filter, which Classes to fetch.
     * 
    **/
    where?: ClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClassesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     * 
    **/
    cursor?: ClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClassesScalarFieldEnum>
  }


  /**
   * Classes create
   */
  export type ClassesCreateArgs = {
    /**
     * Select specific fields to fetch from the Classes
     * 
    **/
    select?: ClassesSelect | null
    /**
     * The data needed to create a Classes.
     * 
    **/
    data: XOR<ClassesCreateInput, ClassesUncheckedCreateInput>
  }


  /**
   * Classes createMany
   */
  export type ClassesCreateManyArgs = {
    data: Enumerable<ClassesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Classes update
   */
  export type ClassesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Classes
     * 
    **/
    select?: ClassesSelect | null
    /**
     * The data needed to update a Classes.
     * 
    **/
    data: XOR<ClassesUpdateInput, ClassesUncheckedUpdateInput>
    /**
     * Choose, which Classes to update.
     * 
    **/
    where: ClassesWhereUniqueInput
  }


  /**
   * Classes updateMany
   */
  export type ClassesUpdateManyArgs = {
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyInput>
    where?: ClassesWhereInput
  }


  /**
   * Classes upsert
   */
  export type ClassesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Classes
     * 
    **/
    select?: ClassesSelect | null
    /**
     * The filter to search for the Classes to update in case it exists.
     * 
    **/
    where: ClassesWhereUniqueInput
    /**
     * In case the Classes found by the `where` argument doesn't exist, create a new Classes with this data.
     * 
    **/
    create: XOR<ClassesCreateInput, ClassesUncheckedCreateInput>
    /**
     * In case the Classes was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClassesUpdateInput, ClassesUncheckedUpdateInput>
  }


  /**
   * Classes delete
   */
  export type ClassesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Classes
     * 
    **/
    select?: ClassesSelect | null
    /**
     * Filter which Classes to delete.
     * 
    **/
    where: ClassesWhereUniqueInput
  }


  /**
   * Classes deleteMany
   */
  export type ClassesDeleteManyArgs = {
    where?: ClassesWhereInput
  }


  /**
   * Classes without action
   */
  export type ClassesArgs = {
    /**
     * Select specific fields to fetch from the Classes
     * 
    **/
    select?: ClassesSelect | null
  }



  /**
   * Model Timesheets
   */


  export type AggregateTimesheets = {
    _count: TimesheetsCountAggregateOutputType | null
    _min: TimesheetsMinAggregateOutputType | null
    _max: TimesheetsMaxAggregateOutputType | null
  }

  export type TimesheetsMinAggregateOutputType = {
    timesheet_id: string | null
    timesheet_teacher_id: string | null
    timesheet_class_id: string | null
    timesheet_date: Date | null
    timesheet_situation: string | null
  }

  export type TimesheetsMaxAggregateOutputType = {
    timesheet_id: string | null
    timesheet_teacher_id: string | null
    timesheet_class_id: string | null
    timesheet_date: Date | null
    timesheet_situation: string | null
  }

  export type TimesheetsCountAggregateOutputType = {
    timesheet_id: number
    timesheet_teacher_id: number
    timesheet_class_id: number
    timesheet_date: number
    timesheet_situation: number
    _all: number
  }


  export type TimesheetsMinAggregateInputType = {
    timesheet_id?: true
    timesheet_teacher_id?: true
    timesheet_class_id?: true
    timesheet_date?: true
    timesheet_situation?: true
  }

  export type TimesheetsMaxAggregateInputType = {
    timesheet_id?: true
    timesheet_teacher_id?: true
    timesheet_class_id?: true
    timesheet_date?: true
    timesheet_situation?: true
  }

  export type TimesheetsCountAggregateInputType = {
    timesheet_id?: true
    timesheet_teacher_id?: true
    timesheet_class_id?: true
    timesheet_date?: true
    timesheet_situation?: true
    _all?: true
  }

  export type TimesheetsAggregateArgs = {
    /**
     * Filter which Timesheets to aggregate.
     * 
    **/
    where?: TimesheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     * 
    **/
    orderBy?: Enumerable<TimesheetsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TimesheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timesheets
    **/
    _count?: true | TimesheetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimesheetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimesheetsMaxAggregateInputType
  }

  export type GetTimesheetsAggregateType<T extends TimesheetsAggregateArgs> = {
        [P in keyof T & keyof AggregateTimesheets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimesheets[P]>
      : GetScalarType<T[P], AggregateTimesheets[P]>
  }




  export type TimesheetsGroupByArgs = {
    where?: TimesheetsWhereInput
    orderBy?: Enumerable<TimesheetsOrderByWithAggregationInput>
    by: Array<TimesheetsScalarFieldEnum>
    having?: TimesheetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimesheetsCountAggregateInputType | true
    _min?: TimesheetsMinAggregateInputType
    _max?: TimesheetsMaxAggregateInputType
  }


  export type TimesheetsGroupByOutputType = {
    timesheet_id: string
    timesheet_teacher_id: string
    timesheet_class_id: string
    timesheet_date: Date
    timesheet_situation: string
    _count: TimesheetsCountAggregateOutputType | null
    _min: TimesheetsMinAggregateOutputType | null
    _max: TimesheetsMaxAggregateOutputType | null
  }

  type GetTimesheetsGroupByPayload<T extends TimesheetsGroupByArgs> = Promise<
    Array<
      PickArray<TimesheetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimesheetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimesheetsGroupByOutputType[P]>
            : GetScalarType<T[P], TimesheetsGroupByOutputType[P]>
        }
      >
    >


  export type TimesheetsSelect = {
    timesheet_id?: boolean
    timesheet_teacher_id?: boolean
    timesheet_class_id?: boolean
    timesheet_date?: boolean
    timesheet_situation?: boolean
  }

  export type TimesheetsGetPayload<
    S extends boolean | null | undefined | TimesheetsArgs,
    U = keyof S
      > = S extends true
        ? Timesheets
    : S extends undefined
    ? never
    : S extends TimesheetsArgs | TimesheetsFindManyArgs
    ?'include' extends U
    ? Timesheets 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Timesheets ?Timesheets [P]
  : 
     never
  } 
    : Timesheets
  : Timesheets


  type TimesheetsCountArgs = Merge<
    Omit<TimesheetsFindManyArgs, 'select' | 'include'> & {
      select?: TimesheetsCountAggregateInputType | true
    }
  >

  export interface TimesheetsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Timesheets that matches the filter.
     * @param {TimesheetsFindUniqueArgs} args - Arguments to find a Timesheets
     * @example
     * // Get one Timesheets
     * const timesheets = await prisma.timesheets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TimesheetsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TimesheetsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Timesheets'> extends True ? CheckSelect<T, Prisma__TimesheetsClient<Timesheets>, Prisma__TimesheetsClient<TimesheetsGetPayload<T>>> : CheckSelect<T, Prisma__TimesheetsClient<Timesheets | null >, Prisma__TimesheetsClient<TimesheetsGetPayload<T> | null >>

    /**
     * Find the first Timesheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetsFindFirstArgs} args - Arguments to find a Timesheets
     * @example
     * // Get one Timesheets
     * const timesheets = await prisma.timesheets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TimesheetsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TimesheetsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Timesheets'> extends True ? CheckSelect<T, Prisma__TimesheetsClient<Timesheets>, Prisma__TimesheetsClient<TimesheetsGetPayload<T>>> : CheckSelect<T, Prisma__TimesheetsClient<Timesheets | null >, Prisma__TimesheetsClient<TimesheetsGetPayload<T> | null >>

    /**
     * Find zero or more Timesheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timesheets
     * const timesheets = await prisma.timesheets.findMany()
     * 
     * // Get first 10 Timesheets
     * const timesheets = await prisma.timesheets.findMany({ take: 10 })
     * 
     * // Only select the `timesheet_id`
     * const timesheetsWithTimesheet_idOnly = await prisma.timesheets.findMany({ select: { timesheet_id: true } })
     * 
    **/
    findMany<T extends TimesheetsFindManyArgs>(
      args?: SelectSubset<T, TimesheetsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Timesheets>>, PrismaPromise<Array<TimesheetsGetPayload<T>>>>

    /**
     * Create a Timesheets.
     * @param {TimesheetsCreateArgs} args - Arguments to create a Timesheets.
     * @example
     * // Create one Timesheets
     * const Timesheets = await prisma.timesheets.create({
     *   data: {
     *     // ... data to create a Timesheets
     *   }
     * })
     * 
    **/
    create<T extends TimesheetsCreateArgs>(
      args: SelectSubset<T, TimesheetsCreateArgs>
    ): CheckSelect<T, Prisma__TimesheetsClient<Timesheets>, Prisma__TimesheetsClient<TimesheetsGetPayload<T>>>

    /**
     * Create many Timesheets.
     *     @param {TimesheetsCreateManyArgs} args - Arguments to create many Timesheets.
     *     @example
     *     // Create many Timesheets
     *     const timesheets = await prisma.timesheets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TimesheetsCreateManyArgs>(
      args?: SelectSubset<T, TimesheetsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Timesheets.
     * @param {TimesheetsDeleteArgs} args - Arguments to delete one Timesheets.
     * @example
     * // Delete one Timesheets
     * const Timesheets = await prisma.timesheets.delete({
     *   where: {
     *     // ... filter to delete one Timesheets
     *   }
     * })
     * 
    **/
    delete<T extends TimesheetsDeleteArgs>(
      args: SelectSubset<T, TimesheetsDeleteArgs>
    ): CheckSelect<T, Prisma__TimesheetsClient<Timesheets>, Prisma__TimesheetsClient<TimesheetsGetPayload<T>>>

    /**
     * Update one Timesheets.
     * @param {TimesheetsUpdateArgs} args - Arguments to update one Timesheets.
     * @example
     * // Update one Timesheets
     * const timesheets = await prisma.timesheets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TimesheetsUpdateArgs>(
      args: SelectSubset<T, TimesheetsUpdateArgs>
    ): CheckSelect<T, Prisma__TimesheetsClient<Timesheets>, Prisma__TimesheetsClient<TimesheetsGetPayload<T>>>

    /**
     * Delete zero or more Timesheets.
     * @param {TimesheetsDeleteManyArgs} args - Arguments to filter Timesheets to delete.
     * @example
     * // Delete a few Timesheets
     * const { count } = await prisma.timesheets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TimesheetsDeleteManyArgs>(
      args?: SelectSubset<T, TimesheetsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timesheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timesheets
     * const timesheets = await prisma.timesheets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TimesheetsUpdateManyArgs>(
      args: SelectSubset<T, TimesheetsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Timesheets.
     * @param {TimesheetsUpsertArgs} args - Arguments to update or create a Timesheets.
     * @example
     * // Update or create a Timesheets
     * const timesheets = await prisma.timesheets.upsert({
     *   create: {
     *     // ... data to create a Timesheets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timesheets we want to update
     *   }
     * })
    **/
    upsert<T extends TimesheetsUpsertArgs>(
      args: SelectSubset<T, TimesheetsUpsertArgs>
    ): CheckSelect<T, Prisma__TimesheetsClient<Timesheets>, Prisma__TimesheetsClient<TimesheetsGetPayload<T>>>

    /**
     * Count the number of Timesheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetsCountArgs} args - Arguments to filter Timesheets to count.
     * @example
     * // Count the number of Timesheets
     * const count = await prisma.timesheets.count({
     *   where: {
     *     // ... the filter for the Timesheets we want to count
     *   }
     * })
    **/
    count<T extends TimesheetsCountArgs>(
      args?: Subset<T, TimesheetsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimesheetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timesheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimesheetsAggregateArgs>(args: Subset<T, TimesheetsAggregateArgs>): PrismaPromise<GetTimesheetsAggregateType<T>>

    /**
     * Group by Timesheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimesheetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimesheetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimesheetsGroupByArgs['orderBy'] }
        : { orderBy?: TimesheetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimesheetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimesheetsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timesheets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TimesheetsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Timesheets findUnique
   */
  export type TimesheetsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Timesheets
     * 
    **/
    select?: TimesheetsSelect | null
    /**
     * Throw an Error if a Timesheets can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Timesheets to fetch.
     * 
    **/
    where: TimesheetsWhereUniqueInput
  }


  /**
   * Timesheets findFirst
   */
  export type TimesheetsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Timesheets
     * 
    **/
    select?: TimesheetsSelect | null
    /**
     * Throw an Error if a Timesheets can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Timesheets to fetch.
     * 
    **/
    where?: TimesheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     * 
    **/
    orderBy?: Enumerable<TimesheetsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timesheets.
     * 
    **/
    cursor?: TimesheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timesheets.
     * 
    **/
    distinct?: Enumerable<TimesheetsScalarFieldEnum>
  }


  /**
   * Timesheets findMany
   */
  export type TimesheetsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Timesheets
     * 
    **/
    select?: TimesheetsSelect | null
    /**
     * Filter, which Timesheets to fetch.
     * 
    **/
    where?: TimesheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timesheets to fetch.
     * 
    **/
    orderBy?: Enumerable<TimesheetsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timesheets.
     * 
    **/
    cursor?: TimesheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timesheets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timesheets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TimesheetsScalarFieldEnum>
  }


  /**
   * Timesheets create
   */
  export type TimesheetsCreateArgs = {
    /**
     * Select specific fields to fetch from the Timesheets
     * 
    **/
    select?: TimesheetsSelect | null
    /**
     * The data needed to create a Timesheets.
     * 
    **/
    data: XOR<TimesheetsCreateInput, TimesheetsUncheckedCreateInput>
  }


  /**
   * Timesheets createMany
   */
  export type TimesheetsCreateManyArgs = {
    data: Enumerable<TimesheetsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Timesheets update
   */
  export type TimesheetsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Timesheets
     * 
    **/
    select?: TimesheetsSelect | null
    /**
     * The data needed to update a Timesheets.
     * 
    **/
    data: XOR<TimesheetsUpdateInput, TimesheetsUncheckedUpdateInput>
    /**
     * Choose, which Timesheets to update.
     * 
    **/
    where: TimesheetsWhereUniqueInput
  }


  /**
   * Timesheets updateMany
   */
  export type TimesheetsUpdateManyArgs = {
    data: XOR<TimesheetsUpdateManyMutationInput, TimesheetsUncheckedUpdateManyInput>
    where?: TimesheetsWhereInput
  }


  /**
   * Timesheets upsert
   */
  export type TimesheetsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Timesheets
     * 
    **/
    select?: TimesheetsSelect | null
    /**
     * The filter to search for the Timesheets to update in case it exists.
     * 
    **/
    where: TimesheetsWhereUniqueInput
    /**
     * In case the Timesheets found by the `where` argument doesn't exist, create a new Timesheets with this data.
     * 
    **/
    create: XOR<TimesheetsCreateInput, TimesheetsUncheckedCreateInput>
    /**
     * In case the Timesheets was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TimesheetsUpdateInput, TimesheetsUncheckedUpdateInput>
  }


  /**
   * Timesheets delete
   */
  export type TimesheetsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Timesheets
     * 
    **/
    select?: TimesheetsSelect | null
    /**
     * Filter which Timesheets to delete.
     * 
    **/
    where: TimesheetsWhereUniqueInput
  }


  /**
   * Timesheets deleteMany
   */
  export type TimesheetsDeleteManyArgs = {
    where?: TimesheetsWhereInput
  }


  /**
   * Timesheets without action
   */
  export type TimesheetsArgs = {
    /**
     * Select specific fields to fetch from the Timesheets
     * 
    **/
    select?: TimesheetsSelect | null
  }



  /**
   * Model Curriculums
   */


  export type AggregateCurriculums = {
    _count: CurriculumsCountAggregateOutputType | null
    _min: CurriculumsMinAggregateOutputType | null
    _max: CurriculumsMaxAggregateOutputType | null
  }

  export type CurriculumsMinAggregateOutputType = {
    curriculum_id: string | null
    curriculum_name: string | null
    curriculum_class_id: string | null
    curriculum_situation: string | null
  }

  export type CurriculumsMaxAggregateOutputType = {
    curriculum_id: string | null
    curriculum_name: string | null
    curriculum_class_id: string | null
    curriculum_situation: string | null
  }

  export type CurriculumsCountAggregateOutputType = {
    curriculum_id: number
    curriculum_name: number
    curriculum_class_id: number
    curriculum_situation: number
    _all: number
  }


  export type CurriculumsMinAggregateInputType = {
    curriculum_id?: true
    curriculum_name?: true
    curriculum_class_id?: true
    curriculum_situation?: true
  }

  export type CurriculumsMaxAggregateInputType = {
    curriculum_id?: true
    curriculum_name?: true
    curriculum_class_id?: true
    curriculum_situation?: true
  }

  export type CurriculumsCountAggregateInputType = {
    curriculum_id?: true
    curriculum_name?: true
    curriculum_class_id?: true
    curriculum_situation?: true
    _all?: true
  }

  export type CurriculumsAggregateArgs = {
    /**
     * Filter which Curriculums to aggregate.
     * 
    **/
    where?: CurriculumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curriculums to fetch.
     * 
    **/
    orderBy?: Enumerable<CurriculumsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CurriculumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curriculums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curriculums.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Curriculums
    **/
    _count?: true | CurriculumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurriculumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurriculumsMaxAggregateInputType
  }

  export type GetCurriculumsAggregateType<T extends CurriculumsAggregateArgs> = {
        [P in keyof T & keyof AggregateCurriculums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurriculums[P]>
      : GetScalarType<T[P], AggregateCurriculums[P]>
  }




  export type CurriculumsGroupByArgs = {
    where?: CurriculumsWhereInput
    orderBy?: Enumerable<CurriculumsOrderByWithAggregationInput>
    by: Array<CurriculumsScalarFieldEnum>
    having?: CurriculumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurriculumsCountAggregateInputType | true
    _min?: CurriculumsMinAggregateInputType
    _max?: CurriculumsMaxAggregateInputType
  }


  export type CurriculumsGroupByOutputType = {
    curriculum_id: string
    curriculum_name: string
    curriculum_class_id: string
    curriculum_situation: string
    _count: CurriculumsCountAggregateOutputType | null
    _min: CurriculumsMinAggregateOutputType | null
    _max: CurriculumsMaxAggregateOutputType | null
  }

  type GetCurriculumsGroupByPayload<T extends CurriculumsGroupByArgs> = Promise<
    Array<
      PickArray<CurriculumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurriculumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurriculumsGroupByOutputType[P]>
            : GetScalarType<T[P], CurriculumsGroupByOutputType[P]>
        }
      >
    >


  export type CurriculumsSelect = {
    curriculum_id?: boolean
    curriculum_name?: boolean
    curriculum_class_id?: boolean
    curriculum_situation?: boolean
  }

  export type CurriculumsGetPayload<
    S extends boolean | null | undefined | CurriculumsArgs,
    U = keyof S
      > = S extends true
        ? Curriculums
    : S extends undefined
    ? never
    : S extends CurriculumsArgs | CurriculumsFindManyArgs
    ?'include' extends U
    ? Curriculums 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Curriculums ?Curriculums [P]
  : 
     never
  } 
    : Curriculums
  : Curriculums


  type CurriculumsCountArgs = Merge<
    Omit<CurriculumsFindManyArgs, 'select' | 'include'> & {
      select?: CurriculumsCountAggregateInputType | true
    }
  >

  export interface CurriculumsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Curriculums that matches the filter.
     * @param {CurriculumsFindUniqueArgs} args - Arguments to find a Curriculums
     * @example
     * // Get one Curriculums
     * const curriculums = await prisma.curriculums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CurriculumsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CurriculumsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Curriculums'> extends True ? CheckSelect<T, Prisma__CurriculumsClient<Curriculums>, Prisma__CurriculumsClient<CurriculumsGetPayload<T>>> : CheckSelect<T, Prisma__CurriculumsClient<Curriculums | null >, Prisma__CurriculumsClient<CurriculumsGetPayload<T> | null >>

    /**
     * Find the first Curriculums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumsFindFirstArgs} args - Arguments to find a Curriculums
     * @example
     * // Get one Curriculums
     * const curriculums = await prisma.curriculums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CurriculumsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CurriculumsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Curriculums'> extends True ? CheckSelect<T, Prisma__CurriculumsClient<Curriculums>, Prisma__CurriculumsClient<CurriculumsGetPayload<T>>> : CheckSelect<T, Prisma__CurriculumsClient<Curriculums | null >, Prisma__CurriculumsClient<CurriculumsGetPayload<T> | null >>

    /**
     * Find zero or more Curriculums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curriculums
     * const curriculums = await prisma.curriculums.findMany()
     * 
     * // Get first 10 Curriculums
     * const curriculums = await prisma.curriculums.findMany({ take: 10 })
     * 
     * // Only select the `curriculum_id`
     * const curriculumsWithCurriculum_idOnly = await prisma.curriculums.findMany({ select: { curriculum_id: true } })
     * 
    **/
    findMany<T extends CurriculumsFindManyArgs>(
      args?: SelectSubset<T, CurriculumsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Curriculums>>, PrismaPromise<Array<CurriculumsGetPayload<T>>>>

    /**
     * Create a Curriculums.
     * @param {CurriculumsCreateArgs} args - Arguments to create a Curriculums.
     * @example
     * // Create one Curriculums
     * const Curriculums = await prisma.curriculums.create({
     *   data: {
     *     // ... data to create a Curriculums
     *   }
     * })
     * 
    **/
    create<T extends CurriculumsCreateArgs>(
      args: SelectSubset<T, CurriculumsCreateArgs>
    ): CheckSelect<T, Prisma__CurriculumsClient<Curriculums>, Prisma__CurriculumsClient<CurriculumsGetPayload<T>>>

    /**
     * Create many Curriculums.
     *     @param {CurriculumsCreateManyArgs} args - Arguments to create many Curriculums.
     *     @example
     *     // Create many Curriculums
     *     const curriculums = await prisma.curriculums.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CurriculumsCreateManyArgs>(
      args?: SelectSubset<T, CurriculumsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Curriculums.
     * @param {CurriculumsDeleteArgs} args - Arguments to delete one Curriculums.
     * @example
     * // Delete one Curriculums
     * const Curriculums = await prisma.curriculums.delete({
     *   where: {
     *     // ... filter to delete one Curriculums
     *   }
     * })
     * 
    **/
    delete<T extends CurriculumsDeleteArgs>(
      args: SelectSubset<T, CurriculumsDeleteArgs>
    ): CheckSelect<T, Prisma__CurriculumsClient<Curriculums>, Prisma__CurriculumsClient<CurriculumsGetPayload<T>>>

    /**
     * Update one Curriculums.
     * @param {CurriculumsUpdateArgs} args - Arguments to update one Curriculums.
     * @example
     * // Update one Curriculums
     * const curriculums = await prisma.curriculums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CurriculumsUpdateArgs>(
      args: SelectSubset<T, CurriculumsUpdateArgs>
    ): CheckSelect<T, Prisma__CurriculumsClient<Curriculums>, Prisma__CurriculumsClient<CurriculumsGetPayload<T>>>

    /**
     * Delete zero or more Curriculums.
     * @param {CurriculumsDeleteManyArgs} args - Arguments to filter Curriculums to delete.
     * @example
     * // Delete a few Curriculums
     * const { count } = await prisma.curriculums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CurriculumsDeleteManyArgs>(
      args?: SelectSubset<T, CurriculumsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curriculums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curriculums
     * const curriculums = await prisma.curriculums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CurriculumsUpdateManyArgs>(
      args: SelectSubset<T, CurriculumsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Curriculums.
     * @param {CurriculumsUpsertArgs} args - Arguments to update or create a Curriculums.
     * @example
     * // Update or create a Curriculums
     * const curriculums = await prisma.curriculums.upsert({
     *   create: {
     *     // ... data to create a Curriculums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curriculums we want to update
     *   }
     * })
    **/
    upsert<T extends CurriculumsUpsertArgs>(
      args: SelectSubset<T, CurriculumsUpsertArgs>
    ): CheckSelect<T, Prisma__CurriculumsClient<Curriculums>, Prisma__CurriculumsClient<CurriculumsGetPayload<T>>>

    /**
     * Count the number of Curriculums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumsCountArgs} args - Arguments to filter Curriculums to count.
     * @example
     * // Count the number of Curriculums
     * const count = await prisma.curriculums.count({
     *   where: {
     *     // ... the filter for the Curriculums we want to count
     *   }
     * })
    **/
    count<T extends CurriculumsCountArgs>(
      args?: Subset<T, CurriculumsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurriculumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curriculums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurriculumsAggregateArgs>(args: Subset<T, CurriculumsAggregateArgs>): PrismaPromise<GetCurriculumsAggregateType<T>>

    /**
     * Group by Curriculums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurriculumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurriculumsGroupByArgs['orderBy'] }
        : { orderBy?: CurriculumsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurriculumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurriculumsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curriculums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CurriculumsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Curriculums findUnique
   */
  export type CurriculumsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Curriculums
     * 
    **/
    select?: CurriculumsSelect | null
    /**
     * Throw an Error if a Curriculums can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Curriculums to fetch.
     * 
    **/
    where: CurriculumsWhereUniqueInput
  }


  /**
   * Curriculums findFirst
   */
  export type CurriculumsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Curriculums
     * 
    **/
    select?: CurriculumsSelect | null
    /**
     * Throw an Error if a Curriculums can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Curriculums to fetch.
     * 
    **/
    where?: CurriculumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curriculums to fetch.
     * 
    **/
    orderBy?: Enumerable<CurriculumsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curriculums.
     * 
    **/
    cursor?: CurriculumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curriculums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curriculums.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curriculums.
     * 
    **/
    distinct?: Enumerable<CurriculumsScalarFieldEnum>
  }


  /**
   * Curriculums findMany
   */
  export type CurriculumsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Curriculums
     * 
    **/
    select?: CurriculumsSelect | null
    /**
     * Filter, which Curriculums to fetch.
     * 
    **/
    where?: CurriculumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curriculums to fetch.
     * 
    **/
    orderBy?: Enumerable<CurriculumsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Curriculums.
     * 
    **/
    cursor?: CurriculumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curriculums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curriculums.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CurriculumsScalarFieldEnum>
  }


  /**
   * Curriculums create
   */
  export type CurriculumsCreateArgs = {
    /**
     * Select specific fields to fetch from the Curriculums
     * 
    **/
    select?: CurriculumsSelect | null
    /**
     * The data needed to create a Curriculums.
     * 
    **/
    data: XOR<CurriculumsCreateInput, CurriculumsUncheckedCreateInput>
  }


  /**
   * Curriculums createMany
   */
  export type CurriculumsCreateManyArgs = {
    data: Enumerable<CurriculumsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Curriculums update
   */
  export type CurriculumsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Curriculums
     * 
    **/
    select?: CurriculumsSelect | null
    /**
     * The data needed to update a Curriculums.
     * 
    **/
    data: XOR<CurriculumsUpdateInput, CurriculumsUncheckedUpdateInput>
    /**
     * Choose, which Curriculums to update.
     * 
    **/
    where: CurriculumsWhereUniqueInput
  }


  /**
   * Curriculums updateMany
   */
  export type CurriculumsUpdateManyArgs = {
    data: XOR<CurriculumsUpdateManyMutationInput, CurriculumsUncheckedUpdateManyInput>
    where?: CurriculumsWhereInput
  }


  /**
   * Curriculums upsert
   */
  export type CurriculumsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Curriculums
     * 
    **/
    select?: CurriculumsSelect | null
    /**
     * The filter to search for the Curriculums to update in case it exists.
     * 
    **/
    where: CurriculumsWhereUniqueInput
    /**
     * In case the Curriculums found by the `where` argument doesn't exist, create a new Curriculums with this data.
     * 
    **/
    create: XOR<CurriculumsCreateInput, CurriculumsUncheckedCreateInput>
    /**
     * In case the Curriculums was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CurriculumsUpdateInput, CurriculumsUncheckedUpdateInput>
  }


  /**
   * Curriculums delete
   */
  export type CurriculumsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Curriculums
     * 
    **/
    select?: CurriculumsSelect | null
    /**
     * Filter which Curriculums to delete.
     * 
    **/
    where: CurriculumsWhereUniqueInput
  }


  /**
   * Curriculums deleteMany
   */
  export type CurriculumsDeleteManyArgs = {
    where?: CurriculumsWhereInput
  }


  /**
   * Curriculums without action
   */
  export type CurriculumsArgs = {
    /**
     * Select specific fields to fetch from the Curriculums
     * 
    **/
    select?: CurriculumsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    user_name: 'user_name',
    user_email: 'user_email',
    user_salt: 'user_salt',
    user_password: 'user_password',
    user_created_at: 'user_created_at',
    user_updated_at: 'user_updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TeachersScalarFieldEnum: {
    teacher_id: 'teacher_id',
    teacher_name: 'teacher_name',
    teacher_email: 'teacher_email',
    teacher_disciplines_ids: 'teacher_disciplines_ids',
    teacher_situation: 'teacher_situation',
    teacher_created_at: 'teacher_created_at',
    teacher_updated_at: 'teacher_updated_at'
  };

  export type TeachersScalarFieldEnum = (typeof TeachersScalarFieldEnum)[keyof typeof TeachersScalarFieldEnum]


  export const DisciplinesScalarFieldEnum: {
    discipline_id: 'discipline_id',
    discipline_name: 'discipline_name',
    discipline_situation: 'discipline_situation'
  };

  export type DisciplinesScalarFieldEnum = (typeof DisciplinesScalarFieldEnum)[keyof typeof DisciplinesScalarFieldEnum]


  export const ClassesScalarFieldEnum: {
    class_id: 'class_id',
    class_name: 'class_name',
    class_email: 'class_email',
    class_situation: 'class_situation'
  };

  export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum]


  export const TimesheetsScalarFieldEnum: {
    timesheet_id: 'timesheet_id',
    timesheet_teacher_id: 'timesheet_teacher_id',
    timesheet_class_id: 'timesheet_class_id',
    timesheet_date: 'timesheet_date',
    timesheet_situation: 'timesheet_situation'
  };

  export type TimesheetsScalarFieldEnum = (typeof TimesheetsScalarFieldEnum)[keyof typeof TimesheetsScalarFieldEnum]


  export const CurriculumsScalarFieldEnum: {
    curriculum_id: 'curriculum_id',
    curriculum_name: 'curriculum_name',
    curriculum_class_id: 'curriculum_class_id',
    curriculum_situation: 'curriculum_situation'
  };

  export type CurriculumsScalarFieldEnum = (typeof CurriculumsScalarFieldEnum)[keyof typeof CurriculumsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: 'JsonNull'
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull',
    AnyNull: 'AnyNull'
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    user_id?: StringFilter | string
    user_name?: StringFilter | string
    user_email?: StringFilter | string
    user_salt?: StringFilter | string
    user_password?: StringFilter | string
    user_created_at?: DateTimeFilter | Date | string
    user_updated_at?: DateTimeFilter | Date | string
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_salt?: SortOrder
    user_password?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
  }

  export type UsersWhereUniqueInput = {
    user_id?: string
    user_email?: string
  }

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_salt?: SortOrder
    user_password?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    user_id?: StringWithAggregatesFilter | string
    user_name?: StringWithAggregatesFilter | string
    user_email?: StringWithAggregatesFilter | string
    user_salt?: StringWithAggregatesFilter | string
    user_password?: StringWithAggregatesFilter | string
    user_created_at?: DateTimeWithAggregatesFilter | Date | string
    user_updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TeachersWhereInput = {
    AND?: Enumerable<TeachersWhereInput>
    OR?: Enumerable<TeachersWhereInput>
    NOT?: Enumerable<TeachersWhereInput>
    teacher_id?: StringFilter | string
    teacher_name?: StringFilter | string
    teacher_email?: StringFilter | string
    teacher_disciplines_ids?: JsonFilter
    teacher_situation?: StringFilter | string
    teacher_created_at?: DateTimeFilter | Date | string
    teacher_updated_at?: DateTimeFilter | Date | string
  }

  export type TeachersOrderByWithRelationInput = {
    teacher_id?: SortOrder
    teacher_name?: SortOrder
    teacher_email?: SortOrder
    teacher_disciplines_ids?: SortOrder
    teacher_situation?: SortOrder
    teacher_created_at?: SortOrder
    teacher_updated_at?: SortOrder
  }

  export type TeachersWhereUniqueInput = {
    teacher_id?: string
    teacher_email?: string
  }

  export type TeachersOrderByWithAggregationInput = {
    teacher_id?: SortOrder
    teacher_name?: SortOrder
    teacher_email?: SortOrder
    teacher_disciplines_ids?: SortOrder
    teacher_situation?: SortOrder
    teacher_created_at?: SortOrder
    teacher_updated_at?: SortOrder
    _count?: TeachersCountOrderByAggregateInput
    _max?: TeachersMaxOrderByAggregateInput
    _min?: TeachersMinOrderByAggregateInput
  }

  export type TeachersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TeachersScalarWhereWithAggregatesInput>
    OR?: Enumerable<TeachersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TeachersScalarWhereWithAggregatesInput>
    teacher_id?: StringWithAggregatesFilter | string
    teacher_name?: StringWithAggregatesFilter | string
    teacher_email?: StringWithAggregatesFilter | string
    teacher_disciplines_ids?: JsonWithAggregatesFilter
    teacher_situation?: StringWithAggregatesFilter | string
    teacher_created_at?: DateTimeWithAggregatesFilter | Date | string
    teacher_updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DisciplinesWhereInput = {
    AND?: Enumerable<DisciplinesWhereInput>
    OR?: Enumerable<DisciplinesWhereInput>
    NOT?: Enumerable<DisciplinesWhereInput>
    discipline_id?: StringFilter | string
    discipline_name?: StringFilter | string
    discipline_situation?: StringFilter | string
  }

  export type DisciplinesOrderByWithRelationInput = {
    discipline_id?: SortOrder
    discipline_name?: SortOrder
    discipline_situation?: SortOrder
  }

  export type DisciplinesWhereUniqueInput = {
    discipline_id?: string
  }

  export type DisciplinesOrderByWithAggregationInput = {
    discipline_id?: SortOrder
    discipline_name?: SortOrder
    discipline_situation?: SortOrder
    _count?: DisciplinesCountOrderByAggregateInput
    _max?: DisciplinesMaxOrderByAggregateInput
    _min?: DisciplinesMinOrderByAggregateInput
  }

  export type DisciplinesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DisciplinesScalarWhereWithAggregatesInput>
    OR?: Enumerable<DisciplinesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DisciplinesScalarWhereWithAggregatesInput>
    discipline_id?: StringWithAggregatesFilter | string
    discipline_name?: StringWithAggregatesFilter | string
    discipline_situation?: StringWithAggregatesFilter | string
  }

  export type ClassesWhereInput = {
    AND?: Enumerable<ClassesWhereInput>
    OR?: Enumerable<ClassesWhereInput>
    NOT?: Enumerable<ClassesWhereInput>
    class_id?: StringFilter | string
    class_name?: StringFilter | string
    class_email?: StringFilter | string
    class_situation?: StringFilter | string
  }

  export type ClassesOrderByWithRelationInput = {
    class_id?: SortOrder
    class_name?: SortOrder
    class_email?: SortOrder
    class_situation?: SortOrder
  }

  export type ClassesWhereUniqueInput = {
    class_id?: string
    class_email?: string
  }

  export type ClassesOrderByWithAggregationInput = {
    class_id?: SortOrder
    class_name?: SortOrder
    class_email?: SortOrder
    class_situation?: SortOrder
    _count?: ClassesCountOrderByAggregateInput
    _max?: ClassesMaxOrderByAggregateInput
    _min?: ClassesMinOrderByAggregateInput
  }

  export type ClassesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClassesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClassesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClassesScalarWhereWithAggregatesInput>
    class_id?: StringWithAggregatesFilter | string
    class_name?: StringWithAggregatesFilter | string
    class_email?: StringWithAggregatesFilter | string
    class_situation?: StringWithAggregatesFilter | string
  }

  export type TimesheetsWhereInput = {
    AND?: Enumerable<TimesheetsWhereInput>
    OR?: Enumerable<TimesheetsWhereInput>
    NOT?: Enumerable<TimesheetsWhereInput>
    timesheet_id?: StringFilter | string
    timesheet_teacher_id?: StringFilter | string
    timesheet_class_id?: StringFilter | string
    timesheet_date?: DateTimeFilter | Date | string
    timesheet_situation?: StringFilter | string
  }

  export type TimesheetsOrderByWithRelationInput = {
    timesheet_id?: SortOrder
    timesheet_teacher_id?: SortOrder
    timesheet_class_id?: SortOrder
    timesheet_date?: SortOrder
    timesheet_situation?: SortOrder
  }

  export type TimesheetsWhereUniqueInput = {
    timesheet_id?: string
  }

  export type TimesheetsOrderByWithAggregationInput = {
    timesheet_id?: SortOrder
    timesheet_teacher_id?: SortOrder
    timesheet_class_id?: SortOrder
    timesheet_date?: SortOrder
    timesheet_situation?: SortOrder
    _count?: TimesheetsCountOrderByAggregateInput
    _max?: TimesheetsMaxOrderByAggregateInput
    _min?: TimesheetsMinOrderByAggregateInput
  }

  export type TimesheetsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TimesheetsScalarWhereWithAggregatesInput>
    OR?: Enumerable<TimesheetsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TimesheetsScalarWhereWithAggregatesInput>
    timesheet_id?: StringWithAggregatesFilter | string
    timesheet_teacher_id?: StringWithAggregatesFilter | string
    timesheet_class_id?: StringWithAggregatesFilter | string
    timesheet_date?: DateTimeWithAggregatesFilter | Date | string
    timesheet_situation?: StringWithAggregatesFilter | string
  }

  export type CurriculumsWhereInput = {
    AND?: Enumerable<CurriculumsWhereInput>
    OR?: Enumerable<CurriculumsWhereInput>
    NOT?: Enumerable<CurriculumsWhereInput>
    curriculum_id?: StringFilter | string
    curriculum_name?: StringFilter | string
    curriculum_class_id?: StringFilter | string
    curriculum_situation?: StringFilter | string
  }

  export type CurriculumsOrderByWithRelationInput = {
    curriculum_id?: SortOrder
    curriculum_name?: SortOrder
    curriculum_class_id?: SortOrder
    curriculum_situation?: SortOrder
  }

  export type CurriculumsWhereUniqueInput = {
    curriculum_id?: string
  }

  export type CurriculumsOrderByWithAggregationInput = {
    curriculum_id?: SortOrder
    curriculum_name?: SortOrder
    curriculum_class_id?: SortOrder
    curriculum_situation?: SortOrder
    _count?: CurriculumsCountOrderByAggregateInput
    _max?: CurriculumsMaxOrderByAggregateInput
    _min?: CurriculumsMinOrderByAggregateInput
  }

  export type CurriculumsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CurriculumsScalarWhereWithAggregatesInput>
    OR?: Enumerable<CurriculumsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CurriculumsScalarWhereWithAggregatesInput>
    curriculum_id?: StringWithAggregatesFilter | string
    curriculum_name?: StringWithAggregatesFilter | string
    curriculum_class_id?: StringWithAggregatesFilter | string
    curriculum_situation?: StringWithAggregatesFilter | string
  }

  export type UsersCreateInput = {
    user_id?: string
    user_name: string
    user_email: string
    user_salt: string
    user_password: string
    user_created_at?: Date | string
    user_updated_at: Date | string
  }

  export type UsersUncheckedCreateInput = {
    user_id?: string
    user_name: string
    user_email: string
    user_salt: string
    user_password: string
    user_created_at?: Date | string
    user_updated_at: Date | string
  }

  export type UsersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_salt?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_salt?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    user_id?: string
    user_name: string
    user_email: string
    user_salt: string
    user_password: string
    user_created_at?: Date | string
    user_updated_at: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_salt?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_salt?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachersCreateInput = {
    teacher_id?: string
    teacher_name: string
    teacher_email: string
    teacher_disciplines_ids: JsonNullValueInput | InputJsonValue
    teacher_situation: string
    teacher_created_at?: Date | string
    teacher_updated_at: Date | string
  }

  export type TeachersUncheckedCreateInput = {
    teacher_id?: string
    teacher_name: string
    teacher_email: string
    teacher_disciplines_ids: JsonNullValueInput | InputJsonValue
    teacher_situation: string
    teacher_created_at?: Date | string
    teacher_updated_at: Date | string
  }

  export type TeachersUpdateInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_situation?: StringFieldUpdateOperationsInput | string
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachersUncheckedUpdateInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_situation?: StringFieldUpdateOperationsInput | string
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachersCreateManyInput = {
    teacher_id?: string
    teacher_name: string
    teacher_email: string
    teacher_disciplines_ids: JsonNullValueInput | InputJsonValue
    teacher_situation: string
    teacher_created_at?: Date | string
    teacher_updated_at: Date | string
  }

  export type TeachersUpdateManyMutationInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_situation?: StringFieldUpdateOperationsInput | string
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachersUncheckedUpdateManyInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_situation?: StringFieldUpdateOperationsInput | string
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplinesCreateInput = {
    discipline_id?: string
    discipline_name: string
    discipline_situation: string
  }

  export type DisciplinesUncheckedCreateInput = {
    discipline_id?: string
    discipline_name: string
    discipline_situation: string
  }

  export type DisciplinesUpdateInput = {
    discipline_id?: StringFieldUpdateOperationsInput | string
    discipline_name?: StringFieldUpdateOperationsInput | string
    discipline_situation?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinesUncheckedUpdateInput = {
    discipline_id?: StringFieldUpdateOperationsInput | string
    discipline_name?: StringFieldUpdateOperationsInput | string
    discipline_situation?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinesCreateManyInput = {
    discipline_id?: string
    discipline_name: string
    discipline_situation: string
  }

  export type DisciplinesUpdateManyMutationInput = {
    discipline_id?: StringFieldUpdateOperationsInput | string
    discipline_name?: StringFieldUpdateOperationsInput | string
    discipline_situation?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinesUncheckedUpdateManyInput = {
    discipline_id?: StringFieldUpdateOperationsInput | string
    discipline_name?: StringFieldUpdateOperationsInput | string
    discipline_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesCreateInput = {
    class_id?: string
    class_name: string
    class_email: string
    class_situation: string
  }

  export type ClassesUncheckedCreateInput = {
    class_id?: string
    class_name: string
    class_email: string
    class_situation: string
  }

  export type ClassesUpdateInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_email?: StringFieldUpdateOperationsInput | string
    class_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesUncheckedUpdateInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_email?: StringFieldUpdateOperationsInput | string
    class_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesCreateManyInput = {
    class_id?: string
    class_name: string
    class_email: string
    class_situation: string
  }

  export type ClassesUpdateManyMutationInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_email?: StringFieldUpdateOperationsInput | string
    class_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesUncheckedUpdateManyInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_email?: StringFieldUpdateOperationsInput | string
    class_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TimesheetsCreateInput = {
    timesheet_id?: string
    timesheet_teacher_id: string
    timesheet_class_id: string
    timesheet_date: Date | string
    timesheet_situation: string
  }

  export type TimesheetsUncheckedCreateInput = {
    timesheet_id?: string
    timesheet_teacher_id: string
    timesheet_class_id: string
    timesheet_date: Date | string
    timesheet_situation: string
  }

  export type TimesheetsUpdateInput = {
    timesheet_id?: StringFieldUpdateOperationsInput | string
    timesheet_teacher_id?: StringFieldUpdateOperationsInput | string
    timesheet_class_id?: StringFieldUpdateOperationsInput | string
    timesheet_date?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheet_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TimesheetsUncheckedUpdateInput = {
    timesheet_id?: StringFieldUpdateOperationsInput | string
    timesheet_teacher_id?: StringFieldUpdateOperationsInput | string
    timesheet_class_id?: StringFieldUpdateOperationsInput | string
    timesheet_date?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheet_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TimesheetsCreateManyInput = {
    timesheet_id?: string
    timesheet_teacher_id: string
    timesheet_class_id: string
    timesheet_date: Date | string
    timesheet_situation: string
  }

  export type TimesheetsUpdateManyMutationInput = {
    timesheet_id?: StringFieldUpdateOperationsInput | string
    timesheet_teacher_id?: StringFieldUpdateOperationsInput | string
    timesheet_class_id?: StringFieldUpdateOperationsInput | string
    timesheet_date?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheet_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TimesheetsUncheckedUpdateManyInput = {
    timesheet_id?: StringFieldUpdateOperationsInput | string
    timesheet_teacher_id?: StringFieldUpdateOperationsInput | string
    timesheet_class_id?: StringFieldUpdateOperationsInput | string
    timesheet_date?: DateTimeFieldUpdateOperationsInput | Date | string
    timesheet_situation?: StringFieldUpdateOperationsInput | string
  }

  export type CurriculumsCreateInput = {
    curriculum_id?: string
    curriculum_name: string
    curriculum_class_id: string
    curriculum_situation: string
  }

  export type CurriculumsUncheckedCreateInput = {
    curriculum_id?: string
    curriculum_name: string
    curriculum_class_id: string
    curriculum_situation: string
  }

  export type CurriculumsUpdateInput = {
    curriculum_id?: StringFieldUpdateOperationsInput | string
    curriculum_name?: StringFieldUpdateOperationsInput | string
    curriculum_class_id?: StringFieldUpdateOperationsInput | string
    curriculum_situation?: StringFieldUpdateOperationsInput | string
  }

  export type CurriculumsUncheckedUpdateInput = {
    curriculum_id?: StringFieldUpdateOperationsInput | string
    curriculum_name?: StringFieldUpdateOperationsInput | string
    curriculum_class_id?: StringFieldUpdateOperationsInput | string
    curriculum_situation?: StringFieldUpdateOperationsInput | string
  }

  export type CurriculumsCreateManyInput = {
    curriculum_id?: string
    curriculum_name: string
    curriculum_class_id: string
    curriculum_situation: string
  }

  export type CurriculumsUpdateManyMutationInput = {
    curriculum_id?: StringFieldUpdateOperationsInput | string
    curriculum_name?: StringFieldUpdateOperationsInput | string
    curriculum_class_id?: StringFieldUpdateOperationsInput | string
    curriculum_situation?: StringFieldUpdateOperationsInput | string
  }

  export type CurriculumsUncheckedUpdateManyInput = {
    curriculum_id?: StringFieldUpdateOperationsInput | string
    curriculum_name?: StringFieldUpdateOperationsInput | string
    curriculum_class_id?: StringFieldUpdateOperationsInput | string
    curriculum_situation?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_salt?: SortOrder
    user_password?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_salt?: SortOrder
    user_password?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_salt?: SortOrder
    user_password?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type TeachersCountOrderByAggregateInput = {
    teacher_id?: SortOrder
    teacher_name?: SortOrder
    teacher_email?: SortOrder
    teacher_disciplines_ids?: SortOrder
    teacher_situation?: SortOrder
    teacher_created_at?: SortOrder
    teacher_updated_at?: SortOrder
  }

  export type TeachersMaxOrderByAggregateInput = {
    teacher_id?: SortOrder
    teacher_name?: SortOrder
    teacher_email?: SortOrder
    teacher_situation?: SortOrder
    teacher_created_at?: SortOrder
    teacher_updated_at?: SortOrder
  }

  export type TeachersMinOrderByAggregateInput = {
    teacher_id?: SortOrder
    teacher_name?: SortOrder
    teacher_email?: SortOrder
    teacher_situation?: SortOrder
    teacher_created_at?: SortOrder
    teacher_updated_at?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type DisciplinesCountOrderByAggregateInput = {
    discipline_id?: SortOrder
    discipline_name?: SortOrder
    discipline_situation?: SortOrder
  }

  export type DisciplinesMaxOrderByAggregateInput = {
    discipline_id?: SortOrder
    discipline_name?: SortOrder
    discipline_situation?: SortOrder
  }

  export type DisciplinesMinOrderByAggregateInput = {
    discipline_id?: SortOrder
    discipline_name?: SortOrder
    discipline_situation?: SortOrder
  }

  export type ClassesCountOrderByAggregateInput = {
    class_id?: SortOrder
    class_name?: SortOrder
    class_email?: SortOrder
    class_situation?: SortOrder
  }

  export type ClassesMaxOrderByAggregateInput = {
    class_id?: SortOrder
    class_name?: SortOrder
    class_email?: SortOrder
    class_situation?: SortOrder
  }

  export type ClassesMinOrderByAggregateInput = {
    class_id?: SortOrder
    class_name?: SortOrder
    class_email?: SortOrder
    class_situation?: SortOrder
  }

  export type TimesheetsCountOrderByAggregateInput = {
    timesheet_id?: SortOrder
    timesheet_teacher_id?: SortOrder
    timesheet_class_id?: SortOrder
    timesheet_date?: SortOrder
    timesheet_situation?: SortOrder
  }

  export type TimesheetsMaxOrderByAggregateInput = {
    timesheet_id?: SortOrder
    timesheet_teacher_id?: SortOrder
    timesheet_class_id?: SortOrder
    timesheet_date?: SortOrder
    timesheet_situation?: SortOrder
  }

  export type TimesheetsMinOrderByAggregateInput = {
    timesheet_id?: SortOrder
    timesheet_teacher_id?: SortOrder
    timesheet_class_id?: SortOrder
    timesheet_date?: SortOrder
    timesheet_situation?: SortOrder
  }

  export type CurriculumsCountOrderByAggregateInput = {
    curriculum_id?: SortOrder
    curriculum_name?: SortOrder
    curriculum_class_id?: SortOrder
    curriculum_situation?: SortOrder
  }

  export type CurriculumsMaxOrderByAggregateInput = {
    curriculum_id?: SortOrder
    curriculum_name?: SortOrder
    curriculum_class_id?: SortOrder
    curriculum_situation?: SortOrder
  }

  export type CurriculumsMinOrderByAggregateInput = {
    curriculum_id?: SortOrder
    curriculum_name?: SortOrder
    curriculum_class_id?: SortOrder
    curriculum_situation?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}