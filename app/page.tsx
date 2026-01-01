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

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,

} from "@/components/ui/item"




export default async function Home() {
  const blogs = await getBlogs();
  const count: number = blogs.length;
  console.log(count)


  return (
    <div>
      <div className='flex flex-row justify-center md:text-5xl m-2 text-2xl '> Share to us your <FlipAnimation /></div>




      <div className='flex flex-col gap-4 max-w-6xl mx-auto '>
        <div className='flex flex-row-reverse '>

          <Dialog>

            <DialogTrigger asChild className='fixed z-100 bottom-0 right-0 w-[100] md:w-[170] md:h-[70] md:top-0 md:right-0  '>

              <Item variant="outline" className='bg-yellow-300 hover:shadow-md transition-all cursor-pointer  px-6 py-2'>
                <ItemActions className="flex items-center justify-center gap-3">
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase tracking-wider opacity-70">Total blogs: {count.toString()}</span>
                    <span className="font-bold">Add a Blog</span>
                  </div>
                  <MessageCirclePlus className="w-6 h-6" />
                </ItemActions>
              </Item>
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
