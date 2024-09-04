import { db } from "../db";


export const getHomePage = async () => {
  const homePage = await db.homePage.findFirst({
    orderBy: {
      createdAt: 'desc', 
    },
  });
    return homePage;
  };
  
  export const updateHomePage = async (body) => {
    // Fetch the last added home page
    const homePage = await db.homePage.findFirst({
      orderBy: {
        createdAt: 'desc', // Assumes you have a createdAt field to order by
      },
    });
  
    if (!homePage) {
      throw new Error('No home page found');
    }
  
    // Update the fetched home page with the provided data
    const updatedHomePage = await db.homePage.update({
      where: { id: homePage.id },
      data: {
        ...body,
      },
    });
  
    return updatedHomePage;
  };
  