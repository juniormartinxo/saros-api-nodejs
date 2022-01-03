-- CreateEnum
CREATE TYPE "Category" AS ENUM ('estadual', 'federal', 'municipal', 'militar', 'particular');

-- CreateEnum
CREATE TYPE "ShiftNames" AS ENUM ('matutino', 'vespertino', 'noturno');

-- CreateEnum
CREATE TYPE "DayOfTheWeek" AS ENUM ('domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado');

-- CreateTable
CREATE TABLE "Schools" (
    "school_id" TEXT NOT NULL,
    "school_name" TEXT NOT NULL,
    "school_category" "Category" NOT NULL DEFAULT E'estadual',
    "school_cnpj" CHAR(14) NOT NULL,
    "school_address" TEXT NOT NULL,
    "school_number" TEXT NOT NULL,
    "school_neighborhood" TEXT NOT NULL,
    "school_city" TEXT NOT NULL,
    "school_state" TEXT NOT NULL,
    "school_cep" CHAR(8) NOT NULL,
    "school_phone" CHAR(10) NOT NULL,
    "school_email" TEXT NOT NULL,
    "school_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "school_updated_at" TIMESTAMP(3) NOT NULL,
    "school_situation" CHAR(1) NOT NULL DEFAULT E'A',

    CONSTRAINT "Schools_pkey" PRIMARY KEY ("school_id")
);

-- CreateTable
CREATE TABLE "Shifts" (
    "shift_id" TEXT NOT NULL,
    "shift_name" "ShiftNames" NOT NULL DEFAULT E'matutino',
    "shift_day_of_week" "DayOfTheWeek" NOT NULL DEFAULT E'segunda',
    "shift_number_class_per_day" INTEGER NOT NULL DEFAULT 1,
    "shift_day_of_week_class" BOOLEAN NOT NULL DEFAULT false,
    "shift_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shift_updated_at" TIMESTAMP(3) NOT NULL,
    "shitf_situation" CHAR(1) NOT NULL DEFAULT E'A',

    CONSTRAINT "Shifts_pkey" PRIMARY KEY ("shift_id")
);

-- CreateTable
CREATE TABLE "Schedules" (
    "schedule_id" TEXT NOT NULL,
    "schedule_name" TEXT NOT NULL,
    "schedule_start" TIMESTAMP(3) NOT NULL,
    "schedule_end" TIMESTAMP(3) NOT NULL,
    "schedule_shift_id" TEXT NOT NULL,
    "schedule_situation" CHAR(1) NOT NULL DEFAULT E'A',

    CONSTRAINT "Schedules_pkey" PRIMARY KEY ("schedule_id")
);

-- CreateTable
CREATE TABLE "Educations" (
    "education_id" TEXT NOT NULL,
    "education_name" TEXT NOT NULL,
    "education_nickname" TEXT NOT NULL,
    "education_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "education_updated_at" TIMESTAMP(3) NOT NULL,
    "education_situation" CHAR(1) NOT NULL DEFAULT E'A',

    CONSTRAINT "Educations_pkey" PRIMARY KEY ("education_id")
);

-- CreateTable
CREATE TABLE "Subjects" (
    "subject_id" TEXT NOT NULL,
    "subject_name" TEXT NOT NULL,
    "subject_nickname" TEXT NOT NULL,
    "subject_educations" JSONB NOT NULL,
    "subject_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subject_updated_at" TIMESTAMP(3) NOT NULL,
    "subject_situation" CHAR(1) NOT NULL DEFAULT E'A',

    CONSTRAINT "Subjects_pkey" PRIMARY KEY ("subject_id")
);

-- CreateTable
CREATE TABLE "Users" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_salt" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_updated_at" TIMESTAMP(3) NOT NULL,
    "user_situation" CHAR(1) NOT NULL DEFAULT E'A',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Teachers" (
    "teacher_id" TEXT NOT NULL,
    "teacher_school_id" TEXT NOT NULL,
    "teacher_name" TEXT NOT NULL,
    "teacher_email" TEXT NOT NULL,
    "teacher_disciplines_ids" JSONB NOT NULL,
    "teacher_situation" CHAR(1) NOT NULL DEFAULT E'A',
    "teacher_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teacher_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teachers_pkey" PRIMARY KEY ("teacher_id")
);

-- CreateTable
CREATE TABLE "Classes" (
    "class_id" TEXT NOT NULL,
    "class_name" TEXT NOT NULL,
    "class_email" TEXT NOT NULL,
    "class_teachers_ids" JSONB NOT NULL,
    "class_situation" CHAR(1) NOT NULL DEFAULT E'A',

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("class_id")
);

-- CreateTable
CREATE TABLE "Timesheets" (
    "timesheet_id" TEXT NOT NULL,
    "timesheet_teacher_id" TEXT NOT NULL,
    "timesheet_class_id" TEXT NOT NULL,
    "timesheet_date" TIMESTAMP(3) NOT NULL,
    "timesheet_situation" CHAR(1) NOT NULL DEFAULT E'A',

    CONSTRAINT "Timesheets_pkey" PRIMARY KEY ("timesheet_id")
);

-- CreateTable
CREATE TABLE "Curriculums" (
    "curriculum_id" TEXT NOT NULL,
    "curriculum_name" TEXT NOT NULL,
    "curriculum_class_id" TEXT NOT NULL,
    "curriculum_situation" CHAR(1) NOT NULL DEFAULT E'A',

    CONSTRAINT "Curriculums_pkey" PRIMARY KEY ("curriculum_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_email_key" ON "Users"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_teacher_email_key" ON "Teachers"("teacher_email");

-- CreateIndex
CREATE UNIQUE INDEX "Classes_class_email_key" ON "Classes"("class_email");

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_schedule_shift_id_fkey" FOREIGN KEY ("schedule_shift_id") REFERENCES "Shifts"("shift_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teachers" ADD CONSTRAINT "Teachers_teacher_school_id_fkey" FOREIGN KEY ("teacher_school_id") REFERENCES "Schools"("school_id") ON DELETE RESTRICT ON UPDATE CASCADE;
