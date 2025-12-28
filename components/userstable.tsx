

import React from 'react'
import { getBlogs } from '@/server/blogs'
import { Button } from './ui/button';
import { Pencil } from 'lucide-react';
import DeleteUserButton from './deleteuserbutton';
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
async function UsersTable() {

    const blogs = await getBlogs();
    return (
        <Table>
            <TableCaption>BLOG LIST</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">username</TableHead>
                    <TableHead>title</TableHead>
                    <TableHead>context</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {blogs.map((blog) => (
                    <TableRow key={blog.id}>
                        <TableCell className='font-bold'> {blog.username}</TableCell>
                        <TableCell > {blog.title}</TableCell>
                        <TableCell > {blog.context}</TableCell>
                        <TableCell> {blog.createdAt?.toLocaleString()}</TableCell>
                        <TableCell> {blog.updatedAt?.toLocaleString()}</TableCell>


                        <Dialog >
                            <DialogTrigger asChild>

                                <Button variant="outline" >
                                    <Pencil className='size-4' />
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

                    </TableRow>
                ))}

            </TableBody>
        </Table>
    )
}

export default UsersTable