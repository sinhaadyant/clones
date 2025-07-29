import { db } from "@/db";
import { videos } from "@/db/schema";
import { users } from "@/db/schema";

async function seedVideos() {
  try {
    // First, get a user from the database (you'll need to replace this with an actual user ID)
    const existingUsers = await db.select().from(users).limit(1);
    
    if (existingUsers.length === 0) {
      console.log("No users found. Please create a user first.");
      return;
    }

    const userId = existingUsers[0].id;
    console.log(`Using user ID: ${userId}`);

    // Sample video data
    const sampleVideos = [
      {
        title: "Getting Started with Next.js",
        description: "Learn the basics of Next.js framework",
        userId: userId,
        categoryId: null,
      },
      {
        title: "Building a Full-Stack App",
        description: "Complete guide to building modern web applications",
        userId: userId,
        categoryId: null,
      },
      {
        title: "Database Design Best Practices",
        description: "Essential tips for designing efficient databases",
        userId: userId,
        categoryId: null,
      },
      {
        title: "API Development with tRPC",
        description: "Building type-safe APIs with tRPC",
        userId: userId,
        categoryId: null,
      },
      {
        title: "UI/UX Design Principles",
        description: "Creating beautiful and functional user interfaces",
        userId: userId,
        categoryId: null,
      },
    ];

    // Insert sample videos
    const insertedVideos = await db
      .insert(videos)
      .values(sampleVideos)
      .returning();

    console.log(`Successfully inserted ${insertedVideos.length} videos:`);
    insertedVideos.forEach((video) => {
      console.log(`- ${video.title}`);
    });

  } catch (error) {
    console.error("Error seeding videos:", error);
  } finally {
    process.exit(0);
  }
}

seedVideos(); 