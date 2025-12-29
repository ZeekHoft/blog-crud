import React from 'react'
import { getBlogs } from '@/server/blogs'
import { get } from 'http'
import UsersTable from '@/components/userstable';
import { Import, MessageCirclePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserForms from '@/components/forms/userforms';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import FlipAnimation from '@/components/flipanimation';



export default async function Home() {
  const blogs = await getBlogs();


  return (
    <div>
      <div className='flex flex-row justify-center md:text-5xl m-2 text-2xl '> Share to us your <FlipAnimation /></div>




      <div className='flex flex-col gap-4 max-w-6xl mx-auto '>
        <div className='flex flex-row-reverse '>

          <Dialog>

            <DialogTrigger asChild className='fixed bottom-4 md:top-4 md:right-4'>
              <Button className='mr-2'>
                Add a Blog
                <MessageCirclePlus />

              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add new Blog!</DialogTitle>
                <DialogDescription>
                  Share your thoughts, adventures and stories with us! We're always happy to read what's going on with your lives.
                </DialogDescription>
                <UserForms />
              </DialogHeader>

            </DialogContent>
          </Dialog>

        </div>
        <UsersTable />
      </div>
    </div>
  )
}
