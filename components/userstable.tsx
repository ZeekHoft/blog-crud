

import React from 'react'
import { getBlogs } from '@/server/blogs'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
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
                    <TableHead className="text-right">updated at</TableHead>
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


                    </TableRow>
                ))}

            </TableBody>
        </Table>
    )
}

export default UsersTable