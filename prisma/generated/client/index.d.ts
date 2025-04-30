
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model collectors
 * 
 */
export type collectors = $Result.DefaultSelection<Prisma.$collectorsPayload>
/**
 * Model log_mirror
 * 
 */
export type log_mirror = $Result.DefaultSelection<Prisma.$log_mirrorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const collectors_status: {
  active: 'active',
  inactive: 'inactive'
};

export type collectors_status = (typeof collectors_status)[keyof typeof collectors_status]

}

export type collectors_status = $Enums.collectors_status

export const collectors_status: typeof $Enums.collectors_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Collectors
 * const collectors = await prisma.collectors.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Collectors
   * const collectors = await prisma.collectors.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.collectors`: Exposes CRUD operations for the **collectors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collectors
    * const collectors = await prisma.collectors.findMany()
    * ```
    */
  get collectors(): Prisma.collectorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log_mirror`: Exposes CRUD operations for the **log_mirror** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_mirrors
    * const log_mirrors = await prisma.log_mirror.findMany()
    * ```
    */
  get log_mirror(): Prisma.log_mirrorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    collectors: 'collectors',
    log_mirror: 'log_mirror'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "collectors" | "log_mirror"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      collectors: {
        payload: Prisma.$collectorsPayload<ExtArgs>
        fields: Prisma.collectorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.collectorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.collectorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectorsPayload>
          }
          findFirst: {
            args: Prisma.collectorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.collectorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectorsPayload>
          }
          findMany: {
            args: Prisma.collectorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectorsPayload>[]
          }
          create: {
            args: Prisma.collectorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectorsPayload>
          }
          createMany: {
            args: Prisma.collectorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.collectorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectorsPayload>
          }
          update: {
            args: Prisma.collectorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectorsPayload>
          }
          deleteMany: {
            args: Prisma.collectorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.collectorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.collectorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectorsPayload>
          }
          aggregate: {
            args: Prisma.CollectorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectors>
          }
          groupBy: {
            args: Prisma.collectorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.collectorsCountArgs<ExtArgs>
            result: $Utils.Optional<CollectorsCountAggregateOutputType> | number
          }
        }
      }
      log_mirror: {
        payload: Prisma.$log_mirrorPayload<ExtArgs>
        fields: Prisma.log_mirrorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.log_mirrorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_mirrorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.log_mirrorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_mirrorPayload>
          }
          findFirst: {
            args: Prisma.log_mirrorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_mirrorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.log_mirrorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_mirrorPayload>
          }
          findMany: {
            args: Prisma.log_mirrorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_mirrorPayload>[]
          }
          create: {
            args: Prisma.log_mirrorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_mirrorPayload>
          }
          createMany: {
            args: Prisma.log_mirrorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.log_mirrorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_mirrorPayload>
          }
          update: {
            args: Prisma.log_mirrorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_mirrorPayload>
          }
          deleteMany: {
            args: Prisma.log_mirrorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.log_mirrorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.log_mirrorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_mirrorPayload>
          }
          aggregate: {
            args: Prisma.Log_mirrorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog_mirror>
          }
          groupBy: {
            args: Prisma.log_mirrorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Log_mirrorGroupByOutputType>[]
          }
          count: {
            args: Prisma.log_mirrorCountArgs<ExtArgs>
            result: $Utils.Optional<Log_mirrorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    collectors?: collectorsOmit
    log_mirror?: log_mirrorOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
   * Model collectors
   */

  export type AggregateCollectors = {
    _count: CollectorsCountAggregateOutputType | null
    _avg: CollectorsAvgAggregateOutputType | null
    _sum: CollectorsSumAggregateOutputType | null
    _min: CollectorsMinAggregateOutputType | null
    _max: CollectorsMaxAggregateOutputType | null
  }

  export type CollectorsAvgAggregateOutputType = {
    id: number | null
  }

  export type CollectorsSumAggregateOutputType = {
    id: number | null
  }

  export type CollectorsMinAggregateOutputType = {
    id: number | null
    ip: string | null
    username: string | null
    password: string | null
    database_name: string | null
    status: $Enums.collectors_status | null
    created_at: Date | null
  }

  export type CollectorsMaxAggregateOutputType = {
    id: number | null
    ip: string | null
    username: string | null
    password: string | null
    database_name: string | null
    status: $Enums.collectors_status | null
    created_at: Date | null
  }

  export type CollectorsCountAggregateOutputType = {
    id: number
    ip: number
    username: number
    password: number
    database_name: number
    status: number
    created_at: number
    _all: number
  }


  export type CollectorsAvgAggregateInputType = {
    id?: true
  }

  export type CollectorsSumAggregateInputType = {
    id?: true
  }

  export type CollectorsMinAggregateInputType = {
    id?: true
    ip?: true
    username?: true
    password?: true
    database_name?: true
    status?: true
    created_at?: true
  }

  export type CollectorsMaxAggregateInputType = {
    id?: true
    ip?: true
    username?: true
    password?: true
    database_name?: true
    status?: true
    created_at?: true
  }

  export type CollectorsCountAggregateInputType = {
    id?: true
    ip?: true
    username?: true
    password?: true
    database_name?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type CollectorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collectors to aggregate.
     */
    where?: collectorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collectors to fetch.
     */
    orderBy?: collectorsOrderByWithRelationInput | collectorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: collectorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned collectors
    **/
    _count?: true | CollectorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectorsMaxAggregateInputType
  }

  export type GetCollectorsAggregateType<T extends CollectorsAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectors[P]>
      : GetScalarType<T[P], AggregateCollectors[P]>
  }




  export type collectorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collectorsWhereInput
    orderBy?: collectorsOrderByWithAggregationInput | collectorsOrderByWithAggregationInput[]
    by: CollectorsScalarFieldEnum[] | CollectorsScalarFieldEnum
    having?: collectorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectorsCountAggregateInputType | true
    _avg?: CollectorsAvgAggregateInputType
    _sum?: CollectorsSumAggregateInputType
    _min?: CollectorsMinAggregateInputType
    _max?: CollectorsMaxAggregateInputType
  }

  export type CollectorsGroupByOutputType = {
    id: number
    ip: string
    username: string
    password: string
    database_name: string
    status: $Enums.collectors_status | null
    created_at: Date | null
    _count: CollectorsCountAggregateOutputType | null
    _avg: CollectorsAvgAggregateOutputType | null
    _sum: CollectorsSumAggregateOutputType | null
    _min: CollectorsMinAggregateOutputType | null
    _max: CollectorsMaxAggregateOutputType | null
  }

  type GetCollectorsGroupByPayload<T extends collectorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectorsGroupByOutputType[P]>
            : GetScalarType<T[P], CollectorsGroupByOutputType[P]>
        }
      >
    >


  export type collectorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    username?: boolean
    password?: boolean
    database_name?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["collectors"]>



  export type collectorsSelectScalar = {
    id?: boolean
    ip?: boolean
    username?: boolean
    password?: boolean
    database_name?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type collectorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "username" | "password" | "database_name" | "status" | "created_at", ExtArgs["result"]["collectors"]>

  export type $collectorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "collectors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ip: string
      username: string
      password: string
      database_name: string
      status: $Enums.collectors_status | null
      created_at: Date | null
    }, ExtArgs["result"]["collectors"]>
    composites: {}
  }

  type collectorsGetPayload<S extends boolean | null | undefined | collectorsDefaultArgs> = $Result.GetResult<Prisma.$collectorsPayload, S>

  type collectorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<collectorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectorsCountAggregateInputType | true
    }

  export interface collectorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['collectors'], meta: { name: 'collectors' } }
    /**
     * Find zero or one Collectors that matches the filter.
     * @param {collectorsFindUniqueArgs} args - Arguments to find a Collectors
     * @example
     * // Get one Collectors
     * const collectors = await prisma.collectors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends collectorsFindUniqueArgs>(args: SelectSubset<T, collectorsFindUniqueArgs<ExtArgs>>): Prisma__collectorsClient<$Result.GetResult<Prisma.$collectorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collectors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {collectorsFindUniqueOrThrowArgs} args - Arguments to find a Collectors
     * @example
     * // Get one Collectors
     * const collectors = await prisma.collectors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends collectorsFindUniqueOrThrowArgs>(args: SelectSubset<T, collectorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__collectorsClient<$Result.GetResult<Prisma.$collectorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectorsFindFirstArgs} args - Arguments to find a Collectors
     * @example
     * // Get one Collectors
     * const collectors = await prisma.collectors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends collectorsFindFirstArgs>(args?: SelectSubset<T, collectorsFindFirstArgs<ExtArgs>>): Prisma__collectorsClient<$Result.GetResult<Prisma.$collectorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collectors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectorsFindFirstOrThrowArgs} args - Arguments to find a Collectors
     * @example
     * // Get one Collectors
     * const collectors = await prisma.collectors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends collectorsFindFirstOrThrowArgs>(args?: SelectSubset<T, collectorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__collectorsClient<$Result.GetResult<Prisma.$collectorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collectors
     * const collectors = await prisma.collectors.findMany()
     * 
     * // Get first 10 Collectors
     * const collectors = await prisma.collectors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectorsWithIdOnly = await prisma.collectors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends collectorsFindManyArgs>(args?: SelectSubset<T, collectorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collectors.
     * @param {collectorsCreateArgs} args - Arguments to create a Collectors.
     * @example
     * // Create one Collectors
     * const Collectors = await prisma.collectors.create({
     *   data: {
     *     // ... data to create a Collectors
     *   }
     * })
     * 
     */
    create<T extends collectorsCreateArgs>(args: SelectSubset<T, collectorsCreateArgs<ExtArgs>>): Prisma__collectorsClient<$Result.GetResult<Prisma.$collectorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collectors.
     * @param {collectorsCreateManyArgs} args - Arguments to create many Collectors.
     * @example
     * // Create many Collectors
     * const collectors = await prisma.collectors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends collectorsCreateManyArgs>(args?: SelectSubset<T, collectorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collectors.
     * @param {collectorsDeleteArgs} args - Arguments to delete one Collectors.
     * @example
     * // Delete one Collectors
     * const Collectors = await prisma.collectors.delete({
     *   where: {
     *     // ... filter to delete one Collectors
     *   }
     * })
     * 
     */
    delete<T extends collectorsDeleteArgs>(args: SelectSubset<T, collectorsDeleteArgs<ExtArgs>>): Prisma__collectorsClient<$Result.GetResult<Prisma.$collectorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collectors.
     * @param {collectorsUpdateArgs} args - Arguments to update one Collectors.
     * @example
     * // Update one Collectors
     * const collectors = await prisma.collectors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends collectorsUpdateArgs>(args: SelectSubset<T, collectorsUpdateArgs<ExtArgs>>): Prisma__collectorsClient<$Result.GetResult<Prisma.$collectorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collectors.
     * @param {collectorsDeleteManyArgs} args - Arguments to filter Collectors to delete.
     * @example
     * // Delete a few Collectors
     * const { count } = await prisma.collectors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends collectorsDeleteManyArgs>(args?: SelectSubset<T, collectorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collectors
     * const collectors = await prisma.collectors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends collectorsUpdateManyArgs>(args: SelectSubset<T, collectorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collectors.
     * @param {collectorsUpsertArgs} args - Arguments to update or create a Collectors.
     * @example
     * // Update or create a Collectors
     * const collectors = await prisma.collectors.upsert({
     *   create: {
     *     // ... data to create a Collectors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collectors we want to update
     *   }
     * })
     */
    upsert<T extends collectorsUpsertArgs>(args: SelectSubset<T, collectorsUpsertArgs<ExtArgs>>): Prisma__collectorsClient<$Result.GetResult<Prisma.$collectorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectorsCountArgs} args - Arguments to filter Collectors to count.
     * @example
     * // Count the number of Collectors
     * const count = await prisma.collectors.count({
     *   where: {
     *     // ... the filter for the Collectors we want to count
     *   }
     * })
    **/
    count<T extends collectorsCountArgs>(
      args?: Subset<T, collectorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectorsAggregateArgs>(args: Subset<T, CollectorsAggregateArgs>): Prisma.PrismaPromise<GetCollectorsAggregateType<T>>

    /**
     * Group by Collectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectorsGroupByArgs} args - Group by arguments.
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
      T extends collectorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: collectorsGroupByArgs['orderBy'] }
        : { orderBy?: collectorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, collectorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the collectors model
   */
  readonly fields: collectorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for collectors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__collectorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the collectors model
   */
  interface collectorsFieldRefs {
    readonly id: FieldRef<"collectors", 'Int'>
    readonly ip: FieldRef<"collectors", 'String'>
    readonly username: FieldRef<"collectors", 'String'>
    readonly password: FieldRef<"collectors", 'String'>
    readonly database_name: FieldRef<"collectors", 'String'>
    readonly status: FieldRef<"collectors", 'collectors_status'>
    readonly created_at: FieldRef<"collectors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * collectors findUnique
   */
  export type collectorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectors
     */
    select?: collectorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collectors
     */
    omit?: collectorsOmit<ExtArgs> | null
    /**
     * Filter, which collectors to fetch.
     */
    where: collectorsWhereUniqueInput
  }

  /**
   * collectors findUniqueOrThrow
   */
  export type collectorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectors
     */
    select?: collectorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collectors
     */
    omit?: collectorsOmit<ExtArgs> | null
    /**
     * Filter, which collectors to fetch.
     */
    where: collectorsWhereUniqueInput
  }

  /**
   * collectors findFirst
   */
  export type collectorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectors
     */
    select?: collectorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collectors
     */
    omit?: collectorsOmit<ExtArgs> | null
    /**
     * Filter, which collectors to fetch.
     */
    where?: collectorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collectors to fetch.
     */
    orderBy?: collectorsOrderByWithRelationInput | collectorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collectors.
     */
    cursor?: collectorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collectors.
     */
    distinct?: CollectorsScalarFieldEnum | CollectorsScalarFieldEnum[]
  }

  /**
   * collectors findFirstOrThrow
   */
  export type collectorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectors
     */
    select?: collectorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collectors
     */
    omit?: collectorsOmit<ExtArgs> | null
    /**
     * Filter, which collectors to fetch.
     */
    where?: collectorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collectors to fetch.
     */
    orderBy?: collectorsOrderByWithRelationInput | collectorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collectors.
     */
    cursor?: collectorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collectors.
     */
    distinct?: CollectorsScalarFieldEnum | CollectorsScalarFieldEnum[]
  }

  /**
   * collectors findMany
   */
  export type collectorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectors
     */
    select?: collectorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collectors
     */
    omit?: collectorsOmit<ExtArgs> | null
    /**
     * Filter, which collectors to fetch.
     */
    where?: collectorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collectors to fetch.
     */
    orderBy?: collectorsOrderByWithRelationInput | collectorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing collectors.
     */
    cursor?: collectorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collectors.
     */
    skip?: number
    distinct?: CollectorsScalarFieldEnum | CollectorsScalarFieldEnum[]
  }

  /**
   * collectors create
   */
  export type collectorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectors
     */
    select?: collectorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collectors
     */
    omit?: collectorsOmit<ExtArgs> | null
    /**
     * The data needed to create a collectors.
     */
    data: XOR<collectorsCreateInput, collectorsUncheckedCreateInput>
  }

  /**
   * collectors createMany
   */
  export type collectorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many collectors.
     */
    data: collectorsCreateManyInput | collectorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * collectors update
   */
  export type collectorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectors
     */
    select?: collectorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collectors
     */
    omit?: collectorsOmit<ExtArgs> | null
    /**
     * The data needed to update a collectors.
     */
    data: XOR<collectorsUpdateInput, collectorsUncheckedUpdateInput>
    /**
     * Choose, which collectors to update.
     */
    where: collectorsWhereUniqueInput
  }

  /**
   * collectors updateMany
   */
  export type collectorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update collectors.
     */
    data: XOR<collectorsUpdateManyMutationInput, collectorsUncheckedUpdateManyInput>
    /**
     * Filter which collectors to update
     */
    where?: collectorsWhereInput
    /**
     * Limit how many collectors to update.
     */
    limit?: number
  }

  /**
   * collectors upsert
   */
  export type collectorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectors
     */
    select?: collectorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collectors
     */
    omit?: collectorsOmit<ExtArgs> | null
    /**
     * The filter to search for the collectors to update in case it exists.
     */
    where: collectorsWhereUniqueInput
    /**
     * In case the collectors found by the `where` argument doesn't exist, create a new collectors with this data.
     */
    create: XOR<collectorsCreateInput, collectorsUncheckedCreateInput>
    /**
     * In case the collectors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<collectorsUpdateInput, collectorsUncheckedUpdateInput>
  }

  /**
   * collectors delete
   */
  export type collectorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectors
     */
    select?: collectorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collectors
     */
    omit?: collectorsOmit<ExtArgs> | null
    /**
     * Filter which collectors to delete.
     */
    where: collectorsWhereUniqueInput
  }

  /**
   * collectors deleteMany
   */
  export type collectorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collectors to delete
     */
    where?: collectorsWhereInput
    /**
     * Limit how many collectors to delete.
     */
    limit?: number
  }

  /**
   * collectors without action
   */
  export type collectorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectors
     */
    select?: collectorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the collectors
     */
    omit?: collectorsOmit<ExtArgs> | null
  }


  /**
   * Model log_mirror
   */

  export type AggregateLog_mirror = {
    _count: Log_mirrorCountAggregateOutputType | null
    _avg: Log_mirrorAvgAggregateOutputType | null
    _sum: Log_mirrorSumAggregateOutputType | null
    _min: Log_mirrorMinAggregateOutputType | null
    _max: Log_mirrorMaxAggregateOutputType | null
  }

  export type Log_mirrorAvgAggregateOutputType = {
    id: number | null
    collector_id: number | null
  }

  export type Log_mirrorSumAggregateOutputType = {
    id: number | null
    collector_id: number | null
  }

  export type Log_mirrorMinAggregateOutputType = {
    id: number | null
    collector_id: number | null
    received_at: Date | null
    hostname: string | null
    facility: string | null
    synced_at: Date | null
    event: string | null
    path: string | null
    file_folder: string | null
    size: string | null
    user: string | null
    ip: string | null
    message: string | null
    category: string | null
  }

  export type Log_mirrorMaxAggregateOutputType = {
    id: number | null
    collector_id: number | null
    received_at: Date | null
    hostname: string | null
    facility: string | null
    synced_at: Date | null
    event: string | null
    path: string | null
    file_folder: string | null
    size: string | null
    user: string | null
    ip: string | null
    message: string | null
    category: string | null
  }

  export type Log_mirrorCountAggregateOutputType = {
    id: number
    collector_id: number
    received_at: number
    hostname: number
    facility: number
    synced_at: number
    event: number
    path: number
    file_folder: number
    size: number
    user: number
    ip: number
    message: number
    category: number
    _all: number
  }


  export type Log_mirrorAvgAggregateInputType = {
    id?: true
    collector_id?: true
  }

  export type Log_mirrorSumAggregateInputType = {
    id?: true
    collector_id?: true
  }

  export type Log_mirrorMinAggregateInputType = {
    id?: true
    collector_id?: true
    received_at?: true
    hostname?: true
    facility?: true
    synced_at?: true
    event?: true
    path?: true
    file_folder?: true
    size?: true
    user?: true
    ip?: true
    message?: true
    category?: true
  }

  export type Log_mirrorMaxAggregateInputType = {
    id?: true
    collector_id?: true
    received_at?: true
    hostname?: true
    facility?: true
    synced_at?: true
    event?: true
    path?: true
    file_folder?: true
    size?: true
    user?: true
    ip?: true
    message?: true
    category?: true
  }

  export type Log_mirrorCountAggregateInputType = {
    id?: true
    collector_id?: true
    received_at?: true
    hostname?: true
    facility?: true
    synced_at?: true
    event?: true
    path?: true
    file_folder?: true
    size?: true
    user?: true
    ip?: true
    message?: true
    category?: true
    _all?: true
  }

  export type Log_mirrorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_mirror to aggregate.
     */
    where?: log_mirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_mirrors to fetch.
     */
    orderBy?: log_mirrorOrderByWithRelationInput | log_mirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: log_mirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_mirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_mirrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned log_mirrors
    **/
    _count?: true | Log_mirrorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Log_mirrorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Log_mirrorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_mirrorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_mirrorMaxAggregateInputType
  }

  export type GetLog_mirrorAggregateType<T extends Log_mirrorAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_mirror]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_mirror[P]>
      : GetScalarType<T[P], AggregateLog_mirror[P]>
  }




  export type log_mirrorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_mirrorWhereInput
    orderBy?: log_mirrorOrderByWithAggregationInput | log_mirrorOrderByWithAggregationInput[]
    by: Log_mirrorScalarFieldEnum[] | Log_mirrorScalarFieldEnum
    having?: log_mirrorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_mirrorCountAggregateInputType | true
    _avg?: Log_mirrorAvgAggregateInputType
    _sum?: Log_mirrorSumAggregateInputType
    _min?: Log_mirrorMinAggregateInputType
    _max?: Log_mirrorMaxAggregateInputType
  }

  export type Log_mirrorGroupByOutputType = {
    id: number
    collector_id: number
    received_at: Date | null
    hostname: string | null
    facility: string | null
    synced_at: Date | null
    event: string | null
    path: string | null
    file_folder: string | null
    size: string | null
    user: string | null
    ip: string | null
    message: string
    category: string | null
    _count: Log_mirrorCountAggregateOutputType | null
    _avg: Log_mirrorAvgAggregateOutputType | null
    _sum: Log_mirrorSumAggregateOutputType | null
    _min: Log_mirrorMinAggregateOutputType | null
    _max: Log_mirrorMaxAggregateOutputType | null
  }

  type GetLog_mirrorGroupByPayload<T extends log_mirrorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Log_mirrorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_mirrorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_mirrorGroupByOutputType[P]>
            : GetScalarType<T[P], Log_mirrorGroupByOutputType[P]>
        }
      >
    >


  export type log_mirrorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collector_id?: boolean
    received_at?: boolean
    hostname?: boolean
    facility?: boolean
    synced_at?: boolean
    event?: boolean
    path?: boolean
    file_folder?: boolean
    size?: boolean
    user?: boolean
    ip?: boolean
    message?: boolean
    category?: boolean
  }, ExtArgs["result"]["log_mirror"]>



  export type log_mirrorSelectScalar = {
    id?: boolean
    collector_id?: boolean
    received_at?: boolean
    hostname?: boolean
    facility?: boolean
    synced_at?: boolean
    event?: boolean
    path?: boolean
    file_folder?: boolean
    size?: boolean
    user?: boolean
    ip?: boolean
    message?: boolean
    category?: boolean
  }

  export type log_mirrorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collector_id" | "received_at" | "hostname" | "facility" | "synced_at" | "event" | "path" | "file_folder" | "size" | "user" | "ip" | "message" | "category", ExtArgs["result"]["log_mirror"]>

  export type $log_mirrorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "log_mirror"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      collector_id: number
      received_at: Date | null
      hostname: string | null
      facility: string | null
      synced_at: Date | null
      event: string | null
      path: string | null
      file_folder: string | null
      size: string | null
      user: string | null
      ip: string | null
      message: string
      category: string | null
    }, ExtArgs["result"]["log_mirror"]>
    composites: {}
  }

  type log_mirrorGetPayload<S extends boolean | null | undefined | log_mirrorDefaultArgs> = $Result.GetResult<Prisma.$log_mirrorPayload, S>

  type log_mirrorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<log_mirrorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Log_mirrorCountAggregateInputType | true
    }

  export interface log_mirrorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['log_mirror'], meta: { name: 'log_mirror' } }
    /**
     * Find zero or one Log_mirror that matches the filter.
     * @param {log_mirrorFindUniqueArgs} args - Arguments to find a Log_mirror
     * @example
     * // Get one Log_mirror
     * const log_mirror = await prisma.log_mirror.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends log_mirrorFindUniqueArgs>(args: SelectSubset<T, log_mirrorFindUniqueArgs<ExtArgs>>): Prisma__log_mirrorClient<$Result.GetResult<Prisma.$log_mirrorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log_mirror that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {log_mirrorFindUniqueOrThrowArgs} args - Arguments to find a Log_mirror
     * @example
     * // Get one Log_mirror
     * const log_mirror = await prisma.log_mirror.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends log_mirrorFindUniqueOrThrowArgs>(args: SelectSubset<T, log_mirrorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__log_mirrorClient<$Result.GetResult<Prisma.$log_mirrorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_mirror that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_mirrorFindFirstArgs} args - Arguments to find a Log_mirror
     * @example
     * // Get one Log_mirror
     * const log_mirror = await prisma.log_mirror.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends log_mirrorFindFirstArgs>(args?: SelectSubset<T, log_mirrorFindFirstArgs<ExtArgs>>): Prisma__log_mirrorClient<$Result.GetResult<Prisma.$log_mirrorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_mirror that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_mirrorFindFirstOrThrowArgs} args - Arguments to find a Log_mirror
     * @example
     * // Get one Log_mirror
     * const log_mirror = await prisma.log_mirror.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends log_mirrorFindFirstOrThrowArgs>(args?: SelectSubset<T, log_mirrorFindFirstOrThrowArgs<ExtArgs>>): Prisma__log_mirrorClient<$Result.GetResult<Prisma.$log_mirrorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Log_mirrors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_mirrorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_mirrors
     * const log_mirrors = await prisma.log_mirror.findMany()
     * 
     * // Get first 10 Log_mirrors
     * const log_mirrors = await prisma.log_mirror.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const log_mirrorWithIdOnly = await prisma.log_mirror.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends log_mirrorFindManyArgs>(args?: SelectSubset<T, log_mirrorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_mirrorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log_mirror.
     * @param {log_mirrorCreateArgs} args - Arguments to create a Log_mirror.
     * @example
     * // Create one Log_mirror
     * const Log_mirror = await prisma.log_mirror.create({
     *   data: {
     *     // ... data to create a Log_mirror
     *   }
     * })
     * 
     */
    create<T extends log_mirrorCreateArgs>(args: SelectSubset<T, log_mirrorCreateArgs<ExtArgs>>): Prisma__log_mirrorClient<$Result.GetResult<Prisma.$log_mirrorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Log_mirrors.
     * @param {log_mirrorCreateManyArgs} args - Arguments to create many Log_mirrors.
     * @example
     * // Create many Log_mirrors
     * const log_mirror = await prisma.log_mirror.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends log_mirrorCreateManyArgs>(args?: SelectSubset<T, log_mirrorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log_mirror.
     * @param {log_mirrorDeleteArgs} args - Arguments to delete one Log_mirror.
     * @example
     * // Delete one Log_mirror
     * const Log_mirror = await prisma.log_mirror.delete({
     *   where: {
     *     // ... filter to delete one Log_mirror
     *   }
     * })
     * 
     */
    delete<T extends log_mirrorDeleteArgs>(args: SelectSubset<T, log_mirrorDeleteArgs<ExtArgs>>): Prisma__log_mirrorClient<$Result.GetResult<Prisma.$log_mirrorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log_mirror.
     * @param {log_mirrorUpdateArgs} args - Arguments to update one Log_mirror.
     * @example
     * // Update one Log_mirror
     * const log_mirror = await prisma.log_mirror.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends log_mirrorUpdateArgs>(args: SelectSubset<T, log_mirrorUpdateArgs<ExtArgs>>): Prisma__log_mirrorClient<$Result.GetResult<Prisma.$log_mirrorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Log_mirrors.
     * @param {log_mirrorDeleteManyArgs} args - Arguments to filter Log_mirrors to delete.
     * @example
     * // Delete a few Log_mirrors
     * const { count } = await prisma.log_mirror.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends log_mirrorDeleteManyArgs>(args?: SelectSubset<T, log_mirrorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_mirrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_mirrorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_mirrors
     * const log_mirror = await prisma.log_mirror.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends log_mirrorUpdateManyArgs>(args: SelectSubset<T, log_mirrorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log_mirror.
     * @param {log_mirrorUpsertArgs} args - Arguments to update or create a Log_mirror.
     * @example
     * // Update or create a Log_mirror
     * const log_mirror = await prisma.log_mirror.upsert({
     *   create: {
     *     // ... data to create a Log_mirror
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_mirror we want to update
     *   }
     * })
     */
    upsert<T extends log_mirrorUpsertArgs>(args: SelectSubset<T, log_mirrorUpsertArgs<ExtArgs>>): Prisma__log_mirrorClient<$Result.GetResult<Prisma.$log_mirrorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Log_mirrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_mirrorCountArgs} args - Arguments to filter Log_mirrors to count.
     * @example
     * // Count the number of Log_mirrors
     * const count = await prisma.log_mirror.count({
     *   where: {
     *     // ... the filter for the Log_mirrors we want to count
     *   }
     * })
    **/
    count<T extends log_mirrorCountArgs>(
      args?: Subset<T, log_mirrorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_mirrorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_mirror.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_mirrorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Log_mirrorAggregateArgs>(args: Subset<T, Log_mirrorAggregateArgs>): Prisma.PrismaPromise<GetLog_mirrorAggregateType<T>>

    /**
     * Group by Log_mirror.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_mirrorGroupByArgs} args - Group by arguments.
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
      T extends log_mirrorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: log_mirrorGroupByArgs['orderBy'] }
        : { orderBy?: log_mirrorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, log_mirrorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_mirrorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the log_mirror model
   */
  readonly fields: log_mirrorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for log_mirror.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__log_mirrorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the log_mirror model
   */
  interface log_mirrorFieldRefs {
    readonly id: FieldRef<"log_mirror", 'Int'>
    readonly collector_id: FieldRef<"log_mirror", 'Int'>
    readonly received_at: FieldRef<"log_mirror", 'DateTime'>
    readonly hostname: FieldRef<"log_mirror", 'String'>
    readonly facility: FieldRef<"log_mirror", 'String'>
    readonly synced_at: FieldRef<"log_mirror", 'DateTime'>
    readonly event: FieldRef<"log_mirror", 'String'>
    readonly path: FieldRef<"log_mirror", 'String'>
    readonly file_folder: FieldRef<"log_mirror", 'String'>
    readonly size: FieldRef<"log_mirror", 'String'>
    readonly user: FieldRef<"log_mirror", 'String'>
    readonly ip: FieldRef<"log_mirror", 'String'>
    readonly message: FieldRef<"log_mirror", 'String'>
    readonly category: FieldRef<"log_mirror", 'String'>
  }
    

  // Custom InputTypes
  /**
   * log_mirror findUnique
   */
  export type log_mirrorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_mirror
     */
    select?: log_mirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_mirror
     */
    omit?: log_mirrorOmit<ExtArgs> | null
    /**
     * Filter, which log_mirror to fetch.
     */
    where: log_mirrorWhereUniqueInput
  }

  /**
   * log_mirror findUniqueOrThrow
   */
  export type log_mirrorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_mirror
     */
    select?: log_mirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_mirror
     */
    omit?: log_mirrorOmit<ExtArgs> | null
    /**
     * Filter, which log_mirror to fetch.
     */
    where: log_mirrorWhereUniqueInput
  }

  /**
   * log_mirror findFirst
   */
  export type log_mirrorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_mirror
     */
    select?: log_mirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_mirror
     */
    omit?: log_mirrorOmit<ExtArgs> | null
    /**
     * Filter, which log_mirror to fetch.
     */
    where?: log_mirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_mirrors to fetch.
     */
    orderBy?: log_mirrorOrderByWithRelationInput | log_mirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_mirrors.
     */
    cursor?: log_mirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_mirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_mirrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_mirrors.
     */
    distinct?: Log_mirrorScalarFieldEnum | Log_mirrorScalarFieldEnum[]
  }

  /**
   * log_mirror findFirstOrThrow
   */
  export type log_mirrorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_mirror
     */
    select?: log_mirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_mirror
     */
    omit?: log_mirrorOmit<ExtArgs> | null
    /**
     * Filter, which log_mirror to fetch.
     */
    where?: log_mirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_mirrors to fetch.
     */
    orderBy?: log_mirrorOrderByWithRelationInput | log_mirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_mirrors.
     */
    cursor?: log_mirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_mirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_mirrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_mirrors.
     */
    distinct?: Log_mirrorScalarFieldEnum | Log_mirrorScalarFieldEnum[]
  }

  /**
   * log_mirror findMany
   */
  export type log_mirrorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_mirror
     */
    select?: log_mirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_mirror
     */
    omit?: log_mirrorOmit<ExtArgs> | null
    /**
     * Filter, which log_mirrors to fetch.
     */
    where?: log_mirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_mirrors to fetch.
     */
    orderBy?: log_mirrorOrderByWithRelationInput | log_mirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing log_mirrors.
     */
    cursor?: log_mirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_mirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_mirrors.
     */
    skip?: number
    distinct?: Log_mirrorScalarFieldEnum | Log_mirrorScalarFieldEnum[]
  }

  /**
   * log_mirror create
   */
  export type log_mirrorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_mirror
     */
    select?: log_mirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_mirror
     */
    omit?: log_mirrorOmit<ExtArgs> | null
    /**
     * The data needed to create a log_mirror.
     */
    data: XOR<log_mirrorCreateInput, log_mirrorUncheckedCreateInput>
  }

  /**
   * log_mirror createMany
   */
  export type log_mirrorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many log_mirrors.
     */
    data: log_mirrorCreateManyInput | log_mirrorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * log_mirror update
   */
  export type log_mirrorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_mirror
     */
    select?: log_mirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_mirror
     */
    omit?: log_mirrorOmit<ExtArgs> | null
    /**
     * The data needed to update a log_mirror.
     */
    data: XOR<log_mirrorUpdateInput, log_mirrorUncheckedUpdateInput>
    /**
     * Choose, which log_mirror to update.
     */
    where: log_mirrorWhereUniqueInput
  }

  /**
   * log_mirror updateMany
   */
  export type log_mirrorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update log_mirrors.
     */
    data: XOR<log_mirrorUpdateManyMutationInput, log_mirrorUncheckedUpdateManyInput>
    /**
     * Filter which log_mirrors to update
     */
    where?: log_mirrorWhereInput
    /**
     * Limit how many log_mirrors to update.
     */
    limit?: number
  }

  /**
   * log_mirror upsert
   */
  export type log_mirrorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_mirror
     */
    select?: log_mirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_mirror
     */
    omit?: log_mirrorOmit<ExtArgs> | null
    /**
     * The filter to search for the log_mirror to update in case it exists.
     */
    where: log_mirrorWhereUniqueInput
    /**
     * In case the log_mirror found by the `where` argument doesn't exist, create a new log_mirror with this data.
     */
    create: XOR<log_mirrorCreateInput, log_mirrorUncheckedCreateInput>
    /**
     * In case the log_mirror was found with the provided `where` argument, update it with this data.
     */
    update: XOR<log_mirrorUpdateInput, log_mirrorUncheckedUpdateInput>
  }

  /**
   * log_mirror delete
   */
  export type log_mirrorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_mirror
     */
    select?: log_mirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_mirror
     */
    omit?: log_mirrorOmit<ExtArgs> | null
    /**
     * Filter which log_mirror to delete.
     */
    where: log_mirrorWhereUniqueInput
  }

  /**
   * log_mirror deleteMany
   */
  export type log_mirrorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_mirrors to delete
     */
    where?: log_mirrorWhereInput
    /**
     * Limit how many log_mirrors to delete.
     */
    limit?: number
  }

  /**
   * log_mirror without action
   */
  export type log_mirrorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_mirror
     */
    select?: log_mirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_mirror
     */
    omit?: log_mirrorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CollectorsScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    username: 'username',
    password: 'password',
    database_name: 'database_name',
    status: 'status',
    created_at: 'created_at'
  };

  export type CollectorsScalarFieldEnum = (typeof CollectorsScalarFieldEnum)[keyof typeof CollectorsScalarFieldEnum]


  export const Log_mirrorScalarFieldEnum: {
    id: 'id',
    collector_id: 'collector_id',
    received_at: 'received_at',
    hostname: 'hostname',
    facility: 'facility',
    synced_at: 'synced_at',
    event: 'event',
    path: 'path',
    file_folder: 'file_folder',
    size: 'size',
    user: 'user',
    ip: 'ip',
    message: 'message',
    category: 'category'
  };

  export type Log_mirrorScalarFieldEnum = (typeof Log_mirrorScalarFieldEnum)[keyof typeof Log_mirrorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const collectorsOrderByRelevanceFieldEnum: {
    ip: 'ip',
    username: 'username',
    password: 'password',
    database_name: 'database_name'
  };

  export type collectorsOrderByRelevanceFieldEnum = (typeof collectorsOrderByRelevanceFieldEnum)[keyof typeof collectorsOrderByRelevanceFieldEnum]


  export const log_mirrorOrderByRelevanceFieldEnum: {
    hostname: 'hostname',
    facility: 'facility',
    event: 'event',
    path: 'path',
    file_folder: 'file_folder',
    size: 'size',
    user: 'user',
    ip: 'ip',
    message: 'message',
    category: 'category'
  };

  export type log_mirrorOrderByRelevanceFieldEnum = (typeof log_mirrorOrderByRelevanceFieldEnum)[keyof typeof log_mirrorOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'collectors_status'
   */
  export type Enumcollectors_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'collectors_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type collectorsWhereInput = {
    AND?: collectorsWhereInput | collectorsWhereInput[]
    OR?: collectorsWhereInput[]
    NOT?: collectorsWhereInput | collectorsWhereInput[]
    id?: IntFilter<"collectors"> | number
    ip?: StringFilter<"collectors"> | string
    username?: StringFilter<"collectors"> | string
    password?: StringFilter<"collectors"> | string
    database_name?: StringFilter<"collectors"> | string
    status?: Enumcollectors_statusNullableFilter<"collectors"> | $Enums.collectors_status | null
    created_at?: DateTimeNullableFilter<"collectors"> | Date | string | null
  }

  export type collectorsOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    username?: SortOrder
    password?: SortOrder
    database_name?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _relevance?: collectorsOrderByRelevanceInput
  }

  export type collectorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: collectorsWhereInput | collectorsWhereInput[]
    OR?: collectorsWhereInput[]
    NOT?: collectorsWhereInput | collectorsWhereInput[]
    ip?: StringFilter<"collectors"> | string
    username?: StringFilter<"collectors"> | string
    password?: StringFilter<"collectors"> | string
    database_name?: StringFilter<"collectors"> | string
    status?: Enumcollectors_statusNullableFilter<"collectors"> | $Enums.collectors_status | null
    created_at?: DateTimeNullableFilter<"collectors"> | Date | string | null
  }, "id">

  export type collectorsOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    username?: SortOrder
    password?: SortOrder
    database_name?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: collectorsCountOrderByAggregateInput
    _avg?: collectorsAvgOrderByAggregateInput
    _max?: collectorsMaxOrderByAggregateInput
    _min?: collectorsMinOrderByAggregateInput
    _sum?: collectorsSumOrderByAggregateInput
  }

  export type collectorsScalarWhereWithAggregatesInput = {
    AND?: collectorsScalarWhereWithAggregatesInput | collectorsScalarWhereWithAggregatesInput[]
    OR?: collectorsScalarWhereWithAggregatesInput[]
    NOT?: collectorsScalarWhereWithAggregatesInput | collectorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"collectors"> | number
    ip?: StringWithAggregatesFilter<"collectors"> | string
    username?: StringWithAggregatesFilter<"collectors"> | string
    password?: StringWithAggregatesFilter<"collectors"> | string
    database_name?: StringWithAggregatesFilter<"collectors"> | string
    status?: Enumcollectors_statusNullableWithAggregatesFilter<"collectors"> | $Enums.collectors_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"collectors"> | Date | string | null
  }

  export type log_mirrorWhereInput = {
    AND?: log_mirrorWhereInput | log_mirrorWhereInput[]
    OR?: log_mirrorWhereInput[]
    NOT?: log_mirrorWhereInput | log_mirrorWhereInput[]
    id?: IntFilter<"log_mirror"> | number
    collector_id?: IntFilter<"log_mirror"> | number
    received_at?: DateTimeNullableFilter<"log_mirror"> | Date | string | null
    hostname?: StringNullableFilter<"log_mirror"> | string | null
    facility?: StringNullableFilter<"log_mirror"> | string | null
    synced_at?: DateTimeNullableFilter<"log_mirror"> | Date | string | null
    event?: StringNullableFilter<"log_mirror"> | string | null
    path?: StringNullableFilter<"log_mirror"> | string | null
    file_folder?: StringNullableFilter<"log_mirror"> | string | null
    size?: StringNullableFilter<"log_mirror"> | string | null
    user?: StringNullableFilter<"log_mirror"> | string | null
    ip?: StringNullableFilter<"log_mirror"> | string | null
    message?: StringFilter<"log_mirror"> | string
    category?: StringNullableFilter<"log_mirror"> | string | null
  }

  export type log_mirrorOrderByWithRelationInput = {
    id?: SortOrder
    collector_id?: SortOrder
    received_at?: SortOrderInput | SortOrder
    hostname?: SortOrderInput | SortOrder
    facility?: SortOrderInput | SortOrder
    synced_at?: SortOrderInput | SortOrder
    event?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    file_folder?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    user?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    message?: SortOrder
    category?: SortOrderInput | SortOrder
    _relevance?: log_mirrorOrderByRelevanceInput
  }

  export type log_mirrorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: log_mirrorWhereInput | log_mirrorWhereInput[]
    OR?: log_mirrorWhereInput[]
    NOT?: log_mirrorWhereInput | log_mirrorWhereInput[]
    collector_id?: IntFilter<"log_mirror"> | number
    received_at?: DateTimeNullableFilter<"log_mirror"> | Date | string | null
    hostname?: StringNullableFilter<"log_mirror"> | string | null
    facility?: StringNullableFilter<"log_mirror"> | string | null
    synced_at?: DateTimeNullableFilter<"log_mirror"> | Date | string | null
    event?: StringNullableFilter<"log_mirror"> | string | null
    path?: StringNullableFilter<"log_mirror"> | string | null
    file_folder?: StringNullableFilter<"log_mirror"> | string | null
    size?: StringNullableFilter<"log_mirror"> | string | null
    user?: StringNullableFilter<"log_mirror"> | string | null
    ip?: StringNullableFilter<"log_mirror"> | string | null
    message?: StringFilter<"log_mirror"> | string
    category?: StringNullableFilter<"log_mirror"> | string | null
  }, "id">

  export type log_mirrorOrderByWithAggregationInput = {
    id?: SortOrder
    collector_id?: SortOrder
    received_at?: SortOrderInput | SortOrder
    hostname?: SortOrderInput | SortOrder
    facility?: SortOrderInput | SortOrder
    synced_at?: SortOrderInput | SortOrder
    event?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    file_folder?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    user?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    message?: SortOrder
    category?: SortOrderInput | SortOrder
    _count?: log_mirrorCountOrderByAggregateInput
    _avg?: log_mirrorAvgOrderByAggregateInput
    _max?: log_mirrorMaxOrderByAggregateInput
    _min?: log_mirrorMinOrderByAggregateInput
    _sum?: log_mirrorSumOrderByAggregateInput
  }

  export type log_mirrorScalarWhereWithAggregatesInput = {
    AND?: log_mirrorScalarWhereWithAggregatesInput | log_mirrorScalarWhereWithAggregatesInput[]
    OR?: log_mirrorScalarWhereWithAggregatesInput[]
    NOT?: log_mirrorScalarWhereWithAggregatesInput | log_mirrorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"log_mirror"> | number
    collector_id?: IntWithAggregatesFilter<"log_mirror"> | number
    received_at?: DateTimeNullableWithAggregatesFilter<"log_mirror"> | Date | string | null
    hostname?: StringNullableWithAggregatesFilter<"log_mirror"> | string | null
    facility?: StringNullableWithAggregatesFilter<"log_mirror"> | string | null
    synced_at?: DateTimeNullableWithAggregatesFilter<"log_mirror"> | Date | string | null
    event?: StringNullableWithAggregatesFilter<"log_mirror"> | string | null
    path?: StringNullableWithAggregatesFilter<"log_mirror"> | string | null
    file_folder?: StringNullableWithAggregatesFilter<"log_mirror"> | string | null
    size?: StringNullableWithAggregatesFilter<"log_mirror"> | string | null
    user?: StringNullableWithAggregatesFilter<"log_mirror"> | string | null
    ip?: StringNullableWithAggregatesFilter<"log_mirror"> | string | null
    message?: StringWithAggregatesFilter<"log_mirror"> | string
    category?: StringNullableWithAggregatesFilter<"log_mirror"> | string | null
  }

  export type collectorsCreateInput = {
    ip: string
    username: string
    password: string
    database_name?: string
    status?: $Enums.collectors_status | null
    created_at?: Date | string | null
  }

  export type collectorsUncheckedCreateInput = {
    id?: number
    ip: string
    username: string
    password: string
    database_name?: string
    status?: $Enums.collectors_status | null
    created_at?: Date | string | null
  }

  export type collectorsUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumcollectors_statusFieldUpdateOperationsInput | $Enums.collectors_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type collectorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumcollectors_statusFieldUpdateOperationsInput | $Enums.collectors_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type collectorsCreateManyInput = {
    id?: number
    ip: string
    username: string
    password: string
    database_name?: string
    status?: $Enums.collectors_status | null
    created_at?: Date | string | null
  }

  export type collectorsUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumcollectors_statusFieldUpdateOperationsInput | $Enums.collectors_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type collectorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumcollectors_statusFieldUpdateOperationsInput | $Enums.collectors_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type log_mirrorCreateInput = {
    collector_id: number
    received_at?: Date | string | null
    hostname?: string | null
    facility?: string | null
    synced_at?: Date | string | null
    event?: string | null
    path?: string | null
    file_folder?: string | null
    size?: string | null
    user?: string | null
    ip?: string | null
    message: string
    category?: string | null
  }

  export type log_mirrorUncheckedCreateInput = {
    id?: number
    collector_id: number
    received_at?: Date | string | null
    hostname?: string | null
    facility?: string | null
    synced_at?: Date | string | null
    event?: string | null
    path?: string | null
    file_folder?: string | null
    size?: string | null
    user?: string | null
    ip?: string | null
    message: string
    category?: string | null
  }

  export type log_mirrorUpdateInput = {
    collector_id?: IntFieldUpdateOperationsInput | number
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    synced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    file_folder?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type log_mirrorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    collector_id?: IntFieldUpdateOperationsInput | number
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    synced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    file_folder?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type log_mirrorCreateManyInput = {
    id?: number
    collector_id: number
    received_at?: Date | string | null
    hostname?: string | null
    facility?: string | null
    synced_at?: Date | string | null
    event?: string | null
    path?: string | null
    file_folder?: string | null
    size?: string | null
    user?: string | null
    ip?: string | null
    message: string
    category?: string | null
  }

  export type log_mirrorUpdateManyMutationInput = {
    collector_id?: IntFieldUpdateOperationsInput | number
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    synced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    file_folder?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type log_mirrorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    collector_id?: IntFieldUpdateOperationsInput | number
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    facility?: NullableStringFieldUpdateOperationsInput | string | null
    synced_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    file_folder?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumcollectors_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.collectors_status | Enumcollectors_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.collectors_status[] | null
    notIn?: $Enums.collectors_status[] | null
    not?: NestedEnumcollectors_statusNullableFilter<$PrismaModel> | $Enums.collectors_status | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type collectorsOrderByRelevanceInput = {
    fields: collectorsOrderByRelevanceFieldEnum | collectorsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type collectorsCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    username?: SortOrder
    password?: SortOrder
    database_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type collectorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type collectorsMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    username?: SortOrder
    password?: SortOrder
    database_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type collectorsMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    username?: SortOrder
    password?: SortOrder
    database_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type collectorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumcollectors_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.collectors_status | Enumcollectors_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.collectors_status[] | null
    notIn?: $Enums.collectors_status[] | null
    not?: NestedEnumcollectors_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.collectors_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcollectors_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumcollectors_statusNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type log_mirrorOrderByRelevanceInput = {
    fields: log_mirrorOrderByRelevanceFieldEnum | log_mirrorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type log_mirrorCountOrderByAggregateInput = {
    id?: SortOrder
    collector_id?: SortOrder
    received_at?: SortOrder
    hostname?: SortOrder
    facility?: SortOrder
    synced_at?: SortOrder
    event?: SortOrder
    path?: SortOrder
    file_folder?: SortOrder
    size?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    message?: SortOrder
    category?: SortOrder
  }

  export type log_mirrorAvgOrderByAggregateInput = {
    id?: SortOrder
    collector_id?: SortOrder
  }

  export type log_mirrorMaxOrderByAggregateInput = {
    id?: SortOrder
    collector_id?: SortOrder
    received_at?: SortOrder
    hostname?: SortOrder
    facility?: SortOrder
    synced_at?: SortOrder
    event?: SortOrder
    path?: SortOrder
    file_folder?: SortOrder
    size?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    message?: SortOrder
    category?: SortOrder
  }

  export type log_mirrorMinOrderByAggregateInput = {
    id?: SortOrder
    collector_id?: SortOrder
    received_at?: SortOrder
    hostname?: SortOrder
    facility?: SortOrder
    synced_at?: SortOrder
    event?: SortOrder
    path?: SortOrder
    file_folder?: SortOrder
    size?: SortOrder
    user?: SortOrder
    ip?: SortOrder
    message?: SortOrder
    category?: SortOrder
  }

  export type log_mirrorSumOrderByAggregateInput = {
    id?: SortOrder
    collector_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumcollectors_statusFieldUpdateOperationsInput = {
    set?: $Enums.collectors_status | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumcollectors_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.collectors_status | Enumcollectors_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.collectors_status[] | null
    notIn?: $Enums.collectors_status[] | null
    not?: NestedEnumcollectors_statusNullableFilter<$PrismaModel> | $Enums.collectors_status | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumcollectors_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.collectors_status | Enumcollectors_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.collectors_status[] | null
    notIn?: $Enums.collectors_status[] | null
    not?: NestedEnumcollectors_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.collectors_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcollectors_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumcollectors_statusNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export const dmmf: runtime.BaseDMMF
}