"use client"
import { z } from "zod"
import { useForm, ControllerRenderProps } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FormData = z.object({
    name: z.string().min(1, {
        message: "Name must be at least 1 character."
    }),
    email: z.string().email({message: "Please enter a valid email address."}),
    message: z.string().min(1, {message: "Please enter a message."})
})

export default function ContactForm() {
    const form = useForm<z.infer<typeof FormData>>({
        resolver: zodResolver(FormData),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })

    function onSubmit(values: z.infer<typeof FormData>) {
    alert("Submitted: " + JSON.stringify(values));
  }

    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-10 pt-28    bg-[#EAEAEA]">
        <div className="w-full max-w-2xl bg-[#252A34] text-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
        <p className="text-sm text-gray-300 mb-6">
          Have any questions? Feel free to reach out through this form.
        </p>
        <Form {...form}>
           
            <form onSubmit={() => {}} className="flex flex-col gap-5 bg-white/10 rounded-lg mx-auto w-full max-w-2xl p-4 sm:p-6 md:p-8">
                
                <FormField
                control={form.control}
                name="name"
                render = {({ field }: { field: ControllerRenderProps<z.infer<typeof FormData>, "name"> }) => (
                    <FormItem>
                        <FormLabel className="font-semibold">Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Write your name.." className="text-white" {...field} />
                        </FormControl>
                        <FormMessage className="text-[#FF2E63]"/>  
                    </FormItem>
                )} />
                <FormField 
                control={form.control}
                name="email"
                render = {({ field }: { field: ControllerRenderProps<z.infer<typeof FormData>, "email"> }) => (
                    <FormItem>
                        <FormLabel className="text-white font-bold body-font">Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Write your email.." {...field} />
                        </FormControl>  
                        <FormMessage/>
                    </FormItem>
                )} 
                />
                <FormField
                control={form.control}
                name="message"
                render={({ field }: { field: ControllerRenderProps<z.infer<typeof FormData>, "message"> }) => (
                    <FormItem>
                    <FormLabel className="text-white font-bold body-font">Message</FormLabel>
                    <FormControl>
                        <textarea
                        className="text-white w-full min-h-[100px] rounded-md border px-3 py-2 text-sm"
                        placeholder="Write your message..."
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button size="default"
              variant="default"
              type="submit"
              className="mt-2 bg-[#08D9D6] text-black font-bold hover:bg-[#05c0be] transition">Send Message</Button>
            </form>
        </Form>
        </div>
        </div>
    )
}


function onSubmit(values: z.infer<typeof FormData>) {

}