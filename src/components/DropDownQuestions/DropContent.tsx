import { DropdownQuestions } from "./DropdownQuestions"

export const DropContent = () => {
  return (
    <div className="bg-in-blue-dark px-4 py-12 md:py-16 lg:py-24">
        <section className="mx-auto max-w-7xl px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="text-white space-y-4">
                    <h2 className="text-4xl font-bold font-in-nunito">Te dejamos algunas respuestas útiles</h2>
                    <p>Resuelve tus dudas en nuestra sección de preguntas frecuentes. <br /> ¿Aún necesitas ayuda? 👉 Estamos aquí para ti.</p>
                </div>
                <DropdownQuestions />
            </div>
        </section>
    </div>
  )
}
