import { PrismaClient } from '@prisma/client'
import moment from 'moment'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  //const result = await prisma.educations.findMany()

  /*
  const result = await prisma.teachers.create({
    data: {
      teacher_school_id: '72e403d8-c36e-43a9-94b2-2820bcc1ec14',
      teacher_name: 'Junior Martins',
      teacher_nickname: 'Junior Martins',
      teacher_email: 'juniormartinxo@gmail.com',
      teacher_celphone: '999999',
      teacher_disciplines_ids: "{'1', '2', '3'}",
      teacher_shifts_ids: "{'1', '2', '3'}",
      teacher_restrictions: "{'1', '2', '3'}",
      //teacher_created_at: new Date(),
      //teacher_updated_at: new Date(),
      //teacher_situation: 'A',
    },
  })
  */

  const dateT = moment('2022-01-01').format('YYYY-MM-DD')

  const timesheets = await prisma.timesheets.create({
    data: {
      timesheet_teacher_id: '09671dee-49c1-400f-8431-046571784609',
      timesheet_class_id: '72e403d8-c36e-43a9-94b2-2820bcc1ec14',
      timesheet_date: new Date(dateT),
    },
  })

  //console.log(result)

  console.log(timesheets)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
