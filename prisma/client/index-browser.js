
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

exports.Prisma.SchoolsScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ShiftsScalarFieldEnum = makeEnum({
  shift_id: 'shift_id',
  shift_name: 'shift_name',
  shift_day_of_week: 'shift_day_of_week',
  shift_number_class_per_day: 'shift_number_class_per_day',
  shift_day_of_week_class: 'shift_day_of_week_class',
  shift_created_at: 'shift_created_at',
  shift_updated_at: 'shift_updated_at',
  shitf_situation: 'shitf_situation'
});

exports.Prisma.SchedulesScalarFieldEnum = makeEnum({
  schedule_id: 'schedule_id',
  schedule_name: 'schedule_name',
  schedule_start: 'schedule_start',
  schedule_end: 'schedule_end',
  schedule_shift_id: 'schedule_shift_id',
  schedule_situation: 'schedule_situation'
});

exports.Prisma.EducationsScalarFieldEnum = makeEnum({
  education_id: 'education_id',
  education_name: 'education_name',
  education_nickname: 'education_nickname',
  education_created_at: 'education_created_at',
  education_updated_at: 'education_updated_at',
  education_situation: 'education_situation'
});

exports.Prisma.SubjectsScalarFieldEnum = makeEnum({
  subject_id: 'subject_id',
  subject_name: 'subject_name',
  subject_nickname: 'subject_nickname',
  subject_educations: 'subject_educations',
  subject_created_at: 'subject_created_at',
  subject_updated_at: 'subject_updated_at',
  subject_situation: 'subject_situation'
});

exports.Prisma.TeachersScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ClassesScalarFieldEnum = makeEnum({
  class_id: 'class_id',
  class_name: 'class_name',
  class_teachers_ids: 'class_teachers_ids',
  class_education_id: 'class_education_id',
  class_situation: 'class_situation'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  user_id: 'user_id',
  user_name: 'user_name',
  user_email: 'user_email',
  user_salt: 'user_salt',
  user_password: 'user_password',
  user_created_at: 'user_created_at',
  user_updated_at: 'user_updated_at',
  user_situation: 'user_situation'
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
exports.Category = makeEnum({
  estadual: 'estadual',
  federal: 'federal',
  municipal: 'municipal',
  militar: 'militar',
  particular: 'particular'
});

exports.ShiftNames = makeEnum({
  matutino: 'matutino',
  vespertino: 'vespertino',
  noturno: 'noturno'
});

exports.DayOfTheWeek = makeEnum({
  domingo: 'domingo',
  segunda: 'segunda',
  terca: 'terca',
  quarta: 'quarta',
  quinta: 'quinta',
  sexta: 'sexta',
  sabado: 'sabado'
});

exports.Prisma.ModelName = makeEnum({
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
