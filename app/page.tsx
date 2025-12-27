import React from 'react'
import { getBlogs } from '@/server/blogs'
import { get } from 'http'
import UsersTable from '@/components/userstable';
import { Import, MessageCirclePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';




export default async function Home() {
  const blogs = await getBlogs();


  return (
    <div>
      <h1>BLOGS</h1>



      <div className='flex flex-col gap-4 max-w-6xl mx-auto '>
        <div className='flex flex-row-reverse '>
          <Button >
            Add a Blog     <MessageCirclePlus />

          </Button>
        </div>
        <UsersTable />
      </div>
    </div>
  )
}
