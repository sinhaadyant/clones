import { z } from 'zod';
import { procedure, router } from '../init';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { currentUser } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';
import { categoriesRouter } from '../../modules/categories/server/procedures';

export const appRouter = router({
  categories: categoriesRouter, 
   
  // User procedures
  user: router({
    // Get current user from database
    getCurrentUser: procedure
      .query(async ({ ctx }) => {
        if (!ctx.userId) {
          throw new TRPCError({ code: 'UNAUTHORIZED' });
        }

        const user = await db
          .select()
          .from(users)
          .where(eq(users.clerkId, ctx.userId))
          .limit(1);

        if (user.length === 0) {
          throw new TRPCError({ 
            code: 'NOT_FOUND',
            message: 'User not found in database' 
          });
        }

        return user[0];
      }),

    // Sync user from Clerk to database
    syncUser: procedure
      .mutation(async ({ ctx }) => {
        if (!ctx.userId) {
          throw new TRPCError({ code: 'UNAUTHORIZED' });
        }

        const clerkUser = await currentUser();
        
        if (!clerkUser) {
          throw new TRPCError({ 
            code: 'NOT_FOUND',
            message: 'Clerk user not found' 
          });
        }

        // Check if user exists
        const existingUser = await db
          .select()
          .from(users)
          .where(eq(users.clerkId, clerkUser.id))
          .limit(1);

        const userData = {
          clerkId: clerkUser.id,
          email: clerkUser.emailAddresses[0]?.emailAddress || '',
          name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || clerkUser.username || 'User',
          imageUrl: clerkUser.imageUrl || '',
          updatedAt: new Date(),
        };

        if (existingUser.length > 0) {
          // Update existing user
          const updatedUser = await db
            .update(users)
            .set(userData)
            .where(eq(users.clerkId, clerkUser.id))
            .returning();
          
          return {
            success: true,
            message: 'User updated successfully',
            user: updatedUser[0]
          };
        } else {
          // Create new user
          const newUser = await db
            .insert(users)
            .values({
              ...userData,
              createdAt: new Date(),
            })
            .returning();
          
          return {
            success: true,
            message: 'User created successfully',
            user: newUser[0]
          };
        }
      }),
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
