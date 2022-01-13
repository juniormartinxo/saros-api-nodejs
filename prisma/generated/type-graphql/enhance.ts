import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Schools: crudResolvers.SchoolsCrudResolver,
  Shifts: crudResolvers.ShiftsCrudResolver,
  Schedules: crudResolvers.SchedulesCrudResolver,
  Educations: crudResolvers.EducationsCrudResolver,
  Subjects: crudResolvers.SubjectsCrudResolver,
  Teachers: crudResolvers.TeachersCrudResolver,
  Classes: crudResolvers.ClassesCrudResolver,
  Users: crudResolvers.UsersCrudResolver,
  Timesheets: crudResolvers.TimesheetsCrudResolver,
  Curriculums: crudResolvers.CurriculumsCrudResolver
};
const actionResolversMap = {
  Schools: {
    findUniqueSchools: actionResolvers.FindUniqueSchoolsResolver,
    findFirstSchools: actionResolvers.FindFirstSchoolsResolver,
    findManySchools: actionResolvers.FindManySchoolsResolver,
    createSchools: actionResolvers.CreateSchoolsResolver,
    createManySchools: actionResolvers.CreateManySchoolsResolver,
    deleteSchools: actionResolvers.DeleteSchoolsResolver,
    updateSchools: actionResolvers.UpdateSchoolsResolver,
    deleteManySchools: actionResolvers.DeleteManySchoolsResolver,
    updateManySchools: actionResolvers.UpdateManySchoolsResolver,
    upsertSchools: actionResolvers.UpsertSchoolsResolver,
    aggregateSchools: actionResolvers.AggregateSchoolsResolver,
    groupBySchools: actionResolvers.GroupBySchoolsResolver
  },
  Shifts: {
    findUniqueShifts: actionResolvers.FindUniqueShiftsResolver,
    findFirstShifts: actionResolvers.FindFirstShiftsResolver,
    findManyShifts: actionResolvers.FindManyShiftsResolver,
    createShifts: actionResolvers.CreateShiftsResolver,
    createManyShifts: actionResolvers.CreateManyShiftsResolver,
    deleteShifts: actionResolvers.DeleteShiftsResolver,
    updateShifts: actionResolvers.UpdateShiftsResolver,
    deleteManyShifts: actionResolvers.DeleteManyShiftsResolver,
    updateManyShifts: actionResolvers.UpdateManyShiftsResolver,
    upsertShifts: actionResolvers.UpsertShiftsResolver,
    aggregateShifts: actionResolvers.AggregateShiftsResolver,
    groupByShifts: actionResolvers.GroupByShiftsResolver
  },
  Schedules: {
    findUniqueSchedules: actionResolvers.FindUniqueSchedulesResolver,
    findFirstSchedules: actionResolvers.FindFirstSchedulesResolver,
    findManySchedules: actionResolvers.FindManySchedulesResolver,
    createSchedules: actionResolvers.CreateSchedulesResolver,
    createManySchedules: actionResolvers.CreateManySchedulesResolver,
    deleteSchedules: actionResolvers.DeleteSchedulesResolver,
    updateSchedules: actionResolvers.UpdateSchedulesResolver,
    deleteManySchedules: actionResolvers.DeleteManySchedulesResolver,
    updateManySchedules: actionResolvers.UpdateManySchedulesResolver,
    upsertSchedules: actionResolvers.UpsertSchedulesResolver,
    aggregateSchedules: actionResolvers.AggregateSchedulesResolver,
    groupBySchedules: actionResolvers.GroupBySchedulesResolver
  },
  Educations: {
    findUniqueEducations: actionResolvers.FindUniqueEducationsResolver,
    findFirstEducations: actionResolvers.FindFirstEducationsResolver,
    findManyEducations: actionResolvers.FindManyEducationsResolver,
    createEducations: actionResolvers.CreateEducationsResolver,
    createManyEducations: actionResolvers.CreateManyEducationsResolver,
    deleteEducations: actionResolvers.DeleteEducationsResolver,
    updateEducations: actionResolvers.UpdateEducationsResolver,
    deleteManyEducations: actionResolvers.DeleteManyEducationsResolver,
    updateManyEducations: actionResolvers.UpdateManyEducationsResolver,
    upsertEducations: actionResolvers.UpsertEducationsResolver,
    aggregateEducations: actionResolvers.AggregateEducationsResolver,
    groupByEducations: actionResolvers.GroupByEducationsResolver
  },
  Subjects: {
    findUniqueSubjects: actionResolvers.FindUniqueSubjectsResolver,
    findFirstSubjects: actionResolvers.FindFirstSubjectsResolver,
    findManySubjects: actionResolvers.FindManySubjectsResolver,
    createSubjects: actionResolvers.CreateSubjectsResolver,
    createManySubjects: actionResolvers.CreateManySubjectsResolver,
    deleteSubjects: actionResolvers.DeleteSubjectsResolver,
    updateSubjects: actionResolvers.UpdateSubjectsResolver,
    deleteManySubjects: actionResolvers.DeleteManySubjectsResolver,
    updateManySubjects: actionResolvers.UpdateManySubjectsResolver,
    upsertSubjects: actionResolvers.UpsertSubjectsResolver,
    aggregateSubjects: actionResolvers.AggregateSubjectsResolver,
    groupBySubjects: actionResolvers.GroupBySubjectsResolver
  },
  Teachers: {
    findUniqueTeachers: actionResolvers.FindUniqueTeachersResolver,
    findFirstTeachers: actionResolvers.FindFirstTeachersResolver,
    findManyTeachers: actionResolvers.FindManyTeachersResolver,
    createTeachers: actionResolvers.CreateTeachersResolver,
    createManyTeachers: actionResolvers.CreateManyTeachersResolver,
    deleteTeachers: actionResolvers.DeleteTeachersResolver,
    updateTeachers: actionResolvers.UpdateTeachersResolver,
    deleteManyTeachers: actionResolvers.DeleteManyTeachersResolver,
    updateManyTeachers: actionResolvers.UpdateManyTeachersResolver,
    upsertTeachers: actionResolvers.UpsertTeachersResolver,
    aggregateTeachers: actionResolvers.AggregateTeachersResolver,
    groupByTeachers: actionResolvers.GroupByTeachersResolver
  },
  Classes: {
    findUniqueClasses: actionResolvers.FindUniqueClassesResolver,
    findFirstClasses: actionResolvers.FindFirstClassesResolver,
    findManyClasses: actionResolvers.FindManyClassesResolver,
    createClasses: actionResolvers.CreateClassesResolver,
    createManyClasses: actionResolvers.CreateManyClassesResolver,
    deleteClasses: actionResolvers.DeleteClassesResolver,
    updateClasses: actionResolvers.UpdateClassesResolver,
    deleteManyClasses: actionResolvers.DeleteManyClassesResolver,
    updateManyClasses: actionResolvers.UpdateManyClassesResolver,
    upsertClasses: actionResolvers.UpsertClassesResolver,
    aggregateClasses: actionResolvers.AggregateClassesResolver,
    groupByClasses: actionResolvers.GroupByClassesResolver
  },
  Users: {
    findUniqueUsers: actionResolvers.FindUniqueUsersResolver,
    findFirstUsers: actionResolvers.FindFirstUsersResolver,
    findManyUsers: actionResolvers.FindManyUsersResolver,
    createUsers: actionResolvers.CreateUsersResolver,
    createManyUsers: actionResolvers.CreateManyUsersResolver,
    deleteUsers: actionResolvers.DeleteUsersResolver,
    updateUsers: actionResolvers.UpdateUsersResolver,
    deleteManyUsers: actionResolvers.DeleteManyUsersResolver,
    updateManyUsers: actionResolvers.UpdateManyUsersResolver,
    upsertUsers: actionResolvers.UpsertUsersResolver,
    aggregateUsers: actionResolvers.AggregateUsersResolver,
    groupByUsers: actionResolvers.GroupByUsersResolver
  },
  Timesheets: {
    findUniqueTimesheets: actionResolvers.FindUniqueTimesheetsResolver,
    findFirstTimesheets: actionResolvers.FindFirstTimesheetsResolver,
    findManyTimesheets: actionResolvers.FindManyTimesheetsResolver,
    createTimesheets: actionResolvers.CreateTimesheetsResolver,
    createManyTimesheets: actionResolvers.CreateManyTimesheetsResolver,
    deleteTimesheets: actionResolvers.DeleteTimesheetsResolver,
    updateTimesheets: actionResolvers.UpdateTimesheetsResolver,
    deleteManyTimesheets: actionResolvers.DeleteManyTimesheetsResolver,
    updateManyTimesheets: actionResolvers.UpdateManyTimesheetsResolver,
    upsertTimesheets: actionResolvers.UpsertTimesheetsResolver,
    aggregateTimesheets: actionResolvers.AggregateTimesheetsResolver,
    groupByTimesheets: actionResolvers.GroupByTimesheetsResolver
  },
  Curriculums: {
    findUniqueCurriculums: actionResolvers.FindUniqueCurriculumsResolver,
    findFirstCurriculums: actionResolvers.FindFirstCurriculumsResolver,
    findManyCurriculums: actionResolvers.FindManyCurriculumsResolver,
    createCurriculums: actionResolvers.CreateCurriculumsResolver,
    createManyCurriculums: actionResolvers.CreateManyCurriculumsResolver,
    deleteCurriculums: actionResolvers.DeleteCurriculumsResolver,
    updateCurriculums: actionResolvers.UpdateCurriculumsResolver,
    deleteManyCurriculums: actionResolvers.DeleteManyCurriculumsResolver,
    updateManyCurriculums: actionResolvers.UpdateManyCurriculumsResolver,
    upsertCurriculums: actionResolvers.UpsertCurriculumsResolver,
    aggregateCurriculums: actionResolvers.AggregateCurriculumsResolver,
    groupByCurriculums: actionResolvers.GroupByCurriculumsResolver
  }
};
const crudResolversInfo = {
  Schools: ["findUniqueSchools", "findFirstSchools", "findManySchools", "createSchools", "createManySchools", "deleteSchools", "updateSchools", "deleteManySchools", "updateManySchools", "upsertSchools", "aggregateSchools", "groupBySchools"],
  Shifts: ["findUniqueShifts", "findFirstShifts", "findManyShifts", "createShifts", "createManyShifts", "deleteShifts", "updateShifts", "deleteManyShifts", "updateManyShifts", "upsertShifts", "aggregateShifts", "groupByShifts"],
  Schedules: ["findUniqueSchedules", "findFirstSchedules", "findManySchedules", "createSchedules", "createManySchedules", "deleteSchedules", "updateSchedules", "deleteManySchedules", "updateManySchedules", "upsertSchedules", "aggregateSchedules", "groupBySchedules"],
  Educations: ["findUniqueEducations", "findFirstEducations", "findManyEducations", "createEducations", "createManyEducations", "deleteEducations", "updateEducations", "deleteManyEducations", "updateManyEducations", "upsertEducations", "aggregateEducations", "groupByEducations"],
  Subjects: ["findUniqueSubjects", "findFirstSubjects", "findManySubjects", "createSubjects", "createManySubjects", "deleteSubjects", "updateSubjects", "deleteManySubjects", "updateManySubjects", "upsertSubjects", "aggregateSubjects", "groupBySubjects"],
  Teachers: ["findUniqueTeachers", "findFirstTeachers", "findManyTeachers", "createTeachers", "createManyTeachers", "deleteTeachers", "updateTeachers", "deleteManyTeachers", "updateManyTeachers", "upsertTeachers", "aggregateTeachers", "groupByTeachers"],
  Classes: ["findUniqueClasses", "findFirstClasses", "findManyClasses", "createClasses", "createManyClasses", "deleteClasses", "updateClasses", "deleteManyClasses", "updateManyClasses", "upsertClasses", "aggregateClasses", "groupByClasses"],
  Users: ["findUniqueUsers", "findFirstUsers", "findManyUsers", "createUsers", "createManyUsers", "deleteUsers", "updateUsers", "deleteManyUsers", "updateManyUsers", "upsertUsers", "aggregateUsers", "groupByUsers"],
  Timesheets: ["findUniqueTimesheets", "findFirstTimesheets", "findManyTimesheets", "createTimesheets", "createManyTimesheets", "deleteTimesheets", "updateTimesheets", "deleteManyTimesheets", "updateManyTimesheets", "upsertTimesheets", "aggregateTimesheets", "groupByTimesheets"],
  Curriculums: ["findUniqueCurriculums", "findFirstCurriculums", "findManyCurriculums", "createCurriculums", "createManyCurriculums", "deleteCurriculums", "updateCurriculums", "deleteManyCurriculums", "updateManyCurriculums", "upsertCurriculums", "aggregateCurriculums", "groupByCurriculums"]
};
const argsInfo = {
  FindUniqueSchoolsArgs: ["where"],
  FindFirstSchoolsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySchoolsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSchoolsArgs: ["data"],
  CreateManySchoolsArgs: ["data", "skipDuplicates"],
  DeleteSchoolsArgs: ["where"],
  UpdateSchoolsArgs: ["data", "where"],
  DeleteManySchoolsArgs: ["where"],
  UpdateManySchoolsArgs: ["data", "where"],
  UpsertSchoolsArgs: ["where", "create", "update"],
  AggregateSchoolsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySchoolsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueShiftsArgs: ["where"],
  FindFirstShiftsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyShiftsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateShiftsArgs: ["data"],
  CreateManyShiftsArgs: ["data", "skipDuplicates"],
  DeleteShiftsArgs: ["where"],
  UpdateShiftsArgs: ["data", "where"],
  DeleteManyShiftsArgs: ["where"],
  UpdateManyShiftsArgs: ["data", "where"],
  UpsertShiftsArgs: ["where", "create", "update"],
  AggregateShiftsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByShiftsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSchedulesArgs: ["where"],
  FindFirstSchedulesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySchedulesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSchedulesArgs: ["data"],
  CreateManySchedulesArgs: ["data", "skipDuplicates"],
  DeleteSchedulesArgs: ["where"],
  UpdateSchedulesArgs: ["data", "where"],
  DeleteManySchedulesArgs: ["where"],
  UpdateManySchedulesArgs: ["data", "where"],
  UpsertSchedulesArgs: ["where", "create", "update"],
  AggregateSchedulesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySchedulesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueEducationsArgs: ["where"],
  FindFirstEducationsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEducationsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateEducationsArgs: ["data"],
  CreateManyEducationsArgs: ["data", "skipDuplicates"],
  DeleteEducationsArgs: ["where"],
  UpdateEducationsArgs: ["data", "where"],
  DeleteManyEducationsArgs: ["where"],
  UpdateManyEducationsArgs: ["data", "where"],
  UpsertEducationsArgs: ["where", "create", "update"],
  AggregateEducationsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByEducationsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSubjectsArgs: ["where"],
  FindFirstSubjectsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySubjectsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSubjectsArgs: ["data"],
  CreateManySubjectsArgs: ["data", "skipDuplicates"],
  DeleteSubjectsArgs: ["where"],
  UpdateSubjectsArgs: ["data", "where"],
  DeleteManySubjectsArgs: ["where"],
  UpdateManySubjectsArgs: ["data", "where"],
  UpsertSubjectsArgs: ["where", "create", "update"],
  AggregateSubjectsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySubjectsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTeachersArgs: ["where"],
  FindFirstTeachersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTeachersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTeachersArgs: ["data"],
  CreateManyTeachersArgs: ["data", "skipDuplicates"],
  DeleteTeachersArgs: ["where"],
  UpdateTeachersArgs: ["data", "where"],
  DeleteManyTeachersArgs: ["where"],
  UpdateManyTeachersArgs: ["data", "where"],
  UpsertTeachersArgs: ["where", "create", "update"],
  AggregateTeachersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTeachersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueClassesArgs: ["where"],
  FindFirstClassesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyClassesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateClassesArgs: ["data"],
  CreateManyClassesArgs: ["data", "skipDuplicates"],
  DeleteClassesArgs: ["where"],
  UpdateClassesArgs: ["data", "where"],
  DeleteManyClassesArgs: ["where"],
  UpdateManyClassesArgs: ["data", "where"],
  UpsertClassesArgs: ["where", "create", "update"],
  AggregateClassesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByClassesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUsersArgs: ["where"],
  FindFirstUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUsersArgs: ["data"],
  CreateManyUsersArgs: ["data", "skipDuplicates"],
  DeleteUsersArgs: ["where"],
  UpdateUsersArgs: ["data", "where"],
  DeleteManyUsersArgs: ["where"],
  UpdateManyUsersArgs: ["data", "where"],
  UpsertUsersArgs: ["where", "create", "update"],
  AggregateUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTimesheetsArgs: ["where"],
  FindFirstTimesheetsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTimesheetsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTimesheetsArgs: ["data"],
  CreateManyTimesheetsArgs: ["data", "skipDuplicates"],
  DeleteTimesheetsArgs: ["where"],
  UpdateTimesheetsArgs: ["data", "where"],
  DeleteManyTimesheetsArgs: ["where"],
  UpdateManyTimesheetsArgs: ["data", "where"],
  UpsertTimesheetsArgs: ["where", "create", "update"],
  AggregateTimesheetsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTimesheetsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCurriculumsArgs: ["where"],
  FindFirstCurriculumsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCurriculumsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCurriculumsArgs: ["data"],
  CreateManyCurriculumsArgs: ["data", "skipDuplicates"],
  DeleteCurriculumsArgs: ["where"],
  UpdateCurriculumsArgs: ["data", "where"],
  DeleteManyCurriculumsArgs: ["where"],
  UpdateManyCurriculumsArgs: ["data", "where"],
  UpsertCurriculumsArgs: ["where", "create", "update"],
  AggregateCurriculumsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCurriculumsArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Schools: relationResolvers.SchoolsRelationsResolver,
  Shifts: relationResolvers.ShiftsRelationsResolver,
  Schedules: relationResolvers.SchedulesRelationsResolver,
  Educations: relationResolvers.EducationsRelationsResolver,
  Teachers: relationResolvers.TeachersRelationsResolver,
  Classes: relationResolvers.ClassesRelationsResolver
};
const relationResolversInfo = {
  Schools: ["Teachers"],
  Shifts: ["Schedules"],
  Schedules: ["shift"],
  Educations: ["Classes"],
  Teachers: ["school"],
  Classes: ["education"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Schools: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  Shifts: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  Schedules: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  Educations: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  Subjects: ["subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation"],
  Teachers: ["teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  Classes: ["class_id", "class_name", "class_teachers_ids", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  Users: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  Timesheets: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  Curriculums: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateSchools: ["_count", "_min", "_max"],
  SchoolsGroupBy: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation", "_count", "_min", "_max"],
  AggregateShifts: ["_count", "_avg", "_sum", "_min", "_max"],
  ShiftsGroupBy: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSchedules: ["_count", "_min", "_max"],
  SchedulesGroupBy: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation", "_count", "_min", "_max"],
  AggregateEducations: ["_count", "_min", "_max"],
  EducationsGroupBy: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation", "_count", "_min", "_max"],
  AggregateSubjects: ["_count", "_min", "_max"],
  SubjectsGroupBy: ["subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation", "_count", "_min", "_max"],
  AggregateTeachers: ["_count", "_min", "_max"],
  TeachersGroupBy: ["teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation", "_count", "_min", "_max"],
  AggregateClasses: ["_count", "_min", "_max"],
  ClassesGroupBy: ["class_id", "class_name", "class_teachers_ids", "class_education_id", "class_created_at", "class_updated_at", "class_situation", "_count", "_min", "_max"],
  AggregateUsers: ["_count", "_min", "_max"],
  UsersGroupBy: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation", "_count", "_min", "_max"],
  AggregateTimesheets: ["_count", "_min", "_max"],
  TimesheetsGroupBy: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation", "_count", "_min", "_max"],
  AggregateCurriculums: ["_count", "_min", "_max"],
  CurriculumsGroupBy: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  SchoolsCount: ["Teachers"],
  SchoolsCountAggregate: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation", "_all"],
  SchoolsMinAggregate: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  SchoolsMaxAggregate: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  ShiftsCount: ["Schedules"],
  ShiftsCountAggregate: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation", "_all"],
  ShiftsAvgAggregate: ["shift_number_class_per_day"],
  ShiftsSumAggregate: ["shift_number_class_per_day"],
  ShiftsMinAggregate: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  ShiftsMaxAggregate: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  SchedulesCountAggregate: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation", "_all"],
  SchedulesMinAggregate: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  SchedulesMaxAggregate: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  EducationsCount: ["Classes"],
  EducationsCountAggregate: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation", "_all"],
  EducationsMinAggregate: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  EducationsMaxAggregate: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  SubjectsCountAggregate: ["subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation", "_all"],
  SubjectsMinAggregate: ["subject_id", "subject_name", "subject_nickname", "subject_created_at", "subject_updated_at", "subject_situation"],
  SubjectsMaxAggregate: ["subject_id", "subject_name", "subject_nickname", "subject_created_at", "subject_updated_at", "subject_situation"],
  TeachersCountAggregate: ["teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation", "_all"],
  TeachersMinAggregate: ["teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  TeachersMaxAggregate: ["teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  ClassesCountAggregate: ["class_id", "class_name", "class_teachers_ids", "class_education_id", "class_created_at", "class_updated_at", "class_situation", "_all"],
  ClassesMinAggregate: ["class_id", "class_name", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  ClassesMaxAggregate: ["class_id", "class_name", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  UsersCountAggregate: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation", "_all"],
  UsersMinAggregate: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  UsersMaxAggregate: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  TimesheetsCountAggregate: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation", "_all"],
  TimesheetsMinAggregate: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  TimesheetsMaxAggregate: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  CurriculumsCountAggregate: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation", "_all"],
  CurriculumsMinAggregate: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  CurriculumsMaxAggregate: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  SchoolsWhereInput: ["AND", "OR", "NOT", "school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation", "Teachers"],
  SchoolsOrderByWithRelationInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation", "Teachers"],
  SchoolsWhereUniqueInput: ["school_id"],
  SchoolsOrderByWithAggregationInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation", "_count", "_max", "_min"],
  SchoolsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  ShiftsWhereInput: ["AND", "OR", "NOT", "shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation", "Schedules"],
  ShiftsOrderByWithRelationInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation", "Schedules"],
  ShiftsWhereUniqueInput: ["shift_id"],
  ShiftsOrderByWithAggregationInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation", "_count", "_avg", "_max", "_min", "_sum"],
  ShiftsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  SchedulesWhereInput: ["AND", "OR", "NOT", "schedule_id", "schedule_name", "schedule_start", "schedule_end", "shift", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  SchedulesOrderByWithRelationInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "shift", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  SchedulesWhereUniqueInput: ["schedule_id"],
  SchedulesOrderByWithAggregationInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation", "_count", "_max", "_min"],
  SchedulesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  EducationsWhereInput: ["AND", "OR", "NOT", "education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation", "Classes"],
  EducationsOrderByWithRelationInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation", "Classes"],
  EducationsWhereUniqueInput: ["education_id"],
  EducationsOrderByWithAggregationInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation", "_count", "_max", "_min"],
  EducationsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  SubjectsWhereInput: ["AND", "OR", "NOT", "subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation"],
  SubjectsOrderByWithRelationInput: ["subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation"],
  SubjectsWhereUniqueInput: ["subject_id"],
  SubjectsOrderByWithAggregationInput: ["subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation", "_count", "_max", "_min"],
  SubjectsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation"],
  TeachersWhereInput: ["AND", "OR", "NOT", "teacher_id", "school", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  TeachersOrderByWithRelationInput: ["teacher_id", "school", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  TeachersWhereUniqueInput: ["teacher_id", "teacher_email"],
  TeachersOrderByWithAggregationInput: ["teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation", "_count", "_max", "_min"],
  TeachersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  ClassesWhereInput: ["AND", "OR", "NOT", "class_id", "class_name", "class_teachers_ids", "education", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  ClassesOrderByWithRelationInput: ["class_id", "class_name", "class_teachers_ids", "education", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  ClassesWhereUniqueInput: ["class_id"],
  ClassesOrderByWithAggregationInput: ["class_id", "class_name", "class_teachers_ids", "class_education_id", "class_created_at", "class_updated_at", "class_situation", "_count", "_max", "_min"],
  ClassesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "class_id", "class_name", "class_teachers_ids", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  UsersWhereInput: ["AND", "OR", "NOT", "user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  UsersOrderByWithRelationInput: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  UsersWhereUniqueInput: ["user_id", "user_email"],
  UsersOrderByWithAggregationInput: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation", "_count", "_max", "_min"],
  UsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  TimesheetsWhereInput: ["AND", "OR", "NOT", "timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  TimesheetsOrderByWithRelationInput: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  TimesheetsWhereUniqueInput: ["timesheet_id"],
  TimesheetsOrderByWithAggregationInput: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation", "_count", "_max", "_min"],
  TimesheetsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  CurriculumsWhereInput: ["AND", "OR", "NOT", "curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  CurriculumsOrderByWithRelationInput: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  CurriculumsWhereUniqueInput: ["curriculum_id"],
  CurriculumsOrderByWithAggregationInput: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation", "_count", "_max", "_min"],
  CurriculumsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  SchoolsCreateInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation", "Teachers"],
  SchoolsUpdateInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation", "Teachers"],
  SchoolsCreateManyInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  SchoolsUpdateManyMutationInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  ShiftsCreateInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation", "Schedules"],
  ShiftsUpdateInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation", "Schedules"],
  ShiftsCreateManyInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  ShiftsUpdateManyMutationInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  SchedulesCreateInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_created_at", "schedule_updated_at", "schedule_situation", "shift"],
  SchedulesUpdateInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_created_at", "schedule_updated_at", "schedule_situation", "shift"],
  SchedulesCreateManyInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  SchedulesUpdateManyMutationInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  EducationsCreateInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation", "Classes"],
  EducationsUpdateInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation", "Classes"],
  EducationsCreateManyInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  EducationsUpdateManyMutationInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  SubjectsCreateInput: ["subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation"],
  SubjectsUpdateInput: ["subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation"],
  SubjectsCreateManyInput: ["subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation"],
  SubjectsUpdateManyMutationInput: ["subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation"],
  TeachersCreateInput: ["teacher_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation", "school"],
  TeachersUpdateInput: ["teacher_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation", "school"],
  TeachersCreateManyInput: ["teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  TeachersUpdateManyMutationInput: ["teacher_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  ClassesCreateInput: ["class_id", "class_name", "class_teachers_ids", "class_created_at", "class_updated_at", "class_situation", "education"],
  ClassesUpdateInput: ["class_id", "class_name", "class_teachers_ids", "class_created_at", "class_updated_at", "class_situation", "education"],
  ClassesCreateManyInput: ["class_id", "class_name", "class_teachers_ids", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  ClassesUpdateManyMutationInput: ["class_id", "class_name", "class_teachers_ids", "class_created_at", "class_updated_at", "class_situation"],
  UsersCreateInput: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  UsersUpdateInput: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  UsersCreateManyInput: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  UsersUpdateManyMutationInput: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  TimesheetsCreateInput: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  TimesheetsUpdateInput: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  TimesheetsCreateManyInput: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  TimesheetsUpdateManyMutationInput: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  CurriculumsCreateInput: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  CurriculumsUpdateInput: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  CurriculumsCreateManyInput: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  CurriculumsUpdateManyMutationInput: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumCategoryFilter: ["equals", "in", "notIn", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TeachersListRelationFilter: ["every", "some", "none"],
  TeachersOrderByRelationAggregateInput: ["_count"],
  SchoolsCountOrderByAggregateInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  SchoolsMaxOrderByAggregateInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  SchoolsMinOrderByAggregateInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumCategoryWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumShiftNamesFilter: ["equals", "in", "notIn", "not"],
  EnumDayOfTheWeekFilter: ["equals", "in", "notIn", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  SchedulesListRelationFilter: ["every", "some", "none"],
  SchedulesOrderByRelationAggregateInput: ["_count"],
  ShiftsCountOrderByAggregateInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  ShiftsAvgOrderByAggregateInput: ["shift_number_class_per_day"],
  ShiftsMaxOrderByAggregateInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  ShiftsMinOrderByAggregateInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  ShiftsSumOrderByAggregateInput: ["shift_number_class_per_day"],
  EnumShiftNamesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumDayOfTheWeekWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ShiftsRelationFilter: ["is", "isNot"],
  SchedulesCountOrderByAggregateInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  SchedulesMaxOrderByAggregateInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  SchedulesMinOrderByAggregateInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  ClassesListRelationFilter: ["every", "some", "none"],
  ClassesOrderByRelationAggregateInput: ["_count"],
  EducationsCountOrderByAggregateInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  EducationsMaxOrderByAggregateInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  EducationsMinOrderByAggregateInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  JsonFilter: ["equals", "not"],
  SubjectsCountOrderByAggregateInput: ["subject_id", "subject_name", "subject_nickname", "subject_educations", "subject_created_at", "subject_updated_at", "subject_situation"],
  SubjectsMaxOrderByAggregateInput: ["subject_id", "subject_name", "subject_nickname", "subject_created_at", "subject_updated_at", "subject_situation"],
  SubjectsMinOrderByAggregateInput: ["subject_id", "subject_name", "subject_nickname", "subject_created_at", "subject_updated_at", "subject_situation"],
  JsonWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  SchoolsRelationFilter: ["is", "isNot"],
  TeachersCountOrderByAggregateInput: ["teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  TeachersMaxOrderByAggregateInput: ["teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  TeachersMinOrderByAggregateInput: ["teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  EducationsRelationFilter: ["is", "isNot"],
  ClassesCountOrderByAggregateInput: ["class_id", "class_name", "class_teachers_ids", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  ClassesMaxOrderByAggregateInput: ["class_id", "class_name", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  ClassesMinOrderByAggregateInput: ["class_id", "class_name", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  UsersCountOrderByAggregateInput: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  UsersMaxOrderByAggregateInput: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  UsersMinOrderByAggregateInput: ["user_id", "user_name", "user_email", "user_salt", "user_password", "user_created_at", "user_updated_at", "user_situation"],
  TimesheetsCountOrderByAggregateInput: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  TimesheetsMaxOrderByAggregateInput: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  TimesheetsMinOrderByAggregateInput: ["timesheet_id", "timesheet_teacher_id", "timesheet_class_id", "timesheet_date", "timesheet_created_at", "timesheet_updated_at", "timesheet_situation"],
  CurriculumsCountOrderByAggregateInput: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  CurriculumsMaxOrderByAggregateInput: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  CurriculumsMinOrderByAggregateInput: ["curriculum_id", "curriculum_name", "curriculum_class_id", "curriculum_created_at", "curriculum_updated_at", "curriculum_situation"],
  TeachersCreateNestedManyWithoutSchoolInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumCategoryFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  TeachersUpdateManyWithoutSchoolInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SchedulesCreateNestedManyWithoutShiftInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumShiftNamesFieldUpdateOperationsInput: ["set"],
  EnumDayOfTheWeekFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BoolFieldUpdateOperationsInput: ["set"],
  SchedulesUpdateManyWithoutShiftInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ShiftsCreateNestedOneWithoutSchedulesInput: ["create", "connectOrCreate", "connect"],
  ShiftsUpdateOneRequiredWithoutSchedulesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ClassesCreateNestedManyWithoutEducationInput: ["create", "connectOrCreate", "createMany", "connect"],
  ClassesUpdateManyWithoutEducationInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SchoolsCreateNestedOneWithoutTeachersInput: ["create", "connectOrCreate", "connect"],
  SchoolsUpdateOneRequiredWithoutTeachersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EducationsCreateNestedOneWithoutClassesInput: ["create", "connectOrCreate", "connect"],
  EducationsUpdateOneRequiredWithoutClassesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumCategoryFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumCategoryWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumShiftNamesFilter: ["equals", "in", "notIn", "not"],
  NestedEnumDayOfTheWeekFilter: ["equals", "in", "notIn", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumShiftNamesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumDayOfTheWeekWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedJsonFilter: ["equals", "not"],
  TeachersCreateWithoutSchoolInput: ["teacher_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  TeachersCreateOrConnectWithoutSchoolInput: ["where", "create"],
  TeachersCreateManySchoolInputEnvelope: ["data", "skipDuplicates"],
  TeachersUpsertWithWhereUniqueWithoutSchoolInput: ["where", "update", "create"],
  TeachersUpdateWithWhereUniqueWithoutSchoolInput: ["where", "data"],
  TeachersUpdateManyWithWhereWithoutSchoolInput: ["where", "data"],
  TeachersScalarWhereInput: ["AND", "OR", "NOT", "teacher_id", "teacher_school_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  SchedulesCreateWithoutShiftInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  SchedulesCreateOrConnectWithoutShiftInput: ["where", "create"],
  SchedulesCreateManyShiftInputEnvelope: ["data", "skipDuplicates"],
  SchedulesUpsertWithWhereUniqueWithoutShiftInput: ["where", "update", "create"],
  SchedulesUpdateWithWhereUniqueWithoutShiftInput: ["where", "data"],
  SchedulesUpdateManyWithWhereWithoutShiftInput: ["where", "data"],
  SchedulesScalarWhereInput: ["AND", "OR", "NOT", "schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_shift_id", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  ShiftsCreateWithoutSchedulesInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  ShiftsCreateOrConnectWithoutSchedulesInput: ["where", "create"],
  ShiftsUpsertWithoutSchedulesInput: ["update", "create"],
  ShiftsUpdateWithoutSchedulesInput: ["shift_id", "shift_name", "shift_day_of_week", "shift_number_class_per_day", "shift_day_of_week_class", "shift_created_at", "shift_updated_at", "shitf_situation"],
  ClassesCreateWithoutEducationInput: ["class_id", "class_name", "class_teachers_ids", "class_created_at", "class_updated_at", "class_situation"],
  ClassesCreateOrConnectWithoutEducationInput: ["where", "create"],
  ClassesCreateManyEducationInputEnvelope: ["data", "skipDuplicates"],
  ClassesUpsertWithWhereUniqueWithoutEducationInput: ["where", "update", "create"],
  ClassesUpdateWithWhereUniqueWithoutEducationInput: ["where", "data"],
  ClassesUpdateManyWithWhereWithoutEducationInput: ["where", "data"],
  ClassesScalarWhereInput: ["AND", "OR", "NOT", "class_id", "class_name", "class_teachers_ids", "class_education_id", "class_created_at", "class_updated_at", "class_situation"],
  SchoolsCreateWithoutTeachersInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  SchoolsCreateOrConnectWithoutTeachersInput: ["where", "create"],
  SchoolsUpsertWithoutTeachersInput: ["update", "create"],
  SchoolsUpdateWithoutTeachersInput: ["school_id", "school_name", "school_category", "school_cnpj", "school_address", "school_number", "school_neighborhood", "school_city", "school_state", "school_cep", "school_phone", "school_email", "school_created_at", "school_updated_at", "school_situation"],
  EducationsCreateWithoutClassesInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  EducationsCreateOrConnectWithoutClassesInput: ["where", "create"],
  EducationsUpsertWithoutClassesInput: ["update", "create"],
  EducationsUpdateWithoutClassesInput: ["education_id", "education_name", "education_nickname", "education_created_at", "education_updated_at", "education_situation"],
  TeachersCreateManySchoolInput: ["teacher_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  TeachersUpdateWithoutSchoolInput: ["teacher_id", "teacher_name", "teacher_nickname", "teacher_email", "teacher_celphone", "teacher_disciplines_ids", "teacher_shifts_ids", "teacher_restrictions", "teacher_created_at", "teacher_updated_at", "teacher_situation"],
  SchedulesCreateManyShiftInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  SchedulesUpdateWithoutShiftInput: ["schedule_id", "schedule_name", "schedule_start", "schedule_end", "schedule_created_at", "schedule_updated_at", "schedule_situation"],
  ClassesCreateManyEducationInput: ["class_id", "class_name", "class_teachers_ids", "class_created_at", "class_updated_at", "class_situation"],
  ClassesUpdateWithoutEducationInput: ["class_id", "class_name", "class_teachers_ids", "class_created_at", "class_updated_at", "class_situation"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

