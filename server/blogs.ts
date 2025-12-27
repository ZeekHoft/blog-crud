"use server"

import { db } from "@/db/drizzle"
import { blog, Blog } from "@/db/schema"
import { eq } from "drizzle-orm";


export async function getBlogs() {
    try {
        const allBlogs = await db.select().from(blog);
        return allBlogs
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch blogs");;
    }

}
export async function createBlog(blogs: Omit<Blog, "id" | "createdAt" | "updatedAt">) {
    try {
        await db.insert(blog).values(blogs);
    } catch (error) {
        console.log(error);
        return { error: "Failed to create blog" }
    }

}

export async function updateBlog(id: string, blogs: Omit<Blog, "id" | "createdAt" | "updatedAt">) {
    try {
        await db.update(blog).set(blogs).where(eq(blog.id, id));
    } catch (error) {
        console.log(error);
        return { error: "Failed to update blog" }
    }

}

export async function deleteBlog(id: string) {
    try {
        const deleteBlog = await db.delete(blog).where(eq(blog.id, id));
        return deleteBlog;
    } catch (error) {
        console.log(error);
        return { error: "Failed to delete blog" }
    }

}
