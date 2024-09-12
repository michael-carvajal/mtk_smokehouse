import { db } from "../db";

export const getOurRootsPage = async () => {
  const ourRoot = await db.ourRoot.findFirst({
    orderBy: {
      createdAt: "desc",
    },
  });
  return ourRoot;
};

export const updateOurRootsPage = async (body) => {
  // Fetch the last added home page
  const ourRoot = await db.ourRoot.findFirst({
    orderBy: {
      createdAt: "desc", // Assumes you have a createdAt field to order by
    },
  });

  if (!ourRoot) {
    throw new Error("No ourRoot page found");
  }

  // Update the fetched ourRoot page with the provided data
  const updatedOurRootPage = await db.ourRoot.update({
    where: { id: ourRoot.id },
    data: {
      ...body,
    },
  });

  return updatedOurRootPage;
};
