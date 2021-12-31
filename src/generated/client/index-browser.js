
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.7.0
 * Query Engine version: 8746e055198f517658c08a0c426c7eec87f5a85f
 */
Prisma.prismaVersion = {
  client: "3.7.0",
  engine: "8746e055198f517658c08a0c426c7eec87f5a85f"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  user_id: 'user_id',
  user_name: 'user_name',
  user_email: 'user_email',
  user_salt: 'user_salt',
  user_password: 'user_password',
  user_created_at: 'user_created_at',
  user_updated_at: 'user_updated_at'
});

exports.Prisma.TeachersScalarFieldEnum = makeEnum({
  teacher_id: 'teacher_id',
  teacher_name: 'teacher_name',
  teacher_email: 'teacher_email',
  teacher_disciplines_ids: 'teacher_disciplines_ids',
  teacher_situation: 'teacher_situation',
  teacher_created_at: 'teacher_created_at',
  teacher_updated_at: 'teacher_updated_at'
});

exports.Prisma.DisciplinesScalarFieldEnum = makeEnum({
  discipline_id: 'discipline_id',
  discipline_name: 'discipline_name',
  discipline_situation: 'discipline_situation'
});

exports.Prisma.ClassesScalarFieldEnum = makeEnum({
  class_id: 'class_id',
  class_name: 'class_name',
  class_email: 'class_email',
  class_situation: 'class_situation'
});

exports.Prisma.TimesheetsScalarFieldEnum = makeEnum({
  timesheet_id: 'timesheet_id',
  timesheet_teacher_id: 'timesheet_teacher_id',
  timesheet_class_id: 'timesheet_class_id',
  timesheet_date: 'timesheet_date',
  timesheet_situation: 'timesheet_situation'
});

exports.Prisma.CurriculumsScalarFieldEnum = makeEnum({
  curriculum_id: 'curriculum_id',
  curriculum_name: 'curriculum_name',
  curriculum_class_id: 'curriculum_class_id',
  curriculum_situation: 'curriculum_situation'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: 'JsonNull'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});


exports.Prisma.ModelName = makeEnum({
  Users: 'Users',
  Teachers: 'Teachers',
  Disciplines: 'Disciplines',
  Classes: 'Classes',
  Timesheets: 'Timesheets',
  Curriculums: 'Curriculums'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
