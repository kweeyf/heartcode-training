// 
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters"),
  question1: z.string().min(1, "Please select an answer"),
  question2: z.string().min(1, "Please select an answer"),
  question3: z.string().min(1, "Please select an answer"),
  question4: z.string().min(1, "Please select an answer"),
  question5: z.string().min(1, "Please select an answer"),
})

const questions = [
  {
    id: "question1",
    question: "What is the primary difference between drug use and drug abuse?",
    options: [
      { value: "a", label: "Drug use is always legal, while drug abuse is illegal." },
      { value: "b", label: "Drug use is controlled and responsible, while drug abuse involves excessive and harmful use." },
      { value: "c", label: "Drug abuse only refers to illegal substances." },
      { value: "d", label: "Drug use refers to prescription drugs, and drug abuse refers to alcohol." },
    ],
  },
  {
    id: "question2",
    question: "Which of the following is a common long-term effect of drug abuse?",
    options: [
      { value: "a", label: "Improved mental clarity" },
      { value: "b", label: "Organ damage" },
      { value: "c", label: "Increased immunity to diseases" },
      { value: "d", label: "Higher energy levels" },
    ],
  },
  {
    id: "question3",
    question: "What does 'tolerance' mean in the context of drug abuse?",
    options: [
      { value: "a", label: "The ability to quit drugs easily" },
      { value: "b", label: "Needing more of the drug to achieve the same effect" },
      { value: "c", label: "A type of legal protection for drug use" },
      { value: "d", label: "Only using a drug occasionally" },
    ],
  },
  {
    id: "question4",
    question: "Which of the following is NOT a sign of drug addiction?",
    options: [
      { value: "a", label: "Cravings for the drug" },
      { value: "b", label: "Losing interest in activities once enjoyed" },
      { value: "c", label: "Needing less of the drug over time" },
      { value: "d", label: "Experiencing withdrawal symptoms when not using the drug" },
    ],
  },
  {
    id: "question5",
    question: "Which of these substances is commonly abused but is legal in many countries?",
    options: [
      { value: "a", label: "Heroin" },
      { value: "b", label: "Alcohol" },
      { value: "c", label: "Cocaine" },
      { value: "d", label: "Methamphetamine" },
    ],
  },
]

const correctAnswers = {
  question1: "b",
  question2: "b",
  question3: "b",
  question4: "c",
  question5: "b",
}

export default function QuizCarousel() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    let score = 0
    Object.keys(correctAnswers).forEach((key) => {
      if (data[key as keyof typeof data] === correctAnswers[key as keyof typeof correctAnswers]) {
        score++
      }
    })

    toast({
      title: `Thank you ${data.name}`,
      description: `You scored ${score} out of 5.`,
    })
  }

  return (
    <div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Welcome to the Quiz</CardTitle>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What is your name?</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            {questions.map((q, index) => (
              <CarouselItem key={q.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>Question {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name={q.id as keyof z.infer<typeof FormSchema>}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{q.question}</FormLabel>
                          <FormControl>
                            <div className="space-y-2">
                              {q.options.map((option) => (
                                <div key={option.value} className="flex items-center space-x-2">
                                  <Checkbox
                                    checked={field.value === option.value}
                                    onCheckedChange={() => field.onChange(option.value)}
                                  />
                                  <label htmlFor={option.value}>{option.label}</label>
                                </div>
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Quiz Complete</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Thank you for completing the quiz. Click submit to see your score.</p>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Submit</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </form>
    </Form>
  </div>
  )
}