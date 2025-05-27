import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordionIn"

export const DropdownQuestions = () => {
  return (
    <div>
        <Accordion className="space-y-4" type="single" collapsible>
            <AccordionItem className="bg-white px-4 rounded-md" value="item-1">
                <AccordionTrigger className="hover:no-underline cursor-pointer text-in-blue-dark">
                    <p className="font-medium">
                        ¿Aceptan seguros médicos?
                    </p>
                </AccordionTrigger>
                <AccordionContent>
                    <p>
                        Si, aceptamos seguros médicos.
                    </p>
                </AccordionContent>
            </AccordionItem> 
            <AccordionItem className="bg-white px-4 rounded-md" value="item-2">
                <AccordionTrigger className="hover:no-underline cursor-pointer text-in-blue-dark">
                    <p className="font-medium">
                        ¿Aceptan seguros médicos?
                    </p>
                </AccordionTrigger>
                <AccordionContent>
                    <p>
                        Si, aceptamos seguros médicos.
                    </p>
                </AccordionContent>
            </AccordionItem> 
            <AccordionItem className="bg-white px-4 rounded-md" value="item-3">
                <AccordionTrigger className="hover:no-underline cursor-pointer text-in-blue-dark">
                    <p className="font-medium">
                        ¿Aceptan seguros médicos?
                    </p>
                </AccordionTrigger>
                <AccordionContent>
                    <p>
                        Si, aceptamos seguros médicos.
                    </p>
                </AccordionContent>
            </AccordionItem> 
            <AccordionItem className="bg-white px-4 rounded-md" value="item-4">
                <AccordionTrigger className="hover:no-underline cursor-pointer text-in-blue-dark">
                    <p className="font-medium">
                        ¿Aceptan seguros médicos?
                    </p>
                </AccordionTrigger>
                <AccordionContent>
                    <p>
                        Si, aceptamos seguros médicos.
                    </p>
                </AccordionContent>
            </AccordionItem> 
        </Accordion>
    </div>
  )
}
