// create a script to seed the categories table with the following data:

import { db } from "@/db";
import { categories as categoriesTable } from "@/db/schema";

//description to be video related to the category
const categories = [
     {
        name: "Music",
        description: "Music videos",
    },
    {
        name: "Education",
        description: "Educational videos",
    },
    {
        name: "Entertainment",
        description: "Entertainment videos",
    },  
    {
        name: "News",
        description: "News videos",
    },
    {
        name: "Sports",
        description: "Sports videos",
    }, 
    {
        name: "Technology",
        description: "Technology videos",
    },
    {
        name: "Science",
        description: "Science videos",
    },
    {
        name: "History",
        description: "History videos",
    },
    {
        name: "Mathematics",
        description: "Mathematics videos",
    },  
    {
        name: "Language",
        description: "Language videos",
    },
    {
        name: "Literature",
        description: "Literature videos",
    },
    {
        name: "Art",
        description: "Art videos",
    },
    {
        name: "Movies",
        description: "Movies videos",
    },
    {
        name: "TV",
        description: "TV videos",
    },
    {
        name: "Games",
        description: "Games videos",
    }  
];

async function main(): Promise<void> {
    try {
        await db.insert(categoriesTable).values(categories);
        console.log("Categories seeded successfully!");
    } catch (error) {
        console.error("Error seeding categories:", error);
    }
}

main().catch(console.error);