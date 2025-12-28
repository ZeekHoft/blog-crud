
"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { blog, Blog } from "@/db/schema"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { createBlog, updateBlog } from "@/server/blogs"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from 'next/navigation';
import { create } from "domain"


const formSchema = z.object({
  username: z.string().min(1, "Username too short").max(50),
  title: z.string().min(1, "Title too short"),
  context: z.string().min(1, "Context too short"),
  email: z.string().email("Invalid email address"),

})

interface BlogFormProps {
  blogs?: Blog;
}

export default function UserForms({ blogs }: BlogFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: blogs?.email || "",
      username: blogs?.username || "",
      title: blogs?.title || "",
      context: blogs?.context || "",

    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      const blogData = {
        ...values,
        password: "password121" //default password
      }
      if (blogs) {
        await updateBlog(blogs.id!, blogData);
      } else {
        await createBlog(blogData);
      }



      form.reset();
      toast.success(`You've uccessully ${blogs ? "updated" : "added"} your blog!`)
      router.refresh();
    } catch (error) {
      toast.error(`You've Failed to ${blogs ? "updated" : "added"} your blog!`)
    } finally {
      setIsLoading(false);

    }

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="dex" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Dog Blog~" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="dex@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="context"
          render={({ field }) => (
            <FormItem >
              <FormLabel>Context</FormLabel>
              <FormControl >
                <Textarea className="h-50" placeholder="Type your message here. "{...field} id="message" />

                {/* <Input className="h-48 flex-col items-start" placeholder="When I was walking dexter... " {...field} /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} type="submit">

          {isLoading ? <Loader2 className="size-4 animate-spin" /> : (`${blogs ? "Update Blog" : "Add Blog"}`)}
        </Button>
      </form>
    </Form>
  )
}


