
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
 * Model Schools
 * 
 */
export type Schools = {
  school_id: string
  school_name: string
  school_category: Category
  school_cnpj: string
  school_address: string
  school_number: string
  school_neighborhood: string
  school_city: string
  school_state: string
  school_cep: string
  school_phone: string
  school_email: string
  school_created_at: Date
  school_updated_at: Date
  school_situation: string
}

/**
 * Model Shifts
 * 
 */
export type Shifts = {
  shift_id: string
  shift_name: ShiftNames
  shift_day_of_week: DayOfTheWeek
  shift_number_class_per_day: number
  shift_day_of_week_class: boolean
  shift_created_at: Date
  shift_updated_at: Date
  shitf_situation: string
}

/**
 * Model Schedules
 * 
 */
export type Schedules = {
  schedule_id: string
  schedule_name: string
  schedule_start: Date
  schedule_end: Date
  schedule_shift_id: string
  schedule_situation: string
}

/**
 * Model Educations
 * 
 */
export type Educations = {
  education_id: string
  education_name: string
  education_nickname: string
  education_created_at: Date
  education_updated_at: Date
  education_situation: string
}

/**
 * Model Subjects
 * 
 */
export type Subjects = {
  subject_id: string
  subject_name: string
  subject_nickname: string
  subject_educations: Prisma.JsonValue
  subject_created_at: Date
  subject_updated_at: Date
  subject_situation: string
}

/**
 * Model Teachers
 * 
 */
export type Teachers = {
  teacher_id: string
  teacher_school_id: string
  teacher_name: string
  teacher_nickname: string
  teacher_email: string
  teacher_celphone: string
  teacher_disciplines_ids: Prisma.JsonValue
  teacher_shifts_ids: Prisma.JsonValue
  teacher_restrictions: Prisma.JsonValue
  teacher_created_at: Date
  teacher_updated_at: Date
  teacher_situation: string
}

/**
 * Model Classes
 * 
 */
export type Classes = {
  class_id: string
  class_name: string
  class_teachers_ids: Prisma.JsonValue
  class_education_id: string
  class_situation: string
}

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
  user_situation: string
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
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Category: {
  estadual: 'estadual',
  federal: 'federal',
  municipal: 'municipal',
  militar: 'militar',
  particular: 'particular'
};

export type Category = (typeof Category)[keyof typeof Category]


export const ShiftNames: {
  matutino: 'matutino',
  vespertino: 'vespertino',
  noturno: 'noturno'
};

export type ShiftNames = (typeof ShiftNames)[keyof typeof ShiftNames]


export const DayOfTheWeek: {
  domingo: 'domingo',
  segunda: 'segunda',
  terca: 'terca',
  quarta: 'quarta',
  quinta: 'quinta',
  sexta: 'sexta',
  sabado: 'sabado'
};

export type DayOfTheWeek = (typeof DayOfTheWeek)[keyof typeof DayOfTheWeek]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.schools.findMany()
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
   * // Fetch zero or more Schools
   * const schools = await prisma.schools.findMany()
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
   * `prisma.schools`: Exposes CRUD operations for the **Schools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.schools.findMany()
    * ```
    */
  get schools(): Prisma.SchoolsDelegate<GlobalReject>;

  /**
   * `prisma.shifts`: Exposes CRUD operations for the **Shifts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shifts.findMany()
    * ```
    */
  get shifts(): Prisma.ShiftsDelegate<GlobalReject>;

  /**
   * `prisma.schedules`: Exposes CRUD operations for the **Schedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedules.findMany()
    * ```
    */
  get schedules(): Prisma.SchedulesDelegate<GlobalReject>;

  /**
   * `prisma.educations`: Exposes CRUD operations for the **Educations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.educations.findMany()
    * ```
    */
  get educations(): Prisma.EducationsDelegate<GlobalReject>;

  /**
   * `prisma.subjects`: Exposes CRUD operations for the **Subjects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subjects.findMany()
    * ```
    */
  get subjects(): Prisma.SubjectsDelegate<GlobalReject>;

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
   * `prisma.classes`: Exposes CRUD operations for the **Classes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classes.findMany()
    * ```
    */
  get classes(): Prisma.ClassesDelegate<GlobalReject>;

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
    Schools: 'Schools',
    Shifts: 'Shifts',
    Schedules: 'Schedules',
    Educations: 'Educations',
    Subjects: 'Subjects',
    Teachers: 'Teachers',
    Classes: 'Classes',
    Users: 'Users',
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
   * Count Type SchoolsCountOutputType
   */


  export type SchoolsCountOutputType = {
    Teachers: number
  }

  export type SchoolsCountOutputTypeSelect = {
    Teachers?: boolean
  }

  export type SchoolsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SchoolsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SchoolsCountOutputType
    : S extends undefined
    ? never
    : S extends SchoolsCountOutputTypeArgs
    ?'include' extends U
    ? SchoolsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SchoolsCountOutputType ?SchoolsCountOutputType [P]
  : 
     never
  } 
    : SchoolsCountOutputType
  : SchoolsCountOutputType




  // Custom InputTypes

  /**
   * SchoolsCountOutputType without action
   */
  export type SchoolsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SchoolsCountOutputType
     * 
    **/
    select?: SchoolsCountOutputTypeSelect | null
  }



  /**
   * Count Type ShiftsCountOutputType
   */


  export type ShiftsCountOutputType = {
    Schedules: number
  }

  export type ShiftsCountOutputTypeSelect = {
    Schedules?: boolean
  }

  export type ShiftsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ShiftsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ShiftsCountOutputType
    : S extends undefined
    ? never
    : S extends ShiftsCountOutputTypeArgs
    ?'include' extends U
    ? ShiftsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ShiftsCountOutputType ?ShiftsCountOutputType [P]
  : 
     never
  } 
    : ShiftsCountOutputType
  : ShiftsCountOutputType




  // Custom InputTypes

  /**
   * ShiftsCountOutputType without action
   */
  export type ShiftsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ShiftsCountOutputType
     * 
    **/
    select?: ShiftsCountOutputTypeSelect | null
  }



  /**
   * Count Type EducationsCountOutputType
   */


  export type EducationsCountOutputType = {
    Classes: number
  }

  export type EducationsCountOutputTypeSelect = {
    Classes?: boolean
  }

  export type EducationsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EducationsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EducationsCountOutputType
    : S extends undefined
    ? never
    : S extends EducationsCountOutputTypeArgs
    ?'include' extends U
    ? EducationsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof EducationsCountOutputType ?EducationsCountOutputType [P]
  : 
     never
  } 
    : EducationsCountOutputType
  : EducationsCountOutputType




  // Custom InputTypes

  /**
   * EducationsCountOutputType without action
   */
  export type EducationsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EducationsCountOutputType
     * 
    **/
    select?: EducationsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Schools
   */


  export type AggregateSchools = {
    _count: SchoolsCountAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  export type SchoolsMinAggregateOutputType = {
    school_id: string | null
    school_name: string | null
    school_category: Category | null
    school_cnpj: string | null
    school_address: string | null
    school_number: string | null
    school_neighborhood: string | null
    school_city: string | null
    school_state: string | null
    school_cep: string | null
    school_phone: string | null
    school_email: string | null
    school_created_at: Date | null
    school_updated_at: Date | null
    school_situation: string | null
  }

  export type SchoolsMaxAggregateOutputType = {
    school_id: string | null
    school_name: string | null
    school_category: Category | null
    school_cnpj: string | null
    school_address: string | null
    school_number: string | null
    school_neighborhood: string | null
    school_city: string | null
    school_state: string | null
    school_cep: string | null
    school_phone: string | null
    school_email: string | null
    school_created_at: Date | null
    school_updated_at: Date | null
    school_situation: string | null
  }

  export type SchoolsCountAggregateOutputType = {
    school_id: number
    school_name: number
    school_category: number
    school_cnpj: number
    school_address: number
    school_number: number
    school_neighborhood: number
    school_city: number
    school_state: number
    school_cep: number
    school_phone: number
    school_email: number
    school_created_at: number
    school_updated_at: number
    school_situation: number
    _all: number
  }


  export type SchoolsMinAggregateInputType = {
    school_id?: true
    school_name?: true
    school_category?: true
    school_cnpj?: true
    school_address?: true
    school_number?: true
    school_neighborhood?: true
    school_city?: true
    school_state?: true
    school_cep?: true
    school_phone?: true
    school_email?: true
    school_created_at?: true
    school_updated_at?: true
    school_situation?: true
  }

  export type SchoolsMaxAggregateInputType = {
    school_id?: true
    school_name?: true
    school_category?: true
    school_cnpj?: true
    school_address?: true
    school_number?: true
    school_neighborhood?: true
    school_city?: true
    school_state?: true
    school_cep?: true
    school_phone?: true
    school_email?: true
    school_created_at?: true
    school_updated_at?: true
    school_situation?: true
  }

  export type SchoolsCountAggregateInputType = {
    school_id?: true
    school_name?: true
    school_category?: true
    school_cnpj?: true
    school_address?: true
    school_number?: true
    school_neighborhood?: true
    school_city?: true
    school_state?: true
    school_cep?: true
    school_phone?: true
    school_email?: true
    school_created_at?: true
    school_updated_at?: true
    school_situation?: true
    _all?: true
  }

  export type SchoolsAggregateArgs = {
    /**
     * Filter which Schools to aggregate.
     * 
    **/
    where?: SchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolsMaxAggregateInputType
  }

  export type GetSchoolsAggregateType<T extends SchoolsAggregateArgs> = {
        [P in keyof T & keyof AggregateSchools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchools[P]>
      : GetScalarType<T[P], AggregateSchools[P]>
  }




  export type SchoolsGroupByArgs = {
    where?: SchoolsWhereInput
    orderBy?: Enumerable<SchoolsOrderByWithAggregationInput>
    by: Array<SchoolsScalarFieldEnum>
    having?: SchoolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolsCountAggregateInputType | true
    _min?: SchoolsMinAggregateInputType
    _max?: SchoolsMaxAggregateInputType
  }


  export type SchoolsGroupByOutputType = {
    school_id: string
    school_name: string
    school_category: Category
    school_cnpj: string
    school_address: string
    school_number: string
    school_neighborhood: string
    school_city: string
    school_state: string
    school_cep: string
    school_phone: string
    school_email: string
    school_created_at: Date
    school_updated_at: Date
    school_situation: string
    _count: SchoolsCountAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  type GetSchoolsGroupByPayload<T extends SchoolsGroupByArgs> = Promise<
    Array<
      PickArray<SchoolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
        }
      >
    >


  export type SchoolsSelect = {
    school_id?: boolean
    school_name?: boolean
    school_category?: boolean
    school_cnpj?: boolean
    school_address?: boolean
    school_number?: boolean
    school_neighborhood?: boolean
    school_city?: boolean
    school_state?: boolean
    school_cep?: boolean
    school_phone?: boolean
    school_email?: boolean
    school_created_at?: boolean
    school_updated_at?: boolean
    school_situation?: boolean
    Teachers?: boolean | TeachersFindManyArgs
    _count?: boolean | SchoolsCountOutputTypeArgs
  }

  export type SchoolsInclude = {
    Teachers?: boolean | TeachersFindManyArgs
    _count?: boolean | SchoolsCountOutputTypeArgs
  }

  export type SchoolsGetPayload<
    S extends boolean | null | undefined | SchoolsArgs,
    U = keyof S
      > = S extends true
        ? Schools
    : S extends undefined
    ? never
    : S extends SchoolsArgs | SchoolsFindManyArgs
    ?'include' extends U
    ? Schools  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Teachers'
        ? Array < TeachersGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? SchoolsCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Schools ?Schools [P]
  : 
          P extends 'Teachers'
        ? Array < TeachersGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? SchoolsCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Schools
  : Schools


  type SchoolsCountArgs = Merge<
    Omit<SchoolsFindManyArgs, 'select' | 'include'> & {
      select?: SchoolsCountAggregateInputType | true
    }
  >

  export interface SchoolsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Schools that matches the filter.
     * @param {SchoolsFindUniqueArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SchoolsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SchoolsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Schools'> extends True ? CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>> : CheckSelect<T, Prisma__SchoolsClient<Schools | null >, Prisma__SchoolsClient<SchoolsGetPayload<T> | null >>

    /**
     * Find the first Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsFindFirstArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SchoolsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SchoolsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Schools'> extends True ? CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>> : CheckSelect<T, Prisma__SchoolsClient<Schools | null >, Prisma__SchoolsClient<SchoolsGetPayload<T> | null >>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.schools.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.schools.findMany({ take: 10 })
     * 
     * // Only select the `school_id`
     * const schoolsWithSchool_idOnly = await prisma.schools.findMany({ select: { school_id: true } })
     * 
    **/
    findMany<T extends SchoolsFindManyArgs>(
      args?: SelectSubset<T, SchoolsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Schools>>, PrismaPromise<Array<SchoolsGetPayload<T>>>>

    /**
     * Create a Schools.
     * @param {SchoolsCreateArgs} args - Arguments to create a Schools.
     * @example
     * // Create one Schools
     * const Schools = await prisma.schools.create({
     *   data: {
     *     // ... data to create a Schools
     *   }
     * })
     * 
    **/
    create<T extends SchoolsCreateArgs>(
      args: SelectSubset<T, SchoolsCreateArgs>
    ): CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>>

    /**
     * Create many Schools.
     *     @param {SchoolsCreateManyArgs} args - Arguments to create many Schools.
     *     @example
     *     // Create many Schools
     *     const schools = await prisma.schools.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SchoolsCreateManyArgs>(
      args?: SelectSubset<T, SchoolsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Schools.
     * @param {SchoolsDeleteArgs} args - Arguments to delete one Schools.
     * @example
     * // Delete one Schools
     * const Schools = await prisma.schools.delete({
     *   where: {
     *     // ... filter to delete one Schools
     *   }
     * })
     * 
    **/
    delete<T extends SchoolsDeleteArgs>(
      args: SelectSubset<T, SchoolsDeleteArgs>
    ): CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>>

    /**
     * Update one Schools.
     * @param {SchoolsUpdateArgs} args - Arguments to update one Schools.
     * @example
     * // Update one Schools
     * const schools = await prisma.schools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SchoolsUpdateArgs>(
      args: SelectSubset<T, SchoolsUpdateArgs>
    ): CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>>

    /**
     * Delete zero or more Schools.
     * @param {SchoolsDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.schools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SchoolsDeleteManyArgs>(
      args?: SelectSubset<T, SchoolsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const schools = await prisma.schools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SchoolsUpdateManyArgs>(
      args: SelectSubset<T, SchoolsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Schools.
     * @param {SchoolsUpsertArgs} args - Arguments to update or create a Schools.
     * @example
     * // Update or create a Schools
     * const schools = await prisma.schools.upsert({
     *   create: {
     *     // ... data to create a Schools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schools we want to update
     *   }
     * })
    **/
    upsert<T extends SchoolsUpsertArgs>(
      args: SelectSubset<T, SchoolsUpsertArgs>
    ): CheckSelect<T, Prisma__SchoolsClient<Schools>, Prisma__SchoolsClient<SchoolsGetPayload<T>>>

    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.schools.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolsCountArgs>(
      args?: Subset<T, SchoolsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolsAggregateArgs>(args: Subset<T, SchoolsAggregateArgs>): PrismaPromise<GetSchoolsAggregateType<T>>

    /**
     * Group by Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsGroupByArgs} args - Group by arguments.
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
      T extends SchoolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolsGroupByArgs['orderBy'] }
        : { orderBy?: SchoolsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SchoolsClient<T> implements PrismaPromise<T> {
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

    Teachers<T extends TeachersFindManyArgs = {}>(args?: Subset<T, TeachersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Teachers>>, PrismaPromise<Array<TeachersGetPayload<T>>>>;

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
   * Schools findUnique
   */
  export type SchoolsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * Throw an Error if a Schools can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Schools to fetch.
     * 
    **/
    where: SchoolsWhereUniqueInput
  }


  /**
   * Schools findFirst
   */
  export type SchoolsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * Throw an Error if a Schools can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Schools to fetch.
     * 
    **/
    where?: SchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     * 
    **/
    cursor?: SchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     * 
    **/
    distinct?: Enumerable<SchoolsScalarFieldEnum>
  }


  /**
   * Schools findMany
   */
  export type SchoolsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * Filter, which Schools to fetch.
     * 
    **/
    where?: SchoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     * 
    **/
    cursor?: SchoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SchoolsScalarFieldEnum>
  }


  /**
   * Schools create
   */
  export type SchoolsCreateArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * The data needed to create a Schools.
     * 
    **/
    data: XOR<SchoolsCreateInput, SchoolsUncheckedCreateInput>
  }


  /**
   * Schools createMany
   */
  export type SchoolsCreateManyArgs = {
    data: Enumerable<SchoolsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Schools update
   */
  export type SchoolsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * The data needed to update a Schools.
     * 
    **/
    data: XOR<SchoolsUpdateInput, SchoolsUncheckedUpdateInput>
    /**
     * Choose, which Schools to update.
     * 
    **/
    where: SchoolsWhereUniqueInput
  }


  /**
   * Schools updateMany
   */
  export type SchoolsUpdateManyArgs = {
    data: XOR<SchoolsUpdateManyMutationInput, SchoolsUncheckedUpdateManyInput>
    where?: SchoolsWhereInput
  }


  /**
   * Schools upsert
   */
  export type SchoolsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * The filter to search for the Schools to update in case it exists.
     * 
    **/
    where: SchoolsWhereUniqueInput
    /**
     * In case the Schools found by the `where` argument doesn't exist, create a new Schools with this data.
     * 
    **/
    create: XOR<SchoolsCreateInput, SchoolsUncheckedCreateInput>
    /**
     * In case the Schools was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SchoolsUpdateInput, SchoolsUncheckedUpdateInput>
  }


  /**
   * Schools delete
   */
  export type SchoolsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
    /**
     * Filter which Schools to delete.
     * 
    **/
    where: SchoolsWhereUniqueInput
  }


  /**
   * Schools deleteMany
   */
  export type SchoolsDeleteManyArgs = {
    where?: SchoolsWhereInput
  }


  /**
   * Schools without action
   */
  export type SchoolsArgs = {
    /**
     * Select specific fields to fetch from the Schools
     * 
    **/
    select?: SchoolsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolsInclude | null
  }



  /**
   * Model Shifts
   */


  export type AggregateShifts = {
    _count: ShiftsCountAggregateOutputType | null
    _avg: ShiftsAvgAggregateOutputType | null
    _sum: ShiftsSumAggregateOutputType | null
    _min: ShiftsMinAggregateOutputType | null
    _max: ShiftsMaxAggregateOutputType | null
  }

  export type ShiftsAvgAggregateOutputType = {
    shift_number_class_per_day: number | null
  }

  export type ShiftsSumAggregateOutputType = {
    shift_number_class_per_day: number | null
  }

  export type ShiftsMinAggregateOutputType = {
    shift_id: string | null
    shift_name: ShiftNames | null
    shift_day_of_week: DayOfTheWeek | null
    shift_number_class_per_day: number | null
    shift_day_of_week_class: boolean | null
    shift_created_at: Date | null
    shift_updated_at: Date | null
    shitf_situation: string | null
  }

  export type ShiftsMaxAggregateOutputType = {
    shift_id: string | null
    shift_name: ShiftNames | null
    shift_day_of_week: DayOfTheWeek | null
    shift_number_class_per_day: number | null
    shift_day_of_week_class: boolean | null
    shift_created_at: Date | null
    shift_updated_at: Date | null
    shitf_situation: string | null
  }

  export type ShiftsCountAggregateOutputType = {
    shift_id: number
    shift_name: number
    shift_day_of_week: number
    shift_number_class_per_day: number
    shift_day_of_week_class: number
    shift_created_at: number
    shift_updated_at: number
    shitf_situation: number
    _all: number
  }


  export type ShiftsAvgAggregateInputType = {
    shift_number_class_per_day?: true
  }

  export type ShiftsSumAggregateInputType = {
    shift_number_class_per_day?: true
  }

  export type ShiftsMinAggregateInputType = {
    shift_id?: true
    shift_name?: true
    shift_day_of_week?: true
    shift_number_class_per_day?: true
    shift_day_of_week_class?: true
    shift_created_at?: true
    shift_updated_at?: true
    shitf_situation?: true
  }

  export type ShiftsMaxAggregateInputType = {
    shift_id?: true
    shift_name?: true
    shift_day_of_week?: true
    shift_number_class_per_day?: true
    shift_day_of_week_class?: true
    shift_created_at?: true
    shift_updated_at?: true
    shitf_situation?: true
  }

  export type ShiftsCountAggregateInputType = {
    shift_id?: true
    shift_name?: true
    shift_day_of_week?: true
    shift_number_class_per_day?: true
    shift_day_of_week_class?: true
    shift_created_at?: true
    shift_updated_at?: true
    shitf_situation?: true
    _all?: true
  }

  export type ShiftsAggregateArgs = {
    /**
     * Filter which Shifts to aggregate.
     * 
    **/
    where?: ShiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     * 
    **/
    orderBy?: Enumerable<ShiftsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shifts
    **/
    _count?: true | ShiftsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftsMaxAggregateInputType
  }

  export type GetShiftsAggregateType<T extends ShiftsAggregateArgs> = {
        [P in keyof T & keyof AggregateShifts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShifts[P]>
      : GetScalarType<T[P], AggregateShifts[P]>
  }




  export type ShiftsGroupByArgs = {
    where?: ShiftsWhereInput
    orderBy?: Enumerable<ShiftsOrderByWithAggregationInput>
    by: Array<ShiftsScalarFieldEnum>
    having?: ShiftsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftsCountAggregateInputType | true
    _avg?: ShiftsAvgAggregateInputType
    _sum?: ShiftsSumAggregateInputType
    _min?: ShiftsMinAggregateInputType
    _max?: ShiftsMaxAggregateInputType
  }


  export type ShiftsGroupByOutputType = {
    shift_id: string
    shift_name: ShiftNames
    shift_day_of_week: DayOfTheWeek
    shift_number_class_per_day: number
    shift_day_of_week_class: boolean
    shift_created_at: Date
    shift_updated_at: Date
    shitf_situation: string
    _count: ShiftsCountAggregateOutputType | null
    _avg: ShiftsAvgAggregateOutputType | null
    _sum: ShiftsSumAggregateOutputType | null
    _min: ShiftsMinAggregateOutputType | null
    _max: ShiftsMaxAggregateOutputType | null
  }

  type GetShiftsGroupByPayload<T extends ShiftsGroupByArgs> = Promise<
    Array<
      PickArray<ShiftsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftsGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftsGroupByOutputType[P]>
        }
      >
    >


  export type ShiftsSelect = {
    shift_id?: boolean
    shift_name?: boolean
    shift_day_of_week?: boolean
    shift_number_class_per_day?: boolean
    shift_day_of_week_class?: boolean
    shift_created_at?: boolean
    shift_updated_at?: boolean
    shitf_situation?: boolean
    Schedules?: boolean | SchedulesFindManyArgs
    _count?: boolean | ShiftsCountOutputTypeArgs
  }

  export type ShiftsInclude = {
    Schedules?: boolean | SchedulesFindManyArgs
    _count?: boolean | ShiftsCountOutputTypeArgs
  }

  export type ShiftsGetPayload<
    S extends boolean | null | undefined | ShiftsArgs,
    U = keyof S
      > = S extends true
        ? Shifts
    : S extends undefined
    ? never
    : S extends ShiftsArgs | ShiftsFindManyArgs
    ?'include' extends U
    ? Shifts  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Schedules'
        ? Array < SchedulesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ShiftsCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Shifts ?Shifts [P]
  : 
          P extends 'Schedules'
        ? Array < SchedulesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ShiftsCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Shifts
  : Shifts


  type ShiftsCountArgs = Merge<
    Omit<ShiftsFindManyArgs, 'select' | 'include'> & {
      select?: ShiftsCountAggregateInputType | true
    }
  >

  export interface ShiftsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Shifts that matches the filter.
     * @param {ShiftsFindUniqueArgs} args - Arguments to find a Shifts
     * @example
     * // Get one Shifts
     * const shifts = await prisma.shifts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShiftsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShiftsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Shifts'> extends True ? CheckSelect<T, Prisma__ShiftsClient<Shifts>, Prisma__ShiftsClient<ShiftsGetPayload<T>>> : CheckSelect<T, Prisma__ShiftsClient<Shifts | null >, Prisma__ShiftsClient<ShiftsGetPayload<T> | null >>

    /**
     * Find the first Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftsFindFirstArgs} args - Arguments to find a Shifts
     * @example
     * // Get one Shifts
     * const shifts = await prisma.shifts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShiftsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShiftsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Shifts'> extends True ? CheckSelect<T, Prisma__ShiftsClient<Shifts>, Prisma__ShiftsClient<ShiftsGetPayload<T>>> : CheckSelect<T, Prisma__ShiftsClient<Shifts | null >, Prisma__ShiftsClient<ShiftsGetPayload<T> | null >>

    /**
     * Find zero or more Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shifts
     * const shifts = await prisma.shifts.findMany()
     * 
     * // Get first 10 Shifts
     * const shifts = await prisma.shifts.findMany({ take: 10 })
     * 
     * // Only select the `shift_id`
     * const shiftsWithShift_idOnly = await prisma.shifts.findMany({ select: { shift_id: true } })
     * 
    **/
    findMany<T extends ShiftsFindManyArgs>(
      args?: SelectSubset<T, ShiftsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Shifts>>, PrismaPromise<Array<ShiftsGetPayload<T>>>>

    /**
     * Create a Shifts.
     * @param {ShiftsCreateArgs} args - Arguments to create a Shifts.
     * @example
     * // Create one Shifts
     * const Shifts = await prisma.shifts.create({
     *   data: {
     *     // ... data to create a Shifts
     *   }
     * })
     * 
    **/
    create<T extends ShiftsCreateArgs>(
      args: SelectSubset<T, ShiftsCreateArgs>
    ): CheckSelect<T, Prisma__ShiftsClient<Shifts>, Prisma__ShiftsClient<ShiftsGetPayload<T>>>

    /**
     * Create many Shifts.
     *     @param {ShiftsCreateManyArgs} args - Arguments to create many Shifts.
     *     @example
     *     // Create many Shifts
     *     const shifts = await prisma.shifts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShiftsCreateManyArgs>(
      args?: SelectSubset<T, ShiftsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Shifts.
     * @param {ShiftsDeleteArgs} args - Arguments to delete one Shifts.
     * @example
     * // Delete one Shifts
     * const Shifts = await prisma.shifts.delete({
     *   where: {
     *     // ... filter to delete one Shifts
     *   }
     * })
     * 
    **/
    delete<T extends ShiftsDeleteArgs>(
      args: SelectSubset<T, ShiftsDeleteArgs>
    ): CheckSelect<T, Prisma__ShiftsClient<Shifts>, Prisma__ShiftsClient<ShiftsGetPayload<T>>>

    /**
     * Update one Shifts.
     * @param {ShiftsUpdateArgs} args - Arguments to update one Shifts.
     * @example
     * // Update one Shifts
     * const shifts = await prisma.shifts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShiftsUpdateArgs>(
      args: SelectSubset<T, ShiftsUpdateArgs>
    ): CheckSelect<T, Prisma__ShiftsClient<Shifts>, Prisma__ShiftsClient<ShiftsGetPayload<T>>>

    /**
     * Delete zero or more Shifts.
     * @param {ShiftsDeleteManyArgs} args - Arguments to filter Shifts to delete.
     * @example
     * // Delete a few Shifts
     * const { count } = await prisma.shifts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShiftsDeleteManyArgs>(
      args?: SelectSubset<T, ShiftsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shifts
     * const shifts = await prisma.shifts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShiftsUpdateManyArgs>(
      args: SelectSubset<T, ShiftsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Shifts.
     * @param {ShiftsUpsertArgs} args - Arguments to update or create a Shifts.
     * @example
     * // Update or create a Shifts
     * const shifts = await prisma.shifts.upsert({
     *   create: {
     *     // ... data to create a Shifts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shifts we want to update
     *   }
     * })
    **/
    upsert<T extends ShiftsUpsertArgs>(
      args: SelectSubset<T, ShiftsUpsertArgs>
    ): CheckSelect<T, Prisma__ShiftsClient<Shifts>, Prisma__ShiftsClient<ShiftsGetPayload<T>>>

    /**
     * Count the number of Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftsCountArgs} args - Arguments to filter Shifts to count.
     * @example
     * // Count the number of Shifts
     * const count = await prisma.shifts.count({
     *   where: {
     *     // ... the filter for the Shifts we want to count
     *   }
     * })
    **/
    count<T extends ShiftsCountArgs>(
      args?: Subset<T, ShiftsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftsAggregateArgs>(args: Subset<T, ShiftsAggregateArgs>): PrismaPromise<GetShiftsAggregateType<T>>

    /**
     * Group by Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftsGroupByArgs} args - Group by arguments.
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
      T extends ShiftsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftsGroupByArgs['orderBy'] }
        : { orderBy?: ShiftsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shifts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShiftsClient<T> implements PrismaPromise<T> {
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

    Schedules<T extends SchedulesFindManyArgs = {}>(args?: Subset<T, SchedulesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Schedules>>, PrismaPromise<Array<SchedulesGetPayload<T>>>>;

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
   * Shifts findUnique
   */
  export type ShiftsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Shifts
     * 
    **/
    select?: ShiftsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShiftsInclude | null
    /**
     * Throw an Error if a Shifts can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Shifts to fetch.
     * 
    **/
    where: ShiftsWhereUniqueInput
  }


  /**
   * Shifts findFirst
   */
  export type ShiftsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Shifts
     * 
    **/
    select?: ShiftsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShiftsInclude | null
    /**
     * Throw an Error if a Shifts can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Shifts to fetch.
     * 
    **/
    where?: ShiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     * 
    **/
    orderBy?: Enumerable<ShiftsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     * 
    **/
    cursor?: ShiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     * 
    **/
    distinct?: Enumerable<ShiftsScalarFieldEnum>
  }


  /**
   * Shifts findMany
   */
  export type ShiftsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Shifts
     * 
    **/
    select?: ShiftsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShiftsInclude | null
    /**
     * Filter, which Shifts to fetch.
     * 
    **/
    where?: ShiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     * 
    **/
    orderBy?: Enumerable<ShiftsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shifts.
     * 
    **/
    cursor?: ShiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShiftsScalarFieldEnum>
  }


  /**
   * Shifts create
   */
  export type ShiftsCreateArgs = {
    /**
     * Select specific fields to fetch from the Shifts
     * 
    **/
    select?: ShiftsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShiftsInclude | null
    /**
     * The data needed to create a Shifts.
     * 
    **/
    data: XOR<ShiftsCreateInput, ShiftsUncheckedCreateInput>
  }


  /**
   * Shifts createMany
   */
  export type ShiftsCreateManyArgs = {
    data: Enumerable<ShiftsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Shifts update
   */
  export type ShiftsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Shifts
     * 
    **/
    select?: ShiftsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShiftsInclude | null
    /**
     * The data needed to update a Shifts.
     * 
    **/
    data: XOR<ShiftsUpdateInput, ShiftsUncheckedUpdateInput>
    /**
     * Choose, which Shifts to update.
     * 
    **/
    where: ShiftsWhereUniqueInput
  }


  /**
   * Shifts updateMany
   */
  export type ShiftsUpdateManyArgs = {
    data: XOR<ShiftsUpdateManyMutationInput, ShiftsUncheckedUpdateManyInput>
    where?: ShiftsWhereInput
  }


  /**
   * Shifts upsert
   */
  export type ShiftsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Shifts
     * 
    **/
    select?: ShiftsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShiftsInclude | null
    /**
     * The filter to search for the Shifts to update in case it exists.
     * 
    **/
    where: ShiftsWhereUniqueInput
    /**
     * In case the Shifts found by the `where` argument doesn't exist, create a new Shifts with this data.
     * 
    **/
    create: XOR<ShiftsCreateInput, ShiftsUncheckedCreateInput>
    /**
     * In case the Shifts was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShiftsUpdateInput, ShiftsUncheckedUpdateInput>
  }


  /**
   * Shifts delete
   */
  export type ShiftsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Shifts
     * 
    **/
    select?: ShiftsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShiftsInclude | null
    /**
     * Filter which Shifts to delete.
     * 
    **/
    where: ShiftsWhereUniqueInput
  }


  /**
   * Shifts deleteMany
   */
  export type ShiftsDeleteManyArgs = {
    where?: ShiftsWhereInput
  }


  /**
   * Shifts without action
   */
  export type ShiftsArgs = {
    /**
     * Select specific fields to fetch from the Shifts
     * 
    **/
    select?: ShiftsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShiftsInclude | null
  }



  /**
   * Model Schedules
   */


  export type AggregateSchedules = {
    _count: SchedulesCountAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  export type SchedulesMinAggregateOutputType = {
    schedule_id: string | null
    schedule_name: string | null
    schedule_start: Date | null
    schedule_end: Date | null
    schedule_shift_id: string | null
    schedule_situation: string | null
  }

  export type SchedulesMaxAggregateOutputType = {
    schedule_id: string | null
    schedule_name: string | null
    schedule_start: Date | null
    schedule_end: Date | null
    schedule_shift_id: string | null
    schedule_situation: string | null
  }

  export type SchedulesCountAggregateOutputType = {
    schedule_id: number
    schedule_name: number
    schedule_start: number
    schedule_end: number
    schedule_shift_id: number
    schedule_situation: number
    _all: number
  }


  export type SchedulesMinAggregateInputType = {
    schedule_id?: true
    schedule_name?: true
    schedule_start?: true
    schedule_end?: true
    schedule_shift_id?: true
    schedule_situation?: true
  }

  export type SchedulesMaxAggregateInputType = {
    schedule_id?: true
    schedule_name?: true
    schedule_start?: true
    schedule_end?: true
    schedule_shift_id?: true
    schedule_situation?: true
  }

  export type SchedulesCountAggregateInputType = {
    schedule_id?: true
    schedule_name?: true
    schedule_start?: true
    schedule_end?: true
    schedule_shift_id?: true
    schedule_situation?: true
    _all?: true
  }

  export type SchedulesAggregateArgs = {
    /**
     * Filter which Schedules to aggregate.
     * 
    **/
    where?: SchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     * 
    **/
    orderBy?: Enumerable<SchedulesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | SchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulesMaxAggregateInputType
  }

  export type GetSchedulesAggregateType<T extends SchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedules[P]>
      : GetScalarType<T[P], AggregateSchedules[P]>
  }




  export type SchedulesGroupByArgs = {
    where?: SchedulesWhereInput
    orderBy?: Enumerable<SchedulesOrderByWithAggregationInput>
    by: Array<SchedulesScalarFieldEnum>
    having?: SchedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulesCountAggregateInputType | true
    _min?: SchedulesMinAggregateInputType
    _max?: SchedulesMaxAggregateInputType
  }


  export type SchedulesGroupByOutputType = {
    schedule_id: string
    schedule_name: string
    schedule_start: Date
    schedule_end: Date
    schedule_shift_id: string
    schedule_situation: string
    _count: SchedulesCountAggregateOutputType | null
    _min: SchedulesMinAggregateOutputType | null
    _max: SchedulesMaxAggregateOutputType | null
  }

  type GetSchedulesGroupByPayload<T extends SchedulesGroupByArgs> = Promise<
    Array<
      PickArray<SchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulesGroupByOutputType[P]>
        }
      >
    >


  export type SchedulesSelect = {
    schedule_id?: boolean
    schedule_name?: boolean
    schedule_start?: boolean
    schedule_end?: boolean
    shift?: boolean | ShiftsArgs
    schedule_shift_id?: boolean
    schedule_situation?: boolean
  }

  export type SchedulesInclude = {
    shift?: boolean | ShiftsArgs
  }

  export type SchedulesGetPayload<
    S extends boolean | null | undefined | SchedulesArgs,
    U = keyof S
      > = S extends true
        ? Schedules
    : S extends undefined
    ? never
    : S extends SchedulesArgs | SchedulesFindManyArgs
    ?'include' extends U
    ? Schedules  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'shift'
        ? ShiftsGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Schedules ?Schedules [P]
  : 
          P extends 'shift'
        ? ShiftsGetPayload<S['select'][P]> : never
  } 
    : Schedules
  : Schedules


  type SchedulesCountArgs = Merge<
    Omit<SchedulesFindManyArgs, 'select' | 'include'> & {
      select?: SchedulesCountAggregateInputType | true
    }
  >

  export interface SchedulesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Schedules that matches the filter.
     * @param {SchedulesFindUniqueArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SchedulesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SchedulesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Schedules'> extends True ? CheckSelect<T, Prisma__SchedulesClient<Schedules>, Prisma__SchedulesClient<SchedulesGetPayload<T>>> : CheckSelect<T, Prisma__SchedulesClient<Schedules | null >, Prisma__SchedulesClient<SchedulesGetPayload<T> | null >>

    /**
     * Find the first Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesFindFirstArgs} args - Arguments to find a Schedules
     * @example
     * // Get one Schedules
     * const schedules = await prisma.schedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SchedulesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SchedulesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Schedules'> extends True ? CheckSelect<T, Prisma__SchedulesClient<Schedules>, Prisma__SchedulesClient<SchedulesGetPayload<T>>> : CheckSelect<T, Prisma__SchedulesClient<Schedules | null >, Prisma__SchedulesClient<SchedulesGetPayload<T> | null >>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedules.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedules.findMany({ take: 10 })
     * 
     * // Only select the `schedule_id`
     * const schedulesWithSchedule_idOnly = await prisma.schedules.findMany({ select: { schedule_id: true } })
     * 
    **/
    findMany<T extends SchedulesFindManyArgs>(
      args?: SelectSubset<T, SchedulesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Schedules>>, PrismaPromise<Array<SchedulesGetPayload<T>>>>

    /**
     * Create a Schedules.
     * @param {SchedulesCreateArgs} args - Arguments to create a Schedules.
     * @example
     * // Create one Schedules
     * const Schedules = await prisma.schedules.create({
     *   data: {
     *     // ... data to create a Schedules
     *   }
     * })
     * 
    **/
    create<T extends SchedulesCreateArgs>(
      args: SelectSubset<T, SchedulesCreateArgs>
    ): CheckSelect<T, Prisma__SchedulesClient<Schedules>, Prisma__SchedulesClient<SchedulesGetPayload<T>>>

    /**
     * Create many Schedules.
     *     @param {SchedulesCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedules = await prisma.schedules.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SchedulesCreateManyArgs>(
      args?: SelectSubset<T, SchedulesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Schedules.
     * @param {SchedulesDeleteArgs} args - Arguments to delete one Schedules.
     * @example
     * // Delete one Schedules
     * const Schedules = await prisma.schedules.delete({
     *   where: {
     *     // ... filter to delete one Schedules
     *   }
     * })
     * 
    **/
    delete<T extends SchedulesDeleteArgs>(
      args: SelectSubset<T, SchedulesDeleteArgs>
    ): CheckSelect<T, Prisma__SchedulesClient<Schedules>, Prisma__SchedulesClient<SchedulesGetPayload<T>>>

    /**
     * Update one Schedules.
     * @param {SchedulesUpdateArgs} args - Arguments to update one Schedules.
     * @example
     * // Update one Schedules
     * const schedules = await prisma.schedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SchedulesUpdateArgs>(
      args: SelectSubset<T, SchedulesUpdateArgs>
    ): CheckSelect<T, Prisma__SchedulesClient<Schedules>, Prisma__SchedulesClient<SchedulesGetPayload<T>>>

    /**
     * Delete zero or more Schedules.
     * @param {SchedulesDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SchedulesDeleteManyArgs>(
      args?: SelectSubset<T, SchedulesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedules = await prisma.schedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SchedulesUpdateManyArgs>(
      args: SelectSubset<T, SchedulesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedules.
     * @param {SchedulesUpsertArgs} args - Arguments to update or create a Schedules.
     * @example
     * // Update or create a Schedules
     * const schedules = await prisma.schedules.upsert({
     *   create: {
     *     // ... data to create a Schedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedules we want to update
     *   }
     * })
    **/
    upsert<T extends SchedulesUpsertArgs>(
      args: SelectSubset<T, SchedulesUpsertArgs>
    ): CheckSelect<T, Prisma__SchedulesClient<Schedules>, Prisma__SchedulesClient<SchedulesGetPayload<T>>>

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedules.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends SchedulesCountArgs>(
      args?: Subset<T, SchedulesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulesAggregateArgs>(args: Subset<T, SchedulesAggregateArgs>): PrismaPromise<GetSchedulesAggregateType<T>>

    /**
     * Group by Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulesGroupByArgs} args - Group by arguments.
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
      T extends SchedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulesGroupByArgs['orderBy'] }
        : { orderBy?: SchedulesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SchedulesClient<T> implements PrismaPromise<T> {
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

    shift<T extends ShiftsArgs = {}>(args?: Subset<T, ShiftsArgs>): CheckSelect<T, Prisma__ShiftsClient<Shifts | null >, Prisma__ShiftsClient<ShiftsGetPayload<T> | null >>;

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
   * Schedules findUnique
   */
  export type SchedulesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Schedules
     * 
    **/
    select?: SchedulesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchedulesInclude | null
    /**
     * Throw an Error if a Schedules can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Schedules to fetch.
     * 
    **/
    where: SchedulesWhereUniqueInput
  }


  /**
   * Schedules findFirst
   */
  export type SchedulesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Schedules
     * 
    **/
    select?: SchedulesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchedulesInclude | null
    /**
     * Throw an Error if a Schedules can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Schedules to fetch.
     * 
    **/
    where?: SchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     * 
    **/
    orderBy?: Enumerable<SchedulesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     * 
    **/
    cursor?: SchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     * 
    **/
    distinct?: Enumerable<SchedulesScalarFieldEnum>
  }


  /**
   * Schedules findMany
   */
  export type SchedulesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Schedules
     * 
    **/
    select?: SchedulesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchedulesInclude | null
    /**
     * Filter, which Schedules to fetch.
     * 
    **/
    where?: SchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     * 
    **/
    orderBy?: Enumerable<SchedulesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     * 
    **/
    cursor?: SchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SchedulesScalarFieldEnum>
  }


  /**
   * Schedules create
   */
  export type SchedulesCreateArgs = {
    /**
     * Select specific fields to fetch from the Schedules
     * 
    **/
    select?: SchedulesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchedulesInclude | null
    /**
     * The data needed to create a Schedules.
     * 
    **/
    data: XOR<SchedulesCreateInput, SchedulesUncheckedCreateInput>
  }


  /**
   * Schedules createMany
   */
  export type SchedulesCreateManyArgs = {
    data: Enumerable<SchedulesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Schedules update
   */
  export type SchedulesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Schedules
     * 
    **/
    select?: SchedulesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchedulesInclude | null
    /**
     * The data needed to update a Schedules.
     * 
    **/
    data: XOR<SchedulesUpdateInput, SchedulesUncheckedUpdateInput>
    /**
     * Choose, which Schedules to update.
     * 
    **/
    where: SchedulesWhereUniqueInput
  }


  /**
   * Schedules updateMany
   */
  export type SchedulesUpdateManyArgs = {
    data: XOR<SchedulesUpdateManyMutationInput, SchedulesUncheckedUpdateManyInput>
    where?: SchedulesWhereInput
  }


  /**
   * Schedules upsert
   */
  export type SchedulesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Schedules
     * 
    **/
    select?: SchedulesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchedulesInclude | null
    /**
     * The filter to search for the Schedules to update in case it exists.
     * 
    **/
    where: SchedulesWhereUniqueInput
    /**
     * In case the Schedules found by the `where` argument doesn't exist, create a new Schedules with this data.
     * 
    **/
    create: XOR<SchedulesCreateInput, SchedulesUncheckedCreateInput>
    /**
     * In case the Schedules was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SchedulesUpdateInput, SchedulesUncheckedUpdateInput>
  }


  /**
   * Schedules delete
   */
  export type SchedulesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Schedules
     * 
    **/
    select?: SchedulesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchedulesInclude | null
    /**
     * Filter which Schedules to delete.
     * 
    **/
    where: SchedulesWhereUniqueInput
  }


  /**
   * Schedules deleteMany
   */
  export type SchedulesDeleteManyArgs = {
    where?: SchedulesWhereInput
  }


  /**
   * Schedules without action
   */
  export type SchedulesArgs = {
    /**
     * Select specific fields to fetch from the Schedules
     * 
    **/
    select?: SchedulesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchedulesInclude | null
  }



  /**
   * Model Educations
   */


  export type AggregateEducations = {
    _count: EducationsCountAggregateOutputType | null
    _min: EducationsMinAggregateOutputType | null
    _max: EducationsMaxAggregateOutputType | null
  }

  export type EducationsMinAggregateOutputType = {
    education_id: string | null
    education_name: string | null
    education_nickname: string | null
    education_created_at: Date | null
    education_updated_at: Date | null
    education_situation: string | null
  }

  export type EducationsMaxAggregateOutputType = {
    education_id: string | null
    education_name: string | null
    education_nickname: string | null
    education_created_at: Date | null
    education_updated_at: Date | null
    education_situation: string | null
  }

  export type EducationsCountAggregateOutputType = {
    education_id: number
    education_name: number
    education_nickname: number
    education_created_at: number
    education_updated_at: number
    education_situation: number
    _all: number
  }


  export type EducationsMinAggregateInputType = {
    education_id?: true
    education_name?: true
    education_nickname?: true
    education_created_at?: true
    education_updated_at?: true
    education_situation?: true
  }

  export type EducationsMaxAggregateInputType = {
    education_id?: true
    education_name?: true
    education_nickname?: true
    education_created_at?: true
    education_updated_at?: true
    education_situation?: true
  }

  export type EducationsCountAggregateInputType = {
    education_id?: true
    education_name?: true
    education_nickname?: true
    education_created_at?: true
    education_updated_at?: true
    education_situation?: true
    _all?: true
  }

  export type EducationsAggregateArgs = {
    /**
     * Filter which Educations to aggregate.
     * 
    **/
    where?: EducationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     * 
    **/
    orderBy?: Enumerable<EducationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EducationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationsMaxAggregateInputType
  }

  export type GetEducationsAggregateType<T extends EducationsAggregateArgs> = {
        [P in keyof T & keyof AggregateEducations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducations[P]>
      : GetScalarType<T[P], AggregateEducations[P]>
  }




  export type EducationsGroupByArgs = {
    where?: EducationsWhereInput
    orderBy?: Enumerable<EducationsOrderByWithAggregationInput>
    by: Array<EducationsScalarFieldEnum>
    having?: EducationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationsCountAggregateInputType | true
    _min?: EducationsMinAggregateInputType
    _max?: EducationsMaxAggregateInputType
  }


  export type EducationsGroupByOutputType = {
    education_id: string
    education_name: string
    education_nickname: string
    education_created_at: Date
    education_updated_at: Date
    education_situation: string
    _count: EducationsCountAggregateOutputType | null
    _min: EducationsMinAggregateOutputType | null
    _max: EducationsMaxAggregateOutputType | null
  }

  type GetEducationsGroupByPayload<T extends EducationsGroupByArgs> = Promise<
    Array<
      PickArray<EducationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationsGroupByOutputType[P]>
            : GetScalarType<T[P], EducationsGroupByOutputType[P]>
        }
      >
    >


  export type EducationsSelect = {
    education_id?: boolean
    education_name?: boolean
    education_nickname?: boolean
    education_created_at?: boolean
    education_updated_at?: boolean
    education_situation?: boolean
    Classes?: boolean | ClassesFindManyArgs
    _count?: boolean | EducationsCountOutputTypeArgs
  }

  export type EducationsInclude = {
    Classes?: boolean | ClassesFindManyArgs
    _count?: boolean | EducationsCountOutputTypeArgs
  }

  export type EducationsGetPayload<
    S extends boolean | null | undefined | EducationsArgs,
    U = keyof S
      > = S extends true
        ? Educations
    : S extends undefined
    ? never
    : S extends EducationsArgs | EducationsFindManyArgs
    ?'include' extends U
    ? Educations  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Classes'
        ? Array < ClassesGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? EducationsCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Educations ?Educations [P]
  : 
          P extends 'Classes'
        ? Array < ClassesGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? EducationsCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Educations
  : Educations


  type EducationsCountArgs = Merge<
    Omit<EducationsFindManyArgs, 'select' | 'include'> & {
      select?: EducationsCountAggregateInputType | true
    }
  >

  export interface EducationsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Educations that matches the filter.
     * @param {EducationsFindUniqueArgs} args - Arguments to find a Educations
     * @example
     * // Get one Educations
     * const educations = await prisma.educations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EducationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EducationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Educations'> extends True ? CheckSelect<T, Prisma__EducationsClient<Educations>, Prisma__EducationsClient<EducationsGetPayload<T>>> : CheckSelect<T, Prisma__EducationsClient<Educations | null >, Prisma__EducationsClient<EducationsGetPayload<T> | null >>

    /**
     * Find the first Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationsFindFirstArgs} args - Arguments to find a Educations
     * @example
     * // Get one Educations
     * const educations = await prisma.educations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EducationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EducationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Educations'> extends True ? CheckSelect<T, Prisma__EducationsClient<Educations>, Prisma__EducationsClient<EducationsGetPayload<T>>> : CheckSelect<T, Prisma__EducationsClient<Educations | null >, Prisma__EducationsClient<EducationsGetPayload<T> | null >>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.educations.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.educations.findMany({ take: 10 })
     * 
     * // Only select the `education_id`
     * const educationsWithEducation_idOnly = await prisma.educations.findMany({ select: { education_id: true } })
     * 
    **/
    findMany<T extends EducationsFindManyArgs>(
      args?: SelectSubset<T, EducationsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Educations>>, PrismaPromise<Array<EducationsGetPayload<T>>>>

    /**
     * Create a Educations.
     * @param {EducationsCreateArgs} args - Arguments to create a Educations.
     * @example
     * // Create one Educations
     * const Educations = await prisma.educations.create({
     *   data: {
     *     // ... data to create a Educations
     *   }
     * })
     * 
    **/
    create<T extends EducationsCreateArgs>(
      args: SelectSubset<T, EducationsCreateArgs>
    ): CheckSelect<T, Prisma__EducationsClient<Educations>, Prisma__EducationsClient<EducationsGetPayload<T>>>

    /**
     * Create many Educations.
     *     @param {EducationsCreateManyArgs} args - Arguments to create many Educations.
     *     @example
     *     // Create many Educations
     *     const educations = await prisma.educations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EducationsCreateManyArgs>(
      args?: SelectSubset<T, EducationsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Educations.
     * @param {EducationsDeleteArgs} args - Arguments to delete one Educations.
     * @example
     * // Delete one Educations
     * const Educations = await prisma.educations.delete({
     *   where: {
     *     // ... filter to delete one Educations
     *   }
     * })
     * 
    **/
    delete<T extends EducationsDeleteArgs>(
      args: SelectSubset<T, EducationsDeleteArgs>
    ): CheckSelect<T, Prisma__EducationsClient<Educations>, Prisma__EducationsClient<EducationsGetPayload<T>>>

    /**
     * Update one Educations.
     * @param {EducationsUpdateArgs} args - Arguments to update one Educations.
     * @example
     * // Update one Educations
     * const educations = await prisma.educations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EducationsUpdateArgs>(
      args: SelectSubset<T, EducationsUpdateArgs>
    ): CheckSelect<T, Prisma__EducationsClient<Educations>, Prisma__EducationsClient<EducationsGetPayload<T>>>

    /**
     * Delete zero or more Educations.
     * @param {EducationsDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.educations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EducationsDeleteManyArgs>(
      args?: SelectSubset<T, EducationsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const educations = await prisma.educations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EducationsUpdateManyArgs>(
      args: SelectSubset<T, EducationsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Educations.
     * @param {EducationsUpsertArgs} args - Arguments to update or create a Educations.
     * @example
     * // Update or create a Educations
     * const educations = await prisma.educations.upsert({
     *   create: {
     *     // ... data to create a Educations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Educations we want to update
     *   }
     * })
    **/
    upsert<T extends EducationsUpsertArgs>(
      args: SelectSubset<T, EducationsUpsertArgs>
    ): CheckSelect<T, Prisma__EducationsClient<Educations>, Prisma__EducationsClient<EducationsGetPayload<T>>>

    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationsCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.educations.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationsCountArgs>(
      args?: Subset<T, EducationsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationsAggregateArgs>(args: Subset<T, EducationsAggregateArgs>): PrismaPromise<GetEducationsAggregateType<T>>

    /**
     * Group by Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationsGroupByArgs} args - Group by arguments.
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
      T extends EducationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationsGroupByArgs['orderBy'] }
        : { orderBy?: EducationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Educations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EducationsClient<T> implements PrismaPromise<T> {
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

    Classes<T extends ClassesFindManyArgs = {}>(args?: Subset<T, ClassesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Classes>>, PrismaPromise<Array<ClassesGetPayload<T>>>>;

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
   * Educations findUnique
   */
  export type EducationsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Educations
     * 
    **/
    select?: EducationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationsInclude | null
    /**
     * Throw an Error if a Educations can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Educations to fetch.
     * 
    **/
    where: EducationsWhereUniqueInput
  }


  /**
   * Educations findFirst
   */
  export type EducationsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Educations
     * 
    **/
    select?: EducationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationsInclude | null
    /**
     * Throw an Error if a Educations can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Educations to fetch.
     * 
    **/
    where?: EducationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     * 
    **/
    orderBy?: Enumerable<EducationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     * 
    **/
    cursor?: EducationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     * 
    **/
    distinct?: Enumerable<EducationsScalarFieldEnum>
  }


  /**
   * Educations findMany
   */
  export type EducationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Educations
     * 
    **/
    select?: EducationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationsInclude | null
    /**
     * Filter, which Educations to fetch.
     * 
    **/
    where?: EducationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     * 
    **/
    orderBy?: Enumerable<EducationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     * 
    **/
    cursor?: EducationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EducationsScalarFieldEnum>
  }


  /**
   * Educations create
   */
  export type EducationsCreateArgs = {
    /**
     * Select specific fields to fetch from the Educations
     * 
    **/
    select?: EducationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationsInclude | null
    /**
     * The data needed to create a Educations.
     * 
    **/
    data: XOR<EducationsCreateInput, EducationsUncheckedCreateInput>
  }


  /**
   * Educations createMany
   */
  export type EducationsCreateManyArgs = {
    data: Enumerable<EducationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Educations update
   */
  export type EducationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Educations
     * 
    **/
    select?: EducationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationsInclude | null
    /**
     * The data needed to update a Educations.
     * 
    **/
    data: XOR<EducationsUpdateInput, EducationsUncheckedUpdateInput>
    /**
     * Choose, which Educations to update.
     * 
    **/
    where: EducationsWhereUniqueInput
  }


  /**
   * Educations updateMany
   */
  export type EducationsUpdateManyArgs = {
    data: XOR<EducationsUpdateManyMutationInput, EducationsUncheckedUpdateManyInput>
    where?: EducationsWhereInput
  }


  /**
   * Educations upsert
   */
  export type EducationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Educations
     * 
    **/
    select?: EducationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationsInclude | null
    /**
     * The filter to search for the Educations to update in case it exists.
     * 
    **/
    where: EducationsWhereUniqueInput
    /**
     * In case the Educations found by the `where` argument doesn't exist, create a new Educations with this data.
     * 
    **/
    create: XOR<EducationsCreateInput, EducationsUncheckedCreateInput>
    /**
     * In case the Educations was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EducationsUpdateInput, EducationsUncheckedUpdateInput>
  }


  /**
   * Educations delete
   */
  export type EducationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Educations
     * 
    **/
    select?: EducationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationsInclude | null
    /**
     * Filter which Educations to delete.
     * 
    **/
    where: EducationsWhereUniqueInput
  }


  /**
   * Educations deleteMany
   */
  export type EducationsDeleteManyArgs = {
    where?: EducationsWhereInput
  }


  /**
   * Educations without action
   */
  export type EducationsArgs = {
    /**
     * Select specific fields to fetch from the Educations
     * 
    **/
    select?: EducationsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EducationsInclude | null
  }



  /**
   * Model Subjects
   */


  export type AggregateSubjects = {
    _count: SubjectsCountAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  export type SubjectsMinAggregateOutputType = {
    subject_id: string | null
    subject_name: string | null
    subject_nickname: string | null
    subject_created_at: Date | null
    subject_updated_at: Date | null
    subject_situation: string | null
  }

  export type SubjectsMaxAggregateOutputType = {
    subject_id: string | null
    subject_name: string | null
    subject_nickname: string | null
    subject_created_at: Date | null
    subject_updated_at: Date | null
    subject_situation: string | null
  }

  export type SubjectsCountAggregateOutputType = {
    subject_id: number
    subject_name: number
    subject_nickname: number
    subject_educations: number
    subject_created_at: number
    subject_updated_at: number
    subject_situation: number
    _all: number
  }


  export type SubjectsMinAggregateInputType = {
    subject_id?: true
    subject_name?: true
    subject_nickname?: true
    subject_created_at?: true
    subject_updated_at?: true
    subject_situation?: true
  }

  export type SubjectsMaxAggregateInputType = {
    subject_id?: true
    subject_name?: true
    subject_nickname?: true
    subject_created_at?: true
    subject_updated_at?: true
    subject_situation?: true
  }

  export type SubjectsCountAggregateInputType = {
    subject_id?: true
    subject_name?: true
    subject_nickname?: true
    subject_educations?: true
    subject_created_at?: true
    subject_updated_at?: true
    subject_situation?: true
    _all?: true
  }

  export type SubjectsAggregateArgs = {
    /**
     * Filter which Subjects to aggregate.
     * 
    **/
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     * 
    **/
    orderBy?: Enumerable<SubjectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectsMaxAggregateInputType
  }

  export type GetSubjectsAggregateType<T extends SubjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjects[P]>
      : GetScalarType<T[P], AggregateSubjects[P]>
  }




  export type SubjectsGroupByArgs = {
    where?: SubjectsWhereInput
    orderBy?: Enumerable<SubjectsOrderByWithAggregationInput>
    by: Array<SubjectsScalarFieldEnum>
    having?: SubjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectsCountAggregateInputType | true
    _min?: SubjectsMinAggregateInputType
    _max?: SubjectsMaxAggregateInputType
  }


  export type SubjectsGroupByOutputType = {
    subject_id: string
    subject_name: string
    subject_nickname: string
    subject_educations: JsonValue
    subject_created_at: Date
    subject_updated_at: Date
    subject_situation: string
    _count: SubjectsCountAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  type GetSubjectsGroupByPayload<T extends SubjectsGroupByArgs> = Promise<
    Array<
      PickArray<SubjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
        }
      >
    >


  export type SubjectsSelect = {
    subject_id?: boolean
    subject_name?: boolean
    subject_nickname?: boolean
    subject_educations?: boolean
    subject_created_at?: boolean
    subject_updated_at?: boolean
    subject_situation?: boolean
  }

  export type SubjectsGetPayload<
    S extends boolean | null | undefined | SubjectsArgs,
    U = keyof S
      > = S extends true
        ? Subjects
    : S extends undefined
    ? never
    : S extends SubjectsArgs | SubjectsFindManyArgs
    ?'include' extends U
    ? Subjects 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Subjects ?Subjects [P]
  : 
     never
  } 
    : Subjects
  : Subjects


  type SubjectsCountArgs = Merge<
    Omit<SubjectsFindManyArgs, 'select' | 'include'> & {
      select?: SubjectsCountAggregateInputType | true
    }
  >

  export interface SubjectsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Subjects that matches the filter.
     * @param {SubjectsFindUniqueArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubjectsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SubjectsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Subjects'> extends True ? CheckSelect<T, Prisma__SubjectsClient<Subjects>, Prisma__SubjectsClient<SubjectsGetPayload<T>>> : CheckSelect<T, Prisma__SubjectsClient<Subjects | null >, Prisma__SubjectsClient<SubjectsGetPayload<T> | null >>

    /**
     * Find the first Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindFirstArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubjectsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SubjectsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Subjects'> extends True ? CheckSelect<T, Prisma__SubjectsClient<Subjects>, Prisma__SubjectsClient<SubjectsGetPayload<T>>> : CheckSelect<T, Prisma__SubjectsClient<Subjects | null >, Prisma__SubjectsClient<SubjectsGetPayload<T> | null >>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subjects.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subjects.findMany({ take: 10 })
     * 
     * // Only select the `subject_id`
     * const subjectsWithSubject_idOnly = await prisma.subjects.findMany({ select: { subject_id: true } })
     * 
    **/
    findMany<T extends SubjectsFindManyArgs>(
      args?: SelectSubset<T, SubjectsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Subjects>>, PrismaPromise<Array<SubjectsGetPayload<T>>>>

    /**
     * Create a Subjects.
     * @param {SubjectsCreateArgs} args - Arguments to create a Subjects.
     * @example
     * // Create one Subjects
     * const Subjects = await prisma.subjects.create({
     *   data: {
     *     // ... data to create a Subjects
     *   }
     * })
     * 
    **/
    create<T extends SubjectsCreateArgs>(
      args: SelectSubset<T, SubjectsCreateArgs>
    ): CheckSelect<T, Prisma__SubjectsClient<Subjects>, Prisma__SubjectsClient<SubjectsGetPayload<T>>>

    /**
     * Create many Subjects.
     *     @param {SubjectsCreateManyArgs} args - Arguments to create many Subjects.
     *     @example
     *     // Create many Subjects
     *     const subjects = await prisma.subjects.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubjectsCreateManyArgs>(
      args?: SelectSubset<T, SubjectsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Subjects.
     * @param {SubjectsDeleteArgs} args - Arguments to delete one Subjects.
     * @example
     * // Delete one Subjects
     * const Subjects = await prisma.subjects.delete({
     *   where: {
     *     // ... filter to delete one Subjects
     *   }
     * })
     * 
    **/
    delete<T extends SubjectsDeleteArgs>(
      args: SelectSubset<T, SubjectsDeleteArgs>
    ): CheckSelect<T, Prisma__SubjectsClient<Subjects>, Prisma__SubjectsClient<SubjectsGetPayload<T>>>

    /**
     * Update one Subjects.
     * @param {SubjectsUpdateArgs} args - Arguments to update one Subjects.
     * @example
     * // Update one Subjects
     * const subjects = await prisma.subjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubjectsUpdateArgs>(
      args: SelectSubset<T, SubjectsUpdateArgs>
    ): CheckSelect<T, Prisma__SubjectsClient<Subjects>, Prisma__SubjectsClient<SubjectsGetPayload<T>>>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectsDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubjectsDeleteManyArgs>(
      args?: SelectSubset<T, SubjectsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subjects = await prisma.subjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubjectsUpdateManyArgs>(
      args: SelectSubset<T, SubjectsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Subjects.
     * @param {SubjectsUpsertArgs} args - Arguments to update or create a Subjects.
     * @example
     * // Update or create a Subjects
     * const subjects = await prisma.subjects.upsert({
     *   create: {
     *     // ... data to create a Subjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subjects we want to update
     *   }
     * })
    **/
    upsert<T extends SubjectsUpsertArgs>(
      args: SelectSubset<T, SubjectsUpsertArgs>
    ): CheckSelect<T, Prisma__SubjectsClient<Subjects>, Prisma__SubjectsClient<SubjectsGetPayload<T>>>

    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subjects.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectsCountArgs>(
      args?: Subset<T, SubjectsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectsAggregateArgs>(args: Subset<T, SubjectsAggregateArgs>): PrismaPromise<GetSubjectsAggregateType<T>>

    /**
     * Group by Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsGroupByArgs} args - Group by arguments.
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
      T extends SubjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectsGroupByArgs['orderBy'] }
        : { orderBy?: SubjectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subjects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SubjectsClient<T> implements PrismaPromise<T> {
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
   * Subjects findUnique
   */
  export type SubjectsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Subjects
     * 
    **/
    select?: SubjectsSelect | null
    /**
     * Throw an Error if a Subjects can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Subjects to fetch.
     * 
    **/
    where: SubjectsWhereUniqueInput
  }


  /**
   * Subjects findFirst
   */
  export type SubjectsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Subjects
     * 
    **/
    select?: SubjectsSelect | null
    /**
     * Throw an Error if a Subjects can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Subjects to fetch.
     * 
    **/
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     * 
    **/
    orderBy?: Enumerable<SubjectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     * 
    **/
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     * 
    **/
    distinct?: Enumerable<SubjectsScalarFieldEnum>
  }


  /**
   * Subjects findMany
   */
  export type SubjectsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Subjects
     * 
    **/
    select?: SubjectsSelect | null
    /**
     * Filter, which Subjects to fetch.
     * 
    **/
    where?: SubjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     * 
    **/
    orderBy?: Enumerable<SubjectsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     * 
    **/
    cursor?: SubjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SubjectsScalarFieldEnum>
  }


  /**
   * Subjects create
   */
  export type SubjectsCreateArgs = {
    /**
     * Select specific fields to fetch from the Subjects
     * 
    **/
    select?: SubjectsSelect | null
    /**
     * The data needed to create a Subjects.
     * 
    **/
    data: XOR<SubjectsCreateInput, SubjectsUncheckedCreateInput>
  }


  /**
   * Subjects createMany
   */
  export type SubjectsCreateManyArgs = {
    data: Enumerable<SubjectsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Subjects update
   */
  export type SubjectsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Subjects
     * 
    **/
    select?: SubjectsSelect | null
    /**
     * The data needed to update a Subjects.
     * 
    **/
    data: XOR<SubjectsUpdateInput, SubjectsUncheckedUpdateInput>
    /**
     * Choose, which Subjects to update.
     * 
    **/
    where: SubjectsWhereUniqueInput
  }


  /**
   * Subjects updateMany
   */
  export type SubjectsUpdateManyArgs = {
    data: XOR<SubjectsUpdateManyMutationInput, SubjectsUncheckedUpdateManyInput>
    where?: SubjectsWhereInput
  }


  /**
   * Subjects upsert
   */
  export type SubjectsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Subjects
     * 
    **/
    select?: SubjectsSelect | null
    /**
     * The filter to search for the Subjects to update in case it exists.
     * 
    **/
    where: SubjectsWhereUniqueInput
    /**
     * In case the Subjects found by the `where` argument doesn't exist, create a new Subjects with this data.
     * 
    **/
    create: XOR<SubjectsCreateInput, SubjectsUncheckedCreateInput>
    /**
     * In case the Subjects was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SubjectsUpdateInput, SubjectsUncheckedUpdateInput>
  }


  /**
   * Subjects delete
   */
  export type SubjectsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Subjects
     * 
    **/
    select?: SubjectsSelect | null
    /**
     * Filter which Subjects to delete.
     * 
    **/
    where: SubjectsWhereUniqueInput
  }


  /**
   * Subjects deleteMany
   */
  export type SubjectsDeleteManyArgs = {
    where?: SubjectsWhereInput
  }


  /**
   * Subjects without action
   */
  export type SubjectsArgs = {
    /**
     * Select specific fields to fetch from the Subjects
     * 
    **/
    select?: SubjectsSelect | null
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
    teacher_school_id: string | null
    teacher_name: string | null
    teacher_nickname: string | null
    teacher_email: string | null
    teacher_celphone: string | null
    teacher_created_at: Date | null
    teacher_updated_at: Date | null
    teacher_situation: string | null
  }

  export type TeachersMaxAggregateOutputType = {
    teacher_id: string | null
    teacher_school_id: string | null
    teacher_name: string | null
    teacher_nickname: string | null
    teacher_email: string | null
    teacher_celphone: string | null
    teacher_created_at: Date | null
    teacher_updated_at: Date | null
    teacher_situation: string | null
  }

  export type TeachersCountAggregateOutputType = {
    teacher_id: number
    teacher_school_id: number
    teacher_name: number
    teacher_nickname: number
    teacher_email: number
    teacher_celphone: number
    teacher_disciplines_ids: number
    teacher_shifts_ids: number
    teacher_restrictions: number
    teacher_created_at: number
    teacher_updated_at: number
    teacher_situation: number
    _all: number
  }


  export type TeachersMinAggregateInputType = {
    teacher_id?: true
    teacher_school_id?: true
    teacher_name?: true
    teacher_nickname?: true
    teacher_email?: true
    teacher_celphone?: true
    teacher_created_at?: true
    teacher_updated_at?: true
    teacher_situation?: true
  }

  export type TeachersMaxAggregateInputType = {
    teacher_id?: true
    teacher_school_id?: true
    teacher_name?: true
    teacher_nickname?: true
    teacher_email?: true
    teacher_celphone?: true
    teacher_created_at?: true
    teacher_updated_at?: true
    teacher_situation?: true
  }

  export type TeachersCountAggregateInputType = {
    teacher_id?: true
    teacher_school_id?: true
    teacher_name?: true
    teacher_nickname?: true
    teacher_email?: true
    teacher_celphone?: true
    teacher_disciplines_ids?: true
    teacher_shifts_ids?: true
    teacher_restrictions?: true
    teacher_created_at?: true
    teacher_updated_at?: true
    teacher_situation?: true
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
    teacher_school_id: string
    teacher_name: string
    teacher_nickname: string
    teacher_email: string
    teacher_celphone: string
    teacher_disciplines_ids: JsonValue
    teacher_shifts_ids: JsonValue
    teacher_restrictions: JsonValue
    teacher_created_at: Date
    teacher_updated_at: Date
    teacher_situation: string
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
    school?: boolean | SchoolsArgs
    teacher_school_id?: boolean
    teacher_name?: boolean
    teacher_nickname?: boolean
    teacher_email?: boolean
    teacher_celphone?: boolean
    teacher_disciplines_ids?: boolean
    teacher_shifts_ids?: boolean
    teacher_restrictions?: boolean
    teacher_created_at?: boolean
    teacher_updated_at?: boolean
    teacher_situation?: boolean
  }

  export type TeachersInclude = {
    school?: boolean | SchoolsArgs
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
    ? Teachers  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'school'
        ? SchoolsGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Teachers ?Teachers [P]
  : 
          P extends 'school'
        ? SchoolsGetPayload<S['select'][P]> : never
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

    school<T extends SchoolsArgs = {}>(args?: Subset<T, SchoolsArgs>): CheckSelect<T, Prisma__SchoolsClient<Schools | null >, Prisma__SchoolsClient<SchoolsGetPayload<T> | null >>;

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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeachersInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeachersInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeachersInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeachersInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeachersInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeachersInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeachersInclude | null
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
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeachersInclude | null
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
    class_education_id: string | null
    class_situation: string | null
  }

  export type ClassesMaxAggregateOutputType = {
    class_id: string | null
    class_name: string | null
    class_education_id: string | null
    class_situation: string | null
  }

  export type ClassesCountAggregateOutputType = {
    class_id: number
    class_name: number
    class_teachers_ids: number
    class_education_id: number
    class_situation: number
    _all: number
  }


  export type ClassesMinAggregateInputType = {
    class_id?: true
    class_name?: true
    class_education_id?: true
    class_situation?: true
  }

  export type ClassesMaxAggregateInputType = {
    class_id?: true
    class_name?: true
    class_education_id?: true
    class_situation?: true
  }

  export type ClassesCountAggregateInputType = {
    class_id?: true
    class_name?: true
    class_teachers_ids?: true
    class_education_id?: true
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
    class_teachers_ids: JsonValue
    class_education_id: string
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
    class_teachers_ids?: boolean
    education?: boolean | EducationsArgs
    class_education_id?: boolean
    class_situation?: boolean
  }

  export type ClassesInclude = {
    education?: boolean | EducationsArgs
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
    ? Classes  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'education'
        ? EducationsGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Classes ?Classes [P]
  : 
          P extends 'education'
        ? EducationsGetPayload<S['select'][P]> : never
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

    education<T extends EducationsArgs = {}>(args?: Subset<T, EducationsArgs>): CheckSelect<T, Prisma__EducationsClient<Educations | null >, Prisma__EducationsClient<EducationsGetPayload<T> | null >>;

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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassesInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassesInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassesInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassesInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassesInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassesInclude | null
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
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassesInclude | null
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
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassesInclude | null
  }



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
    user_situation: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    user_name: string | null
    user_email: string | null
    user_salt: string | null
    user_password: string | null
    user_created_at: Date | null
    user_updated_at: Date | null
    user_situation: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    user_name: number
    user_email: number
    user_salt: number
    user_password: number
    user_created_at: number
    user_updated_at: number
    user_situation: number
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
    user_situation?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    user_name?: true
    user_email?: true
    user_salt?: true
    user_password?: true
    user_created_at?: true
    user_updated_at?: true
    user_situation?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    user_name?: true
    user_email?: true
    user_salt?: true
    user_password?: true
    user_created_at?: true
    user_updated_at?: true
    user_situation?: true
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
    user_situation: string
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
    user_situation?: boolean
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

  export const SchoolsScalarFieldEnum: {
    school_id: 'school_id',
    school_name: 'school_name',
    school_category: 'school_category',
    school_cnpj: 'school_cnpj',
    school_address: 'school_address',
    school_number: 'school_number',
    school_neighborhood: 'school_neighborhood',
    school_city: 'school_city',
    school_state: 'school_state',
    school_cep: 'school_cep',
    school_phone: 'school_phone',
    school_email: 'school_email',
    school_created_at: 'school_created_at',
    school_updated_at: 'school_updated_at',
    school_situation: 'school_situation'
  };

  export type SchoolsScalarFieldEnum = (typeof SchoolsScalarFieldEnum)[keyof typeof SchoolsScalarFieldEnum]


  export const ShiftsScalarFieldEnum: {
    shift_id: 'shift_id',
    shift_name: 'shift_name',
    shift_day_of_week: 'shift_day_of_week',
    shift_number_class_per_day: 'shift_number_class_per_day',
    shift_day_of_week_class: 'shift_day_of_week_class',
    shift_created_at: 'shift_created_at',
    shift_updated_at: 'shift_updated_at',
    shitf_situation: 'shitf_situation'
  };

  export type ShiftsScalarFieldEnum = (typeof ShiftsScalarFieldEnum)[keyof typeof ShiftsScalarFieldEnum]


  export const SchedulesScalarFieldEnum: {
    schedule_id: 'schedule_id',
    schedule_name: 'schedule_name',
    schedule_start: 'schedule_start',
    schedule_end: 'schedule_end',
    schedule_shift_id: 'schedule_shift_id',
    schedule_situation: 'schedule_situation'
  };

  export type SchedulesScalarFieldEnum = (typeof SchedulesScalarFieldEnum)[keyof typeof SchedulesScalarFieldEnum]


  export const EducationsScalarFieldEnum: {
    education_id: 'education_id',
    education_name: 'education_name',
    education_nickname: 'education_nickname',
    education_created_at: 'education_created_at',
    education_updated_at: 'education_updated_at',
    education_situation: 'education_situation'
  };

  export type EducationsScalarFieldEnum = (typeof EducationsScalarFieldEnum)[keyof typeof EducationsScalarFieldEnum]


  export const SubjectsScalarFieldEnum: {
    subject_id: 'subject_id',
    subject_name: 'subject_name',
    subject_nickname: 'subject_nickname',
    subject_educations: 'subject_educations',
    subject_created_at: 'subject_created_at',
    subject_updated_at: 'subject_updated_at',
    subject_situation: 'subject_situation'
  };

  export type SubjectsScalarFieldEnum = (typeof SubjectsScalarFieldEnum)[keyof typeof SubjectsScalarFieldEnum]


  export const TeachersScalarFieldEnum: {
    teacher_id: 'teacher_id',
    teacher_school_id: 'teacher_school_id',
    teacher_name: 'teacher_name',
    teacher_nickname: 'teacher_nickname',
    teacher_email: 'teacher_email',
    teacher_celphone: 'teacher_celphone',
    teacher_disciplines_ids: 'teacher_disciplines_ids',
    teacher_shifts_ids: 'teacher_shifts_ids',
    teacher_restrictions: 'teacher_restrictions',
    teacher_created_at: 'teacher_created_at',
    teacher_updated_at: 'teacher_updated_at',
    teacher_situation: 'teacher_situation'
  };

  export type TeachersScalarFieldEnum = (typeof TeachersScalarFieldEnum)[keyof typeof TeachersScalarFieldEnum]


  export const ClassesScalarFieldEnum: {
    class_id: 'class_id',
    class_name: 'class_name',
    class_teachers_ids: 'class_teachers_ids',
    class_education_id: 'class_education_id',
    class_situation: 'class_situation'
  };

  export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    user_name: 'user_name',
    user_email: 'user_email',
    user_salt: 'user_salt',
    user_password: 'user_password',
    user_created_at: 'user_created_at',
    user_updated_at: 'user_updated_at',
    user_situation: 'user_situation'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  export type SchoolsWhereInput = {
    AND?: Enumerable<SchoolsWhereInput>
    OR?: Enumerable<SchoolsWhereInput>
    NOT?: Enumerable<SchoolsWhereInput>
    school_id?: StringFilter | string
    school_name?: StringFilter | string
    school_category?: EnumCategoryFilter | Category
    school_cnpj?: StringFilter | string
    school_address?: StringFilter | string
    school_number?: StringFilter | string
    school_neighborhood?: StringFilter | string
    school_city?: StringFilter | string
    school_state?: StringFilter | string
    school_cep?: StringFilter | string
    school_phone?: StringFilter | string
    school_email?: StringFilter | string
    school_created_at?: DateTimeFilter | Date | string
    school_updated_at?: DateTimeFilter | Date | string
    school_situation?: StringFilter | string
    Teachers?: TeachersListRelationFilter
  }

  export type SchoolsOrderByWithRelationInput = {
    school_id?: SortOrder
    school_name?: SortOrder
    school_category?: SortOrder
    school_cnpj?: SortOrder
    school_address?: SortOrder
    school_number?: SortOrder
    school_neighborhood?: SortOrder
    school_city?: SortOrder
    school_state?: SortOrder
    school_cep?: SortOrder
    school_phone?: SortOrder
    school_email?: SortOrder
    school_created_at?: SortOrder
    school_updated_at?: SortOrder
    school_situation?: SortOrder
    Teachers?: TeachersOrderByRelationAggregateInput
  }

  export type SchoolsWhereUniqueInput = {
    school_id?: string
  }

  export type SchoolsOrderByWithAggregationInput = {
    school_id?: SortOrder
    school_name?: SortOrder
    school_category?: SortOrder
    school_cnpj?: SortOrder
    school_address?: SortOrder
    school_number?: SortOrder
    school_neighborhood?: SortOrder
    school_city?: SortOrder
    school_state?: SortOrder
    school_cep?: SortOrder
    school_phone?: SortOrder
    school_email?: SortOrder
    school_created_at?: SortOrder
    school_updated_at?: SortOrder
    school_situation?: SortOrder
    _count?: SchoolsCountOrderByAggregateInput
    _max?: SchoolsMaxOrderByAggregateInput
    _min?: SchoolsMinOrderByAggregateInput
  }

  export type SchoolsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SchoolsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SchoolsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SchoolsScalarWhereWithAggregatesInput>
    school_id?: StringWithAggregatesFilter | string
    school_name?: StringWithAggregatesFilter | string
    school_category?: EnumCategoryWithAggregatesFilter | Category
    school_cnpj?: StringWithAggregatesFilter | string
    school_address?: StringWithAggregatesFilter | string
    school_number?: StringWithAggregatesFilter | string
    school_neighborhood?: StringWithAggregatesFilter | string
    school_city?: StringWithAggregatesFilter | string
    school_state?: StringWithAggregatesFilter | string
    school_cep?: StringWithAggregatesFilter | string
    school_phone?: StringWithAggregatesFilter | string
    school_email?: StringWithAggregatesFilter | string
    school_created_at?: DateTimeWithAggregatesFilter | Date | string
    school_updated_at?: DateTimeWithAggregatesFilter | Date | string
    school_situation?: StringWithAggregatesFilter | string
  }

  export type ShiftsWhereInput = {
    AND?: Enumerable<ShiftsWhereInput>
    OR?: Enumerable<ShiftsWhereInput>
    NOT?: Enumerable<ShiftsWhereInput>
    shift_id?: StringFilter | string
    shift_name?: EnumShiftNamesFilter | ShiftNames
    shift_day_of_week?: EnumDayOfTheWeekFilter | DayOfTheWeek
    shift_number_class_per_day?: IntFilter | number
    shift_day_of_week_class?: BoolFilter | boolean
    shift_created_at?: DateTimeFilter | Date | string
    shift_updated_at?: DateTimeFilter | Date | string
    shitf_situation?: StringFilter | string
    Schedules?: SchedulesListRelationFilter
  }

  export type ShiftsOrderByWithRelationInput = {
    shift_id?: SortOrder
    shift_name?: SortOrder
    shift_day_of_week?: SortOrder
    shift_number_class_per_day?: SortOrder
    shift_day_of_week_class?: SortOrder
    shift_created_at?: SortOrder
    shift_updated_at?: SortOrder
    shitf_situation?: SortOrder
    Schedules?: SchedulesOrderByRelationAggregateInput
  }

  export type ShiftsWhereUniqueInput = {
    shift_id?: string
  }

  export type ShiftsOrderByWithAggregationInput = {
    shift_id?: SortOrder
    shift_name?: SortOrder
    shift_day_of_week?: SortOrder
    shift_number_class_per_day?: SortOrder
    shift_day_of_week_class?: SortOrder
    shift_created_at?: SortOrder
    shift_updated_at?: SortOrder
    shitf_situation?: SortOrder
    _count?: ShiftsCountOrderByAggregateInput
    _avg?: ShiftsAvgOrderByAggregateInput
    _max?: ShiftsMaxOrderByAggregateInput
    _min?: ShiftsMinOrderByAggregateInput
    _sum?: ShiftsSumOrderByAggregateInput
  }

  export type ShiftsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShiftsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShiftsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShiftsScalarWhereWithAggregatesInput>
    shift_id?: StringWithAggregatesFilter | string
    shift_name?: EnumShiftNamesWithAggregatesFilter | ShiftNames
    shift_day_of_week?: EnumDayOfTheWeekWithAggregatesFilter | DayOfTheWeek
    shift_number_class_per_day?: IntWithAggregatesFilter | number
    shift_day_of_week_class?: BoolWithAggregatesFilter | boolean
    shift_created_at?: DateTimeWithAggregatesFilter | Date | string
    shift_updated_at?: DateTimeWithAggregatesFilter | Date | string
    shitf_situation?: StringWithAggregatesFilter | string
  }

  export type SchedulesWhereInput = {
    AND?: Enumerable<SchedulesWhereInput>
    OR?: Enumerable<SchedulesWhereInput>
    NOT?: Enumerable<SchedulesWhereInput>
    schedule_id?: StringFilter | string
    schedule_name?: StringFilter | string
    schedule_start?: DateTimeFilter | Date | string
    schedule_end?: DateTimeFilter | Date | string
    shift?: XOR<ShiftsRelationFilter, ShiftsWhereInput>
    schedule_shift_id?: StringFilter | string
    schedule_situation?: StringFilter | string
  }

  export type SchedulesOrderByWithRelationInput = {
    schedule_id?: SortOrder
    schedule_name?: SortOrder
    schedule_start?: SortOrder
    schedule_end?: SortOrder
    shift?: ShiftsOrderByWithRelationInput
    schedule_shift_id?: SortOrder
    schedule_situation?: SortOrder
  }

  export type SchedulesWhereUniqueInput = {
    schedule_id?: string
  }

  export type SchedulesOrderByWithAggregationInput = {
    schedule_id?: SortOrder
    schedule_name?: SortOrder
    schedule_start?: SortOrder
    schedule_end?: SortOrder
    schedule_shift_id?: SortOrder
    schedule_situation?: SortOrder
    _count?: SchedulesCountOrderByAggregateInput
    _max?: SchedulesMaxOrderByAggregateInput
    _min?: SchedulesMinOrderByAggregateInput
  }

  export type SchedulesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SchedulesScalarWhereWithAggregatesInput>
    OR?: Enumerable<SchedulesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SchedulesScalarWhereWithAggregatesInput>
    schedule_id?: StringWithAggregatesFilter | string
    schedule_name?: StringWithAggregatesFilter | string
    schedule_start?: DateTimeWithAggregatesFilter | Date | string
    schedule_end?: DateTimeWithAggregatesFilter | Date | string
    schedule_shift_id?: StringWithAggregatesFilter | string
    schedule_situation?: StringWithAggregatesFilter | string
  }

  export type EducationsWhereInput = {
    AND?: Enumerable<EducationsWhereInput>
    OR?: Enumerable<EducationsWhereInput>
    NOT?: Enumerable<EducationsWhereInput>
    education_id?: StringFilter | string
    education_name?: StringFilter | string
    education_nickname?: StringFilter | string
    education_created_at?: DateTimeFilter | Date | string
    education_updated_at?: DateTimeFilter | Date | string
    education_situation?: StringFilter | string
    Classes?: ClassesListRelationFilter
  }

  export type EducationsOrderByWithRelationInput = {
    education_id?: SortOrder
    education_name?: SortOrder
    education_nickname?: SortOrder
    education_created_at?: SortOrder
    education_updated_at?: SortOrder
    education_situation?: SortOrder
    Classes?: ClassesOrderByRelationAggregateInput
  }

  export type EducationsWhereUniqueInput = {
    education_id?: string
  }

  export type EducationsOrderByWithAggregationInput = {
    education_id?: SortOrder
    education_name?: SortOrder
    education_nickname?: SortOrder
    education_created_at?: SortOrder
    education_updated_at?: SortOrder
    education_situation?: SortOrder
    _count?: EducationsCountOrderByAggregateInput
    _max?: EducationsMaxOrderByAggregateInput
    _min?: EducationsMinOrderByAggregateInput
  }

  export type EducationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EducationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<EducationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EducationsScalarWhereWithAggregatesInput>
    education_id?: StringWithAggregatesFilter | string
    education_name?: StringWithAggregatesFilter | string
    education_nickname?: StringWithAggregatesFilter | string
    education_created_at?: DateTimeWithAggregatesFilter | Date | string
    education_updated_at?: DateTimeWithAggregatesFilter | Date | string
    education_situation?: StringWithAggregatesFilter | string
  }

  export type SubjectsWhereInput = {
    AND?: Enumerable<SubjectsWhereInput>
    OR?: Enumerable<SubjectsWhereInput>
    NOT?: Enumerable<SubjectsWhereInput>
    subject_id?: StringFilter | string
    subject_name?: StringFilter | string
    subject_nickname?: StringFilter | string
    subject_educations?: JsonFilter
    subject_created_at?: DateTimeFilter | Date | string
    subject_updated_at?: DateTimeFilter | Date | string
    subject_situation?: StringFilter | string
  }

  export type SubjectsOrderByWithRelationInput = {
    subject_id?: SortOrder
    subject_name?: SortOrder
    subject_nickname?: SortOrder
    subject_educations?: SortOrder
    subject_created_at?: SortOrder
    subject_updated_at?: SortOrder
    subject_situation?: SortOrder
  }

  export type SubjectsWhereUniqueInput = {
    subject_id?: string
  }

  export type SubjectsOrderByWithAggregationInput = {
    subject_id?: SortOrder
    subject_name?: SortOrder
    subject_nickname?: SortOrder
    subject_educations?: SortOrder
    subject_created_at?: SortOrder
    subject_updated_at?: SortOrder
    subject_situation?: SortOrder
    _count?: SubjectsCountOrderByAggregateInput
    _max?: SubjectsMaxOrderByAggregateInput
    _min?: SubjectsMinOrderByAggregateInput
  }

  export type SubjectsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SubjectsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SubjectsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SubjectsScalarWhereWithAggregatesInput>
    subject_id?: StringWithAggregatesFilter | string
    subject_name?: StringWithAggregatesFilter | string
    subject_nickname?: StringWithAggregatesFilter | string
    subject_educations?: JsonWithAggregatesFilter
    subject_created_at?: DateTimeWithAggregatesFilter | Date | string
    subject_updated_at?: DateTimeWithAggregatesFilter | Date | string
    subject_situation?: StringWithAggregatesFilter | string
  }

  export type TeachersWhereInput = {
    AND?: Enumerable<TeachersWhereInput>
    OR?: Enumerable<TeachersWhereInput>
    NOT?: Enumerable<TeachersWhereInput>
    teacher_id?: StringFilter | string
    school?: XOR<SchoolsRelationFilter, SchoolsWhereInput>
    teacher_school_id?: StringFilter | string
    teacher_name?: StringFilter | string
    teacher_nickname?: StringFilter | string
    teacher_email?: StringFilter | string
    teacher_celphone?: StringFilter | string
    teacher_disciplines_ids?: JsonFilter
    teacher_shifts_ids?: JsonFilter
    teacher_restrictions?: JsonFilter
    teacher_created_at?: DateTimeFilter | Date | string
    teacher_updated_at?: DateTimeFilter | Date | string
    teacher_situation?: StringFilter | string
  }

  export type TeachersOrderByWithRelationInput = {
    teacher_id?: SortOrder
    school?: SchoolsOrderByWithRelationInput
    teacher_school_id?: SortOrder
    teacher_name?: SortOrder
    teacher_nickname?: SortOrder
    teacher_email?: SortOrder
    teacher_celphone?: SortOrder
    teacher_disciplines_ids?: SortOrder
    teacher_shifts_ids?: SortOrder
    teacher_restrictions?: SortOrder
    teacher_created_at?: SortOrder
    teacher_updated_at?: SortOrder
    teacher_situation?: SortOrder
  }

  export type TeachersWhereUniqueInput = {
    teacher_id?: string
    teacher_email?: string
  }

  export type TeachersOrderByWithAggregationInput = {
    teacher_id?: SortOrder
    teacher_school_id?: SortOrder
    teacher_name?: SortOrder
    teacher_nickname?: SortOrder
    teacher_email?: SortOrder
    teacher_celphone?: SortOrder
    teacher_disciplines_ids?: SortOrder
    teacher_shifts_ids?: SortOrder
    teacher_restrictions?: SortOrder
    teacher_created_at?: SortOrder
    teacher_updated_at?: SortOrder
    teacher_situation?: SortOrder
    _count?: TeachersCountOrderByAggregateInput
    _max?: TeachersMaxOrderByAggregateInput
    _min?: TeachersMinOrderByAggregateInput
  }

  export type TeachersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TeachersScalarWhereWithAggregatesInput>
    OR?: Enumerable<TeachersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TeachersScalarWhereWithAggregatesInput>
    teacher_id?: StringWithAggregatesFilter | string
    teacher_school_id?: StringWithAggregatesFilter | string
    teacher_name?: StringWithAggregatesFilter | string
    teacher_nickname?: StringWithAggregatesFilter | string
    teacher_email?: StringWithAggregatesFilter | string
    teacher_celphone?: StringWithAggregatesFilter | string
    teacher_disciplines_ids?: JsonWithAggregatesFilter
    teacher_shifts_ids?: JsonWithAggregatesFilter
    teacher_restrictions?: JsonWithAggregatesFilter
    teacher_created_at?: DateTimeWithAggregatesFilter | Date | string
    teacher_updated_at?: DateTimeWithAggregatesFilter | Date | string
    teacher_situation?: StringWithAggregatesFilter | string
  }

  export type ClassesWhereInput = {
    AND?: Enumerable<ClassesWhereInput>
    OR?: Enumerable<ClassesWhereInput>
    NOT?: Enumerable<ClassesWhereInput>
    class_id?: StringFilter | string
    class_name?: StringFilter | string
    class_teachers_ids?: JsonFilter
    education?: XOR<EducationsRelationFilter, EducationsWhereInput>
    class_education_id?: StringFilter | string
    class_situation?: StringFilter | string
  }

  export type ClassesOrderByWithRelationInput = {
    class_id?: SortOrder
    class_name?: SortOrder
    class_teachers_ids?: SortOrder
    education?: EducationsOrderByWithRelationInput
    class_education_id?: SortOrder
    class_situation?: SortOrder
  }

  export type ClassesWhereUniqueInput = {
    class_id?: string
  }

  export type ClassesOrderByWithAggregationInput = {
    class_id?: SortOrder
    class_name?: SortOrder
    class_teachers_ids?: SortOrder
    class_education_id?: SortOrder
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
    class_teachers_ids?: JsonWithAggregatesFilter
    class_education_id?: StringWithAggregatesFilter | string
    class_situation?: StringWithAggregatesFilter | string
  }

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
    user_situation?: StringFilter | string
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_salt?: SortOrder
    user_password?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    user_situation?: SortOrder
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
    user_situation?: SortOrder
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
    user_situation?: StringWithAggregatesFilter | string
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

  export type SchoolsCreateInput = {
    school_id?: string
    school_name: string
    school_category?: Category
    school_cnpj: string
    school_address: string
    school_number: string
    school_neighborhood: string
    school_city: string
    school_state: string
    school_cep: string
    school_phone: string
    school_email: string
    school_created_at?: Date | string
    school_updated_at: Date | string
    school_situation?: string
    Teachers?: TeachersCreateNestedManyWithoutSchoolInput
  }

  export type SchoolsUncheckedCreateInput = {
    school_id?: string
    school_name: string
    school_category?: Category
    school_cnpj: string
    school_address: string
    school_number: string
    school_neighborhood: string
    school_city: string
    school_state: string
    school_cep: string
    school_phone: string
    school_email: string
    school_created_at?: Date | string
    school_updated_at: Date | string
    school_situation?: string
    Teachers?: TeachersUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolsUpdateInput = {
    school_id?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    school_category?: EnumCategoryFieldUpdateOperationsInput | Category
    school_cnpj?: StringFieldUpdateOperationsInput | string
    school_address?: StringFieldUpdateOperationsInput | string
    school_number?: StringFieldUpdateOperationsInput | string
    school_neighborhood?: StringFieldUpdateOperationsInput | string
    school_city?: StringFieldUpdateOperationsInput | string
    school_state?: StringFieldUpdateOperationsInput | string
    school_cep?: StringFieldUpdateOperationsInput | string
    school_phone?: StringFieldUpdateOperationsInput | string
    school_email?: StringFieldUpdateOperationsInput | string
    school_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_situation?: StringFieldUpdateOperationsInput | string
    Teachers?: TeachersUpdateManyWithoutSchoolInput
  }

  export type SchoolsUncheckedUpdateInput = {
    school_id?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    school_category?: EnumCategoryFieldUpdateOperationsInput | Category
    school_cnpj?: StringFieldUpdateOperationsInput | string
    school_address?: StringFieldUpdateOperationsInput | string
    school_number?: StringFieldUpdateOperationsInput | string
    school_neighborhood?: StringFieldUpdateOperationsInput | string
    school_city?: StringFieldUpdateOperationsInput | string
    school_state?: StringFieldUpdateOperationsInput | string
    school_cep?: StringFieldUpdateOperationsInput | string
    school_phone?: StringFieldUpdateOperationsInput | string
    school_email?: StringFieldUpdateOperationsInput | string
    school_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_situation?: StringFieldUpdateOperationsInput | string
    Teachers?: TeachersUncheckedUpdateManyWithoutSchoolInput
  }

  export type SchoolsCreateManyInput = {
    school_id?: string
    school_name: string
    school_category?: Category
    school_cnpj: string
    school_address: string
    school_number: string
    school_neighborhood: string
    school_city: string
    school_state: string
    school_cep: string
    school_phone: string
    school_email: string
    school_created_at?: Date | string
    school_updated_at: Date | string
    school_situation?: string
  }

  export type SchoolsUpdateManyMutationInput = {
    school_id?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    school_category?: EnumCategoryFieldUpdateOperationsInput | Category
    school_cnpj?: StringFieldUpdateOperationsInput | string
    school_address?: StringFieldUpdateOperationsInput | string
    school_number?: StringFieldUpdateOperationsInput | string
    school_neighborhood?: StringFieldUpdateOperationsInput | string
    school_city?: StringFieldUpdateOperationsInput | string
    school_state?: StringFieldUpdateOperationsInput | string
    school_cep?: StringFieldUpdateOperationsInput | string
    school_phone?: StringFieldUpdateOperationsInput | string
    school_email?: StringFieldUpdateOperationsInput | string
    school_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolsUncheckedUpdateManyInput = {
    school_id?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    school_category?: EnumCategoryFieldUpdateOperationsInput | Category
    school_cnpj?: StringFieldUpdateOperationsInput | string
    school_address?: StringFieldUpdateOperationsInput | string
    school_number?: StringFieldUpdateOperationsInput | string
    school_neighborhood?: StringFieldUpdateOperationsInput | string
    school_city?: StringFieldUpdateOperationsInput | string
    school_state?: StringFieldUpdateOperationsInput | string
    school_cep?: StringFieldUpdateOperationsInput | string
    school_phone?: StringFieldUpdateOperationsInput | string
    school_email?: StringFieldUpdateOperationsInput | string
    school_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftsCreateInput = {
    shift_id?: string
    shift_name?: ShiftNames
    shift_day_of_week?: DayOfTheWeek
    shift_number_class_per_day?: number
    shift_day_of_week_class?: boolean
    shift_created_at?: Date | string
    shift_updated_at: Date | string
    shitf_situation?: string
    Schedules?: SchedulesCreateNestedManyWithoutShiftInput
  }

  export type ShiftsUncheckedCreateInput = {
    shift_id?: string
    shift_name?: ShiftNames
    shift_day_of_week?: DayOfTheWeek
    shift_number_class_per_day?: number
    shift_day_of_week_class?: boolean
    shift_created_at?: Date | string
    shift_updated_at: Date | string
    shitf_situation?: string
    Schedules?: SchedulesUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftsUpdateInput = {
    shift_id?: StringFieldUpdateOperationsInput | string
    shift_name?: EnumShiftNamesFieldUpdateOperationsInput | ShiftNames
    shift_day_of_week?: EnumDayOfTheWeekFieldUpdateOperationsInput | DayOfTheWeek
    shift_number_class_per_day?: IntFieldUpdateOperationsInput | number
    shift_day_of_week_class?: BoolFieldUpdateOperationsInput | boolean
    shift_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shift_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shitf_situation?: StringFieldUpdateOperationsInput | string
    Schedules?: SchedulesUpdateManyWithoutShiftInput
  }

  export type ShiftsUncheckedUpdateInput = {
    shift_id?: StringFieldUpdateOperationsInput | string
    shift_name?: EnumShiftNamesFieldUpdateOperationsInput | ShiftNames
    shift_day_of_week?: EnumDayOfTheWeekFieldUpdateOperationsInput | DayOfTheWeek
    shift_number_class_per_day?: IntFieldUpdateOperationsInput | number
    shift_day_of_week_class?: BoolFieldUpdateOperationsInput | boolean
    shift_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shift_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shitf_situation?: StringFieldUpdateOperationsInput | string
    Schedules?: SchedulesUncheckedUpdateManyWithoutShiftInput
  }

  export type ShiftsCreateManyInput = {
    shift_id?: string
    shift_name?: ShiftNames
    shift_day_of_week?: DayOfTheWeek
    shift_number_class_per_day?: number
    shift_day_of_week_class?: boolean
    shift_created_at?: Date | string
    shift_updated_at: Date | string
    shitf_situation?: string
  }

  export type ShiftsUpdateManyMutationInput = {
    shift_id?: StringFieldUpdateOperationsInput | string
    shift_name?: EnumShiftNamesFieldUpdateOperationsInput | ShiftNames
    shift_day_of_week?: EnumDayOfTheWeekFieldUpdateOperationsInput | DayOfTheWeek
    shift_number_class_per_day?: IntFieldUpdateOperationsInput | number
    shift_day_of_week_class?: BoolFieldUpdateOperationsInput | boolean
    shift_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shift_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shitf_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftsUncheckedUpdateManyInput = {
    shift_id?: StringFieldUpdateOperationsInput | string
    shift_name?: EnumShiftNamesFieldUpdateOperationsInput | ShiftNames
    shift_day_of_week?: EnumDayOfTheWeekFieldUpdateOperationsInput | DayOfTheWeek
    shift_number_class_per_day?: IntFieldUpdateOperationsInput | number
    shift_day_of_week_class?: BoolFieldUpdateOperationsInput | boolean
    shift_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shift_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shitf_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulesCreateInput = {
    schedule_id?: string
    schedule_name: string
    schedule_start: Date | string
    schedule_end: Date | string
    schedule_situation?: string
    shift: ShiftsCreateNestedOneWithoutSchedulesInput
  }

  export type SchedulesUncheckedCreateInput = {
    schedule_id?: string
    schedule_name: string
    schedule_start: Date | string
    schedule_end: Date | string
    schedule_shift_id: string
    schedule_situation?: string
  }

  export type SchedulesUpdateInput = {
    schedule_id?: StringFieldUpdateOperationsInput | string
    schedule_name?: StringFieldUpdateOperationsInput | string
    schedule_start?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_end?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_situation?: StringFieldUpdateOperationsInput | string
    shift?: ShiftsUpdateOneRequiredWithoutSchedulesInput
  }

  export type SchedulesUncheckedUpdateInput = {
    schedule_id?: StringFieldUpdateOperationsInput | string
    schedule_name?: StringFieldUpdateOperationsInput | string
    schedule_start?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_end?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_shift_id?: StringFieldUpdateOperationsInput | string
    schedule_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulesCreateManyInput = {
    schedule_id?: string
    schedule_name: string
    schedule_start: Date | string
    schedule_end: Date | string
    schedule_shift_id: string
    schedule_situation?: string
  }

  export type SchedulesUpdateManyMutationInput = {
    schedule_id?: StringFieldUpdateOperationsInput | string
    schedule_name?: StringFieldUpdateOperationsInput | string
    schedule_start?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_end?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulesUncheckedUpdateManyInput = {
    schedule_id?: StringFieldUpdateOperationsInput | string
    schedule_name?: StringFieldUpdateOperationsInput | string
    schedule_start?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_end?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_shift_id?: StringFieldUpdateOperationsInput | string
    schedule_situation?: StringFieldUpdateOperationsInput | string
  }

  export type EducationsCreateInput = {
    education_id?: string
    education_name: string
    education_nickname: string
    education_created_at?: Date | string
    education_updated_at: Date | string
    education_situation?: string
    Classes?: ClassesCreateNestedManyWithoutEducationInput
  }

  export type EducationsUncheckedCreateInput = {
    education_id?: string
    education_name: string
    education_nickname: string
    education_created_at?: Date | string
    education_updated_at: Date | string
    education_situation?: string
    Classes?: ClassesUncheckedCreateNestedManyWithoutEducationInput
  }

  export type EducationsUpdateInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    education_name?: StringFieldUpdateOperationsInput | string
    education_nickname?: StringFieldUpdateOperationsInput | string
    education_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_situation?: StringFieldUpdateOperationsInput | string
    Classes?: ClassesUpdateManyWithoutEducationInput
  }

  export type EducationsUncheckedUpdateInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    education_name?: StringFieldUpdateOperationsInput | string
    education_nickname?: StringFieldUpdateOperationsInput | string
    education_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_situation?: StringFieldUpdateOperationsInput | string
    Classes?: ClassesUncheckedUpdateManyWithoutEducationInput
  }

  export type EducationsCreateManyInput = {
    education_id?: string
    education_name: string
    education_nickname: string
    education_created_at?: Date | string
    education_updated_at: Date | string
    education_situation?: string
  }

  export type EducationsUpdateManyMutationInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    education_name?: StringFieldUpdateOperationsInput | string
    education_nickname?: StringFieldUpdateOperationsInput | string
    education_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_situation?: StringFieldUpdateOperationsInput | string
  }

  export type EducationsUncheckedUpdateManyInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    education_name?: StringFieldUpdateOperationsInput | string
    education_nickname?: StringFieldUpdateOperationsInput | string
    education_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectsCreateInput = {
    subject_id?: string
    subject_name: string
    subject_nickname: string
    subject_educations: JsonNullValueInput | InputJsonValue
    subject_created_at?: Date | string
    subject_updated_at: Date | string
    subject_situation?: string
  }

  export type SubjectsUncheckedCreateInput = {
    subject_id?: string
    subject_name: string
    subject_nickname: string
    subject_educations: JsonNullValueInput | InputJsonValue
    subject_created_at?: Date | string
    subject_updated_at: Date | string
    subject_situation?: string
  }

  export type SubjectsUpdateInput = {
    subject_id?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    subject_nickname?: StringFieldUpdateOperationsInput | string
    subject_educations?: JsonNullValueInput | InputJsonValue
    subject_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectsUncheckedUpdateInput = {
    subject_id?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    subject_nickname?: StringFieldUpdateOperationsInput | string
    subject_educations?: JsonNullValueInput | InputJsonValue
    subject_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectsCreateManyInput = {
    subject_id?: string
    subject_name: string
    subject_nickname: string
    subject_educations: JsonNullValueInput | InputJsonValue
    subject_created_at?: Date | string
    subject_updated_at: Date | string
    subject_situation?: string
  }

  export type SubjectsUpdateManyMutationInput = {
    subject_id?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    subject_nickname?: StringFieldUpdateOperationsInput | string
    subject_educations?: JsonNullValueInput | InputJsonValue
    subject_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectsUncheckedUpdateManyInput = {
    subject_id?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    subject_nickname?: StringFieldUpdateOperationsInput | string
    subject_educations?: JsonNullValueInput | InputJsonValue
    subject_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TeachersCreateInput = {
    teacher_id?: string
    teacher_name: string
    teacher_nickname: string
    teacher_email: string
    teacher_celphone: string
    teacher_disciplines_ids: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids: JsonNullValueInput | InputJsonValue
    teacher_restrictions: JsonNullValueInput | InputJsonValue
    teacher_created_at?: Date | string
    teacher_updated_at: Date | string
    teacher_situation?: string
    school: SchoolsCreateNestedOneWithoutTeachersInput
  }

  export type TeachersUncheckedCreateInput = {
    teacher_id?: string
    teacher_school_id: string
    teacher_name: string
    teacher_nickname: string
    teacher_email: string
    teacher_celphone: string
    teacher_disciplines_ids: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids: JsonNullValueInput | InputJsonValue
    teacher_restrictions: JsonNullValueInput | InputJsonValue
    teacher_created_at?: Date | string
    teacher_updated_at: Date | string
    teacher_situation?: string
  }

  export type TeachersUpdateInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_nickname?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_celphone?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids?: JsonNullValueInput | InputJsonValue
    teacher_restrictions?: JsonNullValueInput | InputJsonValue
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_situation?: StringFieldUpdateOperationsInput | string
    school?: SchoolsUpdateOneRequiredWithoutTeachersInput
  }

  export type TeachersUncheckedUpdateInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_school_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_nickname?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_celphone?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids?: JsonNullValueInput | InputJsonValue
    teacher_restrictions?: JsonNullValueInput | InputJsonValue
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TeachersCreateManyInput = {
    teacher_id?: string
    teacher_school_id: string
    teacher_name: string
    teacher_nickname: string
    teacher_email: string
    teacher_celphone: string
    teacher_disciplines_ids: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids: JsonNullValueInput | InputJsonValue
    teacher_restrictions: JsonNullValueInput | InputJsonValue
    teacher_created_at?: Date | string
    teacher_updated_at: Date | string
    teacher_situation?: string
  }

  export type TeachersUpdateManyMutationInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_nickname?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_celphone?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids?: JsonNullValueInput | InputJsonValue
    teacher_restrictions?: JsonNullValueInput | InputJsonValue
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TeachersUncheckedUpdateManyInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_school_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_nickname?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_celphone?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids?: JsonNullValueInput | InputJsonValue
    teacher_restrictions?: JsonNullValueInput | InputJsonValue
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesCreateInput = {
    class_id?: string
    class_name: string
    class_teachers_ids: JsonNullValueInput | InputJsonValue
    class_situation?: string
    education: EducationsCreateNestedOneWithoutClassesInput
  }

  export type ClassesUncheckedCreateInput = {
    class_id?: string
    class_name: string
    class_teachers_ids: JsonNullValueInput | InputJsonValue
    class_education_id: string
    class_situation?: string
  }

  export type ClassesUpdateInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_teachers_ids?: JsonNullValueInput | InputJsonValue
    class_situation?: StringFieldUpdateOperationsInput | string
    education?: EducationsUpdateOneRequiredWithoutClassesInput
  }

  export type ClassesUncheckedUpdateInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_teachers_ids?: JsonNullValueInput | InputJsonValue
    class_education_id?: StringFieldUpdateOperationsInput | string
    class_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesCreateManyInput = {
    class_id?: string
    class_name: string
    class_teachers_ids: JsonNullValueInput | InputJsonValue
    class_education_id: string
    class_situation?: string
  }

  export type ClassesUpdateManyMutationInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_teachers_ids?: JsonNullValueInput | InputJsonValue
    class_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesUncheckedUpdateManyInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_teachers_ids?: JsonNullValueInput | InputJsonValue
    class_education_id?: StringFieldUpdateOperationsInput | string
    class_situation?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    user_id?: string
    user_name: string
    user_email: string
    user_salt: string
    user_password: string
    user_created_at?: Date | string
    user_updated_at: Date | string
    user_situation?: string
  }

  export type UsersUncheckedCreateInput = {
    user_id?: string
    user_name: string
    user_email: string
    user_salt: string
    user_password: string
    user_created_at?: Date | string
    user_updated_at: Date | string
    user_situation?: string
  }

  export type UsersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_salt?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_situation?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_salt?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_situation?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateManyInput = {
    user_id?: string
    user_name: string
    user_email: string
    user_salt: string
    user_password: string
    user_created_at?: Date | string
    user_updated_at: Date | string
    user_situation?: string
  }

  export type UsersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_salt?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_situation?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_salt?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TimesheetsCreateInput = {
    timesheet_id?: string
    timesheet_teacher_id: string
    timesheet_class_id: string
    timesheet_date: Date | string
    timesheet_situation?: string
  }

  export type TimesheetsUncheckedCreateInput = {
    timesheet_id?: string
    timesheet_teacher_id: string
    timesheet_class_id: string
    timesheet_date: Date | string
    timesheet_situation?: string
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
    timesheet_situation?: string
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
    curriculum_situation?: string
  }

  export type CurriculumsUncheckedCreateInput = {
    curriculum_id?: string
    curriculum_name: string
    curriculum_class_id: string
    curriculum_situation?: string
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
    curriculum_situation?: string
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

  export type EnumCategoryFilter = {
    equals?: Category
    in?: Enumerable<Category>
    notIn?: Enumerable<Category>
    not?: NestedEnumCategoryFilter | Category
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

  export type TeachersListRelationFilter = {
    every?: TeachersWhereInput
    some?: TeachersWhereInput
    none?: TeachersWhereInput
  }

  export type TeachersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolsCountOrderByAggregateInput = {
    school_id?: SortOrder
    school_name?: SortOrder
    school_category?: SortOrder
    school_cnpj?: SortOrder
    school_address?: SortOrder
    school_number?: SortOrder
    school_neighborhood?: SortOrder
    school_city?: SortOrder
    school_state?: SortOrder
    school_cep?: SortOrder
    school_phone?: SortOrder
    school_email?: SortOrder
    school_created_at?: SortOrder
    school_updated_at?: SortOrder
    school_situation?: SortOrder
  }

  export type SchoolsMaxOrderByAggregateInput = {
    school_id?: SortOrder
    school_name?: SortOrder
    school_category?: SortOrder
    school_cnpj?: SortOrder
    school_address?: SortOrder
    school_number?: SortOrder
    school_neighborhood?: SortOrder
    school_city?: SortOrder
    school_state?: SortOrder
    school_cep?: SortOrder
    school_phone?: SortOrder
    school_email?: SortOrder
    school_created_at?: SortOrder
    school_updated_at?: SortOrder
    school_situation?: SortOrder
  }

  export type SchoolsMinOrderByAggregateInput = {
    school_id?: SortOrder
    school_name?: SortOrder
    school_category?: SortOrder
    school_cnpj?: SortOrder
    school_address?: SortOrder
    school_number?: SortOrder
    school_neighborhood?: SortOrder
    school_city?: SortOrder
    school_state?: SortOrder
    school_cep?: SortOrder
    school_phone?: SortOrder
    school_email?: SortOrder
    school_created_at?: SortOrder
    school_updated_at?: SortOrder
    school_situation?: SortOrder
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

  export type EnumCategoryWithAggregatesFilter = {
    equals?: Category
    in?: Enumerable<Category>
    notIn?: Enumerable<Category>
    not?: NestedEnumCategoryWithAggregatesFilter | Category
    _count?: NestedIntFilter
    _min?: NestedEnumCategoryFilter
    _max?: NestedEnumCategoryFilter
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

  export type EnumShiftNamesFilter = {
    equals?: ShiftNames
    in?: Enumerable<ShiftNames>
    notIn?: Enumerable<ShiftNames>
    not?: NestedEnumShiftNamesFilter | ShiftNames
  }

  export type EnumDayOfTheWeekFilter = {
    equals?: DayOfTheWeek
    in?: Enumerable<DayOfTheWeek>
    notIn?: Enumerable<DayOfTheWeek>
    not?: NestedEnumDayOfTheWeekFilter | DayOfTheWeek
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type SchedulesListRelationFilter = {
    every?: SchedulesWhereInput
    some?: SchedulesWhereInput
    none?: SchedulesWhereInput
  }

  export type SchedulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftsCountOrderByAggregateInput = {
    shift_id?: SortOrder
    shift_name?: SortOrder
    shift_day_of_week?: SortOrder
    shift_number_class_per_day?: SortOrder
    shift_day_of_week_class?: SortOrder
    shift_created_at?: SortOrder
    shift_updated_at?: SortOrder
    shitf_situation?: SortOrder
  }

  export type ShiftsAvgOrderByAggregateInput = {
    shift_number_class_per_day?: SortOrder
  }

  export type ShiftsMaxOrderByAggregateInput = {
    shift_id?: SortOrder
    shift_name?: SortOrder
    shift_day_of_week?: SortOrder
    shift_number_class_per_day?: SortOrder
    shift_day_of_week_class?: SortOrder
    shift_created_at?: SortOrder
    shift_updated_at?: SortOrder
    shitf_situation?: SortOrder
  }

  export type ShiftsMinOrderByAggregateInput = {
    shift_id?: SortOrder
    shift_name?: SortOrder
    shift_day_of_week?: SortOrder
    shift_number_class_per_day?: SortOrder
    shift_day_of_week_class?: SortOrder
    shift_created_at?: SortOrder
    shift_updated_at?: SortOrder
    shitf_situation?: SortOrder
  }

  export type ShiftsSumOrderByAggregateInput = {
    shift_number_class_per_day?: SortOrder
  }

  export type EnumShiftNamesWithAggregatesFilter = {
    equals?: ShiftNames
    in?: Enumerable<ShiftNames>
    notIn?: Enumerable<ShiftNames>
    not?: NestedEnumShiftNamesWithAggregatesFilter | ShiftNames
    _count?: NestedIntFilter
    _min?: NestedEnumShiftNamesFilter
    _max?: NestedEnumShiftNamesFilter
  }

  export type EnumDayOfTheWeekWithAggregatesFilter = {
    equals?: DayOfTheWeek
    in?: Enumerable<DayOfTheWeek>
    notIn?: Enumerable<DayOfTheWeek>
    not?: NestedEnumDayOfTheWeekWithAggregatesFilter | DayOfTheWeek
    _count?: NestedIntFilter
    _min?: NestedEnumDayOfTheWeekFilter
    _max?: NestedEnumDayOfTheWeekFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ShiftsRelationFilter = {
    is?: ShiftsWhereInput
    isNot?: ShiftsWhereInput
  }

  export type SchedulesCountOrderByAggregateInput = {
    schedule_id?: SortOrder
    schedule_name?: SortOrder
    schedule_start?: SortOrder
    schedule_end?: SortOrder
    schedule_shift_id?: SortOrder
    schedule_situation?: SortOrder
  }

  export type SchedulesMaxOrderByAggregateInput = {
    schedule_id?: SortOrder
    schedule_name?: SortOrder
    schedule_start?: SortOrder
    schedule_end?: SortOrder
    schedule_shift_id?: SortOrder
    schedule_situation?: SortOrder
  }

  export type SchedulesMinOrderByAggregateInput = {
    schedule_id?: SortOrder
    schedule_name?: SortOrder
    schedule_start?: SortOrder
    schedule_end?: SortOrder
    schedule_shift_id?: SortOrder
    schedule_situation?: SortOrder
  }

  export type ClassesListRelationFilter = {
    every?: ClassesWhereInput
    some?: ClassesWhereInput
    none?: ClassesWhereInput
  }

  export type ClassesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationsCountOrderByAggregateInput = {
    education_id?: SortOrder
    education_name?: SortOrder
    education_nickname?: SortOrder
    education_created_at?: SortOrder
    education_updated_at?: SortOrder
    education_situation?: SortOrder
  }

  export type EducationsMaxOrderByAggregateInput = {
    education_id?: SortOrder
    education_name?: SortOrder
    education_nickname?: SortOrder
    education_created_at?: SortOrder
    education_updated_at?: SortOrder
    education_situation?: SortOrder
  }

  export type EducationsMinOrderByAggregateInput = {
    education_id?: SortOrder
    education_name?: SortOrder
    education_nickname?: SortOrder
    education_created_at?: SortOrder
    education_updated_at?: SortOrder
    education_situation?: SortOrder
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

  export type SubjectsCountOrderByAggregateInput = {
    subject_id?: SortOrder
    subject_name?: SortOrder
    subject_nickname?: SortOrder
    subject_educations?: SortOrder
    subject_created_at?: SortOrder
    subject_updated_at?: SortOrder
    subject_situation?: SortOrder
  }

  export type SubjectsMaxOrderByAggregateInput = {
    subject_id?: SortOrder
    subject_name?: SortOrder
    subject_nickname?: SortOrder
    subject_created_at?: SortOrder
    subject_updated_at?: SortOrder
    subject_situation?: SortOrder
  }

  export type SubjectsMinOrderByAggregateInput = {
    subject_id?: SortOrder
    subject_name?: SortOrder
    subject_nickname?: SortOrder
    subject_created_at?: SortOrder
    subject_updated_at?: SortOrder
    subject_situation?: SortOrder
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

  export type SchoolsRelationFilter = {
    is?: SchoolsWhereInput
    isNot?: SchoolsWhereInput
  }

  export type TeachersCountOrderByAggregateInput = {
    teacher_id?: SortOrder
    teacher_school_id?: SortOrder
    teacher_name?: SortOrder
    teacher_nickname?: SortOrder
    teacher_email?: SortOrder
    teacher_celphone?: SortOrder
    teacher_disciplines_ids?: SortOrder
    teacher_shifts_ids?: SortOrder
    teacher_restrictions?: SortOrder
    teacher_created_at?: SortOrder
    teacher_updated_at?: SortOrder
    teacher_situation?: SortOrder
  }

  export type TeachersMaxOrderByAggregateInput = {
    teacher_id?: SortOrder
    teacher_school_id?: SortOrder
    teacher_name?: SortOrder
    teacher_nickname?: SortOrder
    teacher_email?: SortOrder
    teacher_celphone?: SortOrder
    teacher_created_at?: SortOrder
    teacher_updated_at?: SortOrder
    teacher_situation?: SortOrder
  }

  export type TeachersMinOrderByAggregateInput = {
    teacher_id?: SortOrder
    teacher_school_id?: SortOrder
    teacher_name?: SortOrder
    teacher_nickname?: SortOrder
    teacher_email?: SortOrder
    teacher_celphone?: SortOrder
    teacher_created_at?: SortOrder
    teacher_updated_at?: SortOrder
    teacher_situation?: SortOrder
  }

  export type EducationsRelationFilter = {
    is?: EducationsWhereInput
    isNot?: EducationsWhereInput
  }

  export type ClassesCountOrderByAggregateInput = {
    class_id?: SortOrder
    class_name?: SortOrder
    class_teachers_ids?: SortOrder
    class_education_id?: SortOrder
    class_situation?: SortOrder
  }

  export type ClassesMaxOrderByAggregateInput = {
    class_id?: SortOrder
    class_name?: SortOrder
    class_education_id?: SortOrder
    class_situation?: SortOrder
  }

  export type ClassesMinOrderByAggregateInput = {
    class_id?: SortOrder
    class_name?: SortOrder
    class_education_id?: SortOrder
    class_situation?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_salt?: SortOrder
    user_password?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    user_situation?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_salt?: SortOrder
    user_password?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    user_situation?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_salt?: SortOrder
    user_password?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    user_situation?: SortOrder
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

  export type TeachersCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Enumerable<TeachersCreateWithoutSchoolInput>, Enumerable<TeachersUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<TeachersCreateOrConnectWithoutSchoolInput>
    createMany?: TeachersCreateManySchoolInputEnvelope
    connect?: Enumerable<TeachersWhereUniqueInput>
  }

  export type TeachersUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Enumerable<TeachersCreateWithoutSchoolInput>, Enumerable<TeachersUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<TeachersCreateOrConnectWithoutSchoolInput>
    createMany?: TeachersCreateManySchoolInputEnvelope
    connect?: Enumerable<TeachersWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: Category
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeachersUpdateManyWithoutSchoolInput = {
    create?: XOR<Enumerable<TeachersCreateWithoutSchoolInput>, Enumerable<TeachersUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<TeachersCreateOrConnectWithoutSchoolInput>
    upsert?: Enumerable<TeachersUpsertWithWhereUniqueWithoutSchoolInput>
    createMany?: TeachersCreateManySchoolInputEnvelope
    set?: Enumerable<TeachersWhereUniqueInput>
    disconnect?: Enumerable<TeachersWhereUniqueInput>
    delete?: Enumerable<TeachersWhereUniqueInput>
    connect?: Enumerable<TeachersWhereUniqueInput>
    update?: Enumerable<TeachersUpdateWithWhereUniqueWithoutSchoolInput>
    updateMany?: Enumerable<TeachersUpdateManyWithWhereWithoutSchoolInput>
    deleteMany?: Enumerable<TeachersScalarWhereInput>
  }

  export type TeachersUncheckedUpdateManyWithoutSchoolInput = {
    create?: XOR<Enumerable<TeachersCreateWithoutSchoolInput>, Enumerable<TeachersUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<TeachersCreateOrConnectWithoutSchoolInput>
    upsert?: Enumerable<TeachersUpsertWithWhereUniqueWithoutSchoolInput>
    createMany?: TeachersCreateManySchoolInputEnvelope
    set?: Enumerable<TeachersWhereUniqueInput>
    disconnect?: Enumerable<TeachersWhereUniqueInput>
    delete?: Enumerable<TeachersWhereUniqueInput>
    connect?: Enumerable<TeachersWhereUniqueInput>
    update?: Enumerable<TeachersUpdateWithWhereUniqueWithoutSchoolInput>
    updateMany?: Enumerable<TeachersUpdateManyWithWhereWithoutSchoolInput>
    deleteMany?: Enumerable<TeachersScalarWhereInput>
  }

  export type SchedulesCreateNestedManyWithoutShiftInput = {
    create?: XOR<Enumerable<SchedulesCreateWithoutShiftInput>, Enumerable<SchedulesUncheckedCreateWithoutShiftInput>>
    connectOrCreate?: Enumerable<SchedulesCreateOrConnectWithoutShiftInput>
    createMany?: SchedulesCreateManyShiftInputEnvelope
    connect?: Enumerable<SchedulesWhereUniqueInput>
  }

  export type SchedulesUncheckedCreateNestedManyWithoutShiftInput = {
    create?: XOR<Enumerable<SchedulesCreateWithoutShiftInput>, Enumerable<SchedulesUncheckedCreateWithoutShiftInput>>
    connectOrCreate?: Enumerable<SchedulesCreateOrConnectWithoutShiftInput>
    createMany?: SchedulesCreateManyShiftInputEnvelope
    connect?: Enumerable<SchedulesWhereUniqueInput>
  }

  export type EnumShiftNamesFieldUpdateOperationsInput = {
    set?: ShiftNames
  }

  export type EnumDayOfTheWeekFieldUpdateOperationsInput = {
    set?: DayOfTheWeek
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SchedulesUpdateManyWithoutShiftInput = {
    create?: XOR<Enumerable<SchedulesCreateWithoutShiftInput>, Enumerable<SchedulesUncheckedCreateWithoutShiftInput>>
    connectOrCreate?: Enumerable<SchedulesCreateOrConnectWithoutShiftInput>
    upsert?: Enumerable<SchedulesUpsertWithWhereUniqueWithoutShiftInput>
    createMany?: SchedulesCreateManyShiftInputEnvelope
    set?: Enumerable<SchedulesWhereUniqueInput>
    disconnect?: Enumerable<SchedulesWhereUniqueInput>
    delete?: Enumerable<SchedulesWhereUniqueInput>
    connect?: Enumerable<SchedulesWhereUniqueInput>
    update?: Enumerable<SchedulesUpdateWithWhereUniqueWithoutShiftInput>
    updateMany?: Enumerable<SchedulesUpdateManyWithWhereWithoutShiftInput>
    deleteMany?: Enumerable<SchedulesScalarWhereInput>
  }

  export type SchedulesUncheckedUpdateManyWithoutShiftInput = {
    create?: XOR<Enumerable<SchedulesCreateWithoutShiftInput>, Enumerable<SchedulesUncheckedCreateWithoutShiftInput>>
    connectOrCreate?: Enumerable<SchedulesCreateOrConnectWithoutShiftInput>
    upsert?: Enumerable<SchedulesUpsertWithWhereUniqueWithoutShiftInput>
    createMany?: SchedulesCreateManyShiftInputEnvelope
    set?: Enumerable<SchedulesWhereUniqueInput>
    disconnect?: Enumerable<SchedulesWhereUniqueInput>
    delete?: Enumerable<SchedulesWhereUniqueInput>
    connect?: Enumerable<SchedulesWhereUniqueInput>
    update?: Enumerable<SchedulesUpdateWithWhereUniqueWithoutShiftInput>
    updateMany?: Enumerable<SchedulesUpdateManyWithWhereWithoutShiftInput>
    deleteMany?: Enumerable<SchedulesScalarWhereInput>
  }

  export type ShiftsCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<ShiftsCreateWithoutSchedulesInput, ShiftsUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ShiftsCreateOrConnectWithoutSchedulesInput
    connect?: ShiftsWhereUniqueInput
  }

  export type ShiftsUpdateOneRequiredWithoutSchedulesInput = {
    create?: XOR<ShiftsCreateWithoutSchedulesInput, ShiftsUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ShiftsCreateOrConnectWithoutSchedulesInput
    upsert?: ShiftsUpsertWithoutSchedulesInput
    connect?: ShiftsWhereUniqueInput
    update?: XOR<ShiftsUpdateWithoutSchedulesInput, ShiftsUncheckedUpdateWithoutSchedulesInput>
  }

  export type ClassesCreateNestedManyWithoutEducationInput = {
    create?: XOR<Enumerable<ClassesCreateWithoutEducationInput>, Enumerable<ClassesUncheckedCreateWithoutEducationInput>>
    connectOrCreate?: Enumerable<ClassesCreateOrConnectWithoutEducationInput>
    createMany?: ClassesCreateManyEducationInputEnvelope
    connect?: Enumerable<ClassesWhereUniqueInput>
  }

  export type ClassesUncheckedCreateNestedManyWithoutEducationInput = {
    create?: XOR<Enumerable<ClassesCreateWithoutEducationInput>, Enumerable<ClassesUncheckedCreateWithoutEducationInput>>
    connectOrCreate?: Enumerable<ClassesCreateOrConnectWithoutEducationInput>
    createMany?: ClassesCreateManyEducationInputEnvelope
    connect?: Enumerable<ClassesWhereUniqueInput>
  }

  export type ClassesUpdateManyWithoutEducationInput = {
    create?: XOR<Enumerable<ClassesCreateWithoutEducationInput>, Enumerable<ClassesUncheckedCreateWithoutEducationInput>>
    connectOrCreate?: Enumerable<ClassesCreateOrConnectWithoutEducationInput>
    upsert?: Enumerable<ClassesUpsertWithWhereUniqueWithoutEducationInput>
    createMany?: ClassesCreateManyEducationInputEnvelope
    set?: Enumerable<ClassesWhereUniqueInput>
    disconnect?: Enumerable<ClassesWhereUniqueInput>
    delete?: Enumerable<ClassesWhereUniqueInput>
    connect?: Enumerable<ClassesWhereUniqueInput>
    update?: Enumerable<ClassesUpdateWithWhereUniqueWithoutEducationInput>
    updateMany?: Enumerable<ClassesUpdateManyWithWhereWithoutEducationInput>
    deleteMany?: Enumerable<ClassesScalarWhereInput>
  }

  export type ClassesUncheckedUpdateManyWithoutEducationInput = {
    create?: XOR<Enumerable<ClassesCreateWithoutEducationInput>, Enumerable<ClassesUncheckedCreateWithoutEducationInput>>
    connectOrCreate?: Enumerable<ClassesCreateOrConnectWithoutEducationInput>
    upsert?: Enumerable<ClassesUpsertWithWhereUniqueWithoutEducationInput>
    createMany?: ClassesCreateManyEducationInputEnvelope
    set?: Enumerable<ClassesWhereUniqueInput>
    disconnect?: Enumerable<ClassesWhereUniqueInput>
    delete?: Enumerable<ClassesWhereUniqueInput>
    connect?: Enumerable<ClassesWhereUniqueInput>
    update?: Enumerable<ClassesUpdateWithWhereUniqueWithoutEducationInput>
    updateMany?: Enumerable<ClassesUpdateManyWithWhereWithoutEducationInput>
    deleteMany?: Enumerable<ClassesScalarWhereInput>
  }

  export type SchoolsCreateNestedOneWithoutTeachersInput = {
    create?: XOR<SchoolsCreateWithoutTeachersInput, SchoolsUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SchoolsCreateOrConnectWithoutTeachersInput
    connect?: SchoolsWhereUniqueInput
  }

  export type SchoolsUpdateOneRequiredWithoutTeachersInput = {
    create?: XOR<SchoolsCreateWithoutTeachersInput, SchoolsUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SchoolsCreateOrConnectWithoutTeachersInput
    upsert?: SchoolsUpsertWithoutTeachersInput
    connect?: SchoolsWhereUniqueInput
    update?: XOR<SchoolsUpdateWithoutTeachersInput, SchoolsUncheckedUpdateWithoutTeachersInput>
  }

  export type EducationsCreateNestedOneWithoutClassesInput = {
    create?: XOR<EducationsCreateWithoutClassesInput, EducationsUncheckedCreateWithoutClassesInput>
    connectOrCreate?: EducationsCreateOrConnectWithoutClassesInput
    connect?: EducationsWhereUniqueInput
  }

  export type EducationsUpdateOneRequiredWithoutClassesInput = {
    create?: XOR<EducationsCreateWithoutClassesInput, EducationsUncheckedCreateWithoutClassesInput>
    connectOrCreate?: EducationsCreateOrConnectWithoutClassesInput
    upsert?: EducationsUpsertWithoutClassesInput
    connect?: EducationsWhereUniqueInput
    update?: XOR<EducationsUpdateWithoutClassesInput, EducationsUncheckedUpdateWithoutClassesInput>
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

  export type NestedEnumCategoryFilter = {
    equals?: Category
    in?: Enumerable<Category>
    notIn?: Enumerable<Category>
    not?: NestedEnumCategoryFilter | Category
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

  export type NestedEnumCategoryWithAggregatesFilter = {
    equals?: Category
    in?: Enumerable<Category>
    notIn?: Enumerable<Category>
    not?: NestedEnumCategoryWithAggregatesFilter | Category
    _count?: NestedIntFilter
    _min?: NestedEnumCategoryFilter
    _max?: NestedEnumCategoryFilter
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

  export type NestedEnumShiftNamesFilter = {
    equals?: ShiftNames
    in?: Enumerable<ShiftNames>
    notIn?: Enumerable<ShiftNames>
    not?: NestedEnumShiftNamesFilter | ShiftNames
  }

  export type NestedEnumDayOfTheWeekFilter = {
    equals?: DayOfTheWeek
    in?: Enumerable<DayOfTheWeek>
    notIn?: Enumerable<DayOfTheWeek>
    not?: NestedEnumDayOfTheWeekFilter | DayOfTheWeek
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumShiftNamesWithAggregatesFilter = {
    equals?: ShiftNames
    in?: Enumerable<ShiftNames>
    notIn?: Enumerable<ShiftNames>
    not?: NestedEnumShiftNamesWithAggregatesFilter | ShiftNames
    _count?: NestedIntFilter
    _min?: NestedEnumShiftNamesFilter
    _max?: NestedEnumShiftNamesFilter
  }

  export type NestedEnumDayOfTheWeekWithAggregatesFilter = {
    equals?: DayOfTheWeek
    in?: Enumerable<DayOfTheWeek>
    notIn?: Enumerable<DayOfTheWeek>
    not?: NestedEnumDayOfTheWeekWithAggregatesFilter | DayOfTheWeek
    _count?: NestedIntFilter
    _min?: NestedEnumDayOfTheWeekFilter
    _max?: NestedEnumDayOfTheWeekFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type TeachersCreateWithoutSchoolInput = {
    teacher_id?: string
    teacher_name: string
    teacher_nickname: string
    teacher_email: string
    teacher_celphone: string
    teacher_disciplines_ids: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids: JsonNullValueInput | InputJsonValue
    teacher_restrictions: JsonNullValueInput | InputJsonValue
    teacher_created_at?: Date | string
    teacher_updated_at: Date | string
    teacher_situation?: string
  }

  export type TeachersUncheckedCreateWithoutSchoolInput = {
    teacher_id?: string
    teacher_name: string
    teacher_nickname: string
    teacher_email: string
    teacher_celphone: string
    teacher_disciplines_ids: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids: JsonNullValueInput | InputJsonValue
    teacher_restrictions: JsonNullValueInput | InputJsonValue
    teacher_created_at?: Date | string
    teacher_updated_at: Date | string
    teacher_situation?: string
  }

  export type TeachersCreateOrConnectWithoutSchoolInput = {
    where: TeachersWhereUniqueInput
    create: XOR<TeachersCreateWithoutSchoolInput, TeachersUncheckedCreateWithoutSchoolInput>
  }

  export type TeachersCreateManySchoolInputEnvelope = {
    data: Enumerable<TeachersCreateManySchoolInput>
    skipDuplicates?: boolean
  }

  export type TeachersUpsertWithWhereUniqueWithoutSchoolInput = {
    where: TeachersWhereUniqueInput
    update: XOR<TeachersUpdateWithoutSchoolInput, TeachersUncheckedUpdateWithoutSchoolInput>
    create: XOR<TeachersCreateWithoutSchoolInput, TeachersUncheckedCreateWithoutSchoolInput>
  }

  export type TeachersUpdateWithWhereUniqueWithoutSchoolInput = {
    where: TeachersWhereUniqueInput
    data: XOR<TeachersUpdateWithoutSchoolInput, TeachersUncheckedUpdateWithoutSchoolInput>
  }

  export type TeachersUpdateManyWithWhereWithoutSchoolInput = {
    where: TeachersScalarWhereInput
    data: XOR<TeachersUpdateManyMutationInput, TeachersUncheckedUpdateManyWithoutTeachersInput>
  }

  export type TeachersScalarWhereInput = {
    AND?: Enumerable<TeachersScalarWhereInput>
    OR?: Enumerable<TeachersScalarWhereInput>
    NOT?: Enumerable<TeachersScalarWhereInput>
    teacher_id?: StringFilter | string
    teacher_school_id?: StringFilter | string
    teacher_name?: StringFilter | string
    teacher_nickname?: StringFilter | string
    teacher_email?: StringFilter | string
    teacher_celphone?: StringFilter | string
    teacher_disciplines_ids?: JsonFilter
    teacher_shifts_ids?: JsonFilter
    teacher_restrictions?: JsonFilter
    teacher_created_at?: DateTimeFilter | Date | string
    teacher_updated_at?: DateTimeFilter | Date | string
    teacher_situation?: StringFilter | string
  }

  export type SchedulesCreateWithoutShiftInput = {
    schedule_id?: string
    schedule_name: string
    schedule_start: Date | string
    schedule_end: Date | string
    schedule_situation?: string
  }

  export type SchedulesUncheckedCreateWithoutShiftInput = {
    schedule_id?: string
    schedule_name: string
    schedule_start: Date | string
    schedule_end: Date | string
    schedule_situation?: string
  }

  export type SchedulesCreateOrConnectWithoutShiftInput = {
    where: SchedulesWhereUniqueInput
    create: XOR<SchedulesCreateWithoutShiftInput, SchedulesUncheckedCreateWithoutShiftInput>
  }

  export type SchedulesCreateManyShiftInputEnvelope = {
    data: Enumerable<SchedulesCreateManyShiftInput>
    skipDuplicates?: boolean
  }

  export type SchedulesUpsertWithWhereUniqueWithoutShiftInput = {
    where: SchedulesWhereUniqueInput
    update: XOR<SchedulesUpdateWithoutShiftInput, SchedulesUncheckedUpdateWithoutShiftInput>
    create: XOR<SchedulesCreateWithoutShiftInput, SchedulesUncheckedCreateWithoutShiftInput>
  }

  export type SchedulesUpdateWithWhereUniqueWithoutShiftInput = {
    where: SchedulesWhereUniqueInput
    data: XOR<SchedulesUpdateWithoutShiftInput, SchedulesUncheckedUpdateWithoutShiftInput>
  }

  export type SchedulesUpdateManyWithWhereWithoutShiftInput = {
    where: SchedulesScalarWhereInput
    data: XOR<SchedulesUpdateManyMutationInput, SchedulesUncheckedUpdateManyWithoutSchedulesInput>
  }

  export type SchedulesScalarWhereInput = {
    AND?: Enumerable<SchedulesScalarWhereInput>
    OR?: Enumerable<SchedulesScalarWhereInput>
    NOT?: Enumerable<SchedulesScalarWhereInput>
    schedule_id?: StringFilter | string
    schedule_name?: StringFilter | string
    schedule_start?: DateTimeFilter | Date | string
    schedule_end?: DateTimeFilter | Date | string
    schedule_shift_id?: StringFilter | string
    schedule_situation?: StringFilter | string
  }

  export type ShiftsCreateWithoutSchedulesInput = {
    shift_id?: string
    shift_name?: ShiftNames
    shift_day_of_week?: DayOfTheWeek
    shift_number_class_per_day?: number
    shift_day_of_week_class?: boolean
    shift_created_at?: Date | string
    shift_updated_at: Date | string
    shitf_situation?: string
  }

  export type ShiftsUncheckedCreateWithoutSchedulesInput = {
    shift_id?: string
    shift_name?: ShiftNames
    shift_day_of_week?: DayOfTheWeek
    shift_number_class_per_day?: number
    shift_day_of_week_class?: boolean
    shift_created_at?: Date | string
    shift_updated_at: Date | string
    shitf_situation?: string
  }

  export type ShiftsCreateOrConnectWithoutSchedulesInput = {
    where: ShiftsWhereUniqueInput
    create: XOR<ShiftsCreateWithoutSchedulesInput, ShiftsUncheckedCreateWithoutSchedulesInput>
  }

  export type ShiftsUpsertWithoutSchedulesInput = {
    update: XOR<ShiftsUpdateWithoutSchedulesInput, ShiftsUncheckedUpdateWithoutSchedulesInput>
    create: XOR<ShiftsCreateWithoutSchedulesInput, ShiftsUncheckedCreateWithoutSchedulesInput>
  }

  export type ShiftsUpdateWithoutSchedulesInput = {
    shift_id?: StringFieldUpdateOperationsInput | string
    shift_name?: EnumShiftNamesFieldUpdateOperationsInput | ShiftNames
    shift_day_of_week?: EnumDayOfTheWeekFieldUpdateOperationsInput | DayOfTheWeek
    shift_number_class_per_day?: IntFieldUpdateOperationsInput | number
    shift_day_of_week_class?: BoolFieldUpdateOperationsInput | boolean
    shift_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shift_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shitf_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftsUncheckedUpdateWithoutSchedulesInput = {
    shift_id?: StringFieldUpdateOperationsInput | string
    shift_name?: EnumShiftNamesFieldUpdateOperationsInput | ShiftNames
    shift_day_of_week?: EnumDayOfTheWeekFieldUpdateOperationsInput | DayOfTheWeek
    shift_number_class_per_day?: IntFieldUpdateOperationsInput | number
    shift_day_of_week_class?: BoolFieldUpdateOperationsInput | boolean
    shift_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shift_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shitf_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesCreateWithoutEducationInput = {
    class_id?: string
    class_name: string
    class_teachers_ids: JsonNullValueInput | InputJsonValue
    class_situation?: string
  }

  export type ClassesUncheckedCreateWithoutEducationInput = {
    class_id?: string
    class_name: string
    class_teachers_ids: JsonNullValueInput | InputJsonValue
    class_situation?: string
  }

  export type ClassesCreateOrConnectWithoutEducationInput = {
    where: ClassesWhereUniqueInput
    create: XOR<ClassesCreateWithoutEducationInput, ClassesUncheckedCreateWithoutEducationInput>
  }

  export type ClassesCreateManyEducationInputEnvelope = {
    data: Enumerable<ClassesCreateManyEducationInput>
    skipDuplicates?: boolean
  }

  export type ClassesUpsertWithWhereUniqueWithoutEducationInput = {
    where: ClassesWhereUniqueInput
    update: XOR<ClassesUpdateWithoutEducationInput, ClassesUncheckedUpdateWithoutEducationInput>
    create: XOR<ClassesCreateWithoutEducationInput, ClassesUncheckedCreateWithoutEducationInput>
  }

  export type ClassesUpdateWithWhereUniqueWithoutEducationInput = {
    where: ClassesWhereUniqueInput
    data: XOR<ClassesUpdateWithoutEducationInput, ClassesUncheckedUpdateWithoutEducationInput>
  }

  export type ClassesUpdateManyWithWhereWithoutEducationInput = {
    where: ClassesScalarWhereInput
    data: XOR<ClassesUpdateManyMutationInput, ClassesUncheckedUpdateManyWithoutClassesInput>
  }

  export type ClassesScalarWhereInput = {
    AND?: Enumerable<ClassesScalarWhereInput>
    OR?: Enumerable<ClassesScalarWhereInput>
    NOT?: Enumerable<ClassesScalarWhereInput>
    class_id?: StringFilter | string
    class_name?: StringFilter | string
    class_teachers_ids?: JsonFilter
    class_education_id?: StringFilter | string
    class_situation?: StringFilter | string
  }

  export type SchoolsCreateWithoutTeachersInput = {
    school_id?: string
    school_name: string
    school_category?: Category
    school_cnpj: string
    school_address: string
    school_number: string
    school_neighborhood: string
    school_city: string
    school_state: string
    school_cep: string
    school_phone: string
    school_email: string
    school_created_at?: Date | string
    school_updated_at: Date | string
    school_situation?: string
  }

  export type SchoolsUncheckedCreateWithoutTeachersInput = {
    school_id?: string
    school_name: string
    school_category?: Category
    school_cnpj: string
    school_address: string
    school_number: string
    school_neighborhood: string
    school_city: string
    school_state: string
    school_cep: string
    school_phone: string
    school_email: string
    school_created_at?: Date | string
    school_updated_at: Date | string
    school_situation?: string
  }

  export type SchoolsCreateOrConnectWithoutTeachersInput = {
    where: SchoolsWhereUniqueInput
    create: XOR<SchoolsCreateWithoutTeachersInput, SchoolsUncheckedCreateWithoutTeachersInput>
  }

  export type SchoolsUpsertWithoutTeachersInput = {
    update: XOR<SchoolsUpdateWithoutTeachersInput, SchoolsUncheckedUpdateWithoutTeachersInput>
    create: XOR<SchoolsCreateWithoutTeachersInput, SchoolsUncheckedCreateWithoutTeachersInput>
  }

  export type SchoolsUpdateWithoutTeachersInput = {
    school_id?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    school_category?: EnumCategoryFieldUpdateOperationsInput | Category
    school_cnpj?: StringFieldUpdateOperationsInput | string
    school_address?: StringFieldUpdateOperationsInput | string
    school_number?: StringFieldUpdateOperationsInput | string
    school_neighborhood?: StringFieldUpdateOperationsInput | string
    school_city?: StringFieldUpdateOperationsInput | string
    school_state?: StringFieldUpdateOperationsInput | string
    school_cep?: StringFieldUpdateOperationsInput | string
    school_phone?: StringFieldUpdateOperationsInput | string
    school_email?: StringFieldUpdateOperationsInput | string
    school_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolsUncheckedUpdateWithoutTeachersInput = {
    school_id?: StringFieldUpdateOperationsInput | string
    school_name?: StringFieldUpdateOperationsInput | string
    school_category?: EnumCategoryFieldUpdateOperationsInput | Category
    school_cnpj?: StringFieldUpdateOperationsInput | string
    school_address?: StringFieldUpdateOperationsInput | string
    school_number?: StringFieldUpdateOperationsInput | string
    school_neighborhood?: StringFieldUpdateOperationsInput | string
    school_city?: StringFieldUpdateOperationsInput | string
    school_state?: StringFieldUpdateOperationsInput | string
    school_cep?: StringFieldUpdateOperationsInput | string
    school_phone?: StringFieldUpdateOperationsInput | string
    school_email?: StringFieldUpdateOperationsInput | string
    school_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    school_situation?: StringFieldUpdateOperationsInput | string
  }

  export type EducationsCreateWithoutClassesInput = {
    education_id?: string
    education_name: string
    education_nickname: string
    education_created_at?: Date | string
    education_updated_at: Date | string
    education_situation?: string
  }

  export type EducationsUncheckedCreateWithoutClassesInput = {
    education_id?: string
    education_name: string
    education_nickname: string
    education_created_at?: Date | string
    education_updated_at: Date | string
    education_situation?: string
  }

  export type EducationsCreateOrConnectWithoutClassesInput = {
    where: EducationsWhereUniqueInput
    create: XOR<EducationsCreateWithoutClassesInput, EducationsUncheckedCreateWithoutClassesInput>
  }

  export type EducationsUpsertWithoutClassesInput = {
    update: XOR<EducationsUpdateWithoutClassesInput, EducationsUncheckedUpdateWithoutClassesInput>
    create: XOR<EducationsCreateWithoutClassesInput, EducationsUncheckedCreateWithoutClassesInput>
  }

  export type EducationsUpdateWithoutClassesInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    education_name?: StringFieldUpdateOperationsInput | string
    education_nickname?: StringFieldUpdateOperationsInput | string
    education_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_situation?: StringFieldUpdateOperationsInput | string
  }

  export type EducationsUncheckedUpdateWithoutClassesInput = {
    education_id?: StringFieldUpdateOperationsInput | string
    education_name?: StringFieldUpdateOperationsInput | string
    education_nickname?: StringFieldUpdateOperationsInput | string
    education_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TeachersCreateManySchoolInput = {
    teacher_id?: string
    teacher_name: string
    teacher_nickname: string
    teacher_email: string
    teacher_celphone: string
    teacher_disciplines_ids: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids: JsonNullValueInput | InputJsonValue
    teacher_restrictions: JsonNullValueInput | InputJsonValue
    teacher_created_at?: Date | string
    teacher_updated_at: Date | string
    teacher_situation?: string
  }

  export type TeachersUpdateWithoutSchoolInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_nickname?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_celphone?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids?: JsonNullValueInput | InputJsonValue
    teacher_restrictions?: JsonNullValueInput | InputJsonValue
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TeachersUncheckedUpdateWithoutSchoolInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_nickname?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_celphone?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids?: JsonNullValueInput | InputJsonValue
    teacher_restrictions?: JsonNullValueInput | InputJsonValue
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_situation?: StringFieldUpdateOperationsInput | string
  }

  export type TeachersUncheckedUpdateManyWithoutTeachersInput = {
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_name?: StringFieldUpdateOperationsInput | string
    teacher_nickname?: StringFieldUpdateOperationsInput | string
    teacher_email?: StringFieldUpdateOperationsInput | string
    teacher_celphone?: StringFieldUpdateOperationsInput | string
    teacher_disciplines_ids?: JsonNullValueInput | InputJsonValue
    teacher_shifts_ids?: JsonNullValueInput | InputJsonValue
    teacher_restrictions?: JsonNullValueInput | InputJsonValue
    teacher_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulesCreateManyShiftInput = {
    schedule_id?: string
    schedule_name: string
    schedule_start: Date | string
    schedule_end: Date | string
    schedule_situation?: string
  }

  export type SchedulesUpdateWithoutShiftInput = {
    schedule_id?: StringFieldUpdateOperationsInput | string
    schedule_name?: StringFieldUpdateOperationsInput | string
    schedule_start?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_end?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulesUncheckedUpdateWithoutShiftInput = {
    schedule_id?: StringFieldUpdateOperationsInput | string
    schedule_name?: StringFieldUpdateOperationsInput | string
    schedule_start?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_end?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_situation?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulesUncheckedUpdateManyWithoutSchedulesInput = {
    schedule_id?: StringFieldUpdateOperationsInput | string
    schedule_name?: StringFieldUpdateOperationsInput | string
    schedule_start?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_end?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesCreateManyEducationInput = {
    class_id?: string
    class_name: string
    class_teachers_ids: JsonNullValueInput | InputJsonValue
    class_situation?: string
  }

  export type ClassesUpdateWithoutEducationInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_teachers_ids?: JsonNullValueInput | InputJsonValue
    class_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesUncheckedUpdateWithoutEducationInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_teachers_ids?: JsonNullValueInput | InputJsonValue
    class_situation?: StringFieldUpdateOperationsInput | string
  }

  export type ClassesUncheckedUpdateManyWithoutClassesInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    class_name?: StringFieldUpdateOperationsInput | string
    class_teachers_ids?: JsonNullValueInput | InputJsonValue
    class_situation?: StringFieldUpdateOperationsInput | string
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