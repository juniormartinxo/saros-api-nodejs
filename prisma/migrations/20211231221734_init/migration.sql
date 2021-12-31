-- CreateTable
CREATE TABLE "Users" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_salt" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Teachers" (
    "teacher_id" TEXT NOT NULL,
    "teacher_name" TEXT NOT NULL,
    "teacher_email" TEXT NOT NULL,
    "teacher_disciplines_ids" JSONB NOT NULL,
    "teacher_situation" CHAR(1) NOT NULL,
    "teacher_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teacher_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teachers_pkey" PRIMARY KEY ("teacher_id")
);

-- CreateTable
CREATE TABLE "Disciplines" (
    "discipline_id" TEXT NOT NULL,
    "discipline_name" TEXT NOT NULL,
    "discipline_situation" CHAR(1) NOT NULL,

    CONSTRAINT "Disciplines_pkey" PRIMARY KEY ("discipline_id")
);

-- CreateTable
CREATE TABLE "Classes" (
    "class_id" TEXT NOT NULL,
    "class_name" TEXT NOT NULL,
    "class_email" TEXT NOT NULL,
    "class_situation" CHAR(1) NOT NULL,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("class_id")
);

-- CreateTable
CREATE TABLE "Timesheets" (
    "timesheet_id" TEXT NOT NULL,
    "timesheet_teacher_id" TEXT NOT NULL,
    "timesheet_class_id" TEXT NOT NULL,
    "timesheet_date" TIMESTAMP(3) NOT NULL,
    "timesheet_situation" CHAR(1) NOT NULL,

    CONSTRAINT "Timesheets_pkey" PRIMARY KEY ("timesheet_id")
);

-- CreateTable
CREATE TABLE "Curriculums" (
    "curriculum_id" TEXT NOT NULL,
    "curriculum_name" TEXT NOT NULL,
    "curriculum_class_id" TEXT NOT NULL,
    "curriculum_situation" CHAR(1) NOT NULL,

    CONSTRAINT "Curriculums_pkey" PRIMARY KEY ("curriculum_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_email_key" ON "Users"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_teacher_email_key" ON "Teachers"("teacher_email");

-- CreateIndex
CREATE UNIQUE INDEX "Classes_class_email_key" ON "Classes"("class_email");
