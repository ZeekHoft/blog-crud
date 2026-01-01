
import { getBlogs } from '@/server/blogs'
import React from 'react'
import { Button } from './ui/button';
import { Pencil, ShieldAlertIcon, MessageCircle, NotebookPen } from 'lucide-react';
import DeleteUserButton from './deleteuserbutton';
import { Blog } from "@/db/schema"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import UserForms from './forms/userforms';
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemTitle,

} from "@/components/ui/item"




async function UsersTable() {

    const blogs = await getBlogs();

    return (
        <div className="flex md:w-full flex-col items-start gap-6 p-2">
            <ItemGroup>
                {blogs.map((blog) => (

                    <Item key={blog.id} variant="outline" className='mb-6 items-start py-4'>

                        <ItemMedia variant="icon">
                            <MessageCircle />
                        </ItemMedia>

                        <ItemContent>
                            <ItemTitle className='mb-5'>{blog.username}</ItemTitle>

                            <ItemTitle>{blog.title}</ItemTitle>
                            <ItemDescription className='line-clamp-none whitespace-pre-wrap break-words'>
                                {blog.context}
                            </ItemDescription>
                        </ItemContent>
                        <ItemActions className='flex flex-col items-end'>
                            <Dialog >
                                <DialogTrigger asChild>

                                    <Button variant="outline" className='bg-green-500 hover:bg-gray-700'>
                                        <NotebookPen color='white' className='size-4' />
                                    </Button>

                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Udating blog!</DialogTitle>
                                        <DialogDescription>
                                            You can update your blog anytime without worry, making mistakes or having better news is always happening.
                                        </DialogDescription>
                                    </DialogHeader>

                                    <UserForms blogs={blog} />


                                </DialogContent>
                            </Dialog>

                            <DeleteUserButton blogId={blog.id} />
                        </ItemActions>
                    </Item>


                ))}

            </ItemGroup>
        </div>

    )
}

export default UsersTable