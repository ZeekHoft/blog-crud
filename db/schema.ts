import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const blog = pgTable("blog", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    username: text("username").notNull(),
    title: text("title").notNull(),
    context: text("context").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow()

}

);

export type Blog = typeof blog.$inferInsert;
