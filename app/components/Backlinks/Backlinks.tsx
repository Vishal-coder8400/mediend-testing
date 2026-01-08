import { Card } from "@mantine/core"
import Link from "next/link"
    

interface Procedure {
  text: string
  url: string
}

interface ProcedureLinksProps {
  procedures: Procedure[]
  header: string
}

export default function BackLinks({ procedures, header }: ProcedureLinksProps) {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h3 className=" text-blue-600 font-semibold text-start text-xl">{header}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {procedures.map((procedure, index) => (
          <Link 
            key={index} 
            href={procedure.url}
            className="block transition-transform hover:-translate-y-1"
          >
            <Card className="relative overflow-hidden group h-fit" shadow="md">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
              <div className="">
                <p className="text-blue-600 hover:text-blue-700 text-sm">
                  {procedure.text}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
