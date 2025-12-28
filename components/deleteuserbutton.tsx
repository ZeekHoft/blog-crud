"use client"
import { useState } from "react"
import { toast, Toaster } from "sonner"
import { Button } from './ui/button'
import { Loader2, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { deleteBlog } from '@/server/blogs'

interface DeleteBlogButtonProps {
    blogId: string;
}


export default function DeleteUserButton({ blogId }: DeleteBlogButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            await deleteBlog(blogId);
            toast.error("Deleted blog")
            setIsOpen(false);
            router.refresh();
        } catch (error) {
            console.log(error)
            toast.error("Failed to delete blog")

        } finally {
            setIsLoading(false);

        }
    }


    return (

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="destructive">
                    <Trash2 className='size-4' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure you want to delete this blog?</DialogTitle>
                    <DialogDescription>
                        Warning, after deleting this blog the action can't be undone. Double check to know if you're
                        sure about this decision.
                    </DialogDescription>
                </DialogHeader>

                <Button disabled={isLoading} variant="destructive" onClick={handleDelete}>
                    {isLoading ? <Loader2 className="size-4 animate-spin" /> : "Delete Blog"}


                </Button>

            </DialogContent>
        </Dialog>


    )
}


